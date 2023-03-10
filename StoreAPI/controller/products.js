const mongoose = require('mongoose');
const product = require('../controller/products');

const getProducts = async (req, res, next) => {
  const products = await product.findAll({});
  if (!products) {
    throw new Error('There are no products');
  }

  return res.status(200).json({
    msg: 'Products found at last',
  });
};

module.exports = { getProducts };
