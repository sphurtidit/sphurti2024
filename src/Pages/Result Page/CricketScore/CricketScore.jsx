import "./CricketScore.css";
import DIT from "../../assets/DIT.png";
const CricketScore = () => {
  return (
    <>
      <div className="cricketScore">
        <div className="ScoreInfo">
          <div className="teamImg">
            <img className="teamlogo" src={DIT}></img>
            <div className="desc">Team 1 Name</div>
          </div>
          <div className="Information">
          <div className="Score"><p className="InfoText">SCORE</p></div>
          <div className="Over"><p className="InfoText">OVER</p></div>
          </div>
        </div>
        <div className="ScoreInfo">
            <div className="teamImg">
          <img className="teamlogo" src={DIT}></img>
            <div className="desc">Team 2 Name</div>
          </div>
          <div className="Information">
          <div className="Score"><p className="InfoText">SCORE</p></div>
          <div className="Over"><p className="InfoText">OVER</p></div>
          </div>
        </div>
        <div className="BlackFooter">
          <div className="FooterText">TEAM 1 WON THE TOSS AND CHOSE TO BAT</div>
        </div>
      </div>
    </>
  );
};
export default CricketScore;
