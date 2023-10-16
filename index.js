// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Router Imports
const apiRouter = require("./routes/api");

// Init App
var app = express();

// Enable CORS
app.use(cors());

// Static File Server
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Router Setup
app.use("/api", apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("File Metadata Microservice is listening on port " + port);
});
