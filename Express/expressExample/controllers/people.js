const { people } = require('../databaseRepl/people');

const getPeople = (req, res) => {
  res.status(200).json({ data: people, success: true });
};

const createPersons = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide a name!' });
  }
  res.status(201).json({ person: name, success: true });
};

const createPersonsForPostman = (req, res) => {
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
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPersons,
  deletePerson,
  createPersonsForPostman,
  updatePerson,
};
