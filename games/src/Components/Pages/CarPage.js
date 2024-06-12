import React, {useState, useEffect}  from "react";
import CarGame from "../CarGame/CarGame";
import "../../styles/carGameStyles.css"

const CarPage = () => {
  const [score, setScore] = useState(100);

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
    }
    setScore(prevScore => prevScore + updateScore);
  }

  return (
    <div className="xx">
      <h1 className="car-title">Current Rates: {score}</h1>
      <div className="moving-background">
        <div className="road-container">
          <CarGame modifyScore={modifyScore}/>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
