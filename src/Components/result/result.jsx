// import React from 'react';
import "./result.css";
import leftimage from "../../assets/left-image.png";
import rightimage from "../../assets/right-image.png";
import result from "../../assets/result.png";
import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Result = () => {
  const [link, setlink] = useState();
  useEffect(() => {
    const l = getDoc(doc(collection(db, "misc"), "links")).then((docu) => {
      setlink(docu.data()["2023"]);
    });
    return () => {
      l;
    };
  }, []);

  let openLink = (dest) => {
    window.open(dest, "_blank");
  }
  return (
    <>
      <div className="heading">
        <h1>RESULTS</h1>
      </div>
      <div className="result-container">
        <div className="left-column">
          <div className="leftimage">
            <img src={leftimage} />
          </div>
        </div>

        <div className="middle-column">
          <div className="middlemain">
            <p className="middle-heading">SPHURTI</p>
            <img className="resultimage" src={result} />
          </div>
          <div className="result-buttons">
            <button
              title="2024 Results"
              onClick={() => { }}
            >
              <FaArrowDown />
              2024 Results
            </button>
            <button
              title="2023 Results"
              onClick={() => {
                console.log(link);
                openLink(link);
              }}>
              <FaArrowDown /> 2023 Results
            </button>
          </div>
        </div>
        <div className="right-column-result">
          <div className="rightimage">
            <img src={rightimage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
