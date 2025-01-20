// Export modulos


// Funciones
export const sum = (a, b) =>  a + b ;

console.log(sum(10,10))

// Variables

export const PI = 3.1416;
export let name = 'Eduardo';

// Exportación por defecto

// export default function substract(c, d){
//     return c - d;
// };

// Exportar clases

// Clase 1

export class Animals {
    constructor(type, name, age, size){
        this.type = type;
        this.name = name;
        this.age = age;
        this.size = size;
    }

    sound(){
        console.log('Hace un sonido');
    }
}

// Clase 2

export class Circle {
    constructor(radius){
        this.radius = radius;
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter(){
        return 2 * Math.PI * this.radius;
    }
}

// Exportar clase por defecto

export default class Device {
    constructor(deviceName, deviceType, pricing){
        this.deviceName = deviceName;
        this.deviceType = deviceType;
        this.pricing = pricing
    }
    showInfo(){
        return `${this.deviceName} ${this.deviceType} ${this.pricing}`;
    }
}