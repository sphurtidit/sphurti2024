import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import "./navbar.css";
import Sphurti from "../../assets/sph.png.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [pathName, setPathName] = useState("home");

  return (
    <nav>
      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AiOutlineMenu />
      </div>
      <div className="right_logo">
        <img src={Sphurti} alt="" className="logo" />
      </div>
      <ul className={`centered ${isMenuOpen ? "open" : ""}`}>
        <Link to="home" offset={-80}>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
        </Link>
        <Link to="msg" offset={-80}>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>MESSAGES</a></li>
        </Link>
        <Link to="nav-sports" offset={-80}>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>SPORTS</a></li>
        </Link>
        <Link to="team-nav" offset={-80}>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>CONTACT</a></li>
        </Link>
      </ul>
      <div className="button-cnt">
      <button className="rgst_btn"
            onClick={() => {
              window.open("https://forms.gle/m6F4P47PQ86q53Hy9", "_blank");
            }}
          >
            REGISTER
          </button>
      </div>
    </nav>
  );
}

export default Navbar;
