import "./BasketBallSection.css";
import BasketballScore from "./BasketballScore";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function BBSection() {
  const [boys, setBoys] = useState("active");
  const [girls, setGirls] = useState("inactive");
  const [boysData, setBoysData] = useState([]);
  const [girlsData, setGirlsData] = useState([]);
  const [viewBoys, setViewBoys] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const DataLoad=()=>{
      const q = query(collection(db, "fixtures", "basketball", "boys"));
    const p = query(collection(db, "fixtures", "basketball", "girls"));
    const unsub = onSnapshot(q, (snapshot) => {
      const newFix = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(newFix);
      setBoysData(newFix);
    });
    const upsub = onSnapshot(p, (snapshot) => {
      const newFix = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
        setGirlsData(newFix);
      
      // console.log(newFix);
      
    })
      
    }
    console.log(girlsData)
    
    DataLoad()
      
    
    return () =>{
      
    } ;
  }, []);

  useEffect(()=>{
    if(boysData.length>0 && girlsData.length>0){
      setLoading(false)
    }
    else{
      setLoading(true)
    }
  },[boysData,girlsData])

  
  
  // console.log(boysData);
  console.log(girlsData);
  useEffect(() => {
    if (viewBoys) {
      setBoys("active");
      setGirls("inactive");
    } else {
      setBoys("inactive");
      setGirls("active");
    }
  }, [viewBoys]);

  return (
    <section className="basketballContainer">
      <div className="optionsContainer">
        <div
          onClick={() => {
            setViewBoys(true);
          }}
          className={boys + " options"}
        >
          Boys
        </div>
        <div
          onClick={() => {
            setViewBoys(false);
          }}
          className={girls + " options"}
        >
          Girls
        </div>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {/* {viewBoys?<div className="boysContainer">{Object.keys(boysData).map((key,index)=><BasketballScore team1={"Harsheet"} team2={"Vijayant"} prop={boysData[key]}/>)}</div>:<div className="girlsContainer">{Object.keys(girlsData).map((key,index)=><BasketballScore team1={"Harsheet"} team2={"Vijayant"} prop={girlsData[key]}/>)}</div>}   */}
          {viewBoys?<div className="boysContainer">{boysData.map((data)=><BasketballScore prop={data}/>)}</div>:<div className="boysContainer">{girlsData.map((data)=><BasketballScore prop={data}/>)}</div>}
        </div>
      )}
    </section>
  );
}
