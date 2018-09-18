const Team = require("./Team");

class Poule {
  constructor() {
    this.teams = {
      ajax: new Team("AJAX", 95),
      feyenoord: new Team("Feyenoord", 100),
      psv: new Team("PSV", 100),
      peczwolle: new Team("PEC Zwolle", 90)
    };
  }

  pouleReset() {
        this.teams.ajax.resetScore()
        this.teams.feyenoord.resetScore()
        this.teams.psv.resetScore()
        this.teams.peczwolle.resetScore()
  }
}

module.exports = Poule;
