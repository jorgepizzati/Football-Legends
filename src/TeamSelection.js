import React from 'react';

class TeamSelection extends React.Component {
    
    render(){
        const { name, country, crest, foundation, national, international, players } = this.props.selection;
        // console.log(players);
        return(
            <main className="flex">
                <div className="col-01">
                    <div className="name-box">
                        <h1>{name}</h1>
                        <img src={crest} alt={name}/>
                    </div>
                    <ul className="info-box">
                        <li><strong>Country: </strong>{country}</li>
                        <li><strong>Founded: </strong>{foundation}</li>
                        <li><strong>Leagues: </strong>{national}</li>
                        <li><strong>UEFA CL: </strong>{international}</li>
                    </ul>
                </div>
                <div className="col-02 flex">
                    <ul className="player-box flex">
                        {players.map((player, index) => 
                            <li className="player" key={`${index}-${player.name}`}>
                                <h2>{player.name}</h2>
                                <div className="thumbnail-box"><img src={player.image} alt={player.name}/></div>
                                <ul>
                                    <li><strong>Born: </strong>{player.birthdate}</li>
                                    <li><strong>Goals: </strong>{player.goals}</li>
                                    <li><strong>Height: </strong>{player.height}</li>
                                    <li><strong>Nickname: </strong>{player.nickname}</li>
                                    <li><strong>Position: </strong>{player.position}</li>
                                </ul>
                            </li>
                        )}
                    </ul>
                </div> 
            </main>
        )
    }
}


export default TeamSelection;


// "birthdate" : "06/26/1977",
//       "country" : "Spain",
//       "goals" : 404,
//       "height" : "1.80m",
//       "image" : "http://www3.pictures.gi.zimbio.com/Raul+Gonzalez+UD+Almeria+v+Real+Madrid+La+LIDcg3ZgIpCl.jpg",
//       "name" : "Raúl González",
//       "nickname" : "El Ángel de Madrid",
//       "position" : "Forward"