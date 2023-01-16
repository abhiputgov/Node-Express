const path = require(`path`);
console.log(path);

const filePath = path.join(`/content`, `subfolder`, `text.txt`);
console.log(filePath);

const basename = path.basename(filePath);
console.log(basename);

const absPath = path.resolve(__dirname, `content`, `subfolder`, `text.txt`);
console.log(absPath);