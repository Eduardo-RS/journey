// Funciones

// Funcion simple Declaración

function myFunction() {
  console.log("Hello World");
}

// Invocar o llamar a la funcion
myFunction();

// Funcion con parametros

function myParamsFunction(name) {
  console.log(`Hello ${name}`);
}

myParamsFunction("Eduardo RS");

function sum(a, b) {
  console.log(a + b);
}

sum(5, 5);
sum();
sum(5, 5);

function defaultsum(a = 0, b = 0) {
  console.log(a + b);
}

defaultsum();
defaultsum(5);
defaultsum(5, 10);

// Ejercicio funcion y bucle

function loop(name) {
  for (i = 0; i < 5; i++) {
    console.log(`Hello ${name}`);
  }
}

loop("Emanuel Joya");

// Funciones anominas se tiene que asignar a una constante

const anomFunction = function (name) {
  console.log(`Hello ${name}`);
};

anomFunction("Lalo RS");

// Arrow functions se deben asignar a una constante

const arrow = (name) => {
  console.log(`Hello ${name}`);
};

arrow("Eduardo RS usando Arrow Functions");

// arrow function una sola linea
const arrow2 = (name) => console.log(`Hola mundo a ${name}`);

arrow2("Lalo RS");

// Suma con arrow functions

const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(5, 20);

const arrowSum2 = (a, b) => console.log(a * b);

arrowSum2(2, 2);

// Retorno de valores

const arrowSum3 = (a, b) => {
  return a * b;
};

console.log(arrowSum3(2, 4));

const arrowSum1 = (a, b) => {
  return a + b;
};

console.log(arrowSum1(10, 10));

// Nested functions

function extern() {
  console.log("Funcion externa");
  function intern() {
    console.log("Funcion interna");
  }
  intern();
}

extern();
// intern() Error: fuera del scope

// Funciones de orden superior

const hello = (name) => {
  console.log(`Hello ${name}`);
};

function orderFunction(func, param) {
  func(param);
}

orderFunction(hello, "Eduardo usando order function");

// forEach con array

let array = ["The Killers", "Myke Towers", "Bad Bunny", "Daft Punk"];

array.forEach((value) => console.log(value));

// For each con map
const map = new Map([
  ["name", "Eduardo RS"],
  ["Alias", "Lalo"],
  ["age", 29],
]);

map.forEach((value) => console.log(value));

// For each con set

const set = new Set(["Eduardo", "Salinas", 29, "October", 21, 1999]);

set.forEach((val) => console.log(val));
