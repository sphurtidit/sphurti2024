import React from "react";
import "./ImageContainer.css";
import LEFT from "../../assets/color.png";
import RIGHT from "../../assets/soon.png";

const ImageContainer = () => {
    return (
    <div className="image-container">
        <img
            src={LEFT}
            className="image"
        />
        <img
            src={RIGHT}
            className="image"
        />
  </div>
  );
}

export default ImageContainer;