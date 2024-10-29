import os from "os";

// userInfo() - system info
console.log(os.userInfo());


// totalmem() - total memory in bytes
console.log(`Total Memory: ${os.totalmem()} bytes`);

// freemem() - free memory in bytes
console.log(`Free Memory: ${os.freemem()} bytes`);

// cpus() - number of cpus
console.log(os.cpus())