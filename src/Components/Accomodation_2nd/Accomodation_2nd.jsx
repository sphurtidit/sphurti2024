import "./Accomodation_2nd.css";
import Card from "../../assets/cards.png";
import React from "react";

const AccomodationCard = () => {
  return (
    <>
    <div className="cards-container">
    <h1>Accommodation</h1>
    <div className="cards">
        <img src={Card} alt="" className="card-img"></img>
    </div>
    <button className="apply">Apply Now</button>
    <p>* The Accommodation Registration Fee Are Non Refundable</p>
      </div>
      </>
  );
};

export default AccomodationCard;
 