const express = require('express');
const router = express.Router();
const { userSignUp, logInCheck } = require('../controller/userControllers');

router.post('/signup', userSignUp);
router.post('/login', logInCheck);

module.exports = router;