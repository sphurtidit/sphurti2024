import Navbar from "../../Components/Navbar/navbar";
import "./HeroPage.css";
import BGImage from "../../assets/effect.png";
import CenterBGI from "../../assets/Back_4.png";
import LeftBGI from "../../assets/Back_2.png";
import RightBGI from "../../assets/Back_3.png";

const HeroPage = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container">
          <img src={BGImage} alt="BGImage"></img>
          <div className="back-right">
            <img src={LeftBGI} alt="LeftBGI"></img>
          </div>
          <div className="back-center">
            <img src={CenterBGI} alt="BGCenter"></img>
          </div>
          <div className="back-left">
            <img src={RightBGI} alt="RightBGI"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
