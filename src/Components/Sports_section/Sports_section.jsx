// nimport React from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import SportsContainer from '../Sports_container/sports_container';
import './Sports_section.css';
import badmintonimg from '../../assets/badminton.png'
import badmintonsmallimg from '../../assets/badminton small.png'
import cricketimg from '../../assets/cricket.png'
import cricketsmallimg from '../../assets/cricket small.png'
import footballimg from '../../assets/football.png'
import footballsmallimg from '../../assets/football small.png'
import volleyballimg from '../../assets/volleyball.png'
import volleyballsmallimg from '../../assets/volleyball small.png'
import basketballimg from '../../assets/football.png'
import basketballsmallimg from '../../assets/football small.png'
import tabletennisimg from '../../assets/table tennis.png'
import tabletennissmallimg from '../../assets/table tennis small.png'
const SportsSection = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [cricket, setcricket] = useState();
    const [football, setfootball] = useState();
    const [volleyball, setvolleyball] = useState();
    const [basketball, setbasketball] = useState();
    const [tabletennis, settabletennis] = useState();
    const [badminton, setbadminton] = useState();

    useEffect(() => {
        const unsub = getDocs(collection(db, "sportDetails")).then((querySnapshot) => {
            const tempdata = querySnapshot.docs.map((doc) => doc.data());
            // setData(tempdata);
            for (let i = 0; i < tempdata.length; i++) {
                if (tempdata[i]['index'] == 1) {
                    console.log(tempdata[i]);
                    setbadminton(tempdata[i]);
                }
                else if (tempdata[i]['index'] == 2) {
                    setbasketball(tempdata[i]);
                }
                else if (tempdata[i]['index'] == 3) {
                    setcricket(tempdata[i]);
                }
                else if (tempdata[i]['index'] == 4) {
                    setvolleyball(tempdata[i]);
                }
                else if (tempdata[i]['index'] == 5) {
                    settabletennis(tempdata[i]);
                }
                else if (tempdata[i]['index'] == 6) {
                    setfootball(tempdata[i]);
                }
            }
        });
        // setLoading(false);
        return () => {
            unsub();
        }
    }, []);
    
    return (
        <div className='parent-container'>
            <div className='heading'><h1>SPORTS</h1></div>
            <div className='allsports'>
                <SportsContainer name={badminton} type="1" image={badmintonimg} imagesmall={badmintonsmallimg} />
                <SportsContainer name={basketball} type="2" image={basketballimg} imagesmall={basketballsmallimg} />
                <SportsContainer name={cricket} type="3" image={cricketimg} imagesmall={cricketsmallimg} />
                <SportsContainer name={volleyball} type="3" image={volleyballimg} imagesmall={volleyballsmallimg} />
                <SportsContainer name={tabletennis} type="1" image={tabletennisimg} imagesmall={tabletennissmallimg} />
                <SportsContainer name={football} type="2" image={footballimg} imagesmall={footballsmallimg} />
            </div>
        </div>
    );
};

export default SportsSection;
