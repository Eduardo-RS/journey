// 1. Crea una variable para cada operación aritmética

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let number = 10

number -= 5;
console.log(number);

number *= a;
console.log(number);

number *= 10;
console.log(number);

number %= 10;
console.log(number);

number /= 10;
console.log(number);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a < b && b > a); // True
console.log(b > a && a < b); // True
console.log(a > 2 && b >= 20) // True
console.log(a >= 10 && b <= 20) // True
console.log(a < b); //True

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b && b > a); // False
console.log(b <= a); // False
console.log(a >= b); // False
console.log(a <= 0);  // False
console.log(b < a); // False

// 5. Utiliza el operador lógico and

console.log(a < b && b > a); // True
console.log(b > a && a < b); // True
console.log(a > 2 && b >= 20) // True
console.log(a >= 10 && b <= 20) // True

// 6. Utiliza el operador lógico or
console.log(a > b || b > a ); // True
console.log(b < a || a < b); // True
console.log(b > 10 || a < 0); // True

// 7. Combina ambos operadores lógicos
console.log(a < b && b < a || b > a); // True

// 8. Añade alguna negación
console.log(!(b > 10 || a < 0)); // True

// 9. Utiliza el operador ternario

console.log(a)
b < a ? console.log('Verdadero') : console.log('Falso');
b > a ? console.log('Verdadero') : console.log('Falso');


// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(a + b > 30 && a + b > 30 || a + b <= 30 )