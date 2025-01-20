// 1. Escribe un comentario en una línea

    // Esto es un comentario de una linea

// 2. Escribe un comentario en varias líneas

    /* Esto es un 
    Comentario
    de Varias
    Lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = 'Eduardo RS';
let age = 29;
let isJunior = true;
let isSenior = false;
let undefinedValue;
let myNull = null;
let mySymbol = Symbol("mySymbol");
let myBigint = BigInt(849303450184374374383940);
let myBigint2 = 45678909876545678903232n

// 4. Imprime por consola el valor de todas las variables

console.log(name);
console.log(age);
console.log(isJunior);
console.log(isSenior);
console.log(undefinedValue);
console.log(myNull);
console.log(mySymbol);
console.log(myBigint);
console.log(myBigint2);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof name);
console.log(typeof age);
console.log(typeof isJunior);
console.log(typeof isSenior);
console.log(typeof undefinedValue);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigint);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = 'Lalo RS';
age = 30;
isJunior = false;
isSenior = true;

console.log(name);
console.log(age);
console.log(isJunior);
console.log(isSenior);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isJunior);
console.log(typeof isSenior);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name = 30;
age = "Lalo";
isJunior = "Yes";
isSenior = "No";

console.log(typeof name);
console.log(typeof age);
console.log(typeof isJunior);
console.log(typeof isSenior);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const name1 = 'Eduardo RS';
const age1 = 29;
const isJunior1 = true;
const isSenior1 = false;
// const undefinedValue1
const myNull1 = null;
const mySymbol1 = Symbol("mySymbol");
const myBigint1 = BigInt(849303450184374374383940);
const myBigint21 = 45678909876545678903232n

// 9. A continuación, modifica los valores de las constantes

// name1 = 30;
// age1 = "Lalo";
// isJunior1 = "Yes";
// isSenior1 = "No";

// console.log(typeof name1);
// console.log(typeof age1);
// console.log(typeof isJunior1);
// console.log(typeof isSenior1);


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse