// Maps

//Declaración

let myMap = new Map();

console.log(myMap);

// Inicialización

myMap = new Map([
    ["name", "Eduardo"],
    ["email", "EduardoRS@gmail.com"],
    ["age", 37]
]);

console.log(myMap);

// Metodos y propiedades

// Set
myMap.set("alias", "Lalo RS");

console.log(myMap);

// Actualizar a una clave que ya existe
myMap.set("name", "Eduardo RS");

console.log(myMap);


// Get

console.log(myMap.get("email"));
console.log(myMap.get("alias"));
console.log(myMap.get("surname")); // No existe la clave


// Has

console.log(myMap.has("surname"));
console.log(myMap.has("age"));
console.log(myMap.has("name"));

// Delete

myMap.delete("email");
console.log(myMap);


// Clear
// console.log(myMap.clear());

