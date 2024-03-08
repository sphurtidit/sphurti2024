import "./BasketballScore.css";
const BasketballScore = () => {
  return (
    <>
      <div className="basketballScore">
        <div className="teamnames">TEAM 1 NAME</div>
        <div className="ScoreInformation">
          <div className="Score1">
            <p className="ScoreofScore">420</p>
          </div>
          <div className="Score2">
            <p className="ScoreofScore">420</p>
          </div>
        </div>
        <div className="teamnames">TEAM 2 NAME</div>
      </div>
      <table class='table'>
        <tbody>
            <tr>
                <td>Q1</td>
                <td class='tableborder'>NO. OF BASKETS</td>
                <td>NO. OF BASKETS</td>
            </tr>
            <tr>
            <td>Q2</td>
                <td class='tableborder'>NO. OF BASKETS</td>
                <td>NO. OF BASKETS</td>
            </tr>
            <tr>
            <td>Q3</td>
                <td class='tableborder'>NO. OF BASKETS</td>
                <td >NO. OF BASKETS</td>
            </tr>
            <tr>
            <td>Q4</td>
                <td class='tableborder'>NO. OF BASKETS</td>
                <td>NO. OF BASKETS</td>
            </tr>
        </tbody>
      </table>
    </>
  );
};
export default BasketballScore;
