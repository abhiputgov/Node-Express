const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Home page');
        res.end();
    }else if(req.url === '/about'){
        for(let i=0; i < 1000; i++){
            for(let j=0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.write('About page');
        res.end();
    }else{
    res.write('Error page');
    res.end();
    }
});

server.listen(3000, ()=>{
    console.log(`The server is listening on port 3000`);
});
