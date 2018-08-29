import React, { Component } from 'react';
import TeamSelector from './TeamSelector'
import legends from './legends.json';

class App extends Component {
  state = {
    teams: legends,
    selectedTeam: ""
  }

  _selectionHandler = (event) => {
    this.setState({ selectedTeam: event.target.value })
    // console.log()
  }

  render() {
    return (
      <React.Fragment>
        <TeamSelector 
          teams = {this.state.teams}
          selectionHandler = {this._selectionHandler}
        />
      </React.Fragment>
    );
  }
}

export default App;
