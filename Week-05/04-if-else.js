var randomNum = Math.random()
console.log("\nexercise 4 \na.")
// 4a
// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
//  si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje 
//“Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
if(randomNum >=0.5){
    console.log("Greater than or equal to 0,5");
}else{
    console.log("Lower than 0,5");
}
//4b
// Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre
// los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.

console.log("b.")
var age = Math.random().toPrecision(2)*100;
if(age<2){
    alert("Bebe");
}else if(age<13){
    alert("Niño");
}else if(age<20){
    alert("Adolescente");
}else if(age<31){
    alert("Joven");
}else if(age<61){
    alert("Adulto");
}else if(age<76){
    alert("Adulto Mayor");
}else{
    alert("anciano")
}