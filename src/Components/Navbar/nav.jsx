import './nav.css';
import { useRef } from 'react';
import DIT from '../../assets/DIT.png';
import NAAC from '../../assets/naac.png';
import SPHURTI from '../../assets/sphurti.png';
import SPH from '../../assets/sph.png';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

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
                    <Link to="home" offset={-80}><li onClick={showNav}>HOME</li></Link>
                    <Link to="msg" offset={-80}><li onClick={showNav}>MESSAGES</li></Link>
                    <Link to="nav-sports" offset={-80}><li onClick={showNav}>SPORTS</li></Link>
                    <Link to="acc-section" offset={-80}><li onClick={showNav}>ACCOMMODATION</li></Link>
                    <Link to="team-nav" offset={-80}><li onClick={showNav}>CONTACT</li></Link>
                    {/* <Link to="home" offset={-80}><a>RESULTS</a></Link> */}
                    <a href='https://forms.gle/m6F4P47PQ86q53Hy9' target="_blank" rel="noreferrer"><li className='reg-nav-button'>REGISTER</li></a>
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

export default Nav;