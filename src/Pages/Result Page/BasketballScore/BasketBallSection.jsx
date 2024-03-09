import { useEffect, useState } from "react";
import "./BasketBallSection.css";
import data from "../../../Data/BasketBall.json";
import BasketballScore from "./BasketballScore";

export default function BBSection() {
  const [boys, setBoys] = useState("active");
  const [girls, setGirls] = useState("inactive");
  const [boysData, setBoysData] = useState();
  const [girlsData, setGirlsData] = useState();
  const [viewBoys, setViewBoys] = useState(true);
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setBoysData(data)
    setGirlsData(data)
    console.log(data.length)
    setLoading(false)
  },[])
  useEffect(() => {
    if(viewBoys){
        setBoys("active")
        setGirls("inactive")
    }
    else{
        setBoys("inactive")
        setGirls("active")
    }
  },[viewBoys]);
  
  return (
    <section className="basketballContainer">
      <div className="optionsContainer">
        <div onClick={()=>{setViewBoys(true)}} className={boys+' options'} >
            Boys
        </div>
        <div onClick={()=>{setViewBoys(false)}} className={girls+" options"}>
            Girls
        </div>
        </div>
        {loading?<div>Loading</div>:<div>
        {viewBoys?<div className="boysContainer">{Object.keys(boysData).map((key,index)=><BasketballScore team1={"Harsheet"} team2={"Vijayant"} prop={boysData[key]}/>)}</div>:<div className="girlsContainer">{Object.keys(girlsData).map((key,index)=><BasketballScore team1={"Harsheet"} team2={"Vijayant"} prop={girlsData[key]}/>)}</div>}  
        </div>}
        
    </section>
  );
}
