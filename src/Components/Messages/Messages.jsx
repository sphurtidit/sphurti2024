import { useState } from "react";
import "./messages.css";
import raghurama from "../../assets/graghurama.png";
import drrakeshmohan from "../../assets/drrakeshmohan.png";
const Messages = () => {
  const [expandedContent1, setExpandedContent1] = useState(false);
  const [expandedContent2, setExpandedContent2] = useState(false);
  const string1 =
    "It gives me immense pleasure to welcome you all to the academic world of DIT University on the occasion of the 6th annual sports meet &quot;SPHURTI-2020&quot;.For the three days of Sports meet, DIT University will organize a number of sports events for you to join and enjoy. They include Cricket, Football, Basketball, Volleyball, Badminton, and Table-tennis. It gives me immense pleasure to welcome you all to the academic world of DIT University on the occasion of the 6th annual sports meet &quot;SPHURTI-2020&quot;.For the three days of Sports meet, DIT University will organize a number of sports events for you to join and enjoy. They include Cricket, Football, Basketball, Volleyball, Badminton, and Table-tennis.";
  const string2 =
    "I take great pleasure in welcoming all students and sports persons to the SPHURTI-2024, the eighth annual sports meet of DIT University, from 13th March to 15 March 2024. On this occasion, I extend my warm wishes to all the sports persons with a great motto of &quot;Aim for excellence, not perfection.&quot; we will form the nucleus of change when we combine efforts with those who have walked the path before us are combine efforts with those who have walked the path before us and are standing ready to create a year of not just being competitive but one of athletic dominance. Once you’ve prepared mentally and physically for your game, then you are ready to do your best-and your best is the best you can do. The DIT University, Dehradun, under the leadership of Hon'ble vice Chancellor, Prof. G. Raghurama is fully committed for all around development and empowerment of students so that they can realize their full potential and also contribute to the career-building process. Not only that, the DIT University, Dehradun is focused on Scientific development and firmly holds the view that the students should be active participants and not just passive recipients of the knowledge process. Sports play a key role in development of personality of the students. In fact, sports should be a way of life. I call upon the students to make sports an integral part of their life.";
 

  return (
    <>
      <div className="parent-container-messages">
        <div className="headingMessages">
          <h1>MESSAGES</h1>
        </div>
        <div className="Messagebox1" style={{height:"fit-content",transition:"all 0.3s"}}>
          <img className="facpics" src={raghurama} alt="PROF. G. RAGHURAMA" />
          <div className="content">
            <div className="info">
              <h1 className="facname">PROF. G. RAGHURAMA</h1>
              <h3 className="facdesignation">
                VICE CHANCELLOR, DIT UNIVERSITY{" "}
              </h3>
            </div>

            <span className="messages" >
              {!expandedContent1 ? string1.slice(0, 250) : string1}
              {string1.length > 150 && (
                <span
                  onClick={() => {
                    setExpandedContent1(!expandedContent1);
                  }}
                  style={{color:"black",textDecoration:"underline",cursor:"pointer"}}
                >
                  {expandedContent1 ? "...Read Less" : "...Read More"}
                </span>
              )}
            </span>
          </div>
        </div>
        <div className="Messagebox2" style={{height:"fit-content"}}>
          <img
            className="facpics"
            src={drrakeshmohan}
            alt="PROF. DR. RAKESH MOHAN"
          />
          <div className="content">
            <div className="info">
              <h1 className="facname">DR. RAKESH MOHAN</h1>
              <h3 className="facdesignation">
                DEAN, STUDENT WELFARE, DIT UNIVERSITY
              </h3>
            </div>
            <span className="messages">
              {!expandedContent2 ? string2.slice(0, 250) : string2}
              {string1.length > 250 && (
                <span
                  onClick={() => {
                    setExpandedContent2(!expandedContent2);
                  }}
                  style={{color:"black",textDecoration:"underline",cursor:"pointer"}}
                >
                  {expandedContent2 ? "...Read Less" : "...Read More"}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Messages;
