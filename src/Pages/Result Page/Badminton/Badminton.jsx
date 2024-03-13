import "./Badminton.css";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import SetMatch from "../setMatch/setMatch";

export default function Badminton() {
  const [boys, setBoys] = useState("active");
  const [girls, setGirls] = useState("inactive");
  const [boysData, setBoysData] = useState([]);
  const [girlsData, setGirlsData] = useState([]);
  const [naruto, setNaruto] = useState([]);
  const [hinata, setHinata] = useState([]);
  const [viewBoys, setViewBoys] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const DataLoad = () => {
      const q = query(
        collection(db, "fixtures", "badminton", "boys"),
        orderBy("order")
      );
      const p = query(
        collection(db, "fixtures", "badminton", "girls"),
        orderBy("order")
      );

      const unsub = onSnapshot(q, (snapshot) => {
        const newFix = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBoysData(newFix);
      });

      const upsub = onSnapshot(p, (snapshot) => {
        const newFix = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGirlsData(newFix);
      });
    };

    DataLoad();

    return () => {
      // Cleanup logic here
    };
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
      if (boysData[i].sid != boysData[i - 1].sid) {
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

  function sortGirls() {
    let newnaruto = [];
    let rasengan = [];

    rasengan.push(girlsData[0]);
    rasengan.push(girlsData[1]);
    rasengan.push(girlsData[2]);
    newnaruto.push(rasengan);
    rasengan = [];

    for (let i = 3; i < girlsData.length; i++) {
      if (girlsData[i].sid != girlsData[i - 1].sid) {
        if (rasengan.length > 0) {
          newnaruto.push(rasengan);
          rasengan = [];
          rasengan.push(girlsData[i]);
        } else {
          rasengan.push(girlsData[i]);
          continue;
        }
      } else {
        rasengan.push(girlsData[i]);
      }
    }
    newnaruto.push(rasengan);
    setHinata(newnaruto);
  }

  useEffect(() => {
    if (boysData.length > 0 && girlsData.length > 0) {
      sortBoys();
      sortGirls();
    } else {
      setLoading(true);
    }
  }, [boysData, girlsData]);

  useEffect(() => {
    if (naruto.length > 0 && hinata.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [naruto, hinata]);

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
          {viewBoys ? (
            <div className="boysContainer">
              {naruto.map((row) => {
                
                return (
                  <div className="MatchCard">
                    <p className="matchname">{row[0].name.split("-")[0]}</p>
                    {/* {complete?({team1 > team2?<div></div>}):<></>} */}  
                    {row.map((data) =>
                      data.start ? <SetMatch matchData={data} type={2} /> : null
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="girlsContainer">
              {hinata.map((row) => (
                <div className="MatchCard">
                  <p className="matchname">{row[0].name.split("-")[0]}</p>
                  {row.map((data) => {
                    return data.start ? (
                      <SetMatch matchData={data} type={2} />
                    ) : null;
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
