const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const helmet = require('helmet');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use('/api', authRoutes);
app.use('/api', itemRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit the process if unable to connect to the database
  });
