const express = require('express');
const router = express.Router();

// Load Label Model
const Label = require('../../models/Label');

// @route  GET api/labels/test
// @desc   Tests label route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Labels Works' }));

// @route  GET api/labels
// @desc   Get all labels
// @access Public
router.get('/', (req, res) => {
  Label.find()
    .sort({ name: 1 })
    .then(label => res.json(label))
    .catch(err => res.status(404).json({ nolabelsfound: 'No labels found' }));
});

// @route  GET api/labels/:id
// @desc   Get label by ID
// @access Public
router.get('/:id', (req, res) => {
  Label.findById(req.params.id)
    .then(label => res.json(label))
    .catch(err => res.status(404).json({ nolabelfound: 'No label found with that ID' }));
});

module.exports = router;
