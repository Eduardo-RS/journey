// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
// Declaración simple
function sum(a, b) {
  console.log(a + b);
}

sum(5, 5); //10

// Arrow function

const sumar = (a, b) => {
  console.log(a + b);
};

sumar(10, 10); //20

//Arrow function una sola linea

const sumar1 = (a, b) => console.log(a + b);

sumar1(15, 15); // 30

const sumar2 = (a, b) => {
  return a + b;
};

console.log(sumar2(25, 25)); // 50;

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numbers = [2, 4, 10, 20, 5, 45];

const maxNumber = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
};

maxNumber(numbers);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const message = "Hola mundo desde javascript";

const numVowels = (string) => {
  vowel = "aeiouAEIOU";
  result = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      result++;
    }
  }
  console.log(`Total de vocales en el mesaje: ${result}`);
};

numVowels(message);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const lowerCase = ['one more time', 'after dark', 'run for cover', 'shadowplay', 'a new error'];

const lowerToUpper = (array) => {
    let upperCase = [];
    console.log(array);
    for(i = 0; i < array.length; i++){
        upperCase.push(array[i].toUpperCase());
    }
    console.log(upperCase);
}

lowerToUpper(lowerCase);


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// -> Pendiente

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const array1 = ['one more time', 'after dark', 'run for cover', 'shadowplay', 'a new error'];
const array2 = ['one more time', 'boy', 'run for cover', 'shadowplay', 'a new error', 'maps', 'tarot'];

const newArray = (arr1, arr2) => {
    let array3 = [];
    for(let i = 0; i < arr1.length; i++){
        for(let b = 0; b < arr2.length; b++){
            if(arr1[i] === arr2[b]){
                array3.push(arr1[i]);
            }
        }
    }
    console.log(array3);
}

newArray(array1, array2);


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const arrayNums = [1, 2, 3, 4, 5, 6, 7 , 8, 9];

const sumNumPar = (array) => {
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            result += array[i];
        }
    }
    console.log(`Suma total de numero pares: ${result}`);
}

sumNumPar(arrayNums);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const numSquare = (array) => {
    let squareResult = [];
    for(const num of array){
        squareResult.push(num ** 2);
    }
    console.log(squareResult);
}

numSquare(arrayNums);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const words = 'Hello world from javascript';

const reverseWords = (string) => {
    console.log(string);
    for(let i = string.length -1; i >= 0; i--){
        console.log(string[i]);
    }
}

reverseWords(words);

// 10. Crea una función que calcule el factorial de un número dado

const factorial = (n) => {
    if(n === 0){
        console.log('No hay factorial de 0');
    }
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    console.log(result);
}

factorial(10);