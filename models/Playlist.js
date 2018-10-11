const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Playlist = mongoose.model('playlists', PlaylistSchema);
