const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
});

const Department = mongoose.model('department', departmentSchema);

module.exports = Department;
