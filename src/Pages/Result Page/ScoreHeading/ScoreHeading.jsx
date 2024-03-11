import './ScoreHeading.css';

const Heading = ({ team1, team1Score, team2, team2Score }) => {
    return (
        <>
            <div className="team-head-name">{team1}</div>
            <div className="score-slant-container">
                <div className="score-slant-1">
                    <p className="score-slant-score">{team1Score}</p>
                </div>
                <div className="score-slant-2">
                    <p className="score-slant-score">{team2Score}</p>
                </div>
            </div>
            <div className="team-head-name">{team2}</div>
        </>
    );
}

export default Heading;