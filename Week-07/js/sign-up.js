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
window.addEventListener('load', function(){
  nameInput.value = localStorage.getItem("name");
  surnameInput.value = localStorage.getItem("lastName");
  idInput.value = localStorage.getItem("dni");
  birthdateInput.value = localStorage.getItem("dob");
  phoneInput.value = localStorage.getItem("phone");
  addressInput.value = localStorage.getItem("address");
  cityInput.value = localStorage.getItem("city");
  zipcodeInput.value = localStorage.getItem("zipCode");
  emailInput.value = localStorage.getItem("email");
  passwordInput.value = localStorage.getItem("password");
  repeatPasswordInput.value = localStorage.getItem("repeatPassword");
})


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
function anyLetterCheck(wordInput) {
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

function requiredCheck(input, id) {
  value = input.value;
  if (value.length == 0) {
    input.style.borderColor = "red";
    document.getElementById(id).textContent = "*Required";
    return "required";
  } else {
    return "OK";
  }
}
function justNumbersCheck(numberInput, id) {
  valueNumber = numberInput.value;
  if (!numbersCheck(valueNumber) && valueNumber.length != 0) {
    numberInput.style.borderColor = "red";
    document.getElementById(id).innerText = "Please insert just numbers";
    return true;
  } else {
    return false;
  }
}

function focusAll(name, id) {
  name.style.borderColor = "black";
  document.getElementById(id).innerText = "";
}
function blurID(input, id) {
  valueID = input.value;
  if (justNumbersCheck(input, id)) {
    return justNumbersCheck(input, id);
  } else if (valueID.length < 7) {
    input.style.borderColor = "red";
    return (document.getElementById(id).innerText =
      "Please insert at least 7 numbers");
  } else {
    return valueID;
  }
}
function blurName(name, id) {
  var valueName = name.value;
  if (valueName.length <= 3 || !justLettersCheck(valueName)) {
    name.style.borderColor = "red";
    document.getElementById(id).style.color = "red";
    if (!justLettersCheck(valueName)) {
      document.getElementById(id).innerText = "Please insert just letters";
      return "non valid character";
    } else {
      document.getElementById(id).innerText =
        "Please insert more than 3 letters";
      return "Insert more than 3 letters";
    }
  } else {
    return valueName;
  }
}
function blurPhone(input, id) {
  if (requiredCheck(input, id) == "required") {
    return requiredCheck(input, id);
  }
  value = input.value;
  if (justNumbersCheck(input, id)) {
    return justNumbersCheck(input, id);
  } else if (value.length != 10) {
    input.style.borderColor = "red";
    document.getElementById(id).innerText = "Please insert 10 numbers";
    return "10 numbers needed";
  } else {
    return value;
  }
}
function blurZipCode(numberInput, id) {
  valueNumber = numberInput.value;
  if (justNumbersCheck(numberInput, id)) {
    return justNumbersCheck(numberInput, id);
  } else if (valueNumber.length < 4 || valueNumber.length > 5) {
    numberInput.style.borderColor = "red";
    document.getElementById(id).innerText =
      "Please insert " + 4 + " or " + 5 + " numbers";
    return "Insert 4 or 5 Numbers";
  } else {
    return valueNumber;
  }
}
function blurDate(birthdateInput, id) {
  if (requiredCheck(birthdateInput, id) == "required") {
    return requiredCheck(birthdateInput, id);
  } else {
    return birthdateInput.value;
  }
}
function blurEmail() {
  var email = emailInput.value;
  if (requiredCheck(emailInput, "email-error") == "required") {
    return requiredCheck(emailInput, "email-error");
  }
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailExpression.test(email)) {
    emailInput.style.borderColor = "red";
    document.getElementById("email-error").innerText = "Invalid Email Format";
    return "Please insert a valid email address.";
  } else {
    return email;
  }
}
function blurCity() {
  if (requiredCheck(cityInput, "city-error") == "required") {
    return requiredCheck(cityInput, "city-error");
  } else if (specialCharacterCheck(cityInput.value) == true) {
    cityInput.style.borderColor = "red";
    document.getElementById("city-error").innerText =
      "Please don't use special characters like !*/-";
    return "Invalid character";
  } else {
    return cityInput.value;
  }
}
function blurAddress() {
  if (requiredCheck(addressInput, "adress-error") == "required") {
    return requiredCheck(cityInput, "adress-error");
  }
  var adressValue = addressInput.value;
  var emptyPos = adressValue.indexOf(" ");
  if (specialCharacterCheck(adressValue) == false) {
    if (emptyPos <= 0 || emptyPos + 1 == adressValue.length) {
      cityInput.style.borderColor = "red";
      document.getElementById("adress-error").innerText =
        "Please insert a valid adress format";
    } else {
      return adressValue;
    }
  } else {
    cityInput.style.borderColor = "red";
    document.getElementById("adress-error").innerText = "";
  }
}
function blurPassword(password, id) {
  var pass = password.value;
  if (pass.length < 8) {
    password.style.borderColor = "red";
    document.getElementById(id).textContent =
      "Please insert more than 8 characters";
    return "Please insert more than 8 characters.";
  } else if (!(anyLetterCheck(pass) && numbersCheck(pass))) {
    password.style.borderColor = "red";
    document.getElementById(id).textContent = "Please use letters AND numbers";
    return "Please use letters and numbers.";
  } else {
    return pass;
  }
}
function blurRepeatPassword() {
  if (
    repeatPasswordInput.value != passwordInput.value &&
    blurPassword(repeatPasswordInput, "repeat-password-error") == "OK"
  ) {
    repeatPasswordInput.style.borderColor = "red";
    document.getElementById("repeat-password-error").textContent =
      "Passwords must match";
    return "Passwords Must Match.";
  } else {
    return blurPassword(repeatPasswordInput, "repeat-password-error");
  }
}
 function formateDate(date) {
   var d = new Date(date);
   var year = d.getFullYear();
   var month = ("0" + (d.getMonth() + 1)).slice(-2);
   var day = ("0" + d.getDate()).slice(-2);
   var dateReFormatted = month + "/" + day + "/" + year;
   return dateReFormatted
 }
