import './FootballScore.css'

const FootballScore=()=>{
    return (
    <>
    <div className="basketballScore">
        <div className="teamnames">Harsheet</div>
        <div className="ScoreInformation">
          <div className="Score1">
            <p className="ScoreofScore">9</p>
          </div>
          <div className="Score2">
            <p className="ScoreofScore">2</p>
          </div>
        </div>
        <div className="teamnames">Vijayant</div>
      </div>
      <div className="tableContainer">
        
      </div>
      <table className="table">
            <thead>
                <tr>
                    Player Name
                </tr>
                <tr>Goal time</tr>
            </thead>
      </table>
    </>)
}

export default FootballScore;