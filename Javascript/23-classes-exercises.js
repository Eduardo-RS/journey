// 1. Crea una clase que reciba dos propiedades

class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    // 2. Añade un método a la clase que utilice las propiedades
    get brandName (){
        console.log(this.brand);
    }
    get modelName(){
        console.log(this.model);
    }
    // 4. Añade un método estático a la primera clase
    static randomID(){
        const randomNumberID = Math.floor(Math.random() * 20);
        return randomNumberID;
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

const newCar = new Car('Nissan', 'Sentra');
console.log(newCar);
newCar.brandName;
newCar.modelName;

// 5. Haz uso del método estático

console.log(Car.randomID()); 

// 6. Crea una clase que haga uso de herencia

class Sedan extends Car {
    constructor(name, type){
        super(name);
        this.type = type;
    }
}

// 7. Crea una clase que haga uso de getters y setters

class Animals {
    #id;
    constructor(name, type, color, size, age, id, owner){
        this.name = name;
        this.type = type;
        this.color = color;
        this.size = size;
        this.age = age;
        this.#id = id;
        this._owner = owner;
    }
    get animalInfo(){
        return `Name: ${this.name}, Type: ${this.type}, Color: ${this.color}, Size: ${this.size}, Age: ${this.age}`
    }
    get identifier(){
        return `This is the ID: ${this.#id}`;
    }
    get ownerName(){
        return `This is the Owner Name: ${this._owner}`;
    }
    set animalColor(newColor){
        this.color = newColor;
    }
    // Simple metodo
    sound(){
        console.log('Emite un sonido');
    }
}

const newAnimal = new Animals('Chloe', 'Dog', 'White', 'Small', 40, 5115, "Karla RS");
console.log(newAnimal);

// Llamando al metodo simple
newAnimal.sound();

// Llamando al metodo GET
console.log(`This is the animal details: ${newAnimal.animalInfo}`);

// Llamando al metodo Set
newAnimal.animalColor = 'White wih brown'; // Llamando al metodo Set
console.log(`This is the animal details: ${newAnimal.animalInfo}`); //Llamando al metodo GET

// 8. Modifica la clase con getters y setters para que use propiedades privadas



// 9. Utiliza los get y set y muestra sus valores
//Accediento a la propiedad privada sin get o set
console.log(newAnimal.owner);
console.log(newAnimal.id);

//Accediento a la propiedad privada con Get y/o Set
console.log(newAnimal.identifier); // Get
console.log(newAnimal.ownerName); // Get

// 10. Sobrescribe un método de una clase que utilice herencia 

class Birds extends Animals {
    constructor(name, color, classification){
        super(name, color);
        this.classification = classification;
    }

    sound(){ // Sobreescribe el metodo sound de la clase padre
        console.log('Emite un nuevo sonido');
    }
}

const newBird = new Birds('Rio', 'Blue', 'Perico');
console.log(newBird);

newBird.sound();

// 11. Crea una clase, que tenga lo siguiente, metodos getters y setters, propiedades privadas, metodos y metodos estaticos y herede a otras clases

class Inventory {
    #accessCode;
    constructor(name, location, accessCode){
        this.name = name;
        this.location = location;
        this.#accessCode = accessCode;
    }
    get inventoryName(){
        return this.name;
    }
    get deviceLocation(){
        return this.location;
    }
    get access(){
        return this.#accessCode;
    }
    set newInventoryName(newName){
        this.name = newName;
    }
    set newInventoryLocation(newLocation){
        this.location = newLocation;
    }
    showLoca(){
        console.log(this.location);
    }
}

const stock1 = new Inventory('Secondary', 'Tijuana', 5115);
// Mostrando información
console.log(stock1);
console.log(stock1.accessCode); // No debe mostrar la información

// Llamando a los Get
console.log(stock1.inventoryName);
console.log(stock1.deviceLocation);
console.log(stock1.access);


// Llamando a los Set
stock1.newInventoryName = 'Main';
console.log(stock1.inventoryName);

stock1.newInventoryLocation = 'Colima';
console.log(stock1.deviceLocation);
console.log(stock1);



class Laptops extends Inventory {
    #password;
    constructor(name, location, serialNumber, password, techSpecs){
        super(name, location);
        this.serialNumber = serialNumber;
        this.#password = password;
        this.techSpecs = techSpecs;
    }
    get laptopDetails(){
        return `${this.name} ${this.location} ${this.serialNumber}`;
    }
    get confidentialInfo(){
        return `${this.#password}`;
    }
    set newSerial(newSN){
        this.serialNumber = newSN;
    }
    set newPass(newPWD){
        this.#password = newPWD;
    }

    //Heredar location
    latopLocation(){
        super.showLoca();
    }
}

const laptop1 = new Laptops('Macbook Pro', 'Colima', 'F20743LVRX', 3312, ['18GB RAM', '512 SDD', 'M3 Pro Chip']);
console.log(laptop1);
console.log(laptop1.password); // No debe mostrar la información

//Llamando a los metodos GET
console.log(laptop1.laptopDetails);
console.log(laptop1.confidentialInfo);
laptop1.latopLocation();

// Llamando a los metodos SET
laptop1.newSerial = 'RS0743LVRX';
console.log(laptop1.laptopDetails);

laptop1.newPass = 26451;
console.log(laptop1.confidentialInfo);
