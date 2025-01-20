const { error } = require('console');
const fs = require('fs');


//Leer archivos
const first = fs.readFileSync('./data/1.txt', 'utf-8')
const second = fs.readFileSync('./data/2.txt');


console.log(first);
console.log(second.toString());


// Crear archivos
fs.writeFileSync('./data/3.txt',"Hola mundo desde 3.txt");



// Crear archivos usando variables
const title = '4to archivo'

fs.writeFileSync('./data/4.txt', title);


// readfile

fs.readFile('./data/4.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());

    fs.readFile('./data/3.txt', (err, data) => {
        if(err){
            console.log(err);
        }
        console.log(data.toString());
        fs.writeFile('./data/5.txt','archivo creado desde fs', )
    })
})

