const { captureRejectionSymbol } = require("events");
const {readFile, writeFile} = require(`fs`);

readFile(`./content/first.txt`, `utf8`, (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const firstTxtFile =  result;
    readFile(`./content/second.txt`, `utf8`, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const secondTxtFile =  result;
        console.log(firstTxtFile, secondTxtFile);
        writeFile(`./content/resultTextASync.txt`, `Here is the resultant text: ${firstTxtFile} and ${secondTxtFile}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});