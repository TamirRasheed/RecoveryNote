const mongoose = require('mongoose');
const Product = require('../models/Product');

const getProductsByDepartment = async (req, res) => {
  try {
    const products = await Product.find({
      departmentId: req.params.id,
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const postProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Post Product Error' });
  }
};

module.exports = {
  getProductsByDepartment,
  getProductById,
  postProduct,
};
