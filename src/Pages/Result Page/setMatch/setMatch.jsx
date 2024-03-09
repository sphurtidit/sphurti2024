import "./setMatch.css";
import imgTeam from "../../assets/sphurti.png"

const SetMatch = () => {
    // console.log(image);
    return <>
    <table className="WholeContent">
        <th className="BlackBox">
            <td className="GreenBox">
            <p>Won</p>
            </td>
            <td className="set1">
                <p>Set 1</p>
            </td>
            <td className="set1">
            <p>Set 2</p>
            </td>
            <td className="set1">
            <p>Set 3</p>
            </td>
        </th>
                
        <th className="LightPink">
            <td className="LightPink1">
            <img src={imgTeam}/> <p>Team 1</p> </td>
            <td className="LightPink1"><p>Tanya</p></td>
            <td className="LightPink1"><p>Tanya</p></td>
            <td className="LightPink1"><p>Tanya</p></td>
        </th>

         <th className="DarkPink">
            <td className="DarkPink1">
                <div className="RedBox">
                    <p>Lost</p>
                </div>
                <img src={imgTeam} />
                <p>Team 2</p>
            </td>
            <td className="DarkPink1"><p>Tanya</p></td>
            <td className="DarkPink1"><p>Tanya</p></td>
            <td className="DarkPink1"><p>Tanya</p></td>
         </th>

    </table>
    
    </>;
}

export default SetMatch;