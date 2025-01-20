// 1. Crea un objeto con 3 propiedades
let device = {
    brand: 'Apple',
    model: 'Macbook Pro',
    processor: 'M3 Pro Chip',
    display: 14.5,
    pricing: 2000,
    // Funcion usando Arrow Function
    start: () => {
        console.log('Starting');
    },
    //Funcion usando Function Declaration
    shutdown: function(){
        console.log('Shutdown');
    }
}

// 2. Accede y muestra su valor

/* Dot notaton */

console.log(device.brand);
console.log(device.processor);
console.log(device.display);
console.log(device.pricing);

/* Bracket notation */

console.log(device["brand"]);
console.log(device["processor"]);
console.log(device["display"]);
console.log(device["pricing"]);

// 3. Agrega una nueva propiedad

device.serialNumber = 'F20743LVRX';
device["ram"] = 18;

console.log(device);

// 4. Elimina una de las 3 primeras propiedades

delete device.processor;
delete device["pricing"];

console.log(device);

// 5. Agrega una función e invócala

device.start();
device.shutdown();

//console.log(device);

// 6. Itera las propiedades del objeto

for(let key in device){
    console.log(`${key}: ${device[key]}`);
}

// 7. Crea un objeto anidado

let inventory = {
    stockName: 'IT Devices',
    use: 'Work',
    laptop: {
        brand: 'Apple',
        model: 'Macbook Pro',
        specs: {
            ram: "18 GB",
            storage: "512 GB",
            storageType: "SSD",
            processor: "M3 Pro Chip",
            display: 14.5
        },
        stock: 45
    },
    monitor: {
        brand: "Sceptre",
        displayTech: "Led",
        displaySize: 34,
        stock: 30
    }
}

console.log(inventory);
// 8. Accede y muestra el valor de las propiedades anidadas

// - Dot Notation

console.log(inventory.laptop.specs.ram);
console.log(inventory.laptop.specs.processor);
console.log(inventory.laptop.stock);
console.log(inventory.monitor.displaySize);

// - Bracket Notation

console.log(inventory.laptop.specs["ram"]);
console.log(inventory.laptop.specs["storage"]);
console.log(inventory.monitor["brand"]);

// 9. Comprueba si los dos objetos creados son iguales

let deviceInventory = {
    stockName: 'IT Devices',
    use: 'Work',
    laptop: {
        brand: 'Apple',
        model: 'Macbook Pro',
        specs: {
            ram: "18 GB",
            storage: "512 GB",
            storageType: "SSD",
            processor: "M3 Pro Chip",
            display: 14.5
        },
        stock: 45
    },
    monitor: {
        brand: "Sceptre",
        displayTech: "Led",
        displaySize: 34,
        stock: 30
    }
}
console.log(inventory == deviceInventory);
console.log(inventory === deviceInventory);

console.log(inventory.laptop.specs.ram === deviceInventory.laptop.specs.ram);

// 10. Comprueba si dos propiedades diferentes son iguales