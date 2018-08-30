import React from 'react';

class TeamSelection extends React.Component {
    
    render(){
        const { name, country, crest, foundation, national, international } = this.props.selection;
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
                    <div className="player">
                        
                    </div>
                </div> 
            </main>
        )
    }
}


export default TeamSelection;


// "country" : "Italy",
// "crest" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/130px-Logo_of_AC_Milan.svg.png",
// "foundation" : 1899,
// "international" : 7,
// "name" : "AC Milan",
// "national" : 18,