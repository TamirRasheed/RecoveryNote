const express = require('express');
const router = express.Router();
const { getDepartments } = require('../controller/departmentControllers');

router.get('/', getDepartments);

module.exports = router;
