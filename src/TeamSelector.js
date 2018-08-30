import React from 'react';

class TeamSelector extends React.Component {

    render() {
        const {teams} = this.props;

        // console.log(name);
        return (
            <header>
                <form className="team-selector">
                    <h1>Football Legends</h1>
                    <select name="teams" onChange={this.props.selectionHandler}>
                        <option>Select a Team</option>
                        {teams.map((team, index) => 
                            <option key={`${index}-${team.name}`} value={team.name}>
                                {team.name}
                            </option>
                        )}
                    </select>
                </form>
            </header>
        )
    }
}

export default TeamSelector;
