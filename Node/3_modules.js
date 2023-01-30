//Modules
//every file in node is a module by default
//Modules is basically encapsulated code (only share minimum) 
const constants = require(`./CONSTANTS`);
require(`./4_mindGrenade`);
const sayHi = (name) => {
    console.log(`Hello my dear ${name}`);
}

sayHi(`Susan`);
sayHi(constants.john);
sayHi(constants.peter);