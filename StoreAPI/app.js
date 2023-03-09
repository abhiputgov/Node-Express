require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connectDB');
//async errors
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware functions
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>Store API</h1><a href="/api/v1/products"> products route</a>');
});

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
