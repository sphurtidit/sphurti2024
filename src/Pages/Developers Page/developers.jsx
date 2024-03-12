import "./developers.css";
import { useRef } from "react";
import DIT from "../../assets/DIT.png";
import NAAC from "../../assets/naac.png";
import SPHURTI from "../../assets/sphurti.png";
import SPH from "../../assets/sph.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import tanyajr from "../../assets/tanyajr.jpg";
import tanyasnr from "../../assets/tanyasnr.jpg";
import rudraksh from "../../assets/rudraksh.jpg";
import divik from "../../assets/divik.jpg";
function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("show-nav");
  };

  return (
    <nav>
      <div className="logo-left">
        <img src={SPH} alt="SPHURTI" className="logo" />
      </div>
      <div className="main-nav" ref={navRef}>
        <div className="nav-logo-container">
          <img src={DIT} alt="DIT" className="nav-logo" />
          <img src={NAAC} alt="NAAC" className="nav-logo" />
          <img src={SPHURTI} alt="SPHURTI" className="nav-logo" />
        </div>
        <div className="center-button">
          <Link to="/" offset={-80}>
            <li onClick={showNav}>HOME</li>
          </Link>
        </div>
        <button className="nav-button nav-close-button" onClick={showNav}>
          <MdClose />
        </button>
      </div>
      <button className="nav-button" onClick={showNav}>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}
function DevelopersSection() {
  return (
    <div className="DevelopersSection">
      <div className="heading">
        <h1>DEVELOPERS PAGE</h1>
      </div>
      <div className="developers">
        <div className="developer" onClick={() => window.location.href = 'https://www.linkedin.com/in/divik-goel-12a056143/'}>
          <img width="100%" src={divik} alt="developer" />
          <h1 style={{margin:"0px"}} className="heading">Divik Goel</h1>
        </div>
        <div className="developer" onClick={() => window.location.href = 'https://www.linkedin.com/in/tanya-14804b224/'}>

          <img width="100%" src={tanyasnr} alt="developer" />
          
          <h1 style={{margin:"0px"}} className="heading">Tanya</h1>
        </div>
        <div className="developer" onClick={() => window.location.href = 'https://www.linkedin.com/in/rudraksh-gupta-664b591b2/'}>

          <img width="100%" src={rudraksh} alt="developer" />
          
          <h1 style={{margin:"0px"}} className="heading">Rudraksh Gupta</h1>
        </div>
        <div className="developer" onClick={() => window.location.href = 'https://www.linkedin.com/in/tanya-yadav-5712992a7/'}>

          <img width="100%" src={tanyajr} alt="developer" />
          
          <h1 style={{margin:"0px"}} className="heading">Tanya Yadav</h1>
        </div>
      </div>
    </div>
  );
}
const DevelopersPage = () => {
  return (
    <>
      <Nav />
      <DevelopersSection />
    </>
  );
};

export default DevelopersPage;
