import React from "react";
import JakeSpeaking from "../../TriviaPage/JakeSpeaking";
import AnimationComponent from "../../TriviaPage/AnimationComponent";
import TriviaHeader from '../../TriviaPage/TriviaHeader';

const TriviaPage = () => {
  return (
    <>
      <TriviaHeader/>
      <JakeSpeaking/>
      <AnimationComponent/>
    </>
  );
};

export default TriviaPage;
