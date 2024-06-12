import React from 'react';
import "./TS.css";


const ImageComponent = () => {

  const Start = ()=> {
    console.log("hi");
  }

  return (
    <div className = "container">
      <img src= "titlescreen.jpg" alt="Title Screen of State Farm Road Quest" className = "mainpage"/>
      <img src= "title.png" alt="State Farm Road Quest" className="title" />
      <button onClick={Start} className='start'>START</button>
    </div>
  );
};

export default ImageComponent;