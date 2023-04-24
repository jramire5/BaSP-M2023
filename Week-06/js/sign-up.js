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
var submitInput = document.getElementById("input-submit");

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
function justLettersCheck(wordInput) {
  for (var i = 0; i < wordInput.length; i++) {
    if (wordInput[i].toLowerCase() == wordInput[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
function blurName(name, maxChar, id) {
  var valueName = name.value;
  if (valueName.length >= maxChar && justLettersCheck(valueName) == true) {
    console.log("valid");
    name.style.borderColor = "black";
  } else {
    console.log("non-valid");
    name.style.borderColor = "red";
    document.getElementById(id).style.color = "red";
    document.getElementById(id).innerText = "Error";
  }
}
function focusName(name, id) {
  valueName = name.value;
  name.style.borderColor = "black";
  document.getElementById(id).innerText = "";
}

nameInput.addEventListener("blur", function () {
  blurName(nameInput, 3, "name-error");
});
nameInput.addEventListener("focus", function () {
  focusName(nameInput, "name-error");
});
surnameInput.addEventListener("focus", function () {
  focusName(surnameInput, "surname-error");
});
surnameInput.addEventListener("blur", function () {
  blurName(surnameInput, 5, "surname-error");
});
