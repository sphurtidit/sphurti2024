import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AiOutlineMenu />
      </div>
      <ul className={`centered ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>SPORTS</a></li>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>CONTACT</a></li>
      
        <li>
          
        </li>
      </ul>
      <button
            onClick={() => {
              window.open("https://forms.gle/m6F4P47PQ86q53Hy9", "_blank");
            }}
          >
            REGISTER
          </button>
    </nav>
  );
}

export default Navbar;
