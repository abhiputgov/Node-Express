require('dotenv').config();
const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const path = require('path');
const tasksRoutes = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-Handler');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/api/v1/tasks', tasksRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
