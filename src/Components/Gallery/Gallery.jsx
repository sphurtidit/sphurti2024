import "./Gallery.css";
import image1 from "../../assets/Gallery/image1.png";
import image2 from "../../assets/Gallery/image2.png";
import image3 from "../../assets/Gallery/image3.png";
import image4 from "../../assets/Gallery/image2.png";
import image5 from "../../assets/Gallery/image5.png";
import image6 from "../../assets/Gallery/image6.png";
import image7 from "../../assets/Gallery/image7.png";
import image8 from "../../assets/Gallery/image8.png";
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
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
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
