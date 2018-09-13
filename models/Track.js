const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TrackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  audiourl: {
    type: String,
    required: true,
  },
  coverurl: {
    type: String,
    required: true,
  },
  licenceurl: {
    type: String,
    required: true,
  },
  meta: {
    tags: [String],
    instruments: [String],
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    jamcoins: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        date: {
          type: Date,
          default: Date.now,
        },
        amount: {
          type: Number,
          min: 0,
        },
      },
    ],
    shares: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        date: {
          type: Date,
          default: Date.now,
        },
        social: {
          type: String,
        },
      },
    ],
  },
});

module.exports = Track = mongoose.model('tracks', TrackSchema);
