import React from "react";
import "./coming_soon.css";
import backgroundImage from "./assets/back.png";
import ImageContainer from "./Components/Image_container/ImageContainer";
import Navbar from "./Components/LogoNavbar/LogoNavbar";
const Page = ()  => {

  const sty = {
    backgroundImage: `url(${backgroundImage})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    maxWidth: '100vw',
  };
  
  return (
    <>
      <div className="back" style={sty}>
            <Navbar/>
            <ImageContainer/>   
      </div>
    </>
  );
};

export default Page;