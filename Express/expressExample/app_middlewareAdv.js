//requires
const app = require('express')();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');
const { products, people } = require('./data');
//module constants
const PORT = 5000;
//app.use for all middlewares
app.use('/api/', [authorize, logger]); // order matters. the one that is mentioned first is going to be executed first.
//routes
app.get('/', authorize, (req, res) => {
  res.status(200).send('Home Page');
});
app.get('/about', authorize, (req, res) => {
  res.status(200).send('About Page');
});

app.get('/api/products', (req, res) => {
  console.log();
  res.status(200).send(products);
});

app.get('/api/people', (req, res) => {
  res.status(200).send(people);
});
//listening port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
