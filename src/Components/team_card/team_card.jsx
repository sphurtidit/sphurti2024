// import React from 'react';
import './team_card.css';
import PropTypes from 'prop-types';
import Proff from '../../assets/bg 3.png';
const TeamCard = ({ type, name, designation }) => {


  return (
    <div className={`parent-container ${type}`}>
      <div className="image-container">
        <img src={Proff} className="image" />
      </div>
      <p className="Text">
        {name}
      </p>
      <p className="SText">
        {designation}
      </p>

    </div>
  );
}


TeamCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired
};

export default TeamCard;
