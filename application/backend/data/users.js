const mongoose = require('mongoose');

const users = [
  {
    _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa1'),
    name: 'Joel',
    school: 'sfsu',
    major: 'cs',
  },
  {
    _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa2'),
    name: 'Jack',
    school: 'sfsu',
    major: 'cs',
  },
];

module.exports = users;
