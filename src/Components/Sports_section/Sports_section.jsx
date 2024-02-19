// nimport React from 'react';
import SportsContainer from '../Sports_container/sports_container';
import './Sports_section.css';
import badminton from '../../assets/badminton.png'
import badmintonsmall from '../../assets/badminton small.png'
import cricket from '../../assets/cricket.png'
import cricketsmall from '../../assets/cricket small.png'
import football from '../../assets/football.png'
import footballsmall from '../../assets/football small.png'
import volleyball from '../../assets/volleyball.png'    
import volleyballsmall from '../../assets/volleyball small.png'
import basketball from '../../assets/football.png'    
import basketballsmall from '../../assets/football small.png'
import tabletennis from '../../assets/table tennis.png'  
import tabletennissmall from '../../assets/table tennis small.png'
const SportsSection = () => {
    return (
        <div className='parent-container'>
            <div className='heading'><h1>SPORTS</h1></div>
            <div className='allsports'>
                <SportsContainer name="BADMINTON" boyfees="₹1500" girlfees="₹1000" type="1" image={badminton} imagesmall={badmintonsmall}/>
                <SportsContainer name="BASKETBALL" boyfees="₹1500" girlfees="₹1000" type="2" image={basketball} imagesmall={basketballsmall}/>
                <SportsContainer name="CRICKET" boyfees="₹1500" girlfees="₹1000" type="3"image={cricket} imagesmall={cricketsmall}/>
                <SportsContainer name="VOLLEYBALL" boyfees="₹1500" girlfees="₹1000" type="3" image={volleyball} imagesmall={volleyballsmall}/>
                <SportsContainer name="TABLE TENNIS" boyfees="₹1500" girlfees="₹1000" type="1" image={tabletennis} imagesmall={tabletennissmall}/>
                <SportsContainer name="FOOTBALL" boyfees="₹1500" girlfees="₹1000" type="2" image={football} imagesmall={footballsmall}/>
            </div>
        </div>
    );
};

export default SportsSection;
