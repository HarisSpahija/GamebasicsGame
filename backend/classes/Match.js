class Match {
    constructor(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }

    playMatch(team1, team2) {
        if (team1.calcPower() > team2.calcPower()) {
            team1.winMatch()
            team2.loseMatch()
        } else if (team1.calcPower() < team2.calcPower()) {
            team1.loseMatch()
            team2.winMatch()
        } else {
            team1.drawMatch()
            team2.drawMatch()
        }
    }
}

modules.export = Match;