//requires
const app = require('express')();
const logger = require('./logger');
const authorize = require('./authorize');
const { products, people } = require('./data');
//module constants
const PORT = 5000;
//app.use for all middlewares
app.use('/api/', [authorize, logger]);
//routes
app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});
app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('/api/products', (req, res) => {
  res.status(200).send(products);
});

app.get('/api/people', (req, res) => {
  res.status(200).send(people);
});
//listening port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
