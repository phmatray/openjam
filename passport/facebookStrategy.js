const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');
const keys = require('../config/keys');

const strategy = new FacebookStrategy(
  {
    clientID: keys.facebookClientId,
    clientSecret: keys.facebookClientSecret,
    callbackURL: keys.facebookCallbackUrl,
    profileFields: ['id', 'displayName', 'emails'],
  },
  function(accessToken, refreshToken, profile, done) {
    var newUser = new User({
      email: profile.emails[0].value,
      name: profile.displayName,
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
