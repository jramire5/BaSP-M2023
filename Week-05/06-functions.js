console.log("Excercise 6")
//6a.
function suma(num1,num2){
    return num1+num2;
}
console.log(suma(3,5));
//6b. aca me tome la atribucion de hacerlo con llamada, esta bien?
function validateNaN(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("NaN");
        return("NaN")
    }else{
        return suma(num1,num2)
    }
}
console.log(validateNaN(5,"P"));
//6c.
function validateInteger(num1){
    if(Math.round(num1) == num1){
        return true;
    }else{
        return false;
    }
}
function validateAll(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        alert("NaN");
        return("NaN");
    }else if(!validateInteger(num1)){
        alert("Must use integers");
        return(Math.round(num1))
    }else if(!validateInteger(num2)){
        alert("Must use integers");
        return(num1.round())
    }else{
        return suma(num1,num2)
    }
}
console.log(validateAll(7.4,8))
function ReturnInteger(num1){
    if(!validateInteger(num1)){
        alert("Must use integers");
        return(Math.round(num1));
    }else{
        return num1
    }
}
function validateAll2(){
    

}