console.log("exercise 3\n")
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//3a.
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
// "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
//mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log("3a.\n" + months[4] + months[10]);
//3b. 
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("3b.")
var monthsOrdered = months.slice();
monthsOrdered.sort();
console.log(monthsOrdered);
//3c
//Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log("3c.")
months.unshift("Meses del Año:");
months.push("Que te parece?");
console.log(months)
//3d
//Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("3d.")
months.shift();
months.pop();
console.log(months)
//3e
//Invertir el orden del array (utilizar reverse).
months.reverse();
console.log("3e.");
console.log(months);
months.reverse();
//3f
//Unir todos los elementos del array en un 
//único string donde cada mes este separado por un guión - (utilizar join).
var mesesUnidos = months.join("-");
console.log("3f. \n" + mesesUnidos);
//3g
//Crear una copia del array de meses 
//que contenga desde Mayo hasta Noviembre (utilizar slice).
mayToNovember = months.slice(4,11);
console.log(mayToNovember)