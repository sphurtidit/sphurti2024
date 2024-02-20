import { useState } from 'react';
import "./sports_container.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import flag from '../../assets/flag.png'

const SportsContainer = ({game, type, image, imagesmall}) => {
    const [showContent, setShowContent] = useState(false);
    const viewDetails = () => {
        setShowContent(!showContent);
    }
    let col = (type == 1) ? "yellow" : (type == 2) ? "red" : "purple";
    let exp = (showContent)? "expanded" : "";
    return (
        <div className={`sports-container ${col} ${exp}`}>
            <div className="left-column">
                <div className='container'>
                    <p className='sports-heading'>{game['name']}</p>
                    <div className="reg">
                        <img src={flag}></img>
                        <p className='reg-text'>REGISTRATION</p>
                        <img src={flag}></img>
                    </div>
                    <div className="fee">
                        <div className="fee-text">
                            <p className="fees">FEES</p>
                            <p className="team">PER TEAM</p>
                        </div>
                        <div className="fee-text">
                            <p className="cate">BOYS</p>
                            <p className="cate-fees">{game['fees-boys']}</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="fee-text">
                            <p className="cate">GIRLS</p>
                            <p className="cate-fees">{game['fees-girls']}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button title='Register' className='primary' >
                            Register</button>
                        <button title='detail' className='secondary' onClick={viewDetails}>
                            {showContent ? (<>View Less <MdKeyboardArrowUp /> </>) : (<>View More <MdKeyboardArrowDown /> </>)}
                        </button>
                    </div>
                </div>
                {showContent &&
                    <div className="details">
                        <div className="hr">
                            <hr></hr>
                        </div>
                        <p className="prize">Prize Money:</p>
                        <div className="amount">
                            <p className="winner">Winners: ₹{game['winner']}</p>
                            <div className="vertical-line"></div>
                            <p className="runner">Runner Up: ₹{game['runnerup']}</p>
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
                            {
                                    Object.entries(game['coordinators']).map(([key, value]) => (
                                        <div className="cinfo">
                                            <p className="name">{key}:</p>
                                            <p className="mob">{value}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="right-column">
                <img src={showContent ? image : imagesmall} className="image"></img>
            </div>
        </div>
    );
};

export default SportsContainer;
