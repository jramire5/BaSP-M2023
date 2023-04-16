console.log("exercise 3")
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//3a.
console.log("3a." + months[5] + months[11]);
//3b.
var monthsOrdered = months.slice();
monthsOrdered.sort();
console.log(monthsOrdered);
//3c
months.unshift("Meses del Año:");
months.push("Que te parece?");
console.log("3c.")
console.log(months)
months.shift();
months.pop();
console.log("3d.")
console.log(months)
//3e
months.reverse();
console.log("3e.");
console.log(months);
months.reverse();
//3f
var mesesUnidos = months.join("-");
console.log("3f. \n" + mesesUnidos);
//3g
mayToNovember = months.slice(4,11);
console.log(mayToNovember)