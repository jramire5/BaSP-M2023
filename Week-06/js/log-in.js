console.log(document.body);
console.log(document.getElementById('login-email'));
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var submitInput = document.getElementById("input-submit");

function specialCharacterCheck(wordInput) {
    var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharacters.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}
function numbersCheck(wordInput) {
    var numbers = "0123456789";
    for (var i = 0; i < wordInput.length; i++) {
        if (numbers.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}
function focusAll(name, id) {
    name.style.borderColor = "black";
    document.getElementById(id).innerText = "";
  }
  function requiredCheck(input, id){
    value = input.value;
    if (value.length == 0){
        input.style.borderColor = "red";
        document.getElementById(id).textContent = "*Required";
        return  "required"
    }
    else{
        return "OK";
    }
}
function blurEmail(){
    var email = emailInput.value;
    if(requiredCheck(emailInput, "email-error") == "required"){
        return requiredCheck(emailInput, "email-error");
    }
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(email)) {
      emailInput.style.borderColor = "red";
      document.getElementById("email-error").textContent = "Invalid Email Format";
      return "Please enter a valid email address.";
    }else{
        return "OK";
    }
}
function blurPassword(){
    var pass = passwordInput.value;
    if (requiredCheck(passwordInput,"password-error") == "required") {
        return requiredCheck(passwordInput,"password-error");
    }
    else if (specialCharacterCheck(pass) == true) {
      passwordInput.style.borderColor = "red";
      document.getElementById("password-error").textContent = "Invalid Password";
      return "Please enter a valid password."
    }else{
        console.log("valid")
        passwordInput.style.borderColor = "black";
        document.getElementById("password-error").textContent = "";
        return "OK";
    }
}
function clickSubmit(){
    if(blurPassword() != "" || blurEmail != ""){
        alert("email: " + blurEmail() + "\npassword: "+ blurPassword());
    }else{
        alert("email: " + emailInput.value +"\nPassword: " + passwordInput.value())
    }
}
passwordInput.addEventListener("blur", blurPassword);
passwordInput.addEventListener("focus", focusPassword);
emailInput.addEventListener("blur", blurEmail);
emailInput.addEventListener("focus", focusEmail);
submitInput.addEventListener("click", clickSubmit);