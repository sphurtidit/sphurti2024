import "./HeroPage.css";
import CenterBGI from "../../assets/Back_1.png";
import LeftBGI from "../../assets/left_home.png";
import RightBGI from "../../assets/Back_3.png";

const HeroPage = () => {
  return (
    <>
      <div className="logo">
        
      </div>
      {/* DO NOT TOUCH */}
      <div className="main-container">
        <div className="left-container">
        <img src={LeftBGI} alt="" className="left"/>
        <button title='Register' className='primary' >Register</button>
        </div>
        <div className="center-container">
        <img src={CenterBGI} alt="" className="center"/>
        </div>
        <div className="right-container">
        <img src={RightBGI} alt="" className="right"/>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
