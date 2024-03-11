import "./FootballScore.css";
import { GoDotFill } from "react-icons/go";

const FootballScore = ({item}) => {
  var goal1=Object.keys(item.goalTeam1)
  var goal2=Object.keys(item.goalTeam2)
  // console.log(item.goalTeam1[goal1[0]])
  
  return (
    <>
      <div className="footballScore">
        <div className="teamnames">{item.team1}</div>
        <div className="ScoreInformation">
          <div className="Score1">
            <p className="ScoreofScore">{goal1.length}</p>
          </div>
          <div className="Score2">
            <p className="ScoreofScore">{goal2.length}</p>
          </div>
        </div>
        <div className="teamnames">{item.team2}</div>
      </div>
      <div className="tableContainer"></div>
      <div className="table">
        <div className="tableColumn">
          <ul>
            
            {goal1.map((key)=>{
              return(
              <li key={key}>
              <div>
                <span>{item.goalTeam1[key]}</span>
                <span className="redgoal">{key}</span>
              </div>
            </li>)
            })}
          </ul>
        </div>
        <div className="tableColumn">
          <ul>
          {goal2.map((key)=>{
              return(
              <li key={key}>
              <div>
                <span>{item.goalTeam2[key]}</span>
                <span className="redgoal">{key}</span>
              </div>
            </li>)
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FootballScore;
