// process.argv
console.log(process.argv);

// process.env
console.log(process.env);
console.log(process.env.LOGNAME);

// process.pid
console.log(process.pid);

// process.uptime()
console.log(process.uptime());

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage
console.log(process.memoryUsage());

process.on("exit", (code) => {
  console.log(`This is the end of things.\n${code}`);
});

// exit()
process.exit();
