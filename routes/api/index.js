const express = require('express');
const router = express.Router();

router.use('/profile', require('./profile'));
router.use('/posts', require('./posts'));
router.use('/github', require('./github'));
router.use('/artists', require('./artists'));
router.use('/albums', require('./albums'));
router.use('/labels', require('./labels'));
router.use('/playlists', require('./playlists'));
router.use('/tracks', require('./tracks'));

module.exports = router;
