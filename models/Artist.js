const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Artist = mongoose.model('artists', ArtistSchema);
