import "./setMatch.css";
import imgTeam from "../../../assets/sphurti.png"

const SetMatch = ({team1,team2,prop}) => {
    var complete=prop.complete
    console.log(prop)
    var text=["playing","playing"]
    var total1=0
    var total2=0
    {Object.keys(prop).map((key, index) => {
        total1+=prop[key].player1
        total2+=prop[key].player2
    })}
    if(complete==0){
        text[0]="playing"
        text[1]="playing"
    }
    else{
        if(total1>total2){
            text[0]="Won"
            text[1]="Lost"
        }
        else{
            text[1]="Won"
            text[0]="Lost"
        }
    }

    
    
    // delete prop.complete
    
    return <>
    <table className="WholeContent">
        <th className="BlackBox">
            <td className={text[0]}>
            <p>{text[0]}</p>
            </td>
            {Object.keys(prop).map((key, index) => (
            <td className="set1">
              <p>{key}</p>
            </td>
          ))}
            
        </th>
                
        <th className="LightPink">
            <td className="LightPink1">
            <img src={imgTeam}/> <p>{team1}</p> </td>
            {Object.keys(prop).map((key, index) => (
            <td className="set1">
              <p>{prop[key].player1}</p>
            </td>
          ))}
        </th>

         <th className="DarkPink">
            <td className="DarkPink1">
                <div className={text[1]}>
                    <p>{text[1]}</p>
                </div>
                <img src={imgTeam} />
                <p>{team2}</p>
            </td>
            {Object.keys(prop).map((key, index) => (
            <td className="set1">
              <p>{prop[key].player2}</p>
            </td>
          ))}
         </th>

    </table>
    
    </>;
}

export default SetMatch;