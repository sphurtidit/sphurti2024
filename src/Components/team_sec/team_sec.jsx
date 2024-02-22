import './team_sec.css'
import TeamCard from '../team_card/team_card'
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function TeamSec() {
    const [team,setTeam]=useState([]);
    const [sports,setSports]=useState([]);
    useEffect(()=>{
      
      const r=getDocs(collection(db,"Team")).then((querySnapshot)=>{
        const temp=querySnapshot.docs.map((doc)=>doc.data());
        temp.sort((a,b)=>a.precedence-b.precedence);
        const sports=[]
        const teams=[]
        temp.map((t)=>{
          if(t.category=="Sports Coordinator"){
            
            sports.push(t)
          }
          else{
            
            teams.push(t)
          }
          
        })
        setSports(sports);
        setTeam(teams)
        
      })

      return ()=>{
        r;
      }
    },[])
  return (
    <div className="whole team team-nav">
      <div className="heading">
        <h1>OUR TEAM</h1>
      </div>
      <div className="heading">
        <h3>FACULTY COORDINATOR</h3>
      </div>
      <div className="FacultyCard">
        {sports.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={"yellow"} />
        })}
       
      </div>
      <div className="heading">
        <h3>STUDENT COORDINATOR</h3>
      </div>
      <div className="StudentCard">
      {team.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={"yellow"} />
        })}
      </div>
    </div>
  )
}

export default TeamSec;
