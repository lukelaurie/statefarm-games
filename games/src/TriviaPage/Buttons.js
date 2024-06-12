import React, { useState } from 'react';

const questions = [
    {
        question: "In what other language is the State Farm website available?",
        choices: ["French", "Spanish", "Mandarin"],
        answer: "Spanish"
    },
    {
        question: "What is State Farm's iconic saying?",
        choices: ["Like a good neighbour, State Farm is there.", "Love thy State Farm as thyself.", "Fly high, State Farm has your back."],
        answer: "Like a good neighbour, State Farm is there."
    }
];

function Buttons() {
    const [questionIndex, setQuestionIndex] = useState(0);
    // const [pointCount, setPointCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

    const currentQuestion = questions[questionIndex];

    const handleAnswerClick = (choice) => {
        const isCorrect = currentQuestion.answer === choice;
        if (isCorrect) {
            setCorrectCount(correctCount + 1);
            //in the future, also increment points based on value of question (same in this case since all are worth 1 point)
        } else {
            setIncorrectCount(incorrectCount + 1);
        }

        const isOver = correctCount + incorrectCount  === questions.length - 1;

        if (isOver) {
            alert("Game Over!");
            window.location.href = '/';
        }

        setQuestionIndex(questionIndex + 1);
    };

    //const [questionText, setDisplayText] = useState(<h4>{currentQuestion.question}</h4>);
    /*
    const [buttonText1, setButtonText1] = useState('Option 1');
    const [buttonText2, setButtonText2] = useState('Option 2');
    const [buttonText3, setButtonText3] = useState('Option 3');

  const handleClick = () => {
    // Change the button text when clicked
    setButtonText1('Next answer choice 1');
    setButtonText2('Next answer choice 2');
    setButtonText3('Next answer choice 3');
  };

  const updateText = () => {
    setDisplayText(<h4>Next question</h4>);
  }
  const bothActions = () => {
    updateText();
    handleClick();
  };
  */

  return (
    <div>
        <font color = 'red'><h4>{currentQuestion.question}</h4></font>
    <div className="button-container"> 
        {currentQuestion.choices.map((choice, index) =>(
            <button key={index} onClick={() => handleAnswerClick(choice)}>
                <p1>{choice}</p1>
                </button>
        ))}
    </div>
    </div>
  );
}
/*
    <button onClick={handleClick}><p1>{buttonText1}</p1></button>
    <button onClick={handleClick}><p1>{buttonText2}</p1></button>
    <button onClick={handleClick}><p1>{buttonText3}</p1></button>
*/

export default Buttons;