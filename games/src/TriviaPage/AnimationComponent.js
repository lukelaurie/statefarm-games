import React from 'react';
import './AnimationComponent.css';
import frame1 from './images/Movement1.png';
import frame2 from './images/Movement2.png';
import frame3 from './images/Movement3.png';
import frame4 from './images/Movement4.png';
const AnimationComponent = () => {
  return (
    <div className="animation-container">
      <img src={frame1} alt="Frame 1" className="frame frame1" />
      <img src={frame2} alt="Frame 2" className="frame frame2" />
      <img src={frame3} alt="Frame 3" className="frame frame3" />
      <img src={frame4} alt="Frame 4" className="frame frame4" />
    </div>
  );
};

export default AnimationComponent;