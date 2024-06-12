import React from "react";
import './Font.css';
import './TriviaHeader.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import StateFarmSite from "./StateFarmSite";

const TriviaHeader = () => {
  return (
    <div className="text-box">
    <font color='red'>
      <div className="spacing">
      <h6>State Farm Trivia!</h6>
      <h5> - with Jake and Caitlin</h5>
        </div>
      </font>
    </div>
  );
};

export default TriviaHeader;