const express = require("express");
const path = require("path");

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong!");
});
var distDir = path.join(__dirname, "/../build");
app.use(express.static(distDir));
//serving static files...if some missed above...
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/../build/", "index.html"));
});

app.listen(8080, (err) => {
  console.log("server started on 8080");
});
