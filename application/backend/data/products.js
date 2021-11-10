const mongoose = require('mongoose');

const products = [
  {
    name: 'BIO320 Notes',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345589/main-qimg-2fa400fdcd87e6353cbcfe8deb0555a4_hyy0oe.jpg',
    description: 'Notes for BIO320(all chapters)',
    price: 40,
    departmentId: 'Biology',
    sellerId: 'Ivan35762',
  },
  {
    name: 'BIO320 Textbook',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345677/m_5b7f5907de6f62e06bd2fc2a_r3xpkt.jpg',
    description: 'Textbook for BIO320',
    price: 75,
    departmentId: 'Biology',
    sellerId: 'Ivan35762',
  },
  {
    name: 'BIO320 Lab Equipment',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345750/FSL3495_khv5t3.jpg',
    description: 'Lab equipment (includes coat and goggles).',
    price: 60,
    departmentId: 'Biology',
    sellerId: 'Ivan35762',
  },
  {
    name: 'ACC210 Notes',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345781/1afbe1f418f10cdfd2095baf35e34e70_ujtuef.jpg',
    description: 'Notes for ACC210(all chapters)',
    price: 70,
    departmentId: 'Accounting',
    sellerId: 'Ivan35762',
  },
  {
    name: 'ACC210 Textbook',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345812/41YGk1jGDwL._SX385_BO1_204_203_200__vhodkd.jpg',
    description: 'Textbook for ACC210',
    price: 88,
    departmentId: 'Accounting',
    sellerId: 'Ivan35762',
  },
  {
    name: 'ACC210 Calculator',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345840/2a49ebf0-f2bc-45f9-8f10-120452422e83_1.a0aed2799e352842171266f593e13935_jqiryj.jpg',
    description: 'Required Calculator.',
    price: 65,
    departmentId: 'Accounting',
    sellerId: 'Ivan35762',
  },
  {
    name: 'CSC230 Notes',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345866/1753915-textbook-notes-us-columbia-u-coms-w3203-textbook1-8_utn9nn.jpg',
    description: 'CLEAN Notes for CSC230(all chapters), FIRM',
    price: 450,
    departmentId: 'Computer Science',
    sellerId: 'Ivan35762',
  },
  {
    name: 'CSC230 Textbook',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345894/0321964683_htepae.jpg',
    description: 'Textbook for CSC230',
    price: 100,
    departmentId: 'Computer Science',
    sellerId: 'Ivan35762',
  },
  {
    name: 'CSC230 Calculator',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345921/2a49ebf0-f2bc-45f9-8f10-120452422e83_1.a0aed2799e352842171266f593e13935_ymwwhw.jpg',
    description: 'Required Calculator.',
    price: 70,
    departmentId: 'Computer Science',
    sellerId: 'Ivan35762',
  },
];

module.exports = products;
