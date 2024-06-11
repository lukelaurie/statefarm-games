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
        position="right center">
          <div>
            <h5>
              <font color='red'>
                Jake's super special question
                </font>
                </h5>
                </div>
                <div>
          <button>The state farm website fejnfke fewjkfnew fewjkf</button>
          <button>Option 2</button>
          </div>
        </Popup>
    </div>
  );
};

export default JakeSpeaking;