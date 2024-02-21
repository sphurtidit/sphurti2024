import "./Footer.css";
// import Navbar from "../LogoNavbar/LogoNavbar";
import Sphurti from "../../assets/sphurti.png";
import Naac from "../../assets/naac.png";
import Dit from "../../assets/DIT.png";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const Footer = () => {
  const [link, setLink] = useState();
  useEffect(() => {
    const l = getDoc(doc(collection(db, "misc"), "links")).then((docu) => {
      setLink(docu.data()["2023"]);
      // console.log(docu.data()['rulebook']);
      console.log(link)
    });
    return () => {
      l;
    };
  }, []);
  return (
    <>
      <div className="footerContainer">
        <div className="footercontent">
          <p className="footerheader">Made with ❤️ and effort </p>
          <p className="footermiddle">Design Team X technical team</p>
          <p className="footerbottom">Sphurti 2024</p>
        </div>
        <div className="footerlogos">
          <img src={Sphurti} alt="" className="sphurti" />
          <img src={Naac} alt="" className="naac" />
          <img src={Dit} alt="" className="dit" />
        </div>
      </div>
    </>
  );
};

export default Footer;
