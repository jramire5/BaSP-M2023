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
function anyLetterCheck(wordInput){
    for (var i = 0; i < wordInput.length; i++) {
      if (wordInput[i].toLowerCase() != wordInput[i].toUpperCase()) {
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
        return email;
    }
}
function blurPassword(){
    var pass = passwordInput.value;
    if(requiredCheck(passwordInput, "password-error") == "required"){
        return requiredCheck(passwordInput, "password-error");
    }
    else if(!(anyLetterCheck(pass) && numbersCheck(pass))){
      passwordInput.style.borderColor = "red";
      document.getElementById("error-password").textContent = "Please use letters AND numbers";
      return "Please use letters and numbers."
    }else{
        return pass;
      }
}
function fetchGet(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            if (typeof jsonData.msg != "undefined" && jsonData.success != true) {
                console.log(jsonData);
                throw new Error(jsonData.msg);
            }else if(jsonData.success != true){
                var errorGroup = ""
                for (let i = 0; i < jsonData.errors.length; i++) {
                    errorGroup = errorGroup + "\n " +  (jsonData.errors[i].msg)                    
                }
                throw new Error(errorGroup);
            }else{
                alert(jsonData.msg);
            }
            return jsonData;
        })
        .catch(function (error) {
            alert(error)
        });
}
function clickSubmit(){
    var url = 'https://api-rest-server.vercel.app/login?' + 'email='+emailInput.value+'&password='+ passwordInput.value;
    alert("email: " + emailInput.value +"\nPassword: " + passwordInput.value)
    fetchGet(url);
    return url;
}
passwordInput.addEventListener("blur", blurPassword);
emailInput.addEventListener("blur", blurEmail);
passwordInput.addEventListener("focus", function(){
    focusAll(passwordInput,"password-error")
})
emailInput.addEventListener("focus", function(){
    focusAll(emailInput,"email-error")
})
submitInput.addEventListener("click", function(e){
    e.preventDefault();
    clickSubmit()
})
