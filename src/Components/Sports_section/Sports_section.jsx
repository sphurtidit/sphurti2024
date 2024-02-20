// import React from 'react';
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
import basketballimg from '../../assets/basketball.png'
import basketballsmallimg from '../../assets/basketball small.png'
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
        return () => {
            unsub;
        }
    }, []);

    return (
        <>
            {badminton ? (<div className='parent-container-sports'>
                <div className='heading'><h1>SPORTS</h1></div>
                <div className='allsports'>
                    <SportsContainer game={badminton} type="1" image={badmintonimg} imagesmall={badmintonsmallimg} />
                    <SportsContainer game={basketball} type="2" image={basketballimg} imagesmall={basketballsmallimg} />
                    <SportsContainer game={cricket} type="3" image={cricketimg} imagesmall={cricketsmallimg} />
                    <SportsContainer game={volleyball} type="3" image={volleyballimg} imagesmall={volleyballsmallimg} />
                    <SportsContainer game={tabletennis} type="1" image={tabletennisimg} imagesmall={tabletennissmallimg} />
                    <SportsContainer game={football} type="2" image={footballimg} imagesmall={footballsmallimg} />
                </div>
            </div>) : <div className='loading'>Loading...</div>}

        </>
    );
};

export default SportsSection;
