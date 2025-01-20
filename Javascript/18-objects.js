// Objects


// Sintaxis basica

let person = {
    name: 'Eduardo',
    lastName: 'RS',
    age: 29,
    alias: 'Lalo RS'
}

// ---- Acceso a las propiedades --- //

// Notación Punto
console.log(`Edad: ${person.age}`);


// Notación {}
console.log(person["lastName"]);

// Accediendo y modificando

person.name = 'Karla';

console.log(person.name);
console.log(person["name"]);
console.log(typeof person.name);

// Eliminar propiedades

delete person.alias;

console.log(person);

// Agregar una nueva propiedad

person.nickname = 'the.rs';
person["age"] = 30;
person.age = 29;
console.log(person);

// Metodos (funciones)

let person2 = {
    name: 'Karla',
    lastName: 'RS',
    age: 26,
    nickname: 'Pollo',
    talk: function(){
        console.log(`${this.name} puede hablar`);
    },
    // Nuevo objeto
    job: {
        name: 'Client Care',
        exp: 3,
        work: function(){
            console.log(`${this.exp} anos de experiencia como ${this.name}`);
        }
    }
}

// Llamar a la funcion dentro del objeto

person2.talk();
person2.job.work();
console.log(person2.job.name);


// Igualdad de objetos 
let person3 = {
    name: 'Eduardo',
    lastName: 'RS',
    alias: 'Lalo',
    age: 29
}



let person4 = {
    name: 'Eduardo',
    lastName: 'RS',
    alias: 'Lalo',
    age: 29
}

console.log(person3 == person4);
console.log(person3 === person4);


console.log(person3.name == person3.name);
console.log(person4.name === person4.name);
//console.log(person.name === person3.name);


// --- Iteración ----

// For In

for(let key in person4){
    console.log(`${key} : ${person4[key]}`);
}



// Funciones como objetos

function Person(name, age){
    this.name = name;
    this.age = age;
}

// Best practice
/*
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
*/

let person6 = new Person('Chloe', 40);
console.log(person6);

console.log(typeof person6);
