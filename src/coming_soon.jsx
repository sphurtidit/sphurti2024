import React from "react";
import "./coming_soon.css";
import backgroundImage from "./assets/back.png";
import ImageContainer from "./Components/Image_container/ImageContainer";
import Navbar from "./Components/LogoNavbar/LogoNavbar";
const Page = ()  => {

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    maxWidth: '100vw',
  };
  const soonImageStyles = {
    width: "80vw",
    height: "auto",
    marginTop: "20px",
  }
  return (
    <>
      <div className="back" style={backgroundStyles}>
            
            <ImageContainer  customStyles={soonImageStyles}/> 
      </div>
    </>
  );
};

export default Page;