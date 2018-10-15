const express = require('express');
const router = express.Router();

// Load Playlist Model
const Playlist = require('../../models/Playlist');

// @route  GET api/playlists/test
// @desc   Tests playlist route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Playlists Works' }));

// @route  GET api/playlists
// @desc   Get all playlists
// @access Public
router.get('/', (req, res) => {
  Playlist.find()
    .sort({ name: 1 })
    .then(playlist => res.json(playlist))
    .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
});

// @route  GET api/playlists/:id
// @desc   Get playlist by ID
// @access Public
router.get('/:id', (req, res) => {
  Playlist.findById(req.params.id)
    .then(playlist => res.json(playlist))
    .catch(err => res.status(404).json({ noplaylistfound: 'No playlist found with that ID' }));
});

module.exports = router;
