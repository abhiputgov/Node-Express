require('dotenv').config();

const connectDB = require('./db/connectDB');
const Products = require('./models/products');
const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Products.deleteMany();
    await Products.create(jsonProducts);
    console.log('Succeess');
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
};

start();
