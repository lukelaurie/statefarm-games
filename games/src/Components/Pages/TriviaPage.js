import React from "react";
import JakeSpeaking from "../../TriviaPage/JakeSpeaking";
import AnimationComponent from "../../TriviaPage/AnimationComponent";
import TriviaHeader from '../../TriviaPage/TriviaHeader';
import StateFarmSite from '../../TriviaPage/StateFarmSite'

const TriviaPage = () => {
  return (
    <>
      <TriviaHeader/>
      <StateFarmSite/>
      <JakeSpeaking/>
      <AnimationComponent/>
    </>
  );
};

export default TriviaPage;
