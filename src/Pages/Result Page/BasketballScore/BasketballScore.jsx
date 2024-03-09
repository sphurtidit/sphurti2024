import "./BasketballScore.css";
const BasketballScore = ({ team1, team2, prop }) => {
  var totalteam1 =
    prop.quarter1.team1 +
    prop.quarter2.team1 +
    prop.quarter3.team1 +
    prop.quarter4.team1;
  var totalteam2 =
    prop.quarter1.team2 +
    prop.quarter2.team2 +
    prop.quarter3.team2 +
    prop.quarter4.team2;

  return (
    <>
      <div className="basketballScore">
        <div className="teamnames">{team1}</div>
        <div className="ScoreInformation">
          <div className="Score1">
            <p className="ScoreofScore">{totalteam1}</p>
          </div>
          <div className="Score2">
            <p className="ScoreofScore">{totalteam2}</p>
          </div>
        </div>
        <div className="teamnames">{team2}</div>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <td>Q1</td>
            <td class="tableborder">{prop.quarter1.team1}</td>
            <td>{prop.quarter1.team2}</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td class="tableborder">{prop.quarter2.team1}</td>
            <td>{prop.quarter2.team2}</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td class="tableborder">{prop.quarter3.team1}</td>
            <td>{prop.quarter3.team2}</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td class="tableborder">{prop.quarter4.team1}</td>

            <td>{prop.quarter4.team2}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default BasketballScore;
