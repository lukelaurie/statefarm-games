import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Font.css';
import JakeClass from "./JakeClass"
import './Button.css';
import Buttons from './Buttons.js'

const JakeSpeaking = () => {
  return (
    <div>
      <Popup trigger=
        {<button className="button"> <JakeClass/> </button>}
        position="right bottom" 
        contentStyle={{ width: '700px', height: '200px' }}>
          <Buttons/>
        </Popup>
    </div>
  );
};

export default JakeSpeaking;