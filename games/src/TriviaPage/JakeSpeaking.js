import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Font.css';
import JakeClass from "./JakeClass"
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
          <button>Option 1</button>
          <button>Option 2</button>
          </div>
        </Popup>
    </div>
  );
};

export default JakeSpeaking;