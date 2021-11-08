const mongoose = require('mongoose');

const products = [
  {
    name: 'PlayStation 5',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.',
    price: 499,
    departmentId: 'Na',
    sellerId: 'Joel83234',
  },
  {
    name: 'Iphone 12',
    imageUrl:
      'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80',
    description:
      'Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.',
    price: 1099,
    departmentId: 'Na',
    sellerId: 'Joel83234',
  },
  {
    name: 'Cannon EOS-1D',
    imageUrl:
      'https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description:
      'The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.',
    price: 1300,
    departmentId: 'Na',
    sellerId: 'Joel83234',
  },
  {
    name: 'Amazon Alexa',
    imageUrl:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    description:
      'It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.',
    price: 50,
    departmentId: 'Na',
    sellerId: 'Joel83234',
  },
  {
    name: 'Audio Technica Headphones',
    imageUrl:
      'https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description:
      'Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.',
    price: 233,
    departmentId: 'Na',
    sellerId: 'Joel83234',
  },
  {
    name: 'JBL FLIP 4',
    imageUrl:
      'https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    description:
      'JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.',
    price: 140,
    departmentId: 'Na',
    sellerId: 'Joel83234',
  },
  {
    name: 'BIO320 Notes',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345589/main-qimg-2fa400fdcd87e6353cbcfe8deb0555a4_hyy0oe.jpg',
    description:
      'Notes for BIO320(all chapters)',
    price: 40,
    departmentId: 'Biology',
    sellerId: 'Ivan35762',
  },
  {
    name: 'BIO320 Textbook',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345677/m_5b7f5907de6f62e06bd2fc2a_r3xpkt.jpg',
    description:
      'Textbook for BIO320',
    price: 75,
    departmentId: 'Biology',
    sellerId: 'Ivan35762',
  },
  {
    name: 'BIO320 Lab Equipment',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345750/FSL3495_khv5t3.jpg',
    description:
      'Lab equipment (includes coat and goggles).',
    price: 60,
    departmentId: 'Biology',
    sellerId: 'Ivan35762',
  },
  {
    name: 'ACC210 Notes',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345781/1afbe1f418f10cdfd2095baf35e34e70_ujtuef.jpg',
    description:
      'Notes for ACC210(all chapters)',
    price: 70,
    departmentId: 'Accounting',
    sellerId: 'Ivan35762',
  },
  {
    name: 'ACC210 Textbook',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345812/41YGk1jGDwL._SX385_BO1_204_203_200__vhodkd.jpg',
    description:
      'Textbook for ACC210',
    price: 88,
    departmentId: 'Accounting',
    sellerId: 'Ivan35762',
  },
  {
    name: 'ACC210 Calculator',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345840/2a49ebf0-f2bc-45f9-8f10-120452422e83_1.a0aed2799e352842171266f593e13935_jqiryj.jpg',
    description:
      'Required Calculator.',
    price: 65,
    departmentId: 'Accounting',
    sellerId: 'Ivan35762',
  },
  {
    name: 'CSC230 Notes',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345866/1753915-textbook-notes-us-columbia-u-coms-w3203-textbook1-8_utn9nn.jpg',
    description:
      'CLEAN Notes for CSC230(all chapters), FIRM',
    price: 450,
    departmentId: 'Computer Science',
    sellerId: 'Ivan35762',
  },
  {
    name: 'CSC230 Textbook',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345894/0321964683_htepae.jpg',
    description:
      'Textbook for CSC230',
    price: 100,
    departmentId: 'Computer Science',
    sellerId: 'Ivan35762',
  },
  {
    name: 'CSC230 Calculator',
    imageUrl:
      'https://res.cloudinary.com/dy6ekyp9m/image/upload/v1636345921/2a49ebf0-f2bc-45f9-8f10-120452422e83_1.a0aed2799e352842171266f593e13935_ymwwhw.jpg',
    description:
      'Required Calculator.',
    price: 70,
    departmentId: 'Computer Science',
    sellerId: 'Ivan35762',
  },
];

module.exports = products;
