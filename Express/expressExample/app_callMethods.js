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

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: 'Such a person does not exist!' });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  return res.status(200).json({ success: true, data: newPeople });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('POST request successful');
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
