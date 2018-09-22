const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Input Validation
const validateTrackInput = require('../../validation/track');

// Load Track Model
const Track = require('../../models/Track');

// @route  GET api/tracks/test
// @desc   Tests track route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Tracks Works' }));

// @route  GET api/tracks
// @desc   Get all tracks
// @access Public
router.get('/', (req, res) => {
  Track.find()
    .sort({ date: -1 })
    .then(track => res.json(track))
    .catch(err => res.status(404).json({ notracksfound: 'No tracks found' }));
});

// @route  GET api/tracks/:id
// @desc   Get track by ID
// @access Public
router.get('/:id', (req, res) => {
  Track.findById(req.params.id)
    .then(track => res.json(track))
    .catch(err => res.status(404).json({ nopostfound: 'No track found with that ID' }));
});

// @route  POST api/tracks/
// @desc   Create Track
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateTrackInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTrack = new Track({
    artists: req.body.artists,
    title: req.body.title,
    label: req.body.label,
    edit: req.body.edit,
    audiourl: req.body.audiourl,
    coverurl: req.body.coverurl,
  });

  newTrack.save().then(track => res.json(track));
});

module.exports = router;
