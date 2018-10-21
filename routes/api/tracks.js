const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureLoggedIn } = require('connect-ensure-login');

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

// @route  GET api/tracks/random
// @desc   Get 20 random tracks
// @access Public
router.get('/random', async (req, res) => {
  try {
    const result = [];
    const n = await Track.find().estimatedDocumentCount({});

    for (let index = 0; index < 20; index++) {
      const r = Math.floor(Math.random() * n);
      const track = await Track.find()
        .limit(1)
        .skip(r);

      result.push(track[0]);
    }

    return res.json(result);
  } catch (error) {
    return res.status(404).json({ notracksfound: 'No tracks found' });
  }
});

// @route  GET api/tracks/:id
// @desc   Get track by ID
// @access Public
router.get('/:id', (req, res) => {
  Track.findById(req.params.id)
    .then(track => res.json(track))
    .catch(err => res.status(404).json({ notrackfound: 'No track found with that ID' }));
});

// @route  POST api/tracks/
// @desc   Create Track
// @access Private
router.post('/', ensureLoggedIn('/login'), (req, res) => {
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
