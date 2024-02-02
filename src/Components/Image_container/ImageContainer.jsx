import React from "react";
import "./ImageContainer.css";
import LEFT from "../../assets/color.png";
import RIGHT from "../../assets/soon.png";
import Navbar from "../LogoNavbar/LogoNavbar";
const ImageContainer = () => {
    return (
        <div className="image-container">
            <img
                src={LEFT}
                className="left-image"
                alt="Left Image"
            />
            <div className="right">
            <Navbar/>
            <img
                src={RIGHT}
                className="soon-image"
                alt="Soon Image"
            />
            </div>
      </div>
      );
    };

export default ImageContainer;