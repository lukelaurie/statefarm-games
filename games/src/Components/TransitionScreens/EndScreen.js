import React, { useEffect, useState } from "react";
import "./TS.css";

const ImageComponent = ({ score }) => {
  const [Info1, setInfo1] = useState("");
  const [Info2, setInfo2] = useState("");
  const [Info3, setInfo3] = useState("");

  useEffect(() => {
    {
      if (score < 100) {
        setInfo1("You're the Best Driver!!!");
        setInfo2("Everyone should learn from you on how to navigate the road.");
        setInfo3("Would you like to become the face of State Farm Auto?");
      } else if (score < 200) {
        setInfo1("You're a Safe Driver!");
        setInfo2("Thank you for being a responsible driver.");
        setInfo3(
          "State Farm will continue to insure your automobile adventures!"
        );
      } else if (score < 300) {
        setInfo1("You're an Okay Driver.");
        setInfo2("You're not the best driver but that's okay.");
        setInfo3("State Farm encourages you to drive safer on the roads.");
      } else if (score > 300) {
        setInfo1("You're a Risky Driver...");
        setInfo2(
          "Unfortunately State Farm will drop you due to your many accidents."
        );
        setInfo3(
          "We have the priority to protect other people from you on the road."
        );
      }
    }
  }, []);

  const QUIT = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="container2">
        <img
          src="ending.jpg"
          alt="Title Screen of State Farm Road Quest"
          className="endingpage"
        />
        <button onClick={QUIT} className="quit">
          QUIT
        </button>
      </div>

      <div className="container3">
        <h1 className="yourrate"> Your rate is ${score} a month!</h1>
        <h1 className="i1">{Info1} </h1>
        <h1 className="i2">{Info2} </h1>
        <h1 className="i3">{Info3} </h1>
      </div>
    </>
  );
};

export default ImageComponent;
