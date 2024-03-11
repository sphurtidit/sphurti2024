import Badminton from "../Badminton/Badminton";
import BBSection from "../BasketballScore/BasketBallSection";
import "./Navbar.css";
import { useState } from "react";
import VolleyballResult from "../Volleyball/volleyball";
import Cricket from "../CricketScore/CricketSection";
import TableTennis from "../TableTennis/TableTennisSection";
import Football from "../Football/FootballSection";

const navJSON = [
  {
    name: "Cricket",
    index: 0,
  },
  {
    name: "Football",
    index: 1,
  },
  {
    name: "VolleyBall",
    index: 2,
  },
  {
    name: "Basketball",
    index: 3,
  },

  {
    name: "Table Tennis",
    index: 4,
  },
  {
    name: "Badminton",
    index: 5,
  },
];
export default function Navbar() {
  const [index, setIndex] = useState(0);
  // useEffect(()=>{
  //   console.log(index)
  // },[index])
  return (
    <>
      <div className="results-navContainer">
        <ul>
          {navJSON.map((item, i) => {
            return (
              <li
                className={index === item.index ? 'activeNav' : ''}
                onClick={() => {
                  setIndex(item.index);
                }}
                key={i}
              >
                <div className="divContainer">{item.name}</div>
              </li>
            );
          })}
        </ul>
        <div className="sportContainer">
          {index == 0 ? (
            <Cricket />
          ) : index == 1 ? (
            <Football />
          ) : index == 2 ? (
            <VolleyballResult />
          ) : index == 3 ? (
            <BBSection />
          ) : index == 4 ? (
            <TableTennis />
          ) : (
            <Badminton />
          )}
        </div>
      </div>
    </>
  );
}