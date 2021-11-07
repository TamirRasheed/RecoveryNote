const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  school: {
    type: String,
    require: true,
  },
  major: {
    type: String,
    require: true,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
