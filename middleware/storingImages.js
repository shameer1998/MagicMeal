const express = require("express");
const app = express();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: "../mealImages",
  filename: function (req, file, cb) {
    cb(null, file.filename + "" + Data.now() + path.extname(file.original));
  },
});

var upload = multer({ storage: storage });

exports.upload = upload;
