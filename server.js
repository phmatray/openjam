const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const http = require('http');
const enforce = require('express-sslify');
const passport = require('./passport');

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Connect to MongoDB
mongoose
  .connect(
    require('./config/keys').mongoURI,
    { useCreateIndex: true, useNewUrlParser: true },
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(`There was an error connecting to the database: ${err}`));

mongoose.set('debug', true);

// Initialize our app
const app = express();
const port = process.env.PORT || 5000;

// Configure our app
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MongoStore = require('connect-mongo')(session);
app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
  }),
);

// Configure passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

if (!isProduction) {
  app.use(errorHandler());
}

// Models & routes
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(require('./routes'));

// Error handlers & middlewares
if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });
}

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
  // a load balancer (e.g. Heroku). See further comments below
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

http.createServer(app).listen(port, () => console.log(`server running on ${port}`));
