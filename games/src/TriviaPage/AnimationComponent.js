import React from 'react';
import './AnimationComponent.css';
import frame1 from './images/Movement1.png';
import frame2 from './images/Movement2.png';
const AnimationComponent = () => {
  return (
    <div className="animation-container">
      <img src={frame1} alt="Frame 1" className="frame frame1" />
      <img src={frame2} alt="Frame 2" className="frame frame2" />
    </div>
  );
};

export default AnimationComponent;