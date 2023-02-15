const app = require('express')();
const PORT = 5000;
const logger = require('./logger');
const { products } = require('./data');

//we can also pass the middleware logger function to app.use function:
// ---> app.use(logger);
// middleware function need be called on top of the function for which middleware is needed
//in oprder to apply the middleware function to specific routes we use app.use(<<path>>, <<middleware fn>>)
// for instance, app.use('/about', logger); we apply the middleware function called logger to only/about route...

app.get('/', logger, (req, res) => {
  res.status(200).send('Home Page');
});
app.get('/about', logger, (req, res) => {
  res.status(200).send('About Page');
});
//listening on port ${PORT}
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
