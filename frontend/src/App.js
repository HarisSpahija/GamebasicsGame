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
      poule: []
    };
    this.simulateMatch = this.simulateMatch.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
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

  render() {
    if (!this.state.match.length === 0) {
      return <div />;
    } else {
      return (
        <div className="App">
          <div>
            <button onClick={this.simulateMatch}>Simulate a match</button>
            
              <h1>{this.state.match.result}</h1>

          </div>

          <div>
            {this.state.match.data.map(match => (
              <div>
                Name: {match.name} Power: {match.power}
              </div>
            ))}
          </div>

          {/* Entire poule */}
          <div>
            <h1>Poule:</h1>
            {this.state.poule.map(Poule => (
              <div>
                {Poule.name} - {Poule.power} - Wins: {Poule.wins} - Losses {Poule.loss} - Draws {Poule.draws}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
