import "./Accomodation_2nd.css";
import Card from "../../assets/cards.png";
import React from "react";

const AccomodationCard = () => {
  return (
    <div className='acc-section'>
    <div className="cards-container">
    <div className="heading"><h1>ACCOMMODATION</h1></div>
    <div className="cards">
        <img src={Card} alt="" className="card-img"></img>
    </div>
    <button className="apply">Apply Now</button>
    <p>* The Accommodation Registration Fee is Non Refundable</p>
      </div>
      </div>
  );
};

export default AccomodationCard;
 