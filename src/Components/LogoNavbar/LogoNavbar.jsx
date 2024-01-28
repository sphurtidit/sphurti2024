// Navbar.js
import React from 'react';
import './LogoNavbar.css';
import DIT from '../../assets/DIT.png';
import NAAC from '../../assets/naac.png';
import SILVER from '../../assets/silver.png';
import SPHURTI from '../../assets/sphurti.png';


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={NAAC}/>
      <img src={SILVER}/>
      <img src={SPHURTI}/>
      <img src={DIT}/>
    </div>
  );
};

export default Navbar;
