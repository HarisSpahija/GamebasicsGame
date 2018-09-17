const express = require("express");
var router = express.Router();
const Team = require("../classes/Team")

function playMatch(matchTeams) {
  team1 = matchTeams[0].name;
  team2 = matchTeams[1].name;

  function calcPowerBonus() {
    return (powerBonus = Math.round(Math.random() * 10));
  }

  function checkWinner(winChance, team1, team2) {
    if (winChance === 0.5) {
      result = "Match resulted in draw";
      matchTeams[0].draws = matchTeams[0].draws + 1;
      matchTeams[1].draws = matchTeams[1].draws + 1;

      matchTeams[0].points = matchTeams[0].points + 1;
      matchTeams[1].points = matchTeams[1].points + 1;
    } else if (winChance > 0.5) {
      result = "Match has been won by " + team1;
      //Add wins/losses
      matchTeams[0].wins = matchTeams[0].wins + 1;
      matchTeams[1].loss = matchTeams[1].loss + 1;

      matchTeams[0].points = matchTeams[0].points + 3;

    } else {
      result = "Match has been won by " + team2;

      //Add wins/losses
      matchTeams[1].wins = matchTeams[1].wins + 1;
      matchTeams[0].loss = matchTeams[0].loss + 1;

      matchTeams[1].points = matchTeams[1].points + 3;
    }
    return result;
  }

  team1Power = matchTeams[0].power + calcPowerBonus();
  team2Power = matchTeams[1].power + calcPowerBonus();

  team1Wins = matchTeams[0].wins;
  team2Wins = matchTeams[1].wins;

  team1Losses = matchTeams[0].loss;
  team2Losses = matchTeams[1].loss;

  team1Draws = matchTeams[0].draw;
  team2Draws = matchTeams[1].draw;
  
  team1Points = matchTeams[0].points;
  team2Points = matchTeams[1].points;

  winChance = (team1Power / team2Power) * 0.5;
  result = checkWinner(winChance, team1, team2);
  
  return [matchTeams, result];
}

function pickTeams(poule) {
  index1 = Math.round(Math.random() * (poule.length - 1));
  index2 = Math.round(Math.random() * (poule.length - 1));

  while (index1 === index2) {
    index2 = Math.round(Math.random() * (poule.length - 1));
  }
  console.log(
    "Picked teams: " + poule[index1].name + " - " + poule[index2].name
  );
  matchTeams = [poule[index1], poule[index2]];
  return matchTeams;
}

function playPoule(poule) {
    //Round 1
    playMatch([poule[0], poule[1]])
    playMatch([poule[2], poule[3]])

    //Round 2
    playMatch([poule[2], poule[1]])
    playMatch([poule[0], poule[3]])

    //Round 3
    playMatch([poule[0], poule[2]])
    playMatch([poule[1], poule[3]])
}

let poule = [
  {
    name: "Ajax",
    power: 100,
    wins: 0,
    loss: 0,
    draws: 0,
    points: 0,
  },
  {
    name: "PSV",
    power: 100,
    wins: 0,
    loss: 0,
    draws: 0,
    points: 0,
  },
  {
    name: "Feyenoord",
    power: 95,
    wins: 0,
    loss: 0,
    draws: 0,
    points: 0,
  },
  {
    name: "PEC Zwolle",
    power: 92,
    wins: 0,
    loss: 0,
    draws: 0,
    points: 0,
  }
];

router.get("/match-details", function(req, res) {
  chosenTeams = pickTeams(poule);
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

router.get("/poule", function(req, res) {
    playPoule(poule)

    res.send(poule);
  });

router.get("/all-teams", function(req, res) {
  res.send(poule);
});

router.get("/make-team", function(req, res) {
  ajax = new Team("Ajax", 100)
  res.send(ajax)
})
router.get("/match-reset", function(req, res) {

    poule = [
        {
          name: "Ajax",
          power: 100,
          wins: 0,
          loss: 0,
          draws: 0,
          points: 0,
        },
        {
          name: "PSV",
          power: 100,
          wins: 0,
          loss: 0,
          draws: 0,
          points: 0,
        },
        {
          name: "Feyenoord",
          power: 98,
          wins: 0,
          loss: 0,
          draws: 0,
          points: 0,
        },
        {
          name: "PEC Zwolle",
          power: 95,
          wins: 0,
          loss: 0,
          draws: 0,
          points: 0,
        }
      ];

    res.send(poule);
});

module.exports = router;