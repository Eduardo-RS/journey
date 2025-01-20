//Destructuracion

let songs = ["Tarot", "A New Error", "Deportivo", "Run For Cover"];

//Destructuracion con array

let [s1, s2, s3, s4] = songs;

console.log(songs);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// Sintaxis para asignar elementos de un Array a variables

let [song1, song2, song3, song4, song5] = songs;

console.log(song1);
console.log(song2);
console.log(song3);
console.log(song4);
console.log(song5); // Muestra undefined debido a que el array solo tiene 4 elementos y en la destructuración estoy reasignando el elemento 5 que no existe

// Sintaxis con valor o valores predeterminados

let [n1, n2, n3, n4, n5 = 0] = songs;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);

// Ignorar elementos en un array

let [songName1, , , songName4] = songs;

console.log(songName1);
console.log(songName4);

// Destructuracion de Objetos

//Creando el objeto

const device = {
  brand: "Apple",
  model: "Macbook Pro M3 Pro Chip",
  ram: "18 GB",
  pricing: 2000,
};

console.log(device);
console.log(device.brand);

// Sintaxis para destructuracion de objetos

let { brand, model, ram } = device;

console.log(brand);
console.log(model);
console.log(ram);

// Sintaxis para destructuracion de objetos con nuevos nombres de variables

let { brand: brandName , model: modelName, ram: ramCapacity} = device;

console.log(`This is the: ${brandName}`);
console.log(`This is the: ${modelName}`);
console.log(`This is the: ${ramCapacity}`);

// Destructuración de Objetos anidados

let deviceInventory = {
    stockName: 'IT Stock',
    location: 'Tijuana',
    laptops: {
        brand: 'Apple',
        model: 'Macbook Pro',
        specs: {
            ram: "18 GB",
            storage: "512 GB",
            os: "Sequoia"
        },
        stock: 40
    },
    monitor: {
        brand: "Sceptre",
        model: "Gaming",
        specs: {
            display: 34,
            hz: 120
        },
        stock: 40
    }
}

let { laptops: { brand: laptopBrand }, monitor: { model: monitorModel } } = deviceInventory;

console.log(`The laptop brand is ${laptopBrand}`);
console.log(`The monitor model is ${monitorModel}`);



// Propagación (...)

/* Sintaxis para Array */

// Propagacion simple

let songsCopy = [...songs];

console.log(`Propagación del array de canciones a uno nuevo ${songsCopy}`);

// Propagar y anadir mas valores al array

let songAndArtist = [...songs, 'Bad Bunny', 'Moderat', 'The Killers'];

console.log(`Propagación del array de canciones a uno nuevo array con artistas ${songAndArtist}`)


// Combinar Arrays

let arrayCombination = [...songs, ...songAndArtist];

console.log(`Combinación de arreglos ${arrayCombination}`);


/* Sintaxis para Objetos */

// Copiar
let newDeviceInventory = {...deviceInventory};

console.log(newDeviceInventory);

// Propagar con nuevos datos

let newDeviceInventory1 = {...deviceInventory, country: 'MX' };
console.log(newDeviceInventory1);