const express = require('express');
const router = express.Router();
const github = require('octonode');

// Load keys
const keys = require('../../config/keys');

// @route  GET api/github/test
// @desc   Tests post route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'GitHub Works' }));

// @route  GET api/github/repos
// @desc   Get the 5 last repos of a user
// @access Public
router.get('/repos/:username', (req, res) => {
  var client = github.client({
    id: keys.githubClientId,
    secret: keys.githubClientSecret,
  });

  const username = req.params.username;

  const params = {
    per_page: 5,
    type: 'owner',
    sort: 'updated_at',
    direction: 'desc',
  };

  client.get(`/users/${username}/repos`, params, function(err, status, body, headers) {
    if (err !== null) {
      return res.status(err.statusCode).json(err.message);
    }

    return res.json(body);
  });
});

module.exports = router;
