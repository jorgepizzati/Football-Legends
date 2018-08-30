import React, { Component } from 'react';
import TeamSelector from './TeamSelector'
import TeamSelection from './TeamSelection';
import legends from './legends.json';

class App extends Component {
  state = {
    teams: legends,
    selectedTeam: "AC Milan"
  }

  _selectionHandler = (event) => {
    this.setState({ selectedTeam: event.target.value })
  }

  render() {
    const selection = this.state.teams.find(team => team.name === this.state.selectedTeam);
    return (
      <React.Fragment>
        <TeamSelector 
          teams = {this.state.teams}
          selectionHandler = {this._selectionHandler}
        />
        <TeamSelection
          selection = {selection}
        />

      </React.Fragment>
    );
  }
}

export default App;
