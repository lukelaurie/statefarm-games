import React, { useState } from 'react';

function Buttons() {
    const [count, setCount] = useState(1);
    const [questionText, setDisplayText] = 
        useState(<h4>Jake's super special question</h4>);
  const [buttonText1, setButtonText1] = useState('Option 1');
  const [buttonText2, setButtonText2] = useState('Option 2');
  const [buttonText3, setButtonText3] = useState('Option 3');

  const handleClick = () => {
    // Change the button text when clicked
    setButtonText1('Next answer choice 1');
    setButtonText2('Next answer choice 2');
    setButtonText3('Next answer choice 3');
  };

  const updateText = () => {
    setDisplayText(<h4>Next question</h4>);
  }

  const bothActions = () => {
    updateText();
    handleClick();
  };

  return (
    <div>
        <font color = 'red'>{questionText}</font>
    <div className="button-container">
      <button onClick={bothActions}><p1>{buttonText1}</p1></button>
      <button onClick={handleClick}><p1>{buttonText2}</p1></button>
      <button onClick={handleClick}><p1>{buttonText3}</p1></button>
    </div>
    </div>
  );
}

export default Buttons;