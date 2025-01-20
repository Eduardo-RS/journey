let greeting = "Hello! "
let name = "Eduardo"
let lastName = "RS"
let alias = "Lalo"

// 1. Concatena dos cadenas de texto

console.log(greeting + lastName );

// 2. Muestra la longitud de una cadena de texto
console.log(alias.length);

// 3. Muestra el primer y último carácter de un string
console.log(greeting[0]);
console.log(greeting[6]);


// 4. Convierte a mayúsculas y minúsculas un string

console.log(name.toUpperCase());
console.log(name.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let message = `Hola este es
un mensaje de varias lineas`;

// 6. Interpola el valor de una variable en un string
console.log(`Hola ${name}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(message.replace(" ", "-"));
console.log(message.replace(" ", "-"));
console.log(message.replace(" ", "-"));
console.log(message.replace(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes("mensaje"));
// 9. Comprueba si dos strings son iguales
console.log(name == lastName);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(name.length);
console.log(lastName.length);
