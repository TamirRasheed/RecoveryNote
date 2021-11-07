require('dotenv').config();
const express = require('express');
const connectDB = require('./configs/db');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const userRoutes = require('./routes/userRoutes');
const uploadRouter = require('./routes/upload');

connectDB();

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'API running...' });
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/uploads', uploadRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
