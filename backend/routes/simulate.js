const express = require("express");
var router = express.Router();

function playMatch(matchTeams) {
  team1 = matchTeams[0].name;
  team2 = matchTeams[1].name;

  function calcPowerBonus() {
    return (powerBonus = Math.round(Math.random() * 10));
  }

  function checkWinner(winChance, team1, team2) {
    if (winChance === 0.5) {
      result = "Match resulted in draw";
    } else if (winChance > 0.5) {
      result = "Match has been won by " + team1;
      matchTeams[0].wins = matchTeams[0].wins + 1;
    } else {
      result = "Match has been won by " + team2;
      matchTeams[1].wins = matchTeams[1].wins + 1;
    }
    return result;
  }

  team1Power = matchTeams[0].power + calcPowerBonus();
  team2Power = matchTeams[1].power + calcPowerBonus();

  team1Wins = matchTeams[0].wins;
  team2Wins = matchTeams[1].wins;

  winChance = (team1Power / team2Power) * 0.5;
  result = checkWinner(winChance, team1, team2);
  
  return [matchTeams, result];
}

function pickTeams(Poule) {
  index1 = Math.round(Math.random() * (Poule.length - 1));
  index2 = Math.round(Math.random() * (Poule.length - 1));

  while (index1 === index2) {
    index2 = Math.round(Math.random() * (Poule.length - 1));
  }
  console.log(
    "Picked teams: " + Poule[index1].name + " - " + Poule[index2].name
  );
  matchTeams = [Poule[index1], Poule[index2]];
  return matchTeams;
}

const Poule = [
  {
    name: "Ajax",
    power: 100,
    wins: 0
  },
  {
    name: "PSV",
    power: 100,
    wins: 0
  },
  {
    name: "Feyenoord",
    power: 98,
    wins: 0
  },
  {
    name: "PEC Zwolle",
    power: 95,
    wins: 0
  }
];

router.get("/match-details", function(req, res) {
  chosenTeams = pickTeams(Poule);
  match = playMatch(chosenTeams);

  console.log(result)

  res.json({
    data: [
      { name: team1, power: team1Power },
      { name: team2, power: team2Power }
    ],
    result
  });
});

router.get("/all-teams", function(req, res) {
  res.send(Poule);
});

module.exports = router;
