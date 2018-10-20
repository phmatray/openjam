const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const TrackSchema = new Schema({
  type: {
    type: String,
    default: 'track',
  },
  title: {
    type: String,
    required: true,
  },
  edit: {
    type: String,
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

TrackSchema.set('toObject', { virtuals: true });
TrackSchema.set('toJSON', { virtuals: true });

TrackSchema.virtual('title_full').get(function() {
  let titleFull = this.title;
  if (this.edit) {
    titleFull += ` (${this.edit})`;
  }
  return titleFull;
});

module.exports = Track = mongoose.model('tracks', TrackSchema);
