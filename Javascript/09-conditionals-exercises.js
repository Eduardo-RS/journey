/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const user = 'lalo.rs';
const password = '1234';

if(user === 'lalo.rs' && password === '1234'){
    console.log('Welcome')
} else {
    console.log('user or password incorrect');
}

user === 'lalo.rs' && password === '1234' ? console.log('Welcome 2') : console.log('user or password incorrect 2');

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const n1 = 0;
// const n2 = -2;
// const n3 = 0;

if(n1 > 0){
    console.log('El numero es positivo');
} else if (n1 < 0){
    console.log('El numero es negativo');
} else {
    console.log('El numero es 0');
}

//Ternary
n1 > 0 ? console.log('El numero es positivo 1') : n1 < 0 ? console.log('El numero es negativo 2') : console.log('El numero es 0');

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const age = 17;

if(age >= 18){
    console.log('Puedes votar');
} else {
    remainingAge = 18 - age;
    console.log(`No puedes votar aun te falta ${remainingAge} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const edad = 24;
let tipo = 'Senor';

edad >= 18 ? console.log(tipo = 'Adulto') : console.log(tipo = 'Menor');

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = 'Septiembre';

// primavera, verano, otoño e invierno
if(mes === 'Diciembre' || mes === 'Enero' || mes === 'Febrero'){
    console.log('Invierno');
} else if ( mes === 'Marzo' ||  mes === 'Abril' || mes === 'Mayo'){
    console.log('Primavera');
} else if (mes === 'Junio' || mes === 'Julio' || mes === 'Agosto'){
    console.log('Verano');
} else {
    console.log('Otoño');
}

mes === 'Diciembre' || mes === 'Enero' || mes === 'Febrero' ? console.log('Invierno 1.1') : 
    mes === 'Marzo' ||  mes === 'Abril' || mes === 'Mayo' ? console.log('Primavera 1.1') :
        mes === 'Junio' || mes === 'Julio' || mes === 'Agosto' ? console.log('Verano 1.1') :
            console.log('Otoño 1.1');

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if(mes === 'Enero' || mes === 'Marzo' || mes === 'Mayo' ||  mes === 'Julio' || mes === 'Agosto' || mes === 'Octubre' || mes == 'Diciembre'){
    console.log('Este mes tiene 31 días');
} else if (mes === 'Abril' || mes === 'Junio' || mes === 'Septiembre' || mes === 'Noviembre'){
    console.log('Este mes tiene 30 dias');
} else {
    console.log('Tiene 28 días');
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const languaje = 'Portugues';

switch (languaje) {
    case 'Italiano':
        console.log('Ciao');
        break;
    case 'Español':
        console.log('Hola');
        break;
    case 'Portugues':
        console.log('Ola');
        break;
    default:
        console.log('Hello');
        break;
}