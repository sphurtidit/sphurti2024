import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AiOutlineMenu />
      </div>
      <ul className={`centered ${isMenuOpen ? 'open' : ''}`}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SPORTS</li>
        <li>CONTACT</li>
        <li>RESULTS</li>
        <li>
          <button href="/">REGISTER</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;