import { useState } from "react";
import "./messages.css";
import raghurama from "../../assets/graghurama.png";
import drrakeshmohan from "../../assets/drrakeshmohan.png";
const Messages = () => {
  const [expandedContent1, setExpandedContent1] = useState(false);
  const [expandedContent2, setExpandedContent2] = useState(false);

  const toggleContent1 = () => {
    setExpandedContent1(!expandedContent1);
  };
  const toggleContent2 = () => {
    setExpandedContent2(!expandedContent2);
  };
  const getMessagebox1 = () => {
    if (window.matchMedia("only screen and (max-width: 400px)").matches) {
      return {
        height: expandedContent1 ? "22rem" : "12rem",
      };
    } 
    else if (window.matchMedia("only screen and (max-width: 730px)").matches) {
      return {
        height: expandedContent1 ? "43rem" : "17rem",
      };
    } 
    else if (window.matchMedia("only screen and (max-width: 1000px)").matches) {
      return {
        height: expandedContent1 ? "35rem" : "25rem",
      };
    } else {
      return {
        height: expandedContent1 ? "35rem" : "17rem",
      };
    }
  };
  const getMessagebox2 = () => {
    if (window.matchMedia("only screen and (max-width: 400px)").matches) {
      return {
        height: expandedContent2 ? "24rem" : "12rem",
      };
    } else if (
      window.matchMedia("only screen and (max-width: 730px)").matches
    ) {
      return {
        height: expandedContent2 ? "49rem" : "17rem",
      };
    } else {
      return {
        height: expandedContent2 ? "35rem" : "17rem",
      };
    }
  };
  const Messagebox1 = getMessagebox1();
  const Messagebox2 = getMessagebox2();

  return (
    <>
      <div className="parent-container-messages">
        <div className="headingMessages">
          <h1>MESSAGES</h1>
        </div>
        <div className="Messagebox1" style={Messagebox1}>
          <img className="facpics" src={raghurama} alt="PROF. G. RAGHURAMA" />
          <div className="content">
            <div className="info">
              <h1 className="facname">PROF. G. RAGHURAMA</h1>
              <h3 className="facdesignation">
                VICE CHANCELLOR, DIT UNIVERSITY{" "}
              </h3>
            </div>
            <p className="message">
              Sports is not just about physical exercise and competition. It
              instils team spirit, leadership qualities, and develops
              performance character traits such as grit, resilience, and
              self-discipline. Its benefits are not limited only to those who
              play, but also to those who watch and support the players. DIT
              University’s annual sports festival Sphurti is one of the
              occasions that brings all DITians together
              {expandedContent1 ? (
                <>
                  {
                    <p>
                      <br />I am happy to note that the annual sports festival
                      is being
                      <br />
                      organized during 13-15 March 2024.
                      <br />
                      This event will definitely encourage our students to
                      improve their sports skill as well as improve their
                      overall mental & physical health. My best wishes to the
                      organizers for a successful event. This year being our
                      Silver Jubilee year,
                      <br />I hope the event is organized in a manner befitting
                      the occasion.
                      <br />
                      I wish the event a grand success.
                      <br />
                      May all have a great and peaceful &quot;SPHURTI
                      -2024&quot;.
                      <br />
                      <br />
                      Jai Hind!
                      <br />
                      <strong>Prof. G. Raghurama</strong>
                      <br />
                      <strong>Vice Chancellor </strong>
                      <br />
                      <strong>DIT University, Dehradun.</strong>
                    </p>
                  }
                  <button className="readmore" onClick={toggleContent1}>
                    Read less
                  </button>
                </>
              ) : (
                <button className="readmore" onClick={toggleContent1}>
                  Read more
                </button>
              )}
            </p>
          </div>
        </div>
        <div className="Messagebox2" style={Messagebox2}>
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
            <p className="message">
              I take great pleasure in welcoming all students and sports persons
              to the SPHURTI-2024, the eighth annual sports meet of DIT
              University, from 13th March to 15 March 2024. On this occasion, I
              extend my warm wishes to all the sports persons with a great motto
              of &quot;Aim for excellence, not perfection.&quot; we will form
              the nucleus of change when we combine efforts with those who have
              walked the path before us are
              {expandedContent2 ? (
                <>
                  {
                    <p>
                      <br />
                      combine efforts with those who have walked the path before
                      us and are standing ready to create a year of not just
                      being competitive but one of athletic dominance. Once
                      you’ve prepared mentally and physically for your game,
                      then you are ready to do your best-and your best is the
                      best you can do.
                      <br />
                      The DIT University, Dehradun, under the leadership of
                      Hon&apos;ble vice Chancellor, Prof. G. Raghurama is fully
                      committed for all around development and empowerment of
                      students so that they can realize their full potential and
                      also contribute to the career-building process. Not only
                      that, the DIT University, Dehradun is focused on
                      Scientific development and firmly holds the view that the
                      students should be active participants and not just
                      passive recipients of the knowledge process. Sports play a
                      key role in development of personality of the students. In
                      fact, sports should be a way of life. I call upon the
                      students to make sports an integral part of their life.
                      <br />
                      <br />
                      <strong>Prof. (Dr.) Rakesh Mohan</strong>
                      <br />
                      <strong>Dean(Student Welfare)</strong>
                    </p>
                  }
                  <button className="readmore" onClick={toggleContent2}>
                    Read less
                  </button>
                </>
              ) : (
                <button className="readmore" onClick={toggleContent2}>
                  Read more
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Messages;
