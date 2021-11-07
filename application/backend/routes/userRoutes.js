const express = require('express');
const router = express.Router();
const {
     userSignUp,
     logInCheck,
     } = require('../controller/userControllers');

router.get('/user/signup', userSignUp);
router.get('/user/login', logInCheck);

module.exports = router;