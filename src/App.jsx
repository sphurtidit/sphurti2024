import './App.css'
import SportsSection from './Components/Sports_section/Sports_section'
import HeroPage from './Components/HeroPage/HeroPage'
import Navbar from './Components/Navbar/navbar'
import Timer from './Components/timer/timer'
import TeamSec from './Components/team_sec/team_sec'
import Footer from './Components/Footer/Footer'
import Messages from "./Components/Messages/Messages"
import Mobile_HeroPage from './Components/Mobile_HeroPage/Mobile_HeroPage'
import Main_HeroPage from './Components/Main_HeroPage/Main_HeroPage'
function App() {

  return (
    <>
    <div className="background-container">
    <Navbar />   
    <Main_HeroPage/>
    {/* <HeroPage /> */}
    <Timer/>
    <Messages/>
    <SportsSection/>
    <TeamSec/>
    {/* <Mobile_HeroPage /> */}
    <Footer/>
    </div> 
    </>
  )
}

export default App
