// Importación

// Sintaxis para imports especificos

import { sum, PI, name, Animals, Circle } from "./28-export-modules.js"

// Sintaxis para deafult imports

// import restaDeNumeros from "./28-export-modules.js" // puedes usar un nombre distinto

import Device from "./28-export-modules.js"


console.log(sum(24,24));


// Importando funciones
console.log(name);
console.log(PI);

// Usando la funcion importada como default
// console.log(restaDeNumeros(10, 9))

// Creando una instancia de la clase Importada

// Clase Animals

const newAnimal = new Animals('Dog', 'Chloe', 40, 'Small');
console.log(newAnimal);

newAnimal.sound();

// Clase Circle

let newCircle = new Circle(10);
console.log(newCircle);
// console.log(newCircle.area());
console.log(newCircle.area().toFixed(2));
console.log(newCircle.perimeter());


// Usando la clase como default export
const newDevice = new Device('Laptop', "Apple Macbook Pro M3 Pro Chip", 2500);
console.log(newDevice);

console.log(newDevice.showInfo());