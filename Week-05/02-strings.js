// 2a
var longUpperCaseString = "hola como estas";
console.log("2a. Original string: " + longUpperCaseString + "\n To upper case:" + longUpperCaseString.toUpperCase())
//2b
var longString = "buenas tardes mi gente!";
console.log("2b. \noriginal string:" + longString)
var subFirstFive = longString.substring(0,5);
console.log("first five characters: " + subFirstFive);
//2c.
var subLastThree = longString.substring(longString.length-3 , longString.length);
console.log("2c. last three characters: " + subLastThree);
//2d.
var firstLetterUpperCase = longString.toLowerCase();
var firstLetterUpperCase = firstLetterUpperCase.substring(0,1).toUpperCase() + firstLetterUpperCase.substring(1,firstLetterUpperCase.length);
console.log("2d. " + firstLetterUpperCase);
//2e
var emptyCharacter = longString.indexOf(" ");
console.log("2e. Position of the first empty character: " + emptyCharacter);
//2f
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