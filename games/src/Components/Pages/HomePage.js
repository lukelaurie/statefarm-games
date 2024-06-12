import React from "react";
import "../../styles/homepagestyle.css";

const HomePage = () => {  
  return (
    <>
    <div className="home">
          <img src= "homescreen.jpg" alt="homescreen" className = "homepage"/>
          {/* <li><Link to="/car">Go to Car Page</Link></li>
          <li><Link to="/trivia">Go to Trivia Page</Link></li> */}
          <button className='bball' onClick={() => window.location.href = "/trivia"}>TRIVIA BALL</button>
          <button className='car' onClick={() => window.location.href = "/car"}>ROAD QUEST</button>   
          <button className='cs2' >COMING SOON!</button>  
          <button className='cs1' >COMING SOON!</button>  
          <h1 className='begin'> STATE FARM MINI-GAME MANIA </h1>   
      </div>
    </>
  );
};

export default HomePage;
