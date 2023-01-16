const os = require(`os`);

//info about current user
const user = os.userInfo();
console.log(user);

//method to return the system uptime
console.log(`The sytem uptime is ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOS);