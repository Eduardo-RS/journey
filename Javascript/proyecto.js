/* 1. **Ejercicio 1: Crear una lista de productos.**
   - Crea un array llamado `productos` con objetos que representen productos.
   - Cada producto debe tener las propiedades `nombre`, `precio` y `cantidad`.

   Ejemplo de estructura de un producto:
   { nombre: "Manzana", precio: 1.5, cantidad: 10 }
*/

let productList = [
  { productName: "Apple", price: 50, quantity: 20 },
  { productName: "PineApple", price: 35, quantity: 50 },
  { productName: "Strawberry", price: 12, quantity: 20 },
  { productName: "Banana", price: 21, quantity: 15 },
];

console.log(productList[0].productName);
/* 2. **Ejercicio 2: Incrementar la cantidad de productos.**
   - Usa un bucle `for` para recorrer el array `productos` y aumenta la cantidad
     de cada producto en 5 unidades.
*/

// Usando For
for (let i = 0; i < productList.length; i++) {
  console.log((productList[i].quantity += 5));
}

console.log(productList);

// Usando forEach
productList.forEach((products) => {
  console.log((products.quantity += 5));
});

/* 3. **Ejercicio 3: Aplicar descuento a productos caros.**
   - Usa un bucle `for` y una estructura `if-else` para reducir el precio
     de todos los productos cuyo precio sea mayor a 20 en un 15%.
*/

//for
productList.push(
  { productName: "Orange", price: 25, quantity: 10 },
  { productName: "Watermelon", price: 15, quantity: 51 }
);
console.log(productList);
// console.log(productList[0].price);

// for(let i = 0; i < productList.length; i++){
//     if(productList[i].price > 20){
//         productList[i].price -= 10;
//     }
//     console.log(productList[i]);
// }

// forEach
productList.forEach((productPrice) => {
  if (productPrice.price > 20) {
    // productPrice.price = productPrice.price - (productPrice.price * 0.15)
    productPrice.price -= productPrice.price * 0.15;
  }
  console.log(productPrice.price, "new price");
});

/* 4. **Ejercicio 4: Crear una clase `Producto`.**
   - Define una clase llamada `Producto` que tenga las siguientes propiedades:
     - `nombre`
     - `precio`
     - `cantidad`
   - Crea un constructor para inicializar estas propiedades.
*/
/* 5. **Ejercicio 5: Agregar métodos `get` y `set` a la clase.**
   - Agrega un método `get` para obtener el precio con impuestos (21%).
   - Agrega un método `set` para actualizar el precio base del producto.
*/
/* 7. **Ejercicio 7: Crear un método para mostrar información del producto.**
   - En la clase `Producto`, agrega un método llamado `mostrarInformacion`.
   - Este método debe imprimir en consola: "Nombre: [nombre], Precio: [precio], Cantidad: [cantidad]".
   - Usa este método en todos los productos de tu lista.
*/

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  get pricing() {
    return "pricing include tax: ", (this.price += this.price * 0.21);
    // Corrección
    // return this.price + this.price * 0.21; // No debe modificar el precio base
  }

  set newPrice(newPrices) {
    return (this.price = newPrices);
  }
  showProducts() {
    return `${this.name} ${this.price} ${this.quantity}`;
  }
}

/* 6. **Ejercicio 6: Crear una lista de productos utilizando la clase.**
   - Usa la clase `Producto` para crear al menos 3 instancias y agrégalas a un array.
   - Los valores iniciales de cada producto (nombre, precio, cantidad) pueden ser los que desees.
*/

// Peach
// Uva - grape
// Aguacate - Avocato

const newProduct1 = new Product("Peach", 20, 60);
console.log(newProduct1.pricing);
console.log(newProduct1.showProducts());

const newProduct2 = new Product("Avocato", 14, 20);
console.log(newProduct2.pricing);
console.log(newProduct2.showProducts());

const newProduct3 = new Product("Grape", 20, 10);
console.log(newProduct3.pricing);
console.log(newProduct3.showProducts());

let newProductList = [newProduct1, newProduct2, newProduct3];
console.log(newProductList);
// console.log(newProduct1, newProduct2, newProduct3);

/* 8. **Ejercicio 8: Filtrar productos con baja cantidad.**
   - Usa el array de productos y filtra los que tienen una cantidad menor a 10.
   - Muestra en consola los productos que cumplan esta condición.
*/

// For
for (let i = 0; i < newProductList.length; i++) {
  if (newProductList[i].quantity <= 10) {
    console.log(newProductList[i].name, newProductList[i].price);
  }
  // console.log(newProductList[i]);
}

// forEach
newProductList.forEach((element) => {
  if (element.quantity <= 10) {
    console.log(element.name, element.quantity);
  }
});

/* 9. **Ejercicio 9: Ordenar productos por precio.**
   - Ordena el array de productos de forma ascendente por el precio.
   - Usa el método `.sort()` para lograrlo.
*/
console.log(newProductList.sort((a, b) => a.price - b.price));
// console.log(newProductList.sort((a, b) => b.price - a.price));
// console.log(newProductList.sort());


/* 10. **Ejercicio 10: Calcular el valor total del inventario.**
   - Usa un bucle `for` para calcular el valor total del inventario.
   - El valor total se calcula como el precio multiplicado por la cantidad de cada producto.
   - Muestra el valor total en la consola.
*/

console.log(newProductList);

let totalInventory = 0;
for(let i = 0; i < newProductList.length; i++){
    totalInventory += newProductList[i].price * newProductList[i].quantity;
    console.log(totalInventory);
}


class Movies {
  constructor(movieName, publishDate, price){
    this.movieName = movieName,
    this.publishDate = publishDate,
    this.price = price
  }
  get movies(){
    return this.movieName;
  }
}

const avatarMovie = new Movies('Avatar', 2009, 15.9);
console.log(avatarMovie);

console.log(avatarMovie.movies);

const JohnWick = new Movies('John Wick', 2014, 10);
console.log(JohnWick);

console.log('JohnWick.movies');

