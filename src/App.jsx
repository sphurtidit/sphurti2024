import "./App.css";
import SportsSection from "./Components/Sports_section/Sports_section";
import Main_HeroPage from "./Components/Main_HeroPage/Main_HeroPage";
import Navbar from "./Components/Navbar/navbar";
import Timer from "./Components/timer/timer";
import TeamSec from "./Components/team_sec/team_sec";
import Footer from "./Components/Footer/Footer";
import Messages from "./Components/Messages/Messages";
// import Mobile_HeroPage from './Components/Mobile_HeroPage/Mobile_HeroPage'
import { Lines } from "react-preloaders";
import React, { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);
  return (
    <>
    <React.Fragment>
    <div className="background-container">
    <Navbar />   
    <Main_HeroPage/>
    <Timer/>
    <Messages/>
    <SportsSection/>
    <TeamSec/>
    <Footer/>
    </div>
    <Lines  customLoading={loading} />
    </React.Fragment> 
    </>
  );
}

export default App;
