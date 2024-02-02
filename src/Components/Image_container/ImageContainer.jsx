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
            <imgn
                src={RIGHT}
                className="image soon-image"
                alt="Soon Image"
            />
      </div>
      );
    };
