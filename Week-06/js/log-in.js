console.log(document.body);
console.log(document.getElementById('login-email'));
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input")
function blurEmail(){
    var email = emailInput.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailExpression.test(email)) {
      emailInput.style.borderColor = "red";
      document.getElementById("email-error").textContent = "Please enter a valid email address.";
      document.getElementById("input-submit").disabled = true;
    }else{
        emailInput.style.borderColor = "black";
        document.getElementById("email-error").textContent = "";
        document.getElementById("input-submit").disabled = false;
    }
}
function focusEmail(){
    emailInput.style.borderColor = "black";
    document.getElementById("email-error").textContent = "";
    document.getElementById("input-submit").disabled = false;
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
      console.log("no valido");
      passwordInput.style.borderColor = "red";
      document.getElementById("password-error").textContent = "Please enter a valid email address.";
      document.getElementById("input-submit").disabled = true;
    }else{
        console.log("valido")
        passwordInput.style.borderColor = "black";
        document.getElementById("password-error").textContent = "";
        document.getElementById("input-submit").disabled = false;
    }
}
passwordInput.addEventListener("blur", blurPassword);
emailInput.addEventListener("blur", blurEmail);
emailInput.addEventListener("focus", focusEmail);


