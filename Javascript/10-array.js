
// Declaración

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicializacion

myArray = [3]
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

// Inicialización con varios tipos de datos

myArray = [1, 2, 3, 4, 'Eduardo', 'RS', true];
myArray2 = new Array(1, 2, 3, 4, 'Eduardo', 'RS', true);

console.log(myArray);
console.log(myArray2);


// Accediento y modificando el array
myArray = [];
myArray[0] = 'Eduardo';
myArray[1] = 'RS';
myArray[2] = 'Lalo RS';
myArray[3] = 1;
myArray[4] = 2;
myArray[5] = 3;

console.log(myArray);


// Metodos

myArray = [];

// push - se usa para agregar mas elementos
myArray.push("Hola");
myArray.push("Mundo");
myArray.push("Eduardo RS");
myArray.push('aka Lalo');
myArray.push(29);

console.log(myArray);

// pop() - elimina el ultimo elemento
console.log(myArray);
myArray.pop();
console.log(myArray);
console.log(myArray.pop()); // Lo almacena 

// shift - elimina elemtnos del principio arreglo
myArray.shift()
console.log(myArray);
console.log(myArray.shift());


// unshift - agregar uno o mas elementos al principio del arreglo
myArray.unshift("Hola", "Mundo")
console.log(myArray)

//  Longitud
console.log(myArray.length);

// Clear

myArray = [] // Se inicializa de nuevo sin elementos
myArray.length = 0; // Alternativa

// Slice - genera un nuevo array con solo los elementos que quieres

myArray = [];
myArray.push("Hola");
myArray.push("Mundo");
myArray.push("Eduardo RS");
myArray.push('aka Lalo');
myArray.push(29);


console.log(myArray);

let newArray = myArray.slice(0,2);
console.log(newArray);

// Splice - Elimina y agrega elementos usando index de incioo e index de fin

console.log(myArray);
console.log(myArray.splice(0, 3));

console.log(myArray.splice(0, 2, "Hello JS"));
console.log(myArray);

// Join
myArray = [];
myArray.push("Hola");
myArray.push("Mundo");
myArray.push("Eduardo RS");
myArray.push('aka Lalo');
myArray.push(29);


console.log(myArray.join("-"));