console.log("exercise 2")
// 2a
//Crear una variable de tipo string con al menos 10 caracteres 
//y convertir todo el texto en mayúscula (utilizar toUpperCase).
var longUpperCaseString = "hola como estas";
console.log("2a. Original string: " + longUpperCaseString + "\n To upper case:" + longUpperCaseString.toUpperCase())
//2b
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
//string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var longString = "buenas tardes mi gente!";
console.log("2b. \noriginal string:" + longString)
var subFirstFive = longString.substring(0,5);
console.log("first five characters: " + subFirstFive);
//2c.
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
//últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var subLastThree = longString.substring(longString.length-3 , longString.length);
console.log("2c. last three characters: " + subLastThree);
//2d.
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
//Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var firstLetterUpperCase = longString.toLowerCase();
var firstLetterUpperCase = firstLetterUpperCase.substring(0,1).toUpperCase() + firstLetterUpperCase.substring(1,firstLetterUpperCase.length);
console.log("2d. " + firstLetterUpperCase);
//2e
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
//la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var emptyCharacter = longString.indexOf(" ");
console.log("2e. Position of the first empty character: " + emptyCharacter);
//2f
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
// en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var firstLettersUpperCase = longString.substring(0,1).toUpperCase();
var i = 1;
while (longString.length > 0) {
    var firstPos = 1;
    var emptyPos = longString.indexOf(" ");
    if(longString.indexOf(" ") != -1){
        firstLettersUpperCase = firstLettersUpperCase + longString.substring(firstPos,emptyPos) + " " + longString.substring(emptyPos+1,emptyPos+2).toUpperCase();
        longString = longString.substring(emptyPos+1,longString.length);
    }
    else{
        firstLettersUpperCase = firstLettersUpperCase + longString.substring(1,longString.length);
        longString = "";
    }
}
console.log( "2f " + firstLettersUpperCase);