// 1. Exporta una función

export const sumIf = (a, b) => {
    return typeof a === "number" && typeof b === "number" ? a + b : "Ingresa numeros";
}


// 2. Exporta una constante
export const name = 'Eduardo Rendon Salinas';


// 3. Exporta una clase
export class Animal {
    constructor(type){
        this.type = type;
    }

    sound(){
        console.log("Emite un sonido");
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default class User {
    constructor(name, lastname, age, userType){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.userType = userType;
    }
    showUserType(){
        return `${this.userType}`;
    }
}