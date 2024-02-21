import { getDocs, collection, getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import SportsContainer from '../Sports_container/sports_container';
import './Sports_section.css';
import badmintonimg from '../../assets/badminton.png'
import cricketimg from '../../assets/cricket.png'
import footballimg from '../../assets/football.png'
import volleyballimg from '../../assets/volleyball.png'
import basketballimg from '../../assets/basketball.png'
import tabletennisimg from '../../assets/table tennis.png'

const SportsSection = () => {
    const [cricket, setcricket] = useState();
    const [football, setfootball] = useState();
    const [volleyball, setvolleyball] = useState();
    const [basketball, setbasketball] = useState();
    const [tabletennis, settabletennis] = useState();
    const [badminton, setbadminton] = useState();
    const [rule, setrule] = useState();

    useEffect(() => {
        const r = getDoc(doc(collection(db, "misc"), "links")).then((docu) => {
        setrule(docu.data()['rulebook']);
        console.log(docu.data()['rulebook']);
        });
        const unsub = getDocs(collection(db, "sportDetails")).then((querySnapshot) => {
            const tempdata = querySnapshot.docs.map((doc) => doc.data());
            for (let i = 0; i < tempdata.length; i++) {
                if (tempdata[i]['index'] == 1) {
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
            r;
            unsub;
        }
    }, []);

    return (
        <>
            {badminton ? (<div className='parent-container-sports'>
                <div className='heading'><h1>SPORTS</h1></div>
                <div className='allsports'>
                    <SportsContainer rule = {rule} game={badminton} type="1" image={badmintonimg} key={badminton['index']}/>
                    <SportsContainer rule = {rule} game={basketball} type="2" image={basketballimg} key={basketball['index']}/>
                    <SportsContainer rule = {rule} game={cricket} type="3" image={cricketimg} key={cricket['index']}/>
                    <SportsContainer rule = {rule} game={volleyball} type="3" image={volleyballimg} key={volleyball['index']}/>
                    <SportsContainer rule = {rule} game={tabletennis} type="1" image={tabletennisimg} key={tabletennis['index']}/>
                    <SportsContainer rule = {rule} game={football} type="2" image={footballimg} key={football['index']}/>
                </div>
            </div>) : <div className='loading'>Loading...</div>}

        </>
    );
};

export default SportsSection;
