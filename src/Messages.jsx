// import React from "react";
import './messages.css'
import backgroundImage from "./assets/back.png";
import ragurama from "./assets/graghurama.jpg";

const Page = ()  => {

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    position: 'absolute',
    width: '220vh',
    height: '50vh',
    top:'-20vh',
  };
  const backgroundStyles2 = {
    backgroundImage: `url(${backgroundImage})`,
    position: 'absolute',
    width: '220vh',
    height: '30vh',
    top:'30vh',
  };
  const backgroundStyles3 = {
    backgroundImage: `url(${backgroundImage})`,
    position: 'absolute',
    width: '220vh',
    height: '40vh',
    top:'60vh',  
  };
  const heading={
    position: "absolute",
    left: '50%',
    top: '5%',
    transform: 'translate(-50%,-50%)',
    zIndex:"1",
    fontFamily: "Outfit",
    color: '#1F1F21',
  }
  const box1={
    position:'absolute',
    width:'99.6%',
    zIndex:'1',
    height:"249px",
    top:'20%',
    transform:'skew(0deg,-2deg)',
    backgroundColor:'#FFB800',
  }
  const graghurama={
    width:"20%",
    margin:"1%",
    marginLeft:"15%",
  }
  const graghuramaName={
    position: "absolute",
    zIndex:"1",
    left:'45%',
    top:'22%',
    fontSize:"36px",
    transform:'translate(0%,-50%)',
    fontFamily: "Outfit",

  }
  return (
    <>
      <h1 className="heading" style={heading}>MESSAGES</h1>
      <div className="box1" style={box1}>
        <img className="graghurama" src={ragurama} style={graghurama}/>
        <span>hello
        </span>
      </div>
      <h1 className="graghuramaName" style={graghuramaName}>PROF. F. RAGHURAMA</h1>
      <div className="back" style={backgroundStyles}> 
      </div>
      <div className="back2" style={backgroundStyles2}> 
      </div>
      <div className="back3" style={backgroundStyles3}> 
      </div>
      
    </>
  );
};

export default Page;