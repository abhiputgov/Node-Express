const secret = `SUPER SECRET`;
const john = `John`;
const peter = `Peter`;

// to understand what module returns. will be executed at require level
console.log(module);
//set the value of exports to be accesible to other files
module.exports = { john, peter };
