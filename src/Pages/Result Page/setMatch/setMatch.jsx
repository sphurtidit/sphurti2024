import "./setMatch.css";
import { useState } from "react";
import imgTeam from "../../../assets/sphurti.png"

const SetMatch = ({ matchData, type }) => {
  const columns = new Array(parseInt(matchData.sets) + 1).fill(0);
  console.log(matchData);
  const [teamWon, setTeamWon] = useState('');


  const ResultDiv = ({isWon}) => {
    const resultClass = isWon ? 'won' : 'lost';
    const resultText = isWon ? 'Won' : 'Lost';

    return (
        <div className={`result-declare ${resultClass}`}>
            {resultText}
        </div>
    );
};

  if(matchData.complete){
    console.log("Match is complete");
    let r = 0;
    // IF r > 0, FIRST TEAM WINS
    // IF r < 0, SECOND TEAM WINS
    columns.map((_, index) => {
      if(index == 0) {
      } else {
        if(matchData[`set${index}`].team1 > matchData[`set${index}`].team2) {
          r++;
        } else {
          r--;
        }
      }
    });
    console.log(r);
    if(teamWon === '') {
      if(r > 0) {
        setTeamWon('A');
      } else {
        setTeamWon('B');
      }
      console.log("test" + teamWon);
    }
  }

  const col = type === 0 ? "yellow" : type === 1 ? "purple" : "red";
  return <>
    <table className={`contentBox ${col}`}>
      <tr className="topRow">
        {
          columns.map((_, index) => {
            if (index === 0) {
              return <th className="table-heading live">
                {!matchData.complete ? <></>: <ResultDiv isWon = {teamWon == 'A'}/>}
              </th>;
            }
            return <th className="table-heading">
              Set {index + 1}
            </th>
          })
        }
      </tr>
      <tr className="firstRow">
      {
          columns.map((_, index) => {
            if (index === 0) {
              return <td className="table-content-data">
                {/* <img src={imgTeam} alt="team" /> */}
                <p>{matchData.team1}</p>
              </td>;
            }
            return <td className="table-content-data">
              {matchData[`set${index}`].team1}
            </td>
          })
        }
      </tr>
      <tr className="secondRow">
        {
          columns.map((_, index) => {
            if (index === 0) {
              return <td className="table-content-data">
                {!matchData.complete ? <></>: <ResultDiv isWon = {teamWon == 'B'}/>}
                {/* <img src={imgTeam} alt="team" /> */}
                <p>{matchData.team2}</p>
              </td>;
            }
            return <td className="table-content-data">
              {matchData[`set${index}`].team2}
            </td>
          })
        }
        </tr>
    </table>

  </>;
}

export default SetMatch;