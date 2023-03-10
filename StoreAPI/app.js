//.env config file
require('dotenv').config();

//async errors
require('express-async-errors');

//required node modules
const express = require('express');
const app = express();

//required files from the file system
const connectDB = require('./db/connectDB');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//constants to work with
const PORT = process.env.PORT || 3000;

//routes files
const productsRoutes = require('./routes/products');
app.use(express.json());
//routes to be updated
app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>Store API</h1><a href="/api/v1/products"> products route</a>');
});

app.use('/api/v1/products', productsRoutes);

//middleware functions
app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server listening to port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
