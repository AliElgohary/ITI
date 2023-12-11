let users = [];
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let titleValue = document.querySelector('input[name="title"]:checked').value;
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;
  let cardsValue = document.getElementById("cards").value;
  let saveValue = document.getElementById("save").checked;

  let userData = {
    title: titleValue,
    name: nameValue,
    email: emailValue,
    cards: cardsValue,
    save: saveValue,
  };
  users.push(userData);
  console.log(userData);
});

console.log(users.length);
