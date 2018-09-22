const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Album = mongoose.model('albums', AlbumSchema);
