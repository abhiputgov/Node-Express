const mongoose = require('mongoose');
const getProducts = (req, res, next) => {
  res.status(200).json({ msg: 'Products found' });
};

module.exports = { getProducts };
