console.log("Excercise 6");
//6a.
//Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
//Ejecutar la función y guardar el resultado en una variable, mostrando el valor
//de dicha variable en la consola del navegador.
console.log("6a");
function suma(num1,num2){
    return num1+num2
}
console.log(suma(3,5));
//6b.
//Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no 
//es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros
// tiene error y retornar el valor NaN como resultado.
console.log("6b");
function validateNaN(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("NaN");
        return("NaN")
    }else{
        return (num1 + num2)
    }
}
console.log(validateNaN(5,"P"));
//6c.
//Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log("6c");
function validateInteger(num1){
    if(Math.round(num1) == num1){
        return true;
    }else{
        return false;
    }
}
//6d
//Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
//y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar 
//el número convertido a entero (redondeado).
console.log("6d");
function validateAll(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("NaN");
        return("NaN");
    }else if(!validateInteger(num1) || !validateInteger(num2)){
        alert("Must use integers");
        return suma(Math.round(num1),Math.round(num2))
    }else{
        return suma(num1,num2)
    }
}
console.log(validateAll(7.4,8))
//6e
//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de 
//una nueva función probando que todo siga funcionando
// igual que en el apartado anterior.
console.log("6e");
function ReturnInteger(num1, num2){
    if(!validateInteger(num1) || !validateInteger(num2)){
        alert("Must use integers, rounded");
        return(Math.round(num1 + num2));
    }else{
        return (num1 + num2)
    }
}
function addValidated(num1,num2){
    if(validateNaN(num1,num2) != "NaN"){
        ReturnInteger(num1,num2);
    }else{
        return "NaN"
    }
}
addValidated(7.5,3);
addValidated("x",5)