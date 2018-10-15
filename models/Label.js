const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const LabelSchema = new Schema({
  type: {
    type: String,
    default: 'label',
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = Label = mongoose.model('labels', LabelSchema);
