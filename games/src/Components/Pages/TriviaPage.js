import React from "react";
import JakeSpeaking from "../../TriviaPage/JakeSpeaking";
import AnimationComponent from "../../TriviaPage/AnimationComponent";
import TriviaHeader from '../../TriviaPage/TriviaHeader';
import StateFarmSite from '../../TriviaPage/StateFarmSite'
import '../../App.css';

const TriviaPage = () => {
  return (
    <div className="TriviaBackground">
      <TriviaHeader/>
      <StateFarmSite/>
      <JakeSpeaking/>
      <AnimationComponent/>
    </div>
  );
};

export default TriviaPage;
