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

module.exports = router;
