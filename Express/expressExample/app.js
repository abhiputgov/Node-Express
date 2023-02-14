const express = require('express');
const path = require('path');
const app = express();
//app.use
//app.use is used to setup static files and middlewares for the application
app.use(express.static(path.join(__dirname, './public')));
//app.get
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/about', (req, res) => {
  res.status(200).send('ABOUT PAGE');
});
//app.post
//app.put
//app.delete

//app.all
app.all('*', (req, res) => {
  res.status(404).send('<h1>RESOURCE NOT FOUND</h1>');
});

//app.listen()
app.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
