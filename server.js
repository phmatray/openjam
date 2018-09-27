const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const http = require('http');
const enforce = require('express-sslify');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const github = require('./routes/api/github');
const artists = require('./routes/api/artists');
const albums = require('./routes/api/albums');
const labels = require('./routes/api/labels');
const playlists = require('./routes/api/playlists');
const tracks = require('./routes/api/tracks');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/github', github);
app.use('/api/artists', artists);
app.use('/api/albums', albums);
app.use('/api/labels', labels);
app.use('/api/playlists', playlists);
app.use('/api/tracks', tracks);

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

const port = process.env.PORT || 5000;

http.createServer(app).listen(port, () => console.log(`server running on ${port}`));
