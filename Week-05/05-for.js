//5a.
//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
//JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log("\nExcercise 5\n");
var bichos = ["mosquito", "mariposa", "hormiga", "cucaracha", "pulga"];
console.log("5a.");
console.log(bichos);
//b.
//Al array anterior convertir la primera letra de cada palabra en mayúscula 
//y mostrar una alerta por cada palabra modificada.
console.log("5b.")
for (var index = 0; index < bichos.length; index++) {
    bichos[index] = bichos[index].charAt(0).toUpperCase() + bichos[index].substring(1,bichos[index].length);
    alert(bichos[index]);
}
console.log("5c.");
//c
//Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir
//guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence = ""
for (var index = 0; index < bichos.length; index++) {
    sentence = sentence + bichos[index] + " ";
}
alert(sentence);
console.log("5d.");
//c.
//Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, 
//desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var numbersArray = new Array(10);
for (var index = 0; index < 10; index++) {
    numbersArray[index] = index
}
console.log(numbersArray)