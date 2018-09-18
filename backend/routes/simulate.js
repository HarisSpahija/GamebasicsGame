const express = require("express");
var router = express.Router();
const Team = require("../classes/Team");
const Poule = require("../classes/Poule");
const Match = require("../classes/Match")

let poule = new Poule();
let match = new Match();

//Poule Related Routes
router.get("/all-teams", function(req, res) {
  res.send(poule);
});

router.get("/poule-reset", function(req, res) {
  poule.pouleReset();
  res.send(poule);
});

router.get("/simulate-poule", function(req, res) {
  poule.simulatePoule();
  res.send(poule);
});

//Match related Routes
router.get("/simulate-match", function(req, res) {
  //TODO: add post for 2 teams
  res.send(poule);
});



module.exports = router;
