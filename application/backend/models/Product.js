const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  sold: {
    type: Boolean,
    default: false,
  },
  departmentId: {
    type: String,
    ref: 'department',
    required: true,
  },
  sellerId: {
    type: String,
    ref: 'user',
    required: true,
  },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
