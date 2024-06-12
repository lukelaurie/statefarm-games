import React, { useState } from 'react';
import './ScoreBoard.css';
import './Buttons.js';

function ScoreBoard({ correctCount, incorrectCount }) {
    return (
      <div className="board">
      <font color='white'>
        <div>
        <h7>{correctCount} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {incorrectCount}</h7>
          </div>
        </font>
      </div>
    );
  };

  export default ScoreBoard;