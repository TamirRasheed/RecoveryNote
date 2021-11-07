const express = require('express');
const router = express.Router();
const { userSignUp, logInCheck } = require('../controller/userControllers');

router.get('/signup', userSignUp);
router.get('/login', logInCheck);

module.exports = router;
