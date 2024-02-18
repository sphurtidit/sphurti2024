// nimport React from 'react';
import SportsContainer from '../Sports_container/sports_container';
import './sports_section.css';
const SportsSection = () => {
    return (
        <div className='parent-container'>
            <div className='heading'><h1>Sports</h1></div>
            <div className='allsports'>
                <SportsContainer name="BADMINTON" boyfees="₹1500" girlfees="₹1000" type="1" />
                <SportsContainer name="BASKETBALL" boyfees="₹1500" girlfees="₹1000" type="2" />
                <SportsContainer name="CRICKET" boyfees="₹1500" girlfees="₹1000" type="3" />
                <SportsContainer name="VOLLEYBALL" boyfees="₹1500" girlfees="₹1000" type="3" />
                <SportsContainer name="TABLETENNIS" boyfees="₹1500" girlfees="₹1000" type="1" />
                <SportsContainer name="FOOTBALL" boyfees="₹1500" girlfees="₹1000" type="2" />
            </div>
        </div>
    );
};

export default SportsSection;
