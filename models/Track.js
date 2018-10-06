const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const TrackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artists: {
    type: [
      {
        _id: String,
        name: String,
      },
    ],
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
    w200: { type: String },
    w400: { type: String },
    w800: { type: String },
  },
  licenceurl: {
    type: String,
  },
  edit: {
    type: String,
  },
  label: {
    type: String,
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
