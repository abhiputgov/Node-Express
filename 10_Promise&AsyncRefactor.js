const {readFile, writeFile} = require('fs');

// sample async callback
let firstText, secondText;
function getText(filePath) {
    return new Promise((resolve, reject) =>{
        readFile(filePath, `utf-8`, (err, data)=>{
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

//promise based implementation of the readFile method callbacks

// getText(`./content/first.txt`)
// .then((data) => {
//     firstText = data;
//     getText(`./content/second.txt`);})
// .then((data)=>{
//     secondText = data;
//     console.log(firstText, secondText);})
// .catch((err) => {console.log(err);});

const content = async () => {
    try {
    const firstText = await getText(`./content/first.txt`);
    const secondText = await getText(`./content/second.txt`);
    console.log(firstText, secondText);
    }
    catch (err) {
        console.log(err);
    }

};

content();