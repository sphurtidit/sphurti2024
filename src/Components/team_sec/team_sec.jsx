import './team_sec.css'
import TeamCard from '../team_card/team_card'

function TeamSec() {

  return (
    <div className="whole">
      <p className="Heading1">
        OUR TEAM
      </p>
      <p className="Heading2">
        Faculty co-ordinator
      </p>
      <div className="FacultyCard">
        <TeamCard name={"R. S. Chauhan"} designation={"Sports Officer"} phone={"1234567899"} type={"yellow"} />
       
      </div>
      <p className="Heading2">
        Student co-ordinator
      </p>
      <div className="StudentCard">
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"red"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"yellow"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"purple"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"red"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"yellow"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"purple"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"red"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"yellow"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"purple"} />
        <TeamCard name={"Tanya"} designation={"head"} phone={"1234567899"} type={"yellow"} />
      </div>
    </div>

  )
}


// src\Components\team_sec\team_sec.jsx
export default TeamSec;
