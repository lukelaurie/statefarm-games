import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TextBox = () => {
  return (
    <div>
      <h4>Popup - TriviaPage</h4>
      <Popup trigger=
        {<button> Click me to start! </button>}
        position="right center">
          <div>TriviaPage</div>
          <button>Click here</button>
        </Popup>
    </div>
  );
};

export default TextBox;