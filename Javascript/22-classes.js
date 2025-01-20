// Clases

// Sintaxis sencilla

class Device {
  constructor(brand, model, type, serialNumber, pricing) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.serialNumber = serialNumber;
    this.pricing = pricing;
  }
}

// Instanciación
const device1 = new Device(
  "Apple",
  "Macbook Pro",
  "Laptop",
  "F20743LVRX",
  1999
);
console.log(device1);

// Sintaxis de clase con valores por defecto

class DefaultPerson {
  constructor(userName = "Nombre por defecto", age = 0) {
    this.userName = userName;
    this.age = age;
  }
}

const person1 = new DefaultPerson((userName = "Lalo"), (age = 30));
const person2 = new DefaultPerson((userName = "Karla"), (age = 26));
console.log(person1);
console.log(person2);

// Acceso a las propiedades de la clase usando objetos

//Accediendo a person1
console.log(person1.userName);
console.log(person1["userName"]);
console.log(person1.age);

//Accediendo a person 2
console.log(person2.userName);
console.log(person2["age"]);
console.log(person2["userName"]);

//Actualizando valores de los objetos
person1.userName = "Eduardo Rendon"; // Con notación punto
person1["age"] = 29; // Con notacion bracket
console.log(person1);

class carWithMethod {
  constructor(brandName, modelName, typeName, serialID, publicPrice) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.typeName = typeName;
    this.serialID = serialID;
    this.publicPrice = publicPrice;
  }
  // Metodo
  turnOn() {
    console.log(`The ${this.typeName} is turning On`);
  }
  turnOff() {
    console.log(`The ${this.typeName} is turning Off`);
  }
  drive = () => {
    console.log(`The ${this.typeName} is driving`);
  };
}

const Toyota = new carWithMethod(
  "Toyota",
  "Camry",
  "Sedan Car",
  "HD720SH",
  20000
);
console.log(Toyota);

// Llamando o invocando el metodo de la clase con un objeto
Toyota.turnOn();
Toyota.drive();
Toyota.turnOff();

// Clases con Propiedades Privadas
class bankClients {
  #accountNumber;

  constructor(name, lastname, age, accountNumber, Identification) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.#accountNumber = accountNumber;
    this._Identification = Identification;
  }
  pay() {
    console.log(this.#accountNumber);
  }
  get ID() {
    console.log(`This is the ID: ${this._Identification}`);
  }
}

const client1 = new bankClients('Karla', 'Saldaña', 26, 328734943032843, "H0CN182");
console.log(client1);

console.log(client1.accountNumber); //No imprime la propiedad accountNumber
console.log(client1.ID); //No imprime la propiedad accountNumber

// Llamando a los metodos para obtener la información privada
client1.ID;
client1.pay();  // este metodo si lo imprime


// Getters y Setters 

class bank {
    #name
    #lastname
    #clientNumber
    #bankNumber
    constructor(name, lastname, clientNumber, bankNumber){
        this.#name = name;
        this.#lastname = lastname;
        this.#clientNumber = clientNumber;
        this.#bankNumber = bankNumber;
    }
    // Getters
    get userName() {
        return `${this.#name} ${this.#lastname}`; // Retorna nombre y apellidos
    }
    //Setters
    set bank(newBank) {
        return this.#bankNumber = newBank;
    }
    // Getter
    get bankDetails(){
        return this.#bankNumber; // Retornara los nuevos datos del banco
    }

}

// creamos una instancia

const client2 = new bank('Eduardo', 'Rendon Salinas', 547302, 1052);
console.log(client1);

//Accediento a las propiedades privadas con Get

console.log(client2.userName);

client2.bank = 1055 //Enviar datos a un set
console.log(`New bank details ${client2.bankDetails}`);


// Herencia

class Animal {
    constructor(name, type, age){
        this.name = name;
        this.type = type;
        this.age = age;
    }
    sound(){
        console.log('Emite un sonido');
    }
}


// Sintaxis para heredar a nuevas clases
class Dog extends Animal {
    constructor(name, type, age, size){
        super(name, type, age);
        this.size = size;
    }
    //Metodo
    run(){
       console.log(`El ${this.type} corre`);
    }
    get dogType(){
        console.log(this.type);
    }
    //Llamar el metodo de la clase padre
    dogSound(){
        super.sound(); 
    }
}

const newDog = new Dog("Chloe", "Chihuahua",40,"Med");
console.log(newDog);
newDog.sound(); // Llamando al metodo que no es GET
newDog.dogSound();
newDog.run(); // Llamando al metodo que no es GET
newDog.dogType;

class Cats extends Animal {
    constructor(name, type, age, color){
        super(name, type, age);
        this.color = color;
    }
    sleep(){
        console.log(`El ${this.type} duerme`);
    }
    get catType(){
        console.log(this.type);
    }
    sound(){ // Este metodo sobre escribe el metodo de la clase padre
        console.log('Miau');
    }
}

const newCat = new Cats('Micha', 'Cat', 20, "grey");
console.log(newCat);
newCat.sound(); // Llamando al metodo que no es GET
newCat.sleep(); // Llamando al metodo que no es GET
newCat.catType; // Llamando al metodo Get

// Metodos estaticos

class MathOperations {

    //Sintaxis
    static sum(a, b){
        return a + b;
    }
    static multiply( a, b){
        return a*b;
    }
}

// Llamando o invocando el metodo estatico
console.log(MathOperations.sum(2, 5));
console.log(MathOperations.multiply(2, 5));
