console.log(document.body);
var nameInput = document.getElementById("name-input");
var surnameInput = document.getElementById("surname-input");
var idInput = document.getElementById("id-input");
var birthdateInput = document.getElementById("birthdate-input");
var phoneInput = document.getElementById("phone-input");
var addressInput = document.getElementById("address-input");
var cityInput = document.getElementById("city-input");
var zipcodeInput = document.getElementById("zipcode-input");
var emailInput = document.getElementById("email-input");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var repeatPasswordInput = document.getElementById("repeat-password-input");
var submitInput = document.getElementById("input-register");



function specialCharacterCheck(wordInput) {
  var specialCharacters = "/[!@#$%^&*()_+={};':|,.<>?]+/";
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

function justLettersCheck(wordInput) {
  for (var i = 0; i < wordInput.length; i++) {
    if (wordInput[i].toLowerCase() == wordInput[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

function requiredCheck(input, id){
  value = input.value;
  if (value.length == 0){
      input.style.borderColor = "red";
      document.getElementById(id).textContent = "*Required";
      return "required"
  }
  else{
      return "OK";
  }
}
function justNumbersCheck(numberInput , id) {
  valueNumber = numberInput.value;
  if(!numbersCheck(valueNumber) && valueNumber.length != 0){
    numberInput.style.borderColor = "red";
    document.getElementById(id).innerText = "Please enter just numbers";
    return true
  }else{
    return false
  }
}

function focusAll(name, id) {
  name.style.borderColor = "black";
  document.getElementById(id).innerText = "";
}
function blurID(input, id){
  valueID = input.value;
  if(justNumbersCheck(input, id)){
    return justNumbersCheck(input,id)
  }else if(valueID.length != 7){
      input.style.borderColor = "red";
      document.getElementById(id).innerText = "Please enter at least 7 numbers";
  }
}
function blurName(name, id) {
  var valueName = name.value;
  if (valueName.length <= 3 || !justLettersCheck(valueName)) {
    console.log("non-valid");
    name.style.borderColor = "red";
    document.getElementById(id).style.color = "red";
    if(!justLettersCheck(valueName)){
      document.getElementById(id).innerText = "Please enter just letters";
    }
    else{
      document.getElementById(id).innerText = "Please enter more than 3 letters";
    }
  }
}
function blurPhone(input,id){
  if (requiredCheck(input,id) == "required") {
    return requiredCheck(input,id)
  }
  value = input.value;
  if(justNumbersCheck(input, id)){
      return justNumbersCheck(input, id)
  }else if(value.length != 10){
      input.style.borderColor = "red";
      document.getElementById(id).innerText = "Please enter 10 numbers";
  }
}
function blurZipCode(numberInput , id) {
  valueNumber = numberInput.value;
  if(justNumbersCheck(numberInput,id)){
    return justNumbersCheck(numberInput,id)
  }else if(valueNumber.length < 4 || valueNumber.length > 5){
    numberInput.style.borderColor = "red";
    document.getElementById(id).innerText = "Please enter " + 4 + " or " + 5 + " numbers";
  }
}
function blurDate(birthdateInput, id){
  console.log(birthdateInput.value);
  return requiredCheck(birthdateInput,id);
}
function blurEmail(){
  var email = emailInput.value;
  if(requiredCheck(emailInput, "email-error") == "required"){
      return requiredCheck(emailInput, "email-error");
  }
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailExpression.test(email)) {
    emailInput.style.borderColor = "red";
    document.getElementById("email-error").innerText = "Invalid Email Format";
    return "Please enter a valid email address.";
  }else{
      return "OK";
  }
}
function blurCity(){
  if(requiredCheck(cityInput, "city-error") == "required"){
    return requiredCheck(cityInput, "city-error");
  }
  else if(specialCharacterCheck(cityInput.value) == true){
    cityInput.style.borderColor = "red";
    document.getElementById("city-error").innerText = "Please don't use special characters like !*/-"
    return "Invalid character"
  }
}
function blurAdress(){
  if(requiredCheck(addressInput, "adress-error") == "required"){
    return requiredCheck(cityInput, "adress-error");
  }
  var adressValue = addressInput.value;
  var emptyPos = adressValue.indexOf(" ");
  if(specialCharacterCheck(adressValue) == false){
    if (emptyPos <= 0 || emptyPos+1 == adressValue.length) {
      cityInput.style.borderColor = "red";
      document.getElementById("adress-error").innerText = "Please "
    }
  }else{
    cityInput.style.borderColor = "red";
    document.getElementById("adress-error").innerText = ""
  }
}
function blurPassword(password,id){
  var pass = password.value;
  if(pass.length < 8){
    password.style.borderColor = "red";
    document.getElementById(id).textContent = "Please enter more than 8 characters";
    return "Please enter more than 8 characters."
  }
  else if(!(anyLetterCheck(pass) && numbersCheck(pass))){
    password.style.borderColor = "red";
    document.getElementById(id).textContent = "Please use letters AND numbers";
    return "Please use letters and numbers."
  }else{
      console.log("valid")
      password.style.borderColor = "black";
      document.getElementById(id).textContent = "";
      return "OK";
    }
  }
function blurRepeatPassword(){
  if (repeatPasswordInput.value != passwordInput.value && blurPassword(repeatPasswordInput,"repeat-password-error") == "OK") {
    repeatPasswordInput.style.borderColor = "red";
    document.getElementById("repeat-password-error").textContent = "Passwords must match";
    return "Passwords Must Match."
  }else{
    return	blurPassword(repeatPasswordInput, "repeat-password-error")
  }
}
nameInput.addEventListener("blur", function () {
  blurName(nameInput, "name-error");
});
surnameInput.addEventListener("blur", function () {
  blurName(surnameInput, "surname-error");
});
idInput.addEventListener("blur", function () {
  blurID(idInput,"id-error");
});
birthdateInput.addEventListener("blur", function(){
  blurDate(birthdateInput,"birthdate-error")
})
phoneInput.addEventListener("blur", function(){
  blurPhone(phoneInput,"phone-error");
});
zipcodeInput.addEventListener("blur", function(){
  blurZipCode(zipcodeInput,"zipcode-error");
});
emailInput.addEventListener("blur", blurEmail);
cityInput.addEventListener("blur", blurCity)
addressInput.addEventListener("blur", blurAdress)
passwordInput.addEventListener("blur", function(){ 
  blurPassword(passwordInput,"password-error");
});
repeatPasswordInput.addEventListener("blur", function(){
  blurRepeatPassword()
});
nameInput.addEventListener("focus", function () {
  focusAll(nameInput, "name-error");
});
surnameInput.addEventListener("focus", function () {
  focusAll(surnameInput, "surname-error");
});
idInput.addEventListener("focus", function () {
  focusAll(idInput,"id-error");
});
birthdateInput.addEventListener("focus", function(){
  focusAll(birthdateInput,"birthdate-error")
})
phoneInput.addEventListener("focus", function () {
  focusAll(phoneInput,"phone-error");
});
emailInput.addEventListener("focus",function(){
  focusAll(emailInput,"email-error")
})
zipcodeInput.addEventListener("focus", function(){
  focusAll(zipcodeInput,"zipcode-error")
});
cityInput.addEventListener("focus", function(){
  focusAll(cityInput, "city-error")
})
addressInput.addEventListener("focus", function(){
  focusAll(addressInput, "adress-error")
})
