const mongoose = require('mongoose');

const users = [
  {
    _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa1'),
    name: 'Joel',
    password: '123',
    school: 'sfsu',
    major: 'cs',
  },
  {
    _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa2'),
    name: 'Jack',
    password: '123',
    school: 'sfsu',
    major: 'cs',
  },
];

module.exports = users;
