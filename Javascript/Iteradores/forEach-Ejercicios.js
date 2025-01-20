const items = [
  { id: 1, productName: "Laptop", price: 1000, category: "Electrónica" },
  { id: 2, productName: "Camiseta", price: 20, category: "Ropa" },
  { id: 3, productName: "Auriculares", price: 150, category: "Electrónica" },
  { id: 4, productName: "Pantalón", price: 40, category: "Ropa" },
  { id: 5, productName: "Teclado", price: 50, category: "Electrónica" },
  { id: 6, productName: "Chaqueta", price: 70, category: "Ropa" },
  { id: 7, productName: "Móvil", price: 800, category: "Electrónica" },
  { id: 8, productName: "Zapatos", price: 60, category: "Ropa" }
];

/* 1. **Ejercicio 1: Imprimir los nombres de todos los productos.**
   - Usa `forEach` para recorrer el array y mostrar solo el nombre de cada producto en la consola.*/

   items.forEach(products => { console.log(products.productName) });

   const productListName = (arr) => arr.forEach((products) => console.log(products.productName))
   productListName(items);

/* 2. **Ejercicio 2: Calcular la suma de los precios de todos los productos.**
   - Usa `forEach` para recorrer los productos y acumular el valor total de los precios.*/

   let itemTotalPricing = 0;
   items.forEach(productPricing => { itemTotalPricing += productPricing.price });

   console.log(itemTotalPricing);

/* 3. **Ejercicio 3: Filtrar los productos de la categoría "Electrónica" e imprimir sus nombres.**
   - Usa `forEach` para recorrer el array y solo imprimir los nombres de los productos cuya categoría sea "Electrónica".*/

   items.forEach(products => { if(products.category === 'Electrónica'){
    console.log(products.productName);
   } });

/* 4. **Ejercicio 4: Incrementar el precio de todos los productos en un 10%.**
   - Usa `forEach` para recorrer el array y aumentar el precio de cada producto en un 10%.*/
   items.forEach(productPricing => { console.log(productPricing.price += (productPricing.price * 0.1)) });

/* 5. **Ejercicio 5: Imprimir los nombres y precios de los productos con precio mayor a 50.**
   - Usa `forEach` para recorrer el array e imprimir el nombre y precio de los productos cuyo precio sea mayor a 50.*/

/* 6. **Ejercicio 6: Contar cuántos productos están en la categoría "Ropa".**
   - Usa `forEach` para contar cuántos productos pertenecen a la categoría "Ropa".*/

/* 7. **Ejercicio 7: Imprimir el precio promedio de todos los productos.**
   - Usa `forEach` para recorrer el array, sumar los precios de los productos y calcular el promedio. */

/* 8. **Ejercicio 8: Crear una lista de nombres de productos que contienen la letra "a".**
   - Usa `forEach` para recorrer el array y añadir a un nuevo array los nombres de productos que contengan la letra "a".*/

/* 9. **Ejercicio 9: Verificar si hay algún producto con precio menor a 30.**
   - Usa `forEach` para verificar si hay algún producto cuyo precio sea inferior a 30 y mostrar un mensaje en consola.*/

/* 10. **Ejercicio 10: Crear un objeto donde las claves sean las categorías y los valores sean arrays con los productos correspondientes.**
    - Usa `forEach` para recorrer el array y crear un objeto con las categorías como claves y un array de productos de esa categoría como valor.*/

    console.log(items);