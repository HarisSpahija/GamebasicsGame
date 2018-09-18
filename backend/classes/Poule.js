const Team = require("./Team");
const Match = require("./Match");


class Poule {
  constructor() {
    this.teams = {
      ajax: new Team("AJAX", 95),
      feyenoord: new Team("Feyenoord", 100),
      psv: new Team("PSV", 100),
      peczwolle: new Team("PEC Zwolle", 90)
    };
  }

  simulatePoule() {
    let match = new Match()

    //Day 1
    match.playMatch(this.teams.ajax, this.teams.feyenoord)
    match.playMatch(this.teams.psv, this.teams.peczwolle)

    //Day 2
    match.playMatch(this.teams.ajax, this.teams.peczwolle)
    match.playMatch(this.teams.psv, this.teams.feyenoord)

    //Day 3
    match.playMatch(this.teams.ajax, this.teams.psv)
    match.playMatch(this.teams.peczwolle, this.teams.feyenoord)
  }

  pouleReset() {
        this.teams.ajax.resetScore()
        this.teams.feyenoord.resetScore()
        this.teams.psv.resetScore()
        this.teams.peczwolle.resetScore()
  }
}

module.exports = Poule;
