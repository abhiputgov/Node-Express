const app = require('express')();
const { products, people } = require('./data');
const path = require('path');
const PORT = 5000;

app.get('/', (req, res) => {
  res.send(
    '<h1>Home Page</h1><div><a href="/api/products">Products</a><br/><a href="/api/people">People</a></div>',
  );
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/people', (req, res) => {
  res.json(people);
});

//listeners to PORT
app.listen(PORT, () => {
  console.log(`listening on port  ${PORT}`);
});
