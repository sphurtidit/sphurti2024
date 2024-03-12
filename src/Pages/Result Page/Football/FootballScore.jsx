import "./FootballScore.css";
import { GoDotFill } from "react-icons/go";
import Heading from "../ScoreHeading/ScoreHeading";

const FootballScore = ({item}) => {
  var goal1=Object.keys(item.goalTeam1)
  var goal2=Object.keys(item.goalTeam2)

  const getWinnerStatement = () => {
    if(goal1.length>goal2.length){
      return `${item.team1} WON THE MATCH`
    }
    if(goal2.length<goal1.length){
      return `${item.team2} WON THE MATCH`
    }
    return "MATCH DRAW"
  }
  
  return (
    <>
    <div className="match-heading">
        <p><span className="match-name">{item.name}</span>{` - ${item.team1} VS ${item.team2}`}</p>
      </div>
      <div className="footballScore">
        <Heading team1 = {item.team1} team1Score = {goal1.length} team2 = {item.team2} team2Score = {goal2.length}/>
      </div>
      <div className="table">
        <div className="tableColumn">
          <ul>
            {goal1.map((key)=>{
              return(
              <li key={key}>
              <div>
                <span>{item.goalTeam1[key]}</span>
                <span className="redgoal">{key}'</span>
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
                <span className="redgoal">{key}'</span>
              </div>
            </li>)
            })}
          </ul>
        </div>
      </div>
      {item.complete? <div className="FootballFooter">
          <div className="FooterText">
          {getWinnerStatement()}</div>
        </div> : <></>}
    </>
  );
};

export default FootballScore;
