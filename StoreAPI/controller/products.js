const mongoose = require('mongoose');
const Products = require('../models/products');

const getProducts = async (req, res, next) => {
  const Product = await Products.find({});
  if (!Product) {
    throw new Error('There are no products');
  }

  return res.status(200).json({
    msg: 'Products found at last',
    data: Product,
  });
};

module.exports = { getProducts };
