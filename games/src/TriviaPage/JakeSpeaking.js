import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Font.css';
import JakeClass from "./JakeClass"
import SoundButton from "./SoundEffect";
import Sound from './SoundEffect.mp3';
import './Button.css';

const JakeSpeaking = () => {
  return (
    <div>
      <Popup trigger=
        {<button className="button"> <JakeClass/> </button>}
        position="right bottom" 
        contentStyle={{ width: '600px', height: '200px' }}>
          <div>
            <h5>
              <font color='red'>
                Jake's super special question
                </font>
                </h5>
                </div>
                <div>
          <SoundButton soundFile={Sound} label="Option 1" />
          <button>Option 2</button>
          </div>
        </Popup>
    </div>
  );
};

export default JakeSpeaking;