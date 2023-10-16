// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Init App
var app = express();

// Enable CORS
app.use(cors());

// Static File Server
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("File Metadata Microservice is listening on port " + port);
});
