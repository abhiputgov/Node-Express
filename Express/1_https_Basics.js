//http is a prebuilt module in node.js that is responsible for calling https methods.
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1> Home Page </h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1> About Page </h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1> Page not Found </h1>');
    res.end();
  }
});

server.listen(3000);
