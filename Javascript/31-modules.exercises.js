// 4. Importa una función
// 5. Importa una constante
import { sumIf, name, Animal } from "./export-modulo.js";

console.log(sumIf(10,19));


console.log(name);

// 6. Importa una clase

const newAnimal = new Animal('Dog');
console.log(newAnimal);
newAnimal.sound();

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import User from "./export-modulo.js";

const user1 = new User('Eduardo', 'RS', 29, 'admin');
console.log(user1);

console.log(user1.showUserType());


const user2 = new User('Emanuel', 'Joya', 44, 'regular');

console.log(user2.showUserType());


// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { multiply } from "./export/export.js";

console.log(multiply(8, 8))