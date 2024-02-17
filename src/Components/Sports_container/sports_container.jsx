import { useState } from 'react';
import "./sports_container.css";
import badminton from '../../assets/badminton.png'
import badmintonsmall from '../../assets/badminton small.png'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import flag from '../../assets/flag.png'

const SportsContainer = (games) => {
    const [showContent, setShowContent] = useState(false);
    const viewDetails = () => {
        setShowContent(!showContent);
    }
    let col=(games.type==1)?"yellow":(games.type==2)?"red":"purple";
    return (
        <div className={`sports-container ${col}`}>
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
                    <div className="vertical-line"></div>
                    <div className="fee-text">
                        <p className="cate">GIRLS</p>
                        <p className="cate-fees">{games.girlfees}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button title='Register' className='primary' >
                        Register</button>
                    <button title='detail' className='secondary' onClick={viewDetails}>
                        {showContent ? (<>View Less <MdKeyboardArrowUp /> </>) : (<>View Details <MdKeyboardArrowDown /> </>)}
                    </button>
                </div>
                {showContent &&
                    <div className="details">
                        <div className="hr">
                            <hr></hr>
                        </div>
                        <p className="prize">Prize Money:</p>
                        <div className="amount">
                            <p className="winner">Winners: ₹99</p>
                            <div className="vertical-line"></div>
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
                }
            </div>
            <div className="right-column">
                <img src={showContent?badminton:badmintonsmall} className="image"></img>
            </div>
        </div>
    );
};

export default SportsContainer;
