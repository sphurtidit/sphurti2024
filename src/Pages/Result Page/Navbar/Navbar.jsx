import Badminton from "../Badminton/Badminton";
import BBSection from "../BasketballScore/BasketBallSection";
import "./Navbar.css";
import { useState } from "react";
import VolleyballResult from "../Volleyball/volleyball";
import Cricket from "../CricketScore/CricketSection";
import TableTennis from "../TableTennis/TableTennisSection";
import Football from "../Football/FootballSection";
// import './nav.css';
import { useRef } from 'react';
import DIT from '../../../assets/DIT.png';
import NAAC from '../../../assets/naac.png';
import SPHURTI from '../../../assets/sphurti.png';
import SPH from '../../../assets/sph.png';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Gallery_Button from '../../../Components/Gallery_Button/Gallery_Button';

const navJSON = [
  {
    name: "Cricket",
    index: 0,
  },
  {
    name: "Football",
    index: 1,
  },
  {
    name: "VolleyBall",
    index: 2,
  },
  {
    name: "Basketball",
    index: 3,
  },

  {
    name: "Table Tennis",
    index: 4,
  },
  {
    name: "Badminton",
    index: 5,
  },
];



function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('show-nav');
    }

    return (
        <nav>
            <div className="logo-left">
                <img src={SPH} alt="SPHURTI" className='logo' />
            </div>
            <div className="main-nav" ref={navRef}>
                <div className="nav-logo-container">
                    <img src={DIT} alt="DIT" className='nav-logo' />
                    <img src={NAAC} alt="NAAC" className='nav-logo' />
                    <img src={SPHURTI} alt="SPHURTI" className='nav-logo' />
                </div>
                <div className="center-button">
                    <Link to="/" offset={-80}><li onClick={showNav}>HOME</li></Link>
                    {/* <Link to="msg" offset={-80}><li onClick={showNav}>MESSAGES</li></Link> */}
                    {/* <Link to="nav-sports" offset={-80}><li onClick={showNav}>SPORTS</li></Link> */}
                    {/* <Link to="acc-section" offset={-80}><li onClick={showNav}>ACCOMMODATION</li></Link> */}
                    {/* <Link to="team-nav" offset={-80}><li onClick={showNav}>CONTACT</li></Link> */}
                    {/* <Link to="home" offset={-80}><a>RESULTS</a></Link> */}
                    {/* <a  rel="noreferrer"><li className='reg-nav-button'>GALLERY</li></a> */}
                    <Gallery_Button />
                </div>
                <button className='nav-button nav-close-button' onClick={showNav}>
                    <MdClose />
                </button>
            </div>
            <button className='nav-button' onClick={showNav}>
                <GiHamburgerMenu />
            </button>
        </nav>
    );
}




export default function Navbar() {
  const [index, setIndex] = useState(0);
  // useEffect(()=>{
  //   console.log(index)
  // },[index])
  return (
    <>
      <Nav/>
      <div className="results-navContainer">
        <ul>
          {navJSON.map((item, i) => {
            return (
              <li
                className={index === item.index ? 'activeNav' : ''}
                onClick={() => {
                  setIndex(item.index);
                }}
                key={i}
              >
                <div className="divContainer">{item.name}</div>
              </li>
            );
          })}
        </ul>
        <div className="sportContainer">
          {index == 0 ? (
            <Cricket />
          ) : index == 1 ? (
            <Football />
          ) : index == 2 ? (
            <VolleyballResult />
          ) : index == 3 ? (
            <BBSection />
          ) : index == 4 ? (
            <TableTennis />
          ) : (
            <Badminton />
          )}
        </div>
      </div>
    </>
  );
}