const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
  type: {
    type: String,
    default: 'user',
  },
  firstname: {
    type: String,
    unique: false,
  },
  lastname: {
    type: String,
    unique: false,
  },
  handle: {
    type: String,
    unique: true,
  },
  local: {
    email: { type: String, lowercase: true, unique: true, required: false },
    password: { type: String, unique: false, required: false },
  },
  github: {
    githubId: { type: String, required: false },
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Define schema methods
UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },

  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
  if (!this.local.password) {
    console.log('NO PASSWORD PROVIDED');
  } else {
    this.local.password = this.hashPassword(this.local.password);
  }

  next();
});

module.exports = User = mongoose.model('users', UserSchema);
