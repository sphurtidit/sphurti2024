import React from "react";
import "./coming_soon.css";

import ImageContainer from "./Components/Image_container/ImageContainer";
import Navbar from "./Components/LogoNavbar/LogoNavbar";
const Page = ()  => {
  return (
    <>
      <div className="back">
            <Navbar/>
            <ImageContainer/>
      </div>
    </>
  );
};

export default Page;