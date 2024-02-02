import React from "react";
import "./ImageContainer.css";
import LEFT from "../../assets/color.png";
import RIGHT from "../../assets/soon.png";

const ImageContainer = () => {
    return (
        <div className="image-container">
            <img
                src={LEFT}
                className="left-image"
                alt="Left Image"
            />
            <img
                src={RIGHT}
                className="soon-image"
                alt="Soon Image"
            />
      </div>
      );
    };

export default ImageContainer;