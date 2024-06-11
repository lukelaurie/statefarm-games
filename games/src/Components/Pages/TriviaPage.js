import React from "react";
import JakeSpeaking from "../../TriviaPage/JakeSpeaking";
import AnimationComponent from "../../TriviaPage/AnimationComponent";

const TriviaPage = () => {
  return (
    <>
    <font color='red'>
      <h6>State Farm Trivia!</h6>
      <h5>with Jake and Caitlin</h5>
      </font>
      <JakeSpeaking/>
      <AnimationComponent/>
    </>
  );
};

export default TriviaPage;
