import "./App.css";
import SportsSection from "./Components/Sports_section/Sports_section";
import Main_HeroPage from "./Components/Main_HeroPage/Main_HeroPage";
import Timer from "./Components/timer/timer";
import TeamSec from "./Components/team_sec/team_sec";
import Footer from "./Components/Footer/Footer";
import Messages from "./Components/Messages/Messages";
import Nav from "./Components/Navbar/nav";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebase";
// import Mobile_HeroPage from './Components/Mobile_HeroPage/Mobile_HeroPage'
import { Lines,Cube } from "react-preloaders";
import React, { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  const [team, setTeam] = useState([]);
  const [sports, setSports] = useState([]);
  useEffect(() => {
    
    const r = getDocs(collection(db, "Team")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.precedence - b.precedence);
      const sports = [];
      const teams = [];
      temp.map((t) => {
        if (t.category == "Sports Coordinator") {
          console.log(t);
          sports.push(t);
        } else {
          teams.push(t);
        }
      })
      
      
      return sports,teams;

    })
    .then(({sports,teams})=>{
      setLoading(false);
      setSports(sports);
      setTeam(teams);
    })
    .catch(error => {
      setLoading(true)
      console.log(error)
    });
  
    return () => {
      r;
    };
  }, []);
  console.log(team)
  return (
    <>
      <React.Fragment>
        <div className="background-container">
          <Nav />
          <Main_HeroPage />
          <Timer />
          <Messages />
          <SportsSection teams={team} sport={sports} />
          <TeamSec />
          <Footer />
        </div>
        <Lines customLoading={loading} />
      </React.Fragment>
    </>
  );
}

export default App;
