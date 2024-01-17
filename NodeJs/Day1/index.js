console.log("hello world");
const fs = require("fs");

users = [
  { id: 1, username: "Ali", email: "Ali@example.com", age: 30 },
  { id: 2, username: "Salem", email: "Salem@example.com", age: 25 },
  { id: 3, username: "Ahmed", email: "Ahmed@example.com", age: 28 },
];
fs.writeFileSync("./users.json", JSON.stringify(users));
let usersInFile = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
console.log(usersInFile);
fs.writeFileSync("./users.json", "");
