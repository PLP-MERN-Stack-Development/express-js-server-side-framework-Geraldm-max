// server.js - Final Express.js API Server

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const { logger } = require('./middleware/logger');
const { errorHandler } = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(logger);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API 🚀 Go to /api/products to see all products.');
});

// Product routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

module.exports = app;
