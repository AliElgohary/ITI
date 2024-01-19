const http = require("http");

let Users = [
  { username: "Ali", email: "Ali@example.com", id: 1 },
  { username: "Salem", email: "Salem@example.com", id: 2 },
  { username: "Ahmed", email: "Ahmed@example.com", id: 3 },
];

const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.end(JSON.stringify(Users));
  } else if (req.url == "/" && req.method == "POST") {
    body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const jsonData = JSON.parse(body);
        jsonData.id = Users.length + 1;
        Users.push(jsonData);
        res.end();
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.statusCode = 400;
        res.end("Bad Request: Invalid JSON");
      }
    });
  } else if (req.url == "/sorted" && req.method == "GET") {
    let sortedUsers = Users.sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    res.end(JSON.stringify(sortedUsers));
  } else if (req.url == "/search" && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const jsonData = JSON.parse(body);
        const result = Users.find(({ id }) => id == jsonData.id);
        res.end(JSON.stringify(result));
      } catch (error) {
        res.end(error);
      }
    });
  } else {
    res.end("heloo from node");
  }
});

server.listen(8080);
