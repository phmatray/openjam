const express = require('express');
const router = express.Router();
const passport = require('passport');
const { ensureLoggedIn } = require('connect-ensure-login');

// Load Input Validation
const validatePostInput = require('../../validation/post');

// Load Post Model
const Post = require('../../models/Post');

// @route  GET api/posts/test
// @desc   Tests post route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

// @route  GET api/posts
// @desc   Get posts
// @access Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route  GET api/posts/:id
// @desc   Get post by ID
// @access Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'No post found with that ID' }));
});

// @route  POST api/posts
// @desc   Create Post
// @access Private
router.post('/', ensureLoggedIn('/login'), (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    handle: req.body.handle,
    avatar: req.body.avatar,
    user: req.user.id,
  });

  newPost.save().then(post => res.json(post));
});

// @route  DELETE api/posts/:id
// @desc   Delete Post
// @access Private
router.delete('/:id', ensureLoggedIn('/login'), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      // Check for post owner
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ notauthorized: 'User not authorized' });
      }

      // Delete
      post.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post founded' }));
});

// @route  POST api/posts/like/:id
// @desc   Like Post
// @access Private
router.post('/like/:id', ensureLoggedIn('/login'), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
        return res.status(400).json({ alreadyliked: 'User already liked this post' });
      }

      // Add user id to likes array
      post.likes.unshift({ user: req.user.id });

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post founded' }));
});

// @route  POST api/posts/unlike/:id
// @desc   Unlike Post
// @access Private
router.post('/unlike/:id', ensureLoggedIn('/login'), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
        return res.status(400).json({ notliked: 'You have not yet liked this post' });
      }

      // Get remove index
      const removeIndex = post.likes.map(item => item.user.toString()).indexOf(req.user.id);

      // Splice out of array
      post.likes.splice(removeIndex, 1);

      // Save
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post founded' }));
});

// @route  POST api/posts/comment/:id
// @desc   Add comment to post
// @access Private
router.post('/comment/:id', ensureLoggedIn('/login'), (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Post.findById(req.params.id)
    .then(post => {
      const newComment = {
        text: req.body.text,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        avatar: req.body.avatar,
        user: req.user.id,
      };

      // Add to comments array
      post.comments.unshift(newComment);

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post founded' }));
});

// @route  DELETE api/posts/comment/:id/:comment_id
// @desc   Remove comment from post
// @access Private
router.delete('/comment/:id/:comment_id', ensureLoggedIn('/login'), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      // Check to see if comment exists
      if (
        post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length ===
        0
      ) {
        return res.status(404).json({ commentnotexists: 'Comment does not exists' });
      }

      // Get the remove index
      const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // return a 404 error if the ID doesn't exist
      if (removeIndex === -1) {
        return res.status(404).json({
          error: 'Comment does not exists',
        });
      }

      // Check if it is from the user
      if (post.comments[removeIndex].user.toString() !== req.user.id) {
        return res
          .status(401)
          .json({ error: "Unauthorized. Can't delete a comment from a different user" });
      }

      // Splice comment out of array
      post.comments.splice(removeIndex, 1);

      // Save
      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post founded' }));
});

module.exports = router;
