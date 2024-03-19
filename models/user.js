

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  documents: [{
    name: String,
    reference: String
  }],
  last_connection: { type: Date, default: Date.now },
  premium: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);

