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
    });
    return () => {
      l;
    };
  }, []);
  return (
    <>
      <div className="footerContainer">
        <div className="content">
          <h1>Made with ❤️ and effort </h1>
          <span>Design Team X technical team</span>
          <p>
            sphurti 2024 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            <a href={link} target="_blank" rel="noreferrer" style={{fontFamily:'SF Sports',color:'black',textDecoration:'none'}}>SPHURTI 2023</a>{" "}
          </p>
        </div>
        <div className="logos">
          <img src={Sphurti} alt="" className="sphurti" />
          <img src={Naac} alt="" className="naac" />
          <img src={Dit} alt="" className="dit" />
        </div>
      </div>
    </>
  );
};

export default Footer;
