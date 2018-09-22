const express = require('express');
const router = express.Router();

// Load Artist Model
const Artist = require('../../models/Artist');

// @route  GET api/artists/test
// @desc   Tests artist route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Artists Works' }));

// @route  GET api/artists
// @desc   Get all artists
// @access Public
router.get('/', (req, res) => {
  Artist.find()
    .sort({ name: 1 })
    .then(artist => res.json(artist))
    .catch(err => res.status(404).json({ noartistsfound: 'No artists found' }));
});

// @route  GET api/artists/:id
// @desc   Get artist by ID
// @access Public
router.get('/:id', (req, res) => {
  Artist.findById(req.params.id)
    .then(artist => res.json(artist))
    .catch(err => res.status(404).json({ noartistfound: 'No artist found with that ID' }));
});

module.exports = router;
