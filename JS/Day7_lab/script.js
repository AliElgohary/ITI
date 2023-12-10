// 2- c- when in focus use blue borders
let fullName = document.getElementById("fullNmae");
fullName.addEventListener("focus", function () {
  this.style.border = "1px solid blue";
});
fullName.addEventListener("blur", function () {
  this.style.border = "";
});

// d- validate fullName
function isNameValid(name) {
  const nameRegex = /^[a-zA-Z]{3,}$/;
  return nameRegex.test(name);
}

const validationSpan = document.createElement("span");
validationSpan.style.color = "red";

const fullNameInput = document.getElementById("fullNmae");
function getFullNmae() {
  const fullName = fullNameInput.value.trim();

  if (!isNameValid(fullName)) {
    validationSpan.textContent = "Invalid name";
    fullNameInput.parentNode.appendChild(validationSpan);
    fullNameInput.focus();
  } else {
    validationSpan.textContent = "";
  }
}

fullNameInput.addEventListener("blur", getFullNmae);

// e- hande password and repeat password
function handlePassword() {
  let password = document.getElementById("password");
  let passwordRepeat = document.getElementById("repeatePass");
  if (passwordRepeat.value !== password.value) {
    validationSpan.textContent = "enter password correctly";
    passwordRepeat.parentNode.appendChild(validationSpan);
    passwordRepeat.focus();
  } else {
    validationSpan.textContent = "";
  }
}
document.getElementById("repeatePass").addEventListener("blur", handlePassword);
