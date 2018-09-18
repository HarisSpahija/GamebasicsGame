import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      match: {
        data: [],
        result: null
      },
      poule: null,
      teams: null
    };
    this.simulateMatch = this.simulateMatch.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.resetPoule = this.resetPoule.bind(this);
    this.simulatePoule = this.simulatePoule.bind(this);
  }

  componentDidMount = () => {
    fetch("/simulate/all-teams")
      .then(res => res.json())
      .then(poule => {
        this.setState({ poule });
        console.log(this.state);
      });
  };

  simulateMatch() {
    fetch("/simulate/match-details")
      .then(res => res.json())
      .then(match => this.setState({ match }));

      fetch("/simulate/all-teams")
      .then(res => res.json())
      .then(poule => {
        this.setState({ poule });
        console.log(this.state);
      });
  }

  resetPoule() {
    fetch("/simulate/poule-reset")
    .then(res => res.json())
      .then(poule => {
        this.setState({ poule });
        console.log(this.state);
      });
  }

  simulatePoule() {
    fetch("/simulate/poule")
    .then(res => res.json())
      .then(poule => {
        this.setState({ poule });
        console.log(this.state);
      });
  }

  render() {
    if (!this.state.match.length === 0) {
      return <div />;
    } else {
      return (
        <div className="App">
          <div>
            <button onClick={this.simulateMatch}>Simulate a match</button>
            <button onClick={this.resetPoule}>Reset current Poule</button>
            <button onClick={this.simulatePoule}>Simulate a poule</button>
              
            <h1>
            {this.state.match.data.map(match => (
              <div>
                {match.name}
              </div>
            ))}
            </h1>
              
              <h2>{this.state.match.result}</h2>
              

          </div>

          {/* <div>
            {this.state.match.data.map(match => (
              <div>
                Name: {match.name} Power: {match.power}
              </div>
            ))}
          </div> */}

          {/* Entire poule */}
          {/* <div>
            <h1>Poule:</h1>
            {this.state.poule.map(team => (
              <div>
                {team.name} - {team.power} - Wins: {team.wins} - Losses {team.loss} - Draws {team.draws} - Points: {team.points}
              </div>
            ))}
          </div> */}
        </div>
      );
    }
  }
}

export default App;
