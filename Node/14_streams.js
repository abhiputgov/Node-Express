const { createReadStream } = require('fs');
const { Stream } = require('stream');

const readStream = createReadStream(`./content/big.txt`, {encoding: 'utf-8', highWaterMark:90000});

readStream.on('data', (result)=>{
    console.log(result);
});