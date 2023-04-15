var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//3a.
console.log("3a." + months[5] + months[11]);
//3b.
var monthsOrdered = months.slice();
monthsOrdered.sort();
for (var index = 0; index <= months.length; index++) {
    console.log(monthsOrdered[index]);
}
//3c
months.unshift("Meses del Año:");
months.push("Que te parece?");
console.log("3c.")
for (var index = 0; index <= months.length; index++) {
    console.log(months[index])
}
months.shift();
months.pop();
console.log("3d.")
for (var index = 0; index <= months.length; index++) {
    console.log(months[index])
}
//3e
months.reverse();
console.log("3e.");
for (var index = 0; index <= months.length; index++) {
    console.log(months[index])
}
months.reverse()
//3f
var mesesUnidos = months.join();
console.log("3f. \n" + mesesUnidos);
//3g
mayToNovember = months.slice(4,11);
for (var index = 0; index <= months.length; index++) {
    console.log(mayToNovember[index])
}