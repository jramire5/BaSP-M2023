// 4a
var randomNum = Math.random()
console.log("Excersice 4 \na.")
if(randomNum >=0.5){
    console.log("Greater than or equal to 0,5");
}else{
    console.log("Lower than 0,5");
}
//4b
console.log("b.")
var age = Math.random().toPrecision(2)*100;
if(age<2){
    console.log("Bebe");
}else if(age<13){
    console.log("Niño");
}else if(age<20){
    console.log("Adolescente");
}else if(age<31){
    console.log("Joven");
}else if(age<61){
    console.log("Adulto");
}else if(age<76){
    console.log("Adulto Mayor");
}else{
    console.log("anciano")
}