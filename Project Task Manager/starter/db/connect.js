const mongoose = require('mongoose');

const connection_uri =
  'mongodb+srv://abhipg:mongodb@cluster0.owffkya.mongodb.net/TaskManager';

mongoose
  .connect(connection_uri)
  .then(() => {
    console.log('Connected to the MongoDB server');
  })
  .catch((err) => console.log(err));
