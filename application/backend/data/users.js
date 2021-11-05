// const mongoose = require('mongoose');

// const users = [
//   {
//     _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa1'),
//     name: 'Joel',
//   },
//   {
//     _id: new mongoose.mongo.ObjectId('aaaaaaaaaaaaaaaaaaaaaaa2'),
//     name: 'Jack',
//   },
// ];

// module.exports = users;


import bcrypt from "bcryptjs";

import User from "../models/users";
import getSignedToken from "../util/signedToken";

async function createUser(payload) {
  return User.find({ username: payload.username })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        throw new Error("User already exist");
      }
      return bcrypt
        .hash(payload.password, 10)
        .then((hashed) => {
          const newUser = new User({
            username: payload.username,
            password: hashed,
            school: payload.school,
            Major: payload.major
          });
          return newUser.save();
        })
        .catch((err) => {
          throw new Error("All field required");
        });
    });
}

function signInUser(payload) {
  return User.findOne({ username: payload.usernmae })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error("Please enter username or password");
      } else {
        return bcrypt
          .compare(payload.password, user.password)
          .then((res) => {
            if (res) {
              const token = getSignedToken(user._id);
              return token;
            } else {
              throw new Error("Incorrect password or username, try again");
            }
          })
          .catch((err) => {
            throw new Error("All field required");
          });
      }
    });
}
export default { createUser, signInUser };
