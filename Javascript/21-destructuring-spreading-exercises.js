// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let songs = ["Tarot", "A New Error", "Deportivo", "Run For Cover"];

let [ songName1,songName2, , , ] = songs;

console.log(songName1);
console.log(songName2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [s1, s2, s3, s4, s5 = 'Unknown'] = songs;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);


// 3. Usa desestructuración para extraer dos propiedades de un objeto

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

//Destructuracion de un objeto y objeto anidado

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { stockName: stock, location: locations, laptops: { brand: brandName }} = deviceInventory;

console.log(stock);
console.log(locations);
console.log(brandName);



// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let { laptops: {model: modelName}, laptops: {specs: { ram : ramVolume }} } = deviceInventory;

console.log(modelName);
console.log(ramVolume);


// 6. Usa propagación para combinar dos arrays en uno nuevo

let rockSongs = ['Last Resort', 'Californication', 'Chop Suey'];

let songList = [...songs, ...rockSongs];

// console.log(songList);


// 7. Usa propagación para crear una copia de un array

let songListCopy = [songList];

console.log(songList);
console.log(songListCopy);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let colimaInventory = {
    stockName: 'IT Stock',
    location: 'Colima',
    desktops: {
        brand: 'Dell',
        model: '5510',
        specs: {
            ram: "18 GB",
            storage: "512 GB",
            os: "Windows 11"
        },
        stock: 50
    },
    tv: {
        brand: "Dell",
        model: "Gaming",
        specs: {
            display: 34,
            hz: 180
        },
        stock: 50
    }
}


let newTechInventory = { ...deviceInventory, ...colimaInventory};
// console.log(newTechInventory);

// 9. Usa propagación para crear una copia de un objeto

let copyColimaInventory = {...newTechInventory};
console.log(copyColimaInventory);


// 10. Combina desestructuración y propagación

// Array 
let song = ["Tarot", "A New Error", "Deportivo", "Run For Cover"];


let [ track1, track2, ...tracks] = song;
console.log(track1);
console.log(track2);
console.log(tracks);

// Objetos
let colombia = {
    stockName: 'IT Stock',
    location: 'Colima',
    desktops: {
        brand: 'Dell',
        model: '5510',
        specs: {
            ram: "18 GB",
            storage: "512 GB",
            os: "Windows 11"
        },
        stock: 50
    },
    tv: {
        brand: "Dell",
        model: "Gaming",
        specs: {
            display: 34,
            hz: 180
        },
        stock: 50
    }
}

let { stockName: stockID, location: state, ...elements} = colombia;

console.log(stockID);
console.log(state);
console.log(elements);