import { useState } from "react";
import "./Carousel.css";
import img1 from "../../assets/Carousel/img1.png";
import img2 from "../../assets/Carousel/img1.png";
import img3 from "../../assets/Carousel/img1.png";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const imgList=[img1,img2,img3];
  
    const nextSlide = () => {
      setSlide(slide === imgList.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? imgList.length - 1 : slide - 1);
    };
  
    return (
      <div className="carousel">
        <BsArrowLeftSquareFill onClick={prevSlide} className="arrow arrow-left" />
        {imgList.map((item, idx) => {
          return (
            <img
              src={item}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {imgList.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    );
  };


export default Carousel;