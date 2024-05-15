const express = require("express");
const studentRouter = express.Router();

//iteration day 01
studentRouter.get("/api/students", (req, res) => {
  res.sendFile(__dirname + "../students.json");
});

module.exports = studentRouter;
