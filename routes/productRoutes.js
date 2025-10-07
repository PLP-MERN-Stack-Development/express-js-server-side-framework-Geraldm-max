const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');
const { validateProduct } = require('../middleware/validation');

const router = express.Router();

// In-memory product data
let products = [
  { id: '1', name: 'Laptop', description: '16GB RAM laptop', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Phone', description: '128GB smartphone', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Automatic coffee maker', price: 50, category: 'kitchen', inStock: false }
];

// GET all products (with optional category filter and pagination)
router.get('/', (req, res) => {
  let filtered = products;
  const { category, page = 1, limit = 5, search } = req.query;

  if (category) filtered = filtered.filter(p => p.category === category);
  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + parseInt(limit));

  res.json({ total: filtered.length, page: parseInt(page), limit: parseInt(limit), data: paginated });
});

// GET a specific product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST create new product (requires API key)
router.post('/', authenticate, validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product (requires API key)
router.put('/:id', authenticate, validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE product (requires API key)
router.delete('/:id', authenticate, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
});

module.exports = router;
