// 1. Crea un array que almacene cinco animales

let animals = ['Lion', 'Dog', 'Bear', 'Cat', 'Eagle'];
// console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final

animals.push('Shark');
animals.unshift('Racoon');
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 2);
console.log(animals);

// 4. Crea un set que almacene cinco libros

let mySet = new Set([
    'Harry Potter 1', 
    'Harry Potter 2', 
    'Harry Potter 3', 
    'Harry Potter 4', 
    'Harry Potter 5', 
    'Harry Potter 6'
]);

console.log(mySet);


// 5. Añade dos más. Uno de ellos repetido

mySet.add('Harry Potter 7');
mySet.add('Harry Potter 1');
console.log(mySet);

// 6. Elimina uno concreto a tu elección

mySet.delete('Harry Potter 7');
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    ["1", "January"],
    ["2", "February"],
    ["3", "March"],
    ["4", "April"],
    ["5", "May"],
    ["6", "June"]
]);

console.log(months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(months.has("5"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("7","July");
console.log(months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let artists = ['The Killers', 'Bad Bunny', 'Myke Towers', 'Panteon Rococo'];
console.log(artists);

// Array a Set
let newSet = new Set(artists);
console.log(newSet);

// Almacenar el Set en un Map
let newMap = new Map();

newMap.set('artists', newSet);

console.log(newMap.get('artists'));