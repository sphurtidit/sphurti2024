import React from 'react';
import './result.css';
import leftimage from '../../assets/left-image.png';
import rightimage from '../../assets/right-image.png';
import result from '../../assets/result.png';
import { MdKeyboardArrowDown } from "react-icons/md";
const Result = () => {
  return (
    <div>
      <p className="heading">RESULTS</p>
      <div className="result-container">
        <div className="left-column">
          <div className="leftimage">
            {/* <img src={leftimage} /> */}
          </div>
        </div>
        <div className='middle-column'>
          <p className='middle-heading'>SPHURTI</p><br></br>
          <div className='resultimage'>
            <img src={result} />
          </div>
          <br></br>
          <div className='button'>
            <p><button title="2024 Results" className="thisyear" onClick={() => { }}>
              <MdKeyboardArrowDown />2024 Results  </button></p>
            <p><button title="2023 Results" className="lastyear" onClick={() => { }}>
              <MdKeyboardArrowDown /> 2023 Results </button></p>
          </div>
        </div>
        <div className="right-column">
          <div className="rightimage">
            {/* <img src={rightimage} /> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Result;
