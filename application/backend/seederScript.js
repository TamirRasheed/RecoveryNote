require('dotenv').config();

const connectDB = require('./config/db');
const productData = require('./data/products');
const Product = require('./models/Product');

const departmentData = require('./data/departments');
const Department = require('./models/Department');

connectDB();

/* TODO: Update these to match new change */

const importData = async () => {
  try {
    await Department.deleteMany({});
    await Product.deleteMany({});

    await Department.insertMany(departmentData);
    await Product.insertMany(productData);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();
