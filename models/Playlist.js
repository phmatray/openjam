const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const PlaylistSchema = new Schema({
  type: {
    type: String,
    default: 'playlist',
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = Playlist = mongoose.model('playlists', PlaylistSchema);
