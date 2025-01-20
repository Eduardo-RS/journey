// Console

// log
console.log("Hello World");

// error
console.error("Esto es un mensaje de error");
console.error("Esto es un nuevo error", new Error("Error nuevo"));

// warn
console.warn("Este es un mensaje de advertencia");

// info
console.info("Hello world");

//table

let data = [
  ["Eduardo", "RS"],
  ["Age", 28],
];

console.table(data);

// ┌─────────┬───────────┬──────┐
// │ (index) │ 0         │ 1    │
// ├─────────┼───────────┼──────┤
// │ 0       │ 'Eduardo' │ 'RS' │
// │ 1       │ 'Age'     │ 28   │

data = [
  { name: "Eduardo RS", age: 29 },
  { name: "Karla RS", age: 26 },
  { name: "Chloe", age: 40 },
];

console.table(data);

// group

console.group("User: ");
console.log("Name: Eduardo");
console.log("Age: 29");
console.log("Alias: Lalo RS");
console.groupEnd();
console.log("Hobbie: Video Games");

//time

console.time("Execution time");

for (i = 0; i < 10000; i++) {}

console.timeEnd("Execution time");

console.time("Execution time 2");

for (i = 0; i < 10000; i++) {}

console.timeEnd("Execution time 2");

// Time en paralelo

console.time('Paralel execution time 1')

for (i = 0; i < 10000; i++) {}

console.time('Paralel execution time 2')

for (i = 0; i < 10000; i++) {}

console.timeEnd('Paralel execution time 1')

console.timeEnd('Paralel execution time 2')


// assert
const user = 16;

console.assert(user >= 18, "El usuario debe ser mayor de edad","El usuario es mayor de edad");

// count
console.count('Click');
console.count('Click');
console.count('Click');
console.countReset('Click');

// trace

const funcA = () => { funcB() };

const funcB = () => {
    console.trace('Seguimiento de la ejecucion');
}

funcA();

// clear
console.clear();
