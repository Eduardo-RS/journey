import { students } from "./data.js"

// console.log(students);

/*
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}
*/

// forEach callback function ES5

//CallBack Funcion Syntaxis
/*
arr.forEach(function callback(currentValue, index, array) {
     tu iterador
}[, thisArg]);
*/

// students.forEach(function(elements, index){
//     console.log(elements, index);
// })


// Arrow function

// students.forEach((elements, index) => {
//     console.log(elements, index);
// })

// Arrow funtion de una sola linea
// students.forEach((elements) => { console.log(elements) });


// Arrow function con una constante

const studentAge = (arr) => arr.forEach(student => console.log(student));



