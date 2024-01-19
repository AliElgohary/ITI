const http = require("http");
const fs = require("fs");

let Users = [];

// Read user data from JSON file
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading users.json:", err);
  } else {
    try {
      Users = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON from users.json:", error);
    }
  }
});
// ... (unchanged code)

const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.end(JSON.stringify(Users));
  } else if (req.url == "/" && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const jsonData = JSON.parse(body);
        jsonData.id = Users.length + 1;
        Users.push(jsonData);

        // Write updated user data to the file
        fs.writeFile("users.json", JSON.stringify(Users), (err) => {
          if (err) {
            console.error("Error writing to users.json:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
          } else {
            // Send a success response to the client
            res.end(JSON.stringify(Users));
          }
        });
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

        if (result) {
          res.end(JSON.stringify(result));
        } else {
          res.end(JSON.stringify({ error: "User not found" }));
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.statusCode = 400;
        res.end("Bad Request: Invalid JSON");
      }
    });
  } else if (req.url == "/" && req.method == "PUT") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const jsonData = JSON.parse(body);
        const index = Users.findIndex(({ id }) => id == jsonData.id);

        if (index !== -1) {
          Users[index] = jsonData;

          fs.writeFile("users.json", JSON.stringify(Users), (err) => {
            if (err) {
              console.error("Error writing to users.json:", err);
              res.statusCode = 500;
              res.end("Internal Server Error");
            } else {
              res.end(JSON.stringify(Users));
            }
          });
        } else {
          res.end(JSON.stringify({ error: "User not found" }));
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.statusCode = 400;
        res.end("Bad Request: Invalid JSON");
      }
    });
  } else if (req.url == "/" && req.method == "DELETE") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const jsonData = JSON.parse(body);
        const index = Users.findIndex(({ id }) => id == jsonData.id);

        if (index !== -1) {
          Users.splice(index, 1);

          fs.writeFile("users.json", JSON.stringify(Users), (err) => {
            if (err) {
              console.error("Error writing to users.json:", err);
              res.statusCode = 500;
              res.end("Internal Server Error");
            } else {
              res.end(JSON.stringify(Users));
            }
          });
        } else {
          res.end(JSON.stringify({ error: "User not found" }));
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.statusCode = 400;
        res.end("Bad Request: Invalid JSON");
      }
    });
  } else {
    res.end("hello from node");
  }
});

server.listen(8080);
