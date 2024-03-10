import "./BasketballScore.css";
const BasketballScore = ({  prop }) => {
  console.log(prop)
  var totalteam1 =
    prop.set1.team1 +
    prop.set2.team1 +
    prop.set3.team1 +
    prop.set4.team1;
  var totalteam2 =
    prop.set1.team2 +
    prop.set2.team2 +
    prop.set3.team2 +
    prop.set4.team2;

  return (
    <>
      <div className="basketballScore">
        <div className="teamnames">{prop.team1}</div>
        <div className="ScoreInformation">
          <div className="Score1">
            <p className="ScoreofScore">{totalteam1}</p>
          </div>
          <div className="Score2">
            <p className="ScoreofScore">{totalteam2}</p>
          </div>
        </div>
        <div className="teamnames">{prop.team2}</div>
      </div>
      <table class="table">
        <tbody>
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
    </>
  );
};
export default BasketballScore;
