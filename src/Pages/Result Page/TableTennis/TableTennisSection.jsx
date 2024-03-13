import './TableTennisSection.css';
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import SetMatch from '../setMatch/setMatch';

export default function TableTennis() {
 const [boys, setBoys] = useState("active");
 const [girls, setGirls] = useState("inactive");
 const [naruto, setNaruto] = useState([]);
 const [boysData, setBoysData] = useState([]);
 const [girlsData, setGirlsData] = useState([]);
 const [viewBoys, setViewBoys] = useState(true);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const DataLoad = () => {
      const q = query(collection(db, "fixtures", "Table Tennis", "boys"),orderBy("order"));
      // const p = query(collection(db, "fixtures", "Table Tennis", "mixed"));

      const unsub = onSnapshot(q, (snapshot) => {
        const newFix = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBoysData(newFix);
      });

      // const upsub = onSnapshot(p, (snapshot) => {
      //   const newFix = snapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     ...doc.data(),
      //   }));
      //   setGirlsData(newFix);
      // });

      return () => {
        unsub();
        upsub();
      };
    };

    DataLoad();
 }, []);

 function sortBoys() {
    let newnaruto = [];
    let rasengan = [];

    rasengan.push(boysData[0]);
    rasengan.push(boysData[1]);
    rasengan.push(boysData[2]);
    newnaruto.push(rasengan);
    rasengan = [];

    for (let i = 3; i < boysData.length; i++) {
      if (boysData[i].sid !== boysData[i - 1].sid) {
        if (rasengan.length > 0) {
          newnaruto.push(rasengan);
          rasengan = [];
          rasengan.push(boysData[i]);
        } else {
          rasengan.push(boysData[i]);
          continue;
        }
      } else {
        rasengan.push(boysData[i]);
      }
    }
    newnaruto.push(rasengan);
    setNaruto(newnaruto);
 }

 useEffect(() => {
    if (boysData.length > 0) {
      sortBoys();
    }
 }, [boysData]);

 useEffect(() => {
    if (viewBoys) {
      setBoys("active");
      setGirls("inactive");
    } else {
      setBoys("inactive");
      setGirls("active");
    }
 }, [viewBoys]);

 useEffect(() => {
    if (naruto.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
 }, [naruto]);

 return (
    <section className="basketballContainer">
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {viewBoys ? (
            <div className="boysContainer">
              {naruto.map((row) => (
                <div className="MatchCard">
                 <p className="matchname">{row[0].name.split("-")[0]}</p>
                 {row.map((data) => (
                    data.start ? <SetMatch matchData={data} type={2} /> : null
                  ))}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </section>
 );
}
