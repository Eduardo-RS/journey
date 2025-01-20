// const web = require('./module/module.js')
const { userName } = require('./module/module.js'); // Usando destructuracion
const math = require('./math/index.js'); // Importando funciones de la carpeta math


// console.log(array);
// console.log(userName);

// Usando las funciones de index.js en la carpeta math
console.log(math.sum(25, 25));
console.log(math.multiply(15, 15));