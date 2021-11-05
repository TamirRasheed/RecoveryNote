const mongoose = require('mongoose');

const users = [
  {
    _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa1'),
    name: 'Joel',
  },
  {
    _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa2'),
    name: 'Jack',
  },
];
app.post('//Users/Tamir/Documents/SFSU2021Fall/csc648/csc648-fa21-04-Team06/application/frontend/src/screens/SignupScreen.js', function(req, res){
  var name = req.body.name
  console.log(name);
})
module.exports = users;
