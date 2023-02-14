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
  const reducedProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(reducedProduct);
});

app.get('/api/products/:productID', (req, res) => {
  //console.log(req);
  //console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });
  if (!singleProduct) {
    return res.status(404).send('<h1>Such a product does not exist</h1>');
  }
  res.json(singleProduct);
});

app.get('/api/people', (req, res) => {
  res.json(people);
});

app.all('*', (req, res) => {
  res.send('<h1>PAGE NOT FOUND!</h1>');
});

//listeners to PORT
app.listen(PORT, () => {
  console.log(`listening on port  ${PORT}`);
});
