// Excepciones

// Tratamiento de errores
let myObject;

// console.log(myObject.name); // Producir un error

// Try - catch
try {
  // Codigo que produce un error y que intenta ejecutar
  // console.log(myObject); // Es linea no produce ningun error
  console.log(myObject.email); // Esta linea produce un error
  console.log("Se finaliza la ejecución sin errores");
} catch (error) /* Captura del error */ {
  // Bloquee de codigo que muestra el error
  console.log(`se ha producido el siguiente ${error}`);
  console.log(`se ha producido el siguiente ${error.message}`);
}

// Finally

try {
  console.log(myObject.email);
} catch (error) {
  console.log(`Se ha producido el siguiente error: ${error.message}`);
} finally {
  console.log("Esta linea de codigo se ejecuta siempre");
  // console.log(5+5);
}

// Lanzamiento de errores cuando crear aplicaciones

// const a = 5;

// console.log(a === "number");
// console.log(a == Number);
// console.log(a instanceof Number);
// console.log(typeof a);

const sum = (a, b) => {
  if (!(typeof a === "number" && typeof b === "number")) {
    return "No se pueden sumar";
  } else {
    return a + b;
  }
};

// console.log(sum('5', 5));

// c = 5
// console.log(Number.isInteger(c));

const sumOfIntegers = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new TypeError(
      `Esta operación solo suma numeros ${n1} o ${n2} tal vez son strings`
    );
  }
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
    throw new Error(
      `Esta operación solo suma numeros enteros ${n1} o ${n2} tal vez alguno tenga decimal`
    );
  }
  return n1 + n2;
};

try {
  // console.log(sumOfIntegers(20,10)); // 30
  // console.log(sumOfIntegers(20.5,10)); // Esta operación solo suma numeros enteros
  // console.log(sumOfIntegers('10',10)); // Esta operación solo suma numeros
  // console.log(sumOfIntegers(10,"20")); // Esta operación solo suma numeros
  // console.log(sumOfIntegers(20,10));
  // console.log(sumOfIntegers('10','10'));
} catch (error) {
  console.log(`se ha producido el siguiente error ${error}`);
}

// Capturar varios tipos de errores

try {
  // console.log(sumOfIntegers(20,10)); // 30
  // console.log(sumOfIntegers(20.5,10)); // Esta operación solo suma numeros enteros
  console.log(sumOfIntegers("10", 10)); // Esta operación solo suma numeros
} catch (error) {
  if (error instanceof TypeError) {
    console.log(`Se ha producido un error de tipo: ${error.message}`);
  } else if (error instanceof Error) {
    console.log(`Se ha producido un error: ${error.message}`);
  }
}

// Crear excepciones personalizados usando clases
//Ambos numeros deben ser de tipo numero
// Debe comparar que el numero que ingresa es de tipo numero en ambos casos
//Ambos numeros deben ser enteros
// Debe comparar que el numero que ingresa es Entero y no decimal

const sumOfNumbers = (number1, number2) => {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new TypeError(
      `Uups! uno de los siguientes datos: ${number1} o ${number2} no es un numero`
    );
  }
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    throw new Error(
      `Uups! uno de los siguientes datos: ${number1} o ${number2} no es un numero entero`
    );
  }
  if (number1 == 0 || number2 == 0) {
    throw new MyCustomSumError('Se esta intentando sumar cero: ', number1, number2);
  }
  return number1 + number2;
};

class MyCustomSumError extends Error {
  constructor(message, number1, number2) {
    super(message);
    this.number1 = number1;
    this.number2 = number2;
  }
  printNumbers() {
    console.log(`${this.number1}, " + ", ${this.number2}`);
  }
}

try {
  //   console.log(sumOfNumbers(40,40)); // prints 80
  console.log(sumOfNumbers(0, 10));
  //   console.log(sumOfNumbers("40", 40)); // Ups! hubo un problema: TypeError: Uups! uno de los siguientes datos: 40 o 40 no es un numero
  //   console.log(sumOfNumbers(5.5, 20)); //Ups! hubo un problema: Error: Uups! uno de los siguientes datos: 5.5 o 20 no es un numero entero
} catch (error) {
    console.log(`Ups! hubo un problema personalizado: ${error.message}`);
    error.printNumbers();
}
