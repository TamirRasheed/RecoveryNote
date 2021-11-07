const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User');

const userSignUp = async (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).json({ message: 'Server Error' });
    }

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    newUser.save((err) => {
      if (err) {
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ user: req.body._id });
      }
    });
  });
};

const logInCheck = async (req, res) => {
  const username = req.body._id;
  const password = req.body.password;

  User.findOne({ _id: username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: 'Server Error - Found no such user' });
    } else if (foundUser) {
      bcrypt.compare(password, foundUser.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: 'Server Error - Password not much' });
        } else if (result) {
          res.json({ user: req.body._id });
        } else {
          res.status(500).json({ message: 'Server Error' });
        }
      });
    } else {
      console.log('4');
      res.status(500).json({ message: 'Server Error' });
    }
  });
};

module.exports = {
  userSignUp,
  logInCheck,
};
