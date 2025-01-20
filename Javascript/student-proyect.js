/* 1. **Ejercicio 1: Crear una lista de estudiantes.**
   - Crea un array llamado `estudiantes` que contenga objetos con las siguientes propiedades:
     - `nombre` (string)
     - `edad` (número)
     - `calificacion` (número)
   - Agrega al menos 5 estudiantes al array.
*/

const students = [
    {name: 'Eduardo', age: 29, notes: 10},
    {name: 'Emanuel', age: 40, notes: 9.9},
    {name: 'Jocelyn', age: 29, notes: 2},
    {name: 'Carlos', age: 44, notes: 8},
    {name: 'Pedro', age: 45, notes: 3.5}
]

/* 2. **Ejercicio 2: Calcular la edad promedio de los estudiantes.**
   - Usa un bucle `for` para recorrer el array `estudiantes` y sumar las edades.
   - Calcula el promedio dividiendo la suma entre la cantidad de estudiantes.
   - Muestra el promedio en la consola.
*/

let totalAge = 0;

for(let i = 0; i < students.length; i++){
    totalAge += students[i].age;
}

console.log(totalAge);

let averageStudentAge = totalAge / students.length;
console.log(averageStudentAge);


/* 3. **Ejercicio 3: Filtrar estudiantes aprobados.**
   - Usa un bucle `while` para recorrer el array `estudiantes` y filtra aquellos
     con una `calificacion` mayor o igual a 6.
   - Guarda los estudiantes aprobados en un nuevo array llamado `aprobados`.
*/

let i = 0;
let studentApproved = [];
while (i < students.length){
    if (students[i].notes >= 6){
        studentApproved.push(students[i]);
    }
    i++;
}

console.log(students);
console.log(studentApproved);


/* 4. **Ejercicio 4: Crear una clase `Persona`.**
   - Define una clase llamada `Persona` con las siguientes propiedades:
     - `nombre` (string)
     - `edad` (número)
   - Agrega un método `saludar` que imprima en consola: "Hola, soy [nombre] y tengo [edad] años."
*/

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
    }
}


/* 5. **Ejercicio 5: Crear una clase `Estudiante` que herede de `Persona`.**
   - Extiende la clase `Persona` para crear una clase `Estudiante` con una propiedad adicional:
     - `calificacion` (número)
   - Agrega un método `mostrarCalificacion` que imprima en consola:
     "Mi calificación es [calificacion]."
*/

class Student extends Person {
    constructor(name, age, notes){
        super(name);
        this.age = age;
        this.notes = notes;
    }
    showNotes(){
        return `My notes are ${this.notes}`;
    }
}
/* 6. **Ejercicio 6: Crear instancias de `Estudiante` usando datos existentes.**
   - Usa los datos del array `estudiantes` para crear una instancia de la clase `Estudiante`
     por cada estudiante y guárdalas en un nuevo array llamado `instanciasEstudiantes`.
*/

const student1 = new Student('Angel', 50, 9);
const student2 = new Student('Abad', 39, 7);

const studentIntance = [student1, student2];

console.log(studentIntance);


/* 7. **Ejercicio 7: Destructurar propiedades de un estudiante.**
   - Selecciona un estudiante del array `estudiantes`.
   - Usa destructuración para obtener las propiedades `nombre` y `calificacion`.
   - Imprime en consola: "[nombre] tiene una calificación de [calificacion]."
*/

let [ s1 ] = students;

console.log(s1)

console.log(s1.name, s1.notes);

// Opcion 2

const studentSelected = students[2];

const { name, age } = studentSelected;

console.log(name, age);

/* 8. **Ejercicio 8: Buscar un estudiante por su nombre.**
   - Escribe una función llamada `buscarEstudiante` que reciba un nombre como parámetro.
   - La función debe usar un bucle `for` para buscar al estudiante en el array `estudiantes`.
   - Si lo encuentra, imprime su información. Si no, muestra un mensaje que indique que no existe.
*/

const findStudent = (name) => {
    if(typeof name != 'string'){
        // Error
    }
    for(let i = 0; i < students.length; i++){
        if(students[i].name === name){
            return `Student name: ${students[i].name}, Student Age: ${students[i].age}, Student notes: ${students[i].notes}` 
        } else {
            return (`This student doesn't exist`);
        }
    }
}

console.log(findStudent("Eduardo"));
console.log(findStudent("Chris"));


/* 9. **Ejercicio 9: Manejar errores al buscar estudiantes.**
   - Modifica la función `buscarEstudiante` para que maneje errores.
   - Si el parámetro `nombre` no es un string o está vacío, lanza un error con un mensaje adecuado.
   - Usa un bloque `try-catch` para manejar el error al llamar la función.
*/

try {
    console.log(findStudent("Eduardo"));
    console.log(findStudent("Chris"));
} catch (error){

};


/* 10. **Ejercicio 10: Calcular la calificación más alta y más baja.**
   - Usa un bucle `for` para recorrer el array `estudiantes`.
   - Encuentra la calificación más alta y la más baja.
   - Muestra ambas calificaciones en la consola.
*/

/* 11. **Ejercicio 11: Agregar propiedades privadas a la clase `Persona`.**
   - Modifica la clase `Persona` para agregar una propiedad privada `#dni` (número de identificación).
   - Agrega un método `setDni` para establecer el valor de `#dni`.
   - Agrega un método `getDni` para obtener el valor de `#dni`.
   - Crea una instancia de `Persona`, establece un valor para `#dni` usando el método `setDni` 
     y muestra el valor en consola usando `getDni`.
*/

/* 12. **Ejercicio 12: Calcular promedio con propiedades privadas.**
   - Modifica la clase `Estudiante` para agregar una propiedad privada `#notas` que sea un array.
   - Agrega un método `setNotas` para actualizar el array de notas.
   - Agrega un método `getPromedio` que calcule y devuelva el promedio de las notas.
   - Crea una instancia de `Estudiante`, usa `setNotas` para asignar un array de notas,
     y muestra el promedio usando `getPromedio`.
*/
