const mongoose = require('mongoose');

departments = [
  {
    _id: new mongoose.mongo.ObjectId('ddddddddddddddddddddddd1'),
    name: 'Science & Engineering',
  },
  {
    _id: new mongoose.mongo.ObjectId('ddddddddddddddddddddddd2'),
    name: 'Business',
  },
];

module.exports = departments;
