const http = require('http');

const server = http.createServer();
server.on('request', (request, response) => {
    if(request.url === '/') {
    response.write("Welcome to Home Page");
    response.end();
    }else if(request.url) {
        response.write(`Welcome to ${request.url} page`);
        response.end();
    }
});

server.listen(3000);