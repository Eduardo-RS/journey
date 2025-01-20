// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <=20; i++){
    // console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0

for (let i = 1; i <= 100; i++){
    // console.log(i);
    sum += i;
}
console.log(sum);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
// for (i = 1; i <= 50; i++){
//     if(i % 2){
//        continue
//     } else {
//         console.log(i);
//     }
// }

for (i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const names = ['Eduardo', 'Karla', 'Chloe', 'Abad', 'Joya'];

// Usando For
for (let n = 0; n < names.length; n++){
    console.log(names[n]);
}

// Usando For Of

for (const nameList of names){
    console.log(nameList);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const message = "Hola Mundo, desde Javascript";
const vowels = "aeiouAEIOU"
let result = 0

for(let v = 0; v < message.length; v++){
    console.log(message[v]);
    if(vowels.includes(message[v])){
        result++;
    }
}
console.log(`Total de vocales ${result}`);



// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numbers = [2, 4, 6, 8, 10];
let product = 1;

for (let n = 0; n < numbers.length; n++){
    console.log(numbers[n]);
    product *= numbers[n];
}

console.log(`Total de multiplicación ${product}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <=10; i++){
    let multiply = i * 5
    console.log(`1 x ${i} = ${multiply}`);
}

// 8. Usa un bucle para invertir una cadena de texto

// Reverse loop

const text = 'Hola';

for (let t = text.length -1; t >= 0; t--){
    console.log(text[t]);
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1]; // Los primeros dos números de Fibonacci

for (let i = 2; i < 10; i++) {
    // console.log(i);
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci[i - 1]);
}

console.log(fibonacci);



// 0, 1, 1, 2, 3, 5, 8, 13, 21
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numberList = [10, 4, 60, 23, 10, 8, 3, 4, 5, 6, 90, 100, 45, 40, 1, 2, 29];
const newList = [];

for (let numbers = 0; numbers < numberList.length; numbers++){
    if(numberList[numbers] > 10){
        newList.push(numberList[numbers]);
    }
}
console.log(newList);



// For anidados

// Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.

const bobsFollowers = ['Joya', 'Abad', 'Jovani', 'Angel', 'Ivan'];

//Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.

const tinasFollowers = ['Abad', 'Day', 'Joya'];

//Create a third variable named mutualFollowers and set it to an empty array.

const mutualFollowers = [];

// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. 
// If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
for (let bob = 0; bob < bobsFollowers.length; bob++){
    for (let tina = 0; tina < tinasFollowers.length; tina++){
        if(bobsFollowers[bob] === tinasFollowers[tina]){
            console.log('Follower ' + bobsFollowers[bob]);
            mutualFollowers.push(bobsFollowers[bob]);
        }
    }
}

console.log(mutualFollowers);