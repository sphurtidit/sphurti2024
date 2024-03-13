import "./CricketScore.css";


const CricketScore = ({ matchData }) => {
  const teamData = [[matchData.team1, matchData.team1Score, matchData.team1Over, matchData.team1Wicket],
  [matchData.team2, matchData.team2Score, matchData.team2Over, matchData.team2Wicket]];
  let team1 = teamData[0];
  let team2 = teamData[1];

  if (matchData.toss != null) {
    if ((matchData.toss == team1[0] && matchData.choose == 'bowl') ||
      (matchData.toss == team2[0] && matchData.choose == 'bat')) {
      const temp = team1;
      team1 = team2;
      team2 = temp;
    }
  }

  const getTossStatement = () => {
    if (matchData.toss == '') {
      return 'waiting for toss';
    } else if (matchData.firstInningComplete == '') {
      return `${matchData.toss} WON THE TOSS AND SELECTED TO ${matchData.choose}`;
    } else if (!matchData.complete) {
      return `${team2[0]} needs ${team1[1] - team2[1] + 1} runs in ${10 - team2[2]} overs`;
    } else {
      if (team1[1] > team2[1]) {
        return `${team1[0]} WON BY ${team1[1] - team2[1]} RUNS`;
      } else {
        return `${team2[0]} WON BY ${10 - team2[3]} WICKETS`
      }
    }
  };

  return (
    <>
      <div className="match-heading">
        <p><span className="match-name">{matchData.name}</span>{` - ${matchData.team1} VS ${matchData.team2}`}</p>
      </div>
      <div className="cricketScore">
        <div className="ScoreInfo">
          <div className="desc">{team1[0]}</div>
          {matchData.toss == '' ? <></> : <div className="Information">
            <div className="Score"><p className="InfoText">{`${team1[1]} / ${team1[3]}`}</p></div>
            <div className="Over"><p className="InfoText">{team1[2]}</p></div>
          </div>}
        </div>
        <div className="ScoreInfo">
          <div className="desc">{team2[0]}</div>
          {matchData.firstInningComplete == '' ? <></> : <div className="Information">
            <div className="Score"><p className="InfoText">{`${team2[1]} / ${team2[3]}`}</p></div>
            <div className="Over"><p className="InfoText">{team2[2]}</p></div>
          </div>}
        </div>
        <div className="BlackFooter">
          <div className="FooterText">
            {getTossStatement()}</div>
        </div>
      </div>
    </>
  );
};
export default CricketScore;
