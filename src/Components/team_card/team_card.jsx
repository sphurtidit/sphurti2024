// import React from 'react';
import './team_card.css';
import Purple from '../../assets/Purple.png';
// import Red from '../../assets/red.png';
// import Yellow from '../../assets/yellow.png';
import Proff from '../../assets/bg 3.png';
const TeamCard = () => {
  return (
    <div>
      {/* <h1>Hello, World!</h1> */}
      {/* <p>This is a basic React component.</p> */}
      <div className="box">
    <img src={Purple}/>
    <img src={Proff}/>
  </div>
  
    </div>
  );
}

export default TeamCard;
