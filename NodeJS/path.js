const path = require('path');

// console.log(path.sep);
// console.log(path.join('/test', 'ssh'));
const filePath = path.join('/test', 'ssh','index.js')

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath)); 
console.log(path.resolve('index.js'));