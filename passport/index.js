const passport = require('passport');
const LocalStrategy = require('./localStrategy');
// const FacebookStrategy = require('./facebookStrategy');
const GithubStrategy = require('./githubStrategy');
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, 'firstname lastname avatar email', (err, user) => {
    done(null, user);
  });
});

// Register Strategies
passport.use(LocalStrategy);
// passport.use(FacebookStrategy);
passport.use(GithubStrategy);

module.exports = passport;
