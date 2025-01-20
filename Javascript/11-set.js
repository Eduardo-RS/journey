 // Set

// Declaracion

let mySet = new Set();

// Inicializacion

mySet = new Set(['Eduardo', 'RS', 'Lalo', 29]);
console.log(mySet);

// Metodos comunes

// Add

mySet.add(1995);
mySet.add('October')
mySet.add(21)
console.log(mySet);


// Delete

// mySet.delete('RS');
console.log(mySet.delete('RS'));
console.log(mySet);


// Has

console.log(mySet.has('Eduardo'));
console.log(mySet.has('RS'));

// Size

console.log(mySet.size);

// Convertir un set a Array

let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a Set

mySet = new Set(myArray);
console.log(mySet);


// No permite duplicador

mySet.add('Eduardo');
console.log(mySet);

mySet.add('Eduard0');
console.log(mySet);