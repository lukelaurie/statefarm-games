import React, { useState, useEffect } from "react";
import StartScreen from '../TransitionScreens/StartScreen';
import EndScreen from '../TransitionScreens/EndScreen';
import CarGame from "../CarGame/CarGame";
import "../../styles/carGameStyles.css";
import { useTimer } from "react-timer-hook";

let score = 500;


const CarPage = () => {
  const [score, setScore] = useState(100);
  const [swapView, setSwapView] = useState(false);

  const modifyScore = (eventType) => {
    let updateScore;
    switch (eventType) {
      case "banana":
        updateScore = 20;
        break;
      case "cat":
        updateScore = 40;
        break;
      case "pothole":
        updateScore = 10;
        break;
      case "flocar":
        updateScore = -10;
        break;
      case "oncomingCar":
        updateScore = 100;
        break;
      case "bush":
          updateScore = 15;
          break;
    }
    setScore((prevScore) => prevScore + updateScore);
  };

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60);

  const {
    seconds,
    minutes,
    start,
    restart,
    isRunning,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.log("Timer expired");
    }
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <>
      <EndScreen score={score}/>

      {swapView && (
        <>
          <h1 className = "HeadingCar">Welcome to...</h1>
          <StartScreen setSwapView={setSwapView} />
        </>
      )}
      {!swapView && (
        <>
          <div>
            <h1 className="car-title">Current Rates: {score}</h1>
            <div className="timer">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <div className="moving-background">
              <div className="road-container">
                <CarGame modifyScore={modifyScore} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarPage;
