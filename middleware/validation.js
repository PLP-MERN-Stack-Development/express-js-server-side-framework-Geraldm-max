exports.validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price == null || !category || inStock == null) {
    return res.status(400).json({ message: 'All fields (name, description, price, category, inStock) are required' });
  }
  next();
};
