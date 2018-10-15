const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');
const keys = require('../config/keys');

const strategy = new GitHubStrategy(
  {
    clientID: keys.githubClientId,
    clientSecret: keys.githubClientSecret,
    callbackURL: keys.githubCallbackUrl,
  },
  (accessToken, refreshToken, profile, done) => {
    const newUser = new User({
      email: profile.emails[0].value,
      avatar: profile.photos[0].value,
    });

    /* save if new */
    User.findOne({
      email: newUser.email,
    }).then(user => {
      if (!user) {
        newUser
          .save()
          .then(user => done(null, user))
          .catch(err => done(err));
      } else {
        console.log(user);
        done(null, user);
      }
    });
  },
);

module.exports = strategy;
