const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
let { people } = require('./databaseRepl/people');

app.use(express.static(path.join(__dirname, './methods-public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/api/people', (req, res) => {
  res.status(200).json({ data: people, success: true });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide a name!' });
  }
  res.status(201).json({ person: name, success: true });
});

app.post('/api/postmanTest/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide a name for postman test!' });
  }
  people = [...people, { id: people.length + 1, name: name }];
  res.status(201).json({
    data: [...people],
    success: true,
  });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('POST request successful');
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
