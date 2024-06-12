import React from "react";
import Header from "../Headers/Header";
import MoveBox from "../MoveBox";
import StartScreen from '../TransitionScreens/StartScreen';
import EndScreen from '../TransitionScreens/EndScreen';

let score = 500;

const CarPage = () => {
  return (
    <>
      {/* <h1 className = "HeadingCar">Welcome to...</h1>
      <StartScreen /> */}

      <EndScreen score={score}/>

    </>
  );
};

export default CarPage;
