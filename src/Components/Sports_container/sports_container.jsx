// import React from 'react';
import "./sports_container.css";
import badminton from '../../assets/badminton.png'
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
                        <span className="fees">FEES</span><br />
                        <span className="per-team">PER TEAM</span>
                    </div>

                    <div className="fee-boy">BOYS 1500</div>
                    <div className="fee-boy">GIRLS 1000</div>

                </div>
                <div className="buttons">
                    <button title='Register' className='primary'></button>
                    <button title='View Details' className='secondary' />
                </div>
            </div>
            <div className="right-column">
                <img src={badminton}></img>
            </div>

            {/* Add your sports-related content here */}
        </div>
    );
};

export default SportsContainer;
