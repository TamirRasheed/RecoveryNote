const express = require('express');
const router = express.Router();
const {
  getProductsByDepartment,
  getProductById,
  postProduct,
} = require('../controller/productControllers');

router.get('/department/:id', getProductsByDepartment);
router.get('/:id', getProductById);
router.post('/post', postProduct);

module.exports = router;
