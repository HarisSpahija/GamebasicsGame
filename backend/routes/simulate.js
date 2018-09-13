const express = require('express')
var router = express.Router();

function playMatch(matchTeams) {
    team1 = matchTeams[0].name
    team2 = matchTeams[1].name

    function calcPowerBonus()
    {
        return powerBonus = Math.round(Math.random() * 10)
    }

    function checkWinner(winChance, team1, team2) {
  
        if (winChance === 0.5) {
            result = "Match resulted in draw"
        }
        else if (winChance > 0.5) {
            result = ("Match has been won by " + team1)
        }
        else {
            result = ("Match has been won by " + team2)
        }
        return result
    }

    team1Power = matchTeams[0].power + calcPowerBonus()
    team2Power = matchTeams[1].power + calcPowerBonus()

    winChance = (team1Power/team2Power * 0.5)
    result = checkWinner(winChance, team1, team2)
    console.log(result)

    return ([matchTeams, result])
};

function pickTeams(Poule) {
    index1 = Math.round((Math.random() * (Poule.length-1)))
    index2 = Math.round((Math.random() * (Poule.length-1)))
    
    while(index1 === index2) {
     index2 = Math.round((Math.random() * (Poule.length-1)))
    }
    console.log("Picked teams: " + Poule[index1].name + " - " + Poule[index2].name)
    matchTeams = [Poule[index1], Poule[index2]]
    return (matchTeams)
}

const Poule = [
    {
        name: "Ajax",
        power: 100  
    },
    {
        name: "PSV",
        power: 100
    },
    {
        name: "Feyenoord",
        power: 98
    },
    {
        name: "PEC Zwolle",
        power: 95
    }
]

chosenTeams = pickTeams(Poule)
playMatch(chosenTeams);
match = playMatch(chosenTeams)

router.get('/', function(req, res) {
    res.json([
        {name: team1, power: team1Power},
        {name: team2, power: team2Power},
    ])
})

router.get('/result', function(req, res) {
    res.json([
        {result}
    ])
})
module.exports = router;