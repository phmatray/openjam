const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const ArtistSchema = new Schema({
  type: {
    type: String,
    default: 'artist',
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = Artist = mongoose.model('artists', ArtistSchema);
