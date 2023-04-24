console.log(document.body);
console.log(document.getElementById('login-email'));
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var submitInput = document.getElementById("input-submit");

function blurEmail(){
    var email = emailInput.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(email)) {
      emailInput.style.borderColor = "red";
      document.getElementById("email-error").textContent = "Please enter a valid email address.";
      return "Please enter a valid email address.";
    }else{
        emailInput.style.borderColor = "black";
        document.getElementById("email-error").textContent = "";
        return -1;
    }
}
function focusEmail(){
    emailInput.style.borderColor = "black";
    document.getElementById("email-error").textContent = "";
}
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
function blurPassword(){
    var pass = passwordInput.value;
    if (specialCharacterCheck(pass) == true) {
      passwordInput.style.borderColor = "red";
      document.getElementById("password-error").textContent = "Invalid Password";
      return "Invalid Password"
    }else{
        console.log("valid")
        passwordInput.style.borderColor = "black";
        document.getElementById("password-error").textContent = "";
        return -1;
    }
}
function focusPassword(){
    passwordInput.style.borderColor = "black";
    document.getElementById("password-error").textContent = "";
}
function clickSubmit(){
    if(blurPassword() != -1){
        alert(blurPassword());
    }else if(blurEmail() != -1){
        alert(blurEmail());
    }else{
        alert("Succesful log in")
    }
}
passwordInput.addEventListener("blur", blurPassword);
passwordInput.addEventListener("focus", focusPassword);
emailInput.addEventListener("blur", blurEmail);
emailInput.addEventListener("focus", focusEmail);
submitInput.addEventListener("click", clickSubmit);