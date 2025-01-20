let a = 5;
let b = 10;

// Operadores Aritmeticos

console.log(a + b); // Suma 
console.log(a - b); // Rsta
console.log(a / b); // Division
console.log(a * b); // Multiplicación
console.log(a % b); // Modulo
console.log(a ** b); // Exponente

// Incremento 
a++
console.log(a);

// Decremento
b--
console.log(b);

// Operadores de asignación

let myVar = 10;
console.log(myVar)

myVar += 5;

console.log(myVar);

myVar += 5; // Suma
console.log(myVar);
myVar -= 5; // Resta
console.log(myVar);
myVar *= 5; // Multiplicacion
console.log(myVar);
myVar /= 5; // Division
console.log(myVar);
myVar %= 5; // Modulo
console.log(myVar);
myVar **= 5; // Exponente
console.log(myVar);


// Operadores de comparación
console.log(a)
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(10 <= 10);
console.log(a === a); // Igualdad por identidiad y valor (Por tipo y valor)
console.log(a === b);
console.log(a === 6); // Igualdad por valor
console.log(a == 6);
console.log(a === '6'); // Igualdad por valor pero diferente tipo de dato


// Operadores de desigualdad
console.log(a != 6); // Falso, son lo mismo
console.log(a !== '6'); // True



//Truthy values (Valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

//Falsy Values (Valores falsos)

// 0
// 0n
// null
// undefined
// Nan 
// El boolean false
// Cadenas de texto vacias

// Operadores Logicos

// and (&&)

console.log(5 > 10 && 15 > 20);
console.log(5 > 10 && 15 < 20);
console.log(5 < 10 && 15 < 20);

// or (||)

console.log(5 > 10 || 15 > 20);
console.log(5 > 10 || 15 < 20);
console.log(5 < 10 || 15 < 20);

console.log(5 > 10 && 15 > 20 || 30 < 40);

// nopt (!)
console.log(5 > 10 && 15 > 20);
console.log(5 > 10 || 15 > 20);


console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

// Operadores ternarios

