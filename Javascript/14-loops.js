// Bucles

// For 

for (let i = 0; i <= 10; i++){
    console.log(`Hello World ${i}`);
}


// For y Arrays

const songs = ['Tarot', 'Run For Cover', 'Shadowplay', 'After Dark', 'A New Error', 'Chandelier'];

for (let i = 0; i < songs.length; i++){
    console.log(`${i}: ${songs[i]}`);
}



// While

let i = 0;

while (i < 5){
    console.log(`Hello world ${i}`)
    i++;
}

// Bucle do while

let a = 0

do {
    console.log('Hola Mundo1');
    a++;
} while (a > 0 && a < 5);


// For Of

// - For of con Array

let movies = ['Avatar', 'John Wick', 'Ready Player One', 'Spider Man Across the Spider Verse', 'Equalizer'];

for (const movie of movies) {
    console.log(`${movie}`);
}

// - For of con Sets

let games = new Set(['Helldivers', 'Sparking Zero', 'Zero Dawn', 'Forbidden West']);

for (const gameList of games){
    console.log(`${gameList}`);
}


// - For of con Maps

let brands = new Map([
    ["apple", "iPhone"],
    ["google", "Pixel"],
    ["samsung", "galaxy"],
]);

console.log(brands);

for (const deviceBrand of brands){
    console.log(deviceBrand);
}


// For of, saltar elementos 

const pokemonList = ['Pikachu', 'Charizard', 'Yoshi', 'Squirtle', 'Bulbasur'];

for (const pokemon of pokemonList){
    if(pokemon === 'Yoshi'){
        continue;
    }
    console.log(`Atrapaste a un ${pokemon}`);
}

// For of con palabras

const message = `Hola mundo, desde Javascript 2025`

for (const spell of message){
    console.log(spell);
}


// Buenas practicas


// Usar continue y/o break

for (let a = 0; a < 10; a++){
    if(a === 5){
        continue;
    } else if ( a === 8){
        break;
    }
    console.log(a)
}


// Bucle infinito
// while (true){
//     console.log('Hello World');
// }