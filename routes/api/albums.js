const express = require('express');
const router = express.Router();

// Load Album Model
const Album = require('../../models/Album');

// @route  GET api/albums/test
// @desc   Tests album route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Albums Works' }));

// @route  GET api/albums
// @desc   Get all albums
// @access Public
router.get('/', (req, res) => {
  Album.find()
    .sort({ release_date: -1 })
    .then(album => res.json(album))
    .catch(err => res.status(404).json({ noalbumsfound: 'No albums found' }));
});

// @route  GET api/albums/:id
// @desc   Get album by ID
// @access Public
router.get('/:id', (req, res) => {
  Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(err => res.status(404).json({ noalbumfound: 'No album found with that ID' }));
});

module.exports = router;
