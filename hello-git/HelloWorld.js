console.log('Hello World 2');

class Inventory {
    constructor(deviceName, price, quantity){
        this.deviceName = deviceName;
        this.price = price;
        this.quantity = quantity;
    }
    show(){
        return this.deviceName, this.price, this.quantity;
    }
}

const newDevice = new Devices('Macbook Pro', 900, 20)
const newDevice1 = new Devices('Macbook Pro', 100, 10)


const arr = [newDevice , newDevice1];
