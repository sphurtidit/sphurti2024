import './navbar.css';
import DIT from '../../assets/DIT.png';
import NAAC from '../../assets/naac.png';
import SPHURTI from '../../assets/sphurti.png';

function Navbar() {
    return (
        <nav>
            <div className="logo-left">
                <img src={SPHURTI} alt="SPHURTI" className='logo' />
                <img src={NAAC} alt="NAAC" className='logo'/>
            </div>
            <ul className="centered">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SPORTS</li>
                <li>CONTACT</li>
                <li>RESULTS</li>
                <li>REGISTER</li>
            </ul>
            <div className="logo-right">
                <img src={DIT} alt="DIT" className='logo'/>
            </div>
        </nav>
    );
}

export default Navbar;
