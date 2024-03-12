import './Gallery_Section.css';
import Carousel from '../../Components/Carousel/Carousel';
import Gallery from '../../Components/Gallery/Gallery';
import { useRef } from 'react';
import DIT from '../../assets/DIT.png';
import NAAC from '../../assets/naac.png';
import SPHURTI from '../../assets/sphurti.png';
import SPH from '../../assets/sph.png';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Gallery_Button from '../../Components/Gallery_Button/Gallery_Button';

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
                    {/* <Gallery_Button /> */}
                </div>
                <button className='nav-button nav-close-button' onClick={showNav}>
                    <MdClose />
                </button>
            </div>
            <button className='nav-button' onClick={showNav}>
                <GiHamburgerMenu />
            </button>
        </nav>
    );}

const Gallery_Section = () => {
    return (
        <>
        <Nav/>
        <Carousel />
        <Gallery />
        </>
    )
}

export default Gallery_Section;