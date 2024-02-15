// import React from 'react';
import "./sports_container.css";
import badminton from '../../assets/badminton.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import flag from '../../assets/flag.png'

const SportsContainer = () => {
    return (
        <div className="sports-container">
            <div className="left-column">
                <h1 className='sports-heading'>BADMINTON</h1>
                <div className="reg">
                    <img src={flag} height={22}></img>
                    <h2 className='reg-text'>REGISTRATION</h2>
                    <img src={flag} height={22}></img>
                </div>
                <div className="fee">
                    <div className="fee-text">
                        <p className="fees">FEES</p>
                        <p className="team">PER TEAM</p>
                    </div>
                    <div className="fee-text">
                        <p className="cate">BOYS</p>
                        <p className="cate-fees">₹1500</p>
                    </div>
                    <div className="fee-text">
                        <p className="cate">GIRLS</p>
                        <p className="cate-fees">₹1000</p>
                    </div>
                </div>
                <div className="buttons">
                    {/* Change the primary button to something like the secondary button */}
                    <button title='Register' className='primary' />
                    <button title='detail' className='secondary' >
                        View Details <MdKeyboardArrowDown />
                    </button>
                </div>
            </div>
            <div className="right-column">
                <img src={badminton}></img>
            </div>
        </div>
    );
};

export default SportsContainer;
