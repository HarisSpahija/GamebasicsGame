import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    match: [],
    result: []
  }

  componentDidMount() {
    fetch('/simulate')
    .then(res => res.json())
    .then(match => this.setState({match}))

    fetch('/simulate/result')
    .then(res => res.json())
    .then(result => this.setState({result}))
  }

  render() {
    return (
      <div className="App">

        <div>{this.state.result.map(result => <h1>{result.result}</h1>)}</div>

        <div>{this.state.match.map(match =>
        <div>Name: {match.name} Power: {match.power}</div>
        )}
        </div>
        <button>
          Play new match
        </button>
      </div>
    );
  }
}

export default App;

// [[[{"name":"PEC Zwolle","power":95},{"name":"PSV","power":100}],"Match has been won by PSV"]]