//5a.
console.log("\nExcersice 5")
var bichos = ["mosquito", "mariposa", "hormiga", "cucaracha", "pulga"];
//b.
for (var index = 0; index < bichos.length; index++) {
    bichos[index] = bichos[index].charAt(0).toUpperCase() + bichos[index].substring(1,bichos[index].length);
    console.log(bichos[index]);
}
//c
var sentence = ""
for (var index = 0; index < bichos.length; index++) {
    sentence = sentence + bichos[index] + " ";
}
alert(sentence);
var numbersArray = new Array(10);
for (var index = 0; index < 10; index++) {
    numbersArray[index] = index
}
console.log(numbersArray)