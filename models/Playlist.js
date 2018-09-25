const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Playlist = mongoose.model('playlists', PlaylistSchema);
