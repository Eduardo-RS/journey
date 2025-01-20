const os = require('os');
const { uptime } = require('process');

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
// console.log(os.cpus())
console.log(os.hostname())
console.log(os.version())

console.table({
    os: os.platform(),
    totalmem: os.totalmem(),
    uptime: os.uptime(),
    hostname: os.hostname(),
    version: os.version()
})