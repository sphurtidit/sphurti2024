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
    <div className="whole">
      <p className="Heading1">
        OUR TEAM
      </p>
      <p className="Heading2">
        Faculty co-ordinator
      </p>
      <div className="FacultyCard">
        {sports.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={"yellow"} />
        })}
       
      </div>
      <p className="Heading2">
        Student co-ordinator
      </p>
      <div className="StudentCard">
      {team.map((sport)=>{
         return <TeamCard key={sport.name} name={sport.name} designation={sport.category} phone={sport.phone} image={sport.image} type={"yellow"} />
        })}
      </div>
    </div>
  )
}


// src\Components\team_sec\team_sec.jsx
export default TeamSec;
