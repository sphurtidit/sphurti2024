import "./BasketballScore.css";
import Heading from "../ScoreHeading/ScoreHeading";
const BasketballScore = ({  prop }) => {
  console.log(prop)
  var totalteam1 =
    Number(prop.set1.team1) +
    Number(prop.set2.team1) +
    Number(prop.set3.team1) +
    Number(prop.set4.team1);
  var totalteam2 =
  Number(prop.set1.team2) +
  Number(prop.set2.team2) +
  Number(prop.set3.team2) +
  Number(prop.set4.team2);

  const getWinnerStatement = () => {
    if(totalteam1>totalteam2){
      return `${prop.team1} WON THE MATCH`
    }
    if(totalteam2>totalteam1){
      return `${prop.team2} WON THE MATCH`
    }
    return "MATCH DRAW"
  }

  return (
    <>
    <div className="match-heading">
        <p><span className="match-name">{prop.name}</span>{` - ${prop.team1} VS ${prop.team2}`}</p>
      </div>
      <div className="basketballScore">
        <Heading team1={prop.team1} team1Score={totalteam1} team2={prop.team2} team2Score={totalteam2}/>
      </div>
      <table class="basket-table">
        <tbody>
        <tr>
            <td>QUARTER</td>
            <td class="tableborder">{prop.team1}</td>
            <td>{prop.team2}</td>
          </tr>
          <tr>
            <td>Q1</td>
            <td class="tableborder">{prop.set1.team1}</td>
            <td>{prop.set1.team2}</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td class="tableborder">{prop.set2.team1}</td>
            <td>{prop.set2.team2}</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td class="tableborder">{prop.set3.team1}</td>
            <td>{prop.set3.team2}</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td class="tableborder">{prop.set4.team1}</td>

            <td>{prop.set4.team2}</td>
          </tr>
        </tbody>
      </table>
      {prop.complete? <div className="FootballFooter">
          <div className="FooterText">
          {getWinnerStatement()}</div>
        </div> : <></>}
    </>
  );
};
export default BasketballScore;
