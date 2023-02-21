const router = require('express').Router();
const {
  getPeople,
  createPersons,
  deletePerson,
  createPersonsForPostman,
  updatePerson,
} = require('../controllers/people');

//GET
//router.get('/', getPeople);
// POST
//router.post('/', createPersons);
//POST for postman testing
//router.post('/postmanTest', createPersonsForPostman);
//PUT
//router.put('/:id', updatePerson);
//DELETE
//router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPersons);
router.route('/:id').put(updatePerson).delete(deletePerson);
router.route('/postmanTest').post(createPersonsForPostman);

module.exports = router;
