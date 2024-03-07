import "./TributeHeader.css";
import tributeimg from "../../assets/tributeimg.png";
const TributeHeader = () =>{
return(
    <>
        <div className="heading">
            <h1>IN MEMORY OF</h1>
        </div>
        <div className="tribute-container">
                    <img src={tributeimg} />
            </div>
    </>
);
};
export default TributeHeader;
