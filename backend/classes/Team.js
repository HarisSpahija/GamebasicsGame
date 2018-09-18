class Team {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.wins = 0;
    this.loss = 0;
    this.draws = 0;
    this.points = 0;
  }

  winMatch() {
    this.points += 3;
    this.wins++;
  }

  loseMatch() {
    this.loss++;
  }

  drawMatch() {
    this.points += 1;
    this.draws++;
  }

  calcPower() {
    let powerBonus = this.power + Math.round(Math.random() * 10);
    return powerBonus;
  }

  resetScore() {
    this.wins = 0;
    this.loss = 0;
    this.draws = 0;
    this.points = 0;
  }
}

module.exports = Team