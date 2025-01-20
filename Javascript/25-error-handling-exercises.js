// 1. Captura una excepción utilizando try-catch

let myNewObject;

try {
  console.log(myNewObject.mail);
} catch (error) {
  console.log("Error");
  console.log(`Ups: ${error}`);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(myNewObject.name);
} catch (error) {
  console.log(`Ups: ${error}`);
} finally {
  console.log("Esta linea se ejecuta independientemente del error");
}

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

class CustomError extends Error {
  constructor(message, n1, n2) {
    super(message);
    this.n1 = n1;
    this.n2 = n2;
  }

//   printNumbers() {
//     console.log(`${this.n1}, * , ${this.n2}`);
//   }
  printNumbers() {
    console.log(`${this.n1}, " + ", ${this.n2}`);
  }
}

const newError = new CustomError('Hola', 2, 2);
// newError.printNumbers();

/* Debe arrojar error cuando
    - El usuario ingrese un dato que no sea numero, por ejemplo un string;
    - EL usuario ingrese un dato menor a 0
    - El usuario ingrese uno o mas valores en 0

    - Ambos numeros deben ser enteros
    - Ambos numeros deben ser numericos
    - Ambos numeros debn ser mayor a 0
*/

const multiply = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new TypeError(`Ups! hay un valor que no es numerico`);
  }
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
    throw new Error(
      `Ups! parece que hay un numero con valor decimal, asegurate que ambos numeros sean enteros`
    );
  }
  if (n1 < 0 ||  n2 < 0) {
    throw new Error(
      `Ups! parece que hay un numero NEGATIVO, asegurate que ambos numeros sean POSITIVOS`
    );
  }
  if (n1 == 0 || n2 == 0) {
    throw new CustomError("Ups! uno o varios numeros son cero, asegurate que sean mayores a cero", n1, n2);
  }
  return n1 * n2;
};

// console.log(multiply(-10,10));
// console.log(multiply(5, 5));

// Manejo de errores

try {
  // console.log(multiply(10, 5)); // Prints 50
//   console.log(multiply("5", 5));
  // console.log(multiply(5.5, 5));
  // console.log(multiply(5, -5));
  console.log(multiply(0, 0));
} catch (error) {
  console.log(`Ups! en contramos esto: ${error.message}`);
//   if(error instanceof CustomError){
    error.printNumbers();
//   }
}

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
