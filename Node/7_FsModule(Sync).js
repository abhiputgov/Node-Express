const { readFileSync, writeFileSync, write } = require(`fs`);

const firstTxtFile = readFileSync(`./content/first.txt`, `utf8`);
const secondTxtFile = readFileSync(`./content/second.txt`, `utf8`);

console.log(firstTxtFile, secondTxtFile);

writeFileSync(
  `./content/resultTextSync.txt`,
  `Here is the resultant text: ${firstTxtFile} and ${secondTxtFile}`,
);
