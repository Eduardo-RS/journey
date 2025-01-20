// Strings



//Concatenación

let myName = "Eduardo"
let greeting = "Hello, " + myName + "!";

console.log(greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[14]);

// Metodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Hello"));
console.log(greeting.indexOf("Eduardo"));
console.log(greeting.indexOf("!"));
console.log(greeting.indexOf("RS"));
console.log(greeting.includes("Eduardo")); // validar si include a palabra
console.log(greeting.includes("RS"));
console.log(greeting.slice(0, 10)); //Acceder al indice usando slice
console.log(greeting.replace("Eduardo","Lalo")); // Reemplaza

//Template literals()
let message = `Hola, este es mi nuevo rol
estare empezando como junior backend developer`;

console.log(message);

