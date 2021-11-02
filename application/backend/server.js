require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API running...' });
});

app.use('/api/products', productRoutes);
app.use('/api/departments', departmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
