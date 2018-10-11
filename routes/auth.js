const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const passport = require('passport');
const { ensureLoggedIn } = require('connect-ensure-login');

// Load Input Validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// Load User model
const User = require('../models/User');

// @route  GET auth/test
// @desc   Tests users route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'User Works' }));

// @route  GET auth/register
// @desc   Register user
// @access Public
router.post('/register', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // ADD VALIDATION
  User.findOne({ 'local.email': email }, (err, userMatch) => {
    if (userMatch) {
      errors.email = `Sorry, already a user with the email: ${email}`;
      return res.status(400).json(errors);
    }

    const avatar = gravatar.url(email, {
      s: '200', // Size
      r: 'pg', // Rating
      d: 'mm', // Default
    });

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      'local.email': email,
      'local.password': password,
      avatar: avatar,
    });

    newUser
      .save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  });
});

// @route  POST auth/login
// @desc   Login User / Returning JWT Token
// @access Public
router.post('/login', passport.authenticate('local'), (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = JSON.parse(JSON.stringify(req.user)); // hack
  const cleanUser = Object.assign({}, user);
  console.log(`Deleting ${cleanUser.password}`);
  delete cleanUser.password;
  res.json(cleanUser);
});

// @route  GET auth/logout
// @desc   Logout User
// @access Public
router.post('/logout', (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid'); // clean up!
    return res.json('logged out');
  } else {
    return res.json('no user to log out!');
  }
});

// @route  GET auth/facebook
// @desc   Login user with facebook social provider
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

// @route  GET auth/facebook/callback
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: 'https://beta.openjam.eu',
    failureRedirect: 'https://beta.openjam.eu/login',
  }),
);

// @route  GET auth/github
// @desc   Login user with github social provider
router.get('/github', passport.authenticate('github', { scope: 'email' }));

// @route  GET auth/github/callback
router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: 'https://beta.openjam.eu',
    failureRedirect: 'https://beta.openjam.eu/login',
  }),
);

// @route  GET auth/current
// @desc   Return current user
// @access Private
router.get('/current', ensureLoggedIn('/login'), (req, res) => {
  res.json({
    id: req.user.id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
  });
});

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
  console.log(req.user);
  return res.json(req.user ? req.user : {});
});

module.exports = router;
