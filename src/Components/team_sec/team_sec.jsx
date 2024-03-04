import './team_sec.css'
import TeamCard from '../team_card/team_card'
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import PropTypes from "prop-types";



function TeamSec({teams,sport}) {
  // console.log(teams,sport);
  console.log(sport)
 
    
    // useEffect(()=>{
      
    //   const r=getDocs(collection(db,"Team")).then((querySnapshot)=>{
    //     const temp=querySnapshot.docs.map((doc)=>doc.data());
    //     temp.sort((a,b)=>a.precedence-b.precedence);
    //     const sportss=[]
    //     const teamss=[]
    //     temp.map((t)=>{
    //       if(t.category=="Sports Coordinator"){
    //         sportss.push(t)
    //       }
    //       else{
    //         teamss.push(t)
    //       }
          
    //     })
    //     setSports(sportss);
    //     setTeam(teamss)
        
    //   })

    //   return ()=>{
    //     r;
    //   }
    // },[])

  return (
    <div className="whole team team-nav">
      <div className="heading">
        <h1>OUR TEAM</h1>
      </div>

      <div className="subheading">
        <h1>FACULTY COORDINATOR</h1>
      </div>
      <div className="FacultyCard">
        {sport.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={sport.color} />

        })}

      </div>

      <div className="subheading">
        <h1>STUDENT COORDINATOR</h1>
      </div>
      <div className="StudentCard">
      {teams.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={sport.color} />

        })}
      </div>
    </div>
  )
}
TeamSec.propTypes = {
  sport: PropTypes.array,
  teams: PropTypes.array,
  
};

export default TeamSec;
