// 1. Crea un función que utilice error correctamente

console.error('Hola esto es un erro', new Error('Error'));

// 2. Crea una función que utilice warn correctamente

console.warn('Esto es una alerta');

// 3. Crea una función que utilice info correctamente
let a = 10;

console.info(a);

// 4. Utiliza table

// Array
let device = [
    ["Macbook Pro", "2023"],
    ["Scepte", "Gaming Monitor"]
]

console.table(device);

// Object
let devices = [
    {
        deviceType: "Laptop", 
        brand: "Apple", 
        model: "Macbook Pro 2023", 
        pricing: 2000,
        status: "Available"
    },
    {
        deviceType: "Monitro", 
        brand: "Sceptre", 
        model: "Curved gaming monitor", 
        pricing: 250,
        status: 'Asigned'
    }
]


console.table(devices);


// 5. Utiliza group

console.group();
console.log("deviceType: Monitor");
console.log("brand: Sceptre");
console.log("model: Sceptre");
console.groupEnd();

console.log("pricing: 2000");

// 6. Utiliza time

console.time('Ejecución 1');

for(i = 0; i < 1000; i++){

}

console.timeEnd('Ejecución 1');
// 7. Valida con assert si un número es positivo

userAge = 12;

console.assert(userAge >= 18, "Menor de edad");

// 8. Utiliza count

console.count('Click')
console.count('Click')

console.count('Alpha')
console.count('Alpha')
console.count('Alpha')


// 9. Utiliza trace

const sum = (a, b) => {
    console.trace(a,b);
}

sum(10,10)

// 10. Utiliza clear

console.clear()