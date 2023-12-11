let users = [];
let editingIndex = -1;

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

  if (editingIndex !== -1) {
    users[editingIndex] = userData;
    editingIndex = -1;
  } else {
    users.push(userData);
  }

  renderUsersTable();
  resetForm();
});

function resetForm() {
  document.getElementById("userForm").reset();
  document.querySelectorAll('input[name="title"]').forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("save").checked = false;
}

function renderUsersTable() {
  container.innerHTML = "";
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  let headers = ["Title", "Name", "Email", "Card Type", "Save", "Actions"];
  headers.forEach((header) => {
    let th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  users.forEach((user, index) => {
    let row = document.createElement("tr");
    let data = [user.title, user.name, user.email, user.cards, user.save];

    data.forEach((value) => {
      let td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editUser(index));
    let editTd = document.createElement("td");
    editTd.appendChild(editButton);
    row.appendChild(editTd);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteUser(index));
    let deleteTd = document.createElement("td");
    deleteTd.appendChild(deleteButton);
    row.appendChild(deleteTd);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

function editUser(index) {
  editingIndex = index;
  let user = users[index];

  document.querySelector(
    `input[name="title"][value="${user.title}"]`
  ).checked = true;
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("cards").value = user.cards;
  document.getElementById("save").checked = user.save;
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUsersTable();
  resetForm();
}

let container = document.getElementById("tableContainer");