function saveToLocal(){
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("lastName", surnameInput.value);
  localStorage.setItem("dni", idInput.value);
  localStorage.setItem("dob", birthdateInput.value);
  localStorage.setItem("phone", phoneInput.value);
  localStorage.setItem("address", addressInput.value);
  localStorage.setItem("city", cityInput.value);
  localStorage.setItem("zipCode", zipcodeInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);
  localStorage.setItem("repeatPassword", repeatPasswordInput.value);
}

function fetchValidations(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      if (jsonData.success != true) {
        var errorGroup = "";
        for (let i = 0; i < jsonData.errors.length; i++) {
          errorGroup = errorGroup + "\n " + jsonData.errors[i].msg;
        }
        throw new Error(errorGroup);
      } else {
        saveToLocal();
        alert(jsonData.msg);
      }
      return jsonData;
    })
    .catch(function (error) {
      alert(error);
    });
}
function sumbitRegister() {
  var url =
    "https://api-rest-server.vercel.app/signup?" +
    "name=" +
    nameInput.value +
    "&lastName=" +
    surnameInput.value +
    "&dni=" +
    idInput.value +
    "&dob=" +
    formateDate(birthdateInput.value) +
    "&phone=" +
    phoneInput.value +
    "&address=" +
    addressInput.value +
    "&city=" +
    cityInput.value +
    "&zip=" +
    zipcodeInput.value +
    "&email=" +
    emailInput.value +
    "&password=" +
    passwordInput.value;
  fetchValidations(url);
  //alert();
  // "name: " + blurName(nameInput, "name-error") +
  // "\nsurname: " + blurName(surnameInput, "surname-error") +
  // "\nID: " + blurID(idInput, "id-error") +
  // "\nbirth date: " + blurDate(birthdateInput, "birthdate-error") +
  // "\nphone: " + blurPhone(phoneInput, "phone-error") +
  // "\naddress: " + blurAddress() +
  // "\ncity: " + blurCity() +
  // "\nzip code: " + blurZipCode(zipcodeInput,"zipcode-error") +
  // "\nemail: " + blurEmail() +
  // "\npassword: " + blurPassword(passwordInput, "password-error") +
  // "\nrepeat password: " + blurRepeatPassword()
}

nameInput.addEventListener("blur", function () {
  blurName(nameInput, "name-error");
});
surnameInput.addEventListener("blur", function () {
  blurName(surnameInput, "surname-error");
});
idInput.addEventListener("blur", function () {
  blurID(idInput, "id-error");
});
birthdateInput.addEventListener("blur", function () {
  blurDate(birthdateInput, "birthdate-error");
});
phoneInput.addEventListener("blur", function () {
  blurPhone(phoneInput, "phone-error");
});
zipcodeInput.addEventListener("blur", function () {
  blurZipCode(zipcodeInput, "zipcode-error");
});
emailInput.addEventListener("blur", blurEmail);
cityInput.addEventListener("blur", blurCity);
addressInput.addEventListener("blur", blurAddress);
passwordInput.addEventListener("blur", function () {
  blurPassword(passwordInput, "password-error");
});
repeatPasswordInput.addEventListener("blur", function () {
  blurRepeatPassword();
});
nameInput.addEventListener("focus", function () {
  focusAll(nameInput, "name-error");
});
surnameInput.addEventListener("focus", function () {
  focusAll(surnameInput, "surname-error");
});
idInput.addEventListener("focus", function () {
  focusAll(idInput, "id-error");
});
birthdateInput.addEventListener("focus", function () {
  focusAll(birthdateInput, "birthdate-error");
});
phoneInput.addEventListener("focus", function () {
  focusAll(phoneInput, "phone-error");
});
emailInput.addEventListener("focus", function () {
  focusAll(emailInput, "email-error");
});
zipcodeInput.addEventListener("focus", function () {
  focusAll(zipcodeInput, "zipcode-error");
});
cityInput.addEventListener("focus", function () {
  focusAll(cityInput, "city-error");
});
addressInput.addEventListener("focus", function () {
  focusAll(addressInput, "adress-error");
});
passwordInput.addEventListener("focus", function () {
  focusAll(passwordInput, "password-error");
});
repeatPasswordInput.addEventListener("focus", function () {
  focusAll(repeatPasswordInput, "repeat-password-error");
});
submitInput.addEventListener("click", function (e) {
  e.preventDefault();
  // localStorage.setItem("name", nameInput.value);
  // localStorage.setItem("lastName", surnameInput.value);
  // localStorage.setItem("dni", idInput.value);
  // localStorage.setItem("dob", birthdateInput.value);
  // localStorage.setItem("phone", phoneInput.value);
  // localStorage.setItem("address", addressInput.value);
  // localStorage.setItem("city", cityInput.value);
  // localStorage.setItem("zipCode", zipCodeInput.value);
  // localStorage.setItem("email", emailInput.value);
  // localStorage.setItem("password", passwordInput.value);
  // localStorage.setItem("repeatPassword", repeatPasswordInput.value);
  sumbitRegister();
});
