const http = require('http');
const { readFileSync } = require('fs');
//get all files
const homePage = readFileSync('./index.html');
const homePageCss = readFileSync('./styles.css');
const homePageLogo = readFileSync('./logo.svg');
const homePageLogic = readFileSync('./browser-app.js');
//create a new server instance
const httpServer = http.createServer((req, res) => {
  const httpServerUrl = req.url;
  if (httpServerUrl === '/') {
    res.writeHead('200', { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (httpServerUrl === '/about') {
    res.writeHead('200', { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  } else if (httpServerUrl === '/styles.css') {
    res.writeHead('200', { 'content-type': 'text/css' });
    res.write(homePageCss);
    res.end();
  } else if (httpServerUrl === '/logo.svg') {
    res.writeHead('200', { 'content-type': 'image/svg+xml' });
    res.write(homePageLogo);
    res.end();
  } else if (httpServerUrl === '/browser-app.js') {
    res.writeHead('200', { 'content-type': 'text/javascript' });
    res.write(homePageLogic);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

httpServer.listen(3000);
