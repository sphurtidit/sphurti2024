import './TableTennisSection.css'
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
// import data from "../../../Data/BasketBall.json";
// import bdata from "../../../Data/TableTennisBoys.json"
// import mdata from "../../../Data/TableTennisMixed.json"

// import BasketballScore from "./BasketballScore";
import SetMatch from '../setMatch/setMatch';

export default function TableTennis() {
  const [boys, setBoys] = useState("active");
  const [girls, setGirls] = useState("inactive");
  const [boysData, setBoysData] = useState([]);
  const [girlsData, setGirlsData] = useState([]);
  const [viewBoys, setViewBoys] = useState(true);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const DataLoad=()=>{
      const q = query(collection(db, "fixtures", "Table Tennis", "boys"));
    const p = query(collection(db, "fixtures", "Table Tennis", "mixed"));
    console.log(q)
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
      console.log(boysData)
      setLoading(false)
    }
    else{
      setLoading(true)
    }
  },[boysData,girlsData])

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
            Mixed
        </div>
        </div>
        {loading?<div>Loading</div>:<div>
        {viewBoys?<div className="boysContainer">{boysData.map((item) => {
                        return <SetMatch matchData={item} type = {1}/>
                         
                    }
                    )}</div>:<div className="girlsContainer">{girlsData.map((item) => {
                     
                          return <SetMatch matchData={item} type = {1}/>
                       
                  }
                  )}</div>}  
        </div>}
        
    </section>
  );
}


// 