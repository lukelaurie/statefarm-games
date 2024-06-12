import React, { useState, useEffect } from 'react';
import './MoveBox.css';

const MoveBox = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition < 500) {
          return prevPosition + 10; // Adjust the speed as needed
        } else {
          return 0; // Reset position when it goes out of bounds
        }
      });
    }, 50); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="gameArea">
      <div className="box" style={{ left: `${position}px` }}>

      </div>
    </div>
  );
};

export default MoveBox;