// import React from 'react';
import "./team_card.css";
import PropTypes from "prop-types";
// import Proff from "../../assets/bg 3.png";
const TeamCard = ({ type, name, designation,phone,image }) => {
  // console.log(image);
  return (
    <div className={`parent-container ${type}`}>
      <div className="image-container">
        <img src={image} className="image" />
      </div>
      <div className="contentContainerr">
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
        <p className="phone">{phone}</p>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamCard;
