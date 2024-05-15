const express = require("express");
const cohortRouter = express.Router();


//iteration day 01
cohortRouter.get("/docs", (req, res) => {
  res.sendFile(__dirname + "";
});

cohortRouter.get("/api/cohorts", (req, res) => {
  res.sendFile(__dirname + "");
});

module.exports = cohortRouter;
