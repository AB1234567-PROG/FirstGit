const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  if (username) {
    // Store the username in local storage
    res.cookie("username", username);
    res.redirect("/");
  } else {
    res.status(400).send("Username is required");
  }
});

app.post("/send-message", (req, res) => {
  const username = req.cookies.username;
  const message = req.body.message;

  if (!username) {
    return res.status(401).send("Unauthorized");
  }

  if (message) {
    // Append the message to a file
    fs.appendFile("messages.txt", `"${username}": "${message}"\n`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error writing to file");
      }
      res.status(200).send("Message sent");
    });
  } else {
    res.status(400).send("Message is required");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
