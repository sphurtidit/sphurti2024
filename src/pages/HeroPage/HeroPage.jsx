import "./HeroPage.css";
import CenterBGI from "../../assets/Back_1.png";
import LeftBGI from "../../assets/left_home.png";
import RightBGI from "../../assets/Back_3.png";
import Sphurti from "../../assets/sphurti.png";
import Naac from "../../assets/naac.png";
import Dit from "../../assets/DIT.png";

const HeroPage = () => {
  return (
    <>
      
      {/* DO NOT TOUCH */}
      <div className="main-container">
        <img src={Sphurti} alt="" className="logo_1"/>
        <img src={Naac} alt="" className="logo_2"/>
        <img src={Dit} alt="" className="logo_3"/>
     
        <div className="left-container">
        <img src={LeftBGI} alt="" className="left"/>
<<<<<<< HEAD
        <button href='https://docs.google.com/forms/d/1vxvzC-vwx6elSRgbsgPeZynvCnRxd3HCEPzyWIJn0n0/edit#responses
        ' title='Register' className='primary'>Register</button>
=======
        <button title='Register' className='primary' onClick={() => {
                            window.open('https://forms.gle/m6F4P47PQ86q53Hy9', '_blank');
                        }}>Register</button>
>>>>>>> 2ea9db3711bfe4a051ff9124d32203d85004d95a
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
