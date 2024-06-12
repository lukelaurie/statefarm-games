import React, { useState, useEffect } from "react";
import StartScreen from "../TransitionScreens/StartScreen";
import EndScreen from "../TransitionScreens/EndScreen";
import CarGame from "../CarGame/CarGame";

import "../../styles/carGameStyles.css";
import { useTimer } from "react-timer-hook";

const gameTime = 45;

const CarPage = () => {
  const [score, setScore] = useState(100);
  const [swapView, setSwapView] = useState(0);

  const playSound = (url) => {
    const audio = new Audio(url);
    audio.play()
    .catch(error => {
      console.error('Failed to play audio:', error);
    });
  };

  const modifyScore = (eventType) => {
    let updateScore;
    switch (eventType) {
      case "banana":
        playSound("./banana.mp3");
        updateScore = 20;
        break;
      case "cat":
        playSound("./cat.mp3");
        updateScore = 40;
        break;
      case "pothole":
        playSound("./pop.mp3");
        updateScore = 10;
        break;
      case "flocar":
        playSound("./cheer.mp3");
        updateScore = -10;
        break;
      case "oncomingCar":
        playSound("./crash.mp3");
        updateScore = 100;
        break;
      case "bush":
        playSound("./bush.mp3");
        updateScore = 15;
        break;
    }
    setScore((prevScore) => prevScore + updateScore);
  };

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + gameTime);

  const { seconds, minutes, start } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      if (swapView === 1) setSwapView(2);
    },
  });

  // const restartGame = () => {
  //   const expiryTimestamp = new Date();
  //     expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + gameTime);
  //     start();
  //     setSwapView(1);
  // }

  useEffect(() => {
    if (swapView === 1) {
      const expiryTimestamp = new Date();
      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + gameTime);
      start(expiryTimestamp);
    }
  }, [swapView]);

  return (
    <>
      {swapView === 0 && (
        <>
          <h1 className="HeadingCar">Welcome to...</h1>
          <StartScreen setSwapView={setSwapView} />
        </>
      )}
      {swapView === 1 && (
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
      {swapView === 2 && (
        <>
          <EndScreen score={score} />
        </>
      )}
    </>
  );
};

export default CarPage;
