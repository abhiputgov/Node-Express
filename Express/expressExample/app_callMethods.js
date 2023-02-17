const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
let { people } = require('./databaseRepl/people');

app.use(express.static(path.join(__dirname, './methods-public')));

app.get('/api/people', (req, res) => {
  res.status(200).json({ data: people, success: true });
});

app.post('/login', (req, res) => {
  res.send('POSTED');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
