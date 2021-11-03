const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('product', userSchema);

module.exports = User;
