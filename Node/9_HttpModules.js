const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`Welcome to the default home page`);
  } else if (req.url === '/about') {
    res.end(`Welcome to the about page`);
  } else {
    res.end(`
    <html>
    <h>Oops!</h>
    <p>We do not have the page you seek yet. Come back later, for we might have it.</p>
    <a href='/'>Back to Home</a>
    </html>`);
  }
});

server.listen(3000);
