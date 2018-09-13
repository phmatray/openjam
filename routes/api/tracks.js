const express = require('express');
const router = express.Router();

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

module.exports = router;
