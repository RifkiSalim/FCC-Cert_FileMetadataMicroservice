// Imports
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

// Initialize Router
const router = express.Router();

// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Multer
const upload = multer(); // Store files in memory

router.post("/fileanalyse", upload.single("upfile"), (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).json({
      error: "file is required.",
    });
    return;
  }

  const { originalname, mimetype, size } = file;
  res.status(200).json({
    name: originalname,
    type: mimetype,
    size,
  });
  return;
});

module.exports = router;
