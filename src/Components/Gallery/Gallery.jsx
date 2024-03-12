import "./Gallery.css";
import image1 from "../../assets/Gallery/image1.png";
import image2 from "../../assets/Gallery/image2.png";
import image3 from "../../assets/Gallery/image3.png";
import image4 from "../../assets/Gallery/image2.png";
import image5 from "../../assets/Gallery/image5.png";
import image6 from "../../assets/Gallery/image6.png";
import image7 from "../../assets/Gallery/image7.png";
import image8 from "../../assets/Gallery/image8.png";
import image9 from "../../assets/Gallery/img9.jpg";
import image10 from "../../assets/Gallery/img10.jpg";
import image11 from "../../assets/Gallery/img11.jpg";
import image12 from "../../assets/Gallery/img12.jpg";
import image13 from "../../assets/Gallery/img13.jpg";
import image14 from "../../assets/Gallery/img14.jpg";
import image15 from "../../assets/Gallery/img15.jpg";
import image16 from "../../assets/Gallery/img16.jpg";
import image17 from "../../assets/Gallery/img17.jpg";
import image18 from "../../assets/Gallery/img18.jpg";
import image19 from "../../assets/Gallery/img19.jpg";
import image20 from "../../assets/Gallery/img20.jpg";
import image21 from "../../assets/Gallery/img21.jpg";
import image22 from "../../assets/Gallery/img22.jpg";
import image23 from "../../assets/Gallery/img23.jpg";
import image24 from "../../assets/Gallery/img24.jpg";

import { useState } from "react";
const Gallery = () => {
  const [displayAll, setdisplayAll] = useState(false);
  const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image13,
    image10,
    image11,
    image12,
    image19,
    image23,
    image15,
    image24,
    image17,
    image18,
    image9,
    image20,
    image21,
    image22,
    image14,
    image16,
  ];
  const [displayList, setdisplayList] = useState(imageList.slice(0, 12));

  const handleViewAll = () => {
    if (!displayAll) {
      setdisplayList(imageList);
    } else {
      setdisplayList(imageList.slice(0, 12));
    }
    setdisplayAll(!displayAll);
  };
  return (
    <>
      <div className="main-gallery">
        <div className="heading">
          <h1>MOMENTS</h1>
        </div>
        <div className="Moments">
          {displayList.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </div>
        <div className="momentsbutton">
          <button className="viewall" onClick={handleViewAll}>
            {!displayAll ? "View All" : "View Less"}
          </button>
        </div>
      </div>
    </>
  );
};
export default Gallery;
