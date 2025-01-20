/* 1. **Ejercicio 1: Crear una clase Producto.**
   - Crea una clase `Producto` con las propiedades `nombre`, `precio`, y `cantidad`.
   - Añade un método `detalles()` que retorne una cadena con los detalles del producto en el formato:
     "Producto: <nombre>, Precio: <precio>, Cantidad: <cantidad>".
*/

class Products {
  constructor(name, price, quantity) {
    (this.name = name), (this.price = price), (this.quantity = quantity);
  }
  details() {
    return `Product name: ${this.name}, price: ${this.price}, quantity: ${this.quantity}`;
  }
}

/* 2. **Ejercicio 2: Crear una tienda con varios productos.**
   - Crea una clase `Tienda` que tenga una propiedad `productos` (un array vacío).
   - Añade un método `agregarProducto(producto)` para agregar instancias de `Producto` al array.
   - Usa un bucle para agregar al menos 3 productos diferentes.
*/

/* 3. **Ejercicio 3: Mostrar los productos disponibles.**
   - Añade un método `mostrarProductos()` a la clase `Tienda` que recorra el array de productos 
     e imprima los detalles de cada producto usando su método `detalles()`.
   - Usa un bucle `for` para este propósito.
*/

class Store {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    return this.products.push(product);
  }
  showProducts() {
   // console.log(this.products);
    for(let i = 0; i < this.products.length; i++) {
      console.log(this.products[i].details());
    }
  }
}

const Store1 = new Store();
// console.log(Store1);

let productList = [
  new Products("Apple", 10, 50),
  new Products("Oranje", 3.4, 34),
  new Products("Grape", 12, 20),
  new Products("Strawberry", 2.4, 50),
  new Products("Banana", 3.5, 43),
];

for (let i = 0; i < productList.length; i++) {
  // console.log(productList[i]);
  Store1.addProduct(productList[i]);
}

// console.log(Store1.products);

Store1.showProducts();

/* 4. **Ejercicio 4: Buscar un producto por su nombre.**
   - Añade un método `buscarProducto(nombre)` a la clase `Tienda` que busque un producto
     por su nombre.
   - Usa un bucle para recorrer los productos y un condicional para verificar si el nombre coincide.
   - Si encuentra el producto, devuelve sus detalles, si no, retorna un mensaje que indique que no existe.
*/

/* 5. **Ejercicio 5: Actualizar la cantidad de un producto.**
   - Añade un método `actualizarCantidad(nombre, nuevaCantidad)` a la clase `Tienda`.
   - Usa un bucle para buscar el producto por su nombre y un condicional para verificar si existe.
   - Si encuentra el producto, actualiza su cantidad con el valor de `nuevaCantidad`.
   - Si no encuentra el producto, retorna un mensaje indicando que no existe.
*/

/* 6. **Ejercicio 6: Calcular el total del inventario.**
   - Añade un método `calcularTotalInventario()` a la clase `Tienda`.
   - Usa un bucle para calcular el valor total del inventario multiplicando el precio y la cantidad
     de cada producto, y luego sumando todos los totales.
   - Devuelve el total.
*/

/* 7. **Ejercicio 7: Eliminar un producto por su nombre.**
   - Añade un método `eliminarProducto(nombre)` a la clase `Tienda`.
   - Usa un bucle para buscar el producto por su nombre y un condicional para verificar si existe.
   - Si lo encuentra, elimina el producto del array `productos`.
   - Si no encuentra el producto, retorna un mensaje indicando que no existe.
*/

/* 8. **Ejercicio 8: Propiedades calculadas con get y set.**
   - Añade un método `get precioTotal()` a la clase `Producto` que calcule el total del precio
     multiplicando el precio por la cantidad.
   - Añade un método `set descuento(porcentaje)` que aplique un descuento al precio del producto.
   - Usa ambos métodos para calcular y actualizar valores en un producto.
*/

/* 9. **Ejercicio 9: Filtrar productos con bajo stock.**
   - Añade un método `filtrarBajoStock(limite)` a la clase `Tienda`.
   - Usa un bucle para encontrar productos con cantidad menor al `limite`.
   - Devuelve un array con los productos que cumplen esta condición.
*/

/* 10. **Ejercicio 10: Generar un reporte de la tienda.**
   - Añade un método `generarReporte()` a la clase `Tienda`.
   - Usa un bucle para recorrer los productos y generar un reporte con:
     - El número total de productos.
     - El valor total del inventario.
     - Una lista de productos con su precio total (usando el método `precioTotal` de la clase `Producto`).
*/
