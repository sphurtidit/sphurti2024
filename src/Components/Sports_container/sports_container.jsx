//import React from 'react';
import "./sports_container.css";
import badminton from '../../assets/badminton.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import flag from '../../assets/flag.png'

const SportsContainer = (games) => {
    return (
        <div className="sports-container">
            <div className="left-column">
                <h1 className='sports-heading'>{games.name}</h1>
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
                        <p className="cate-fees">{games.boyfees}</p>
                    </div>
                    <div className="fee-text">
                        <p className="cate">GIRLS</p>
                        <p className="cate-fees">{games.girlfees}</p>
                    </div>
                </div>
                <div className="buttons">
                    {/* Change the primary button to something like the secondary button */}
                    <button title='Register' className='primary' >
                        Register</button>
                    <button title='detail' className='secondary' >
                        View Details <MdKeyboardArrowDown />
                    </button>
                </div>
                <div className="hr">
                    <hr></hr>
                </div>
                <div className="details">
                    <p className="prize">Prize Money:</p>
                    <div className="amount">
                        <p className="winner">Winners: ₹99</p>
                        <p className="runner">Runner Up: ₹99</p>
                    </div>
                    <div className="schedule">
                        <p className="sch-text">Schedule:</p>
                        <a href="">Download Schedule</a>
                    </div>
                    <div className="schedule">
                        <p className="sch-text">Rule Book:</p>
                        <a href="">Download</a>
                    </div>
                    <div className="coord">
                        <p className="coord-text">Coordinators:</p>
                        <div className="info">
                            <div className="cinfo">
                                <p className="name">Soumya Nilay:</p>
                                <p className="mob">8002686694</p>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="cinfo">
                                <p className="name">Maanav Aryan:</p>
                                <p className="mob">9334914647</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <img src={badminton}></img>
            </div>
        </div>
    );
};

export default SportsContainer;
