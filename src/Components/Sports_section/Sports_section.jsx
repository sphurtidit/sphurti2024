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

const SportsSection = ({rule ,cricket,badminton ,tabletennis ,football ,volleyball,basketball}) => {


    return (
        <div className='nav-sports'>
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

        </div>
    );
};

export default SportsSection;
