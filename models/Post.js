const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const PostSchema = new Schema({
  type: {
    type: String,
    default: 'post-basic',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  text: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  handle: {
    type: String,
    unique: true,
  },
  avatar: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  comments: [
    {
      type: {
        type: String,
        default: 'comment',
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Post = mongoose.model('posts', PostSchema);
