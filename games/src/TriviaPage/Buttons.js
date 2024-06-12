import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';

const questions = [
    {
        question: "1. In what other language is the State Farm website available?",
        choices: ["French", "Spanish", "Mandarin"],
        answer: "Spanish"
    },
    {
        question: "2. What is State Farm's iconic saying?",
        choices: ["Like a good neighbour, State Farm is there.", "Love thy State Farm as thyself.", "Fly high, State Farm has your back."],
        answer: "Like a good neighbour, State Farm is there."
    },
    {
        question: "3. Which federal act requires State Farm to provide a Notice of Privacy Policy?",
        choices: ["Health Insurance Portability and Accountability Act (HIPAA)", "California Consumer Privacy Act (CCPA)", "Gramm-Leach-Bliley Act (GLBA)"],
        answer: "Gramm-Leach-Bliley Act (GLBA)"
    },
    {
        question: "4. What award did the 'Jake from State Farm' campaign win in 2021?",
        choices: ["Oscar", "Grammy", "Webby Award"],
        answer: "Webby Award"
    },
    {
        question: "5. In which state is a driver most likely to hit a deer?",
        choices: ["California", "West Virginia", "Texas"],
        answer: "West Virginia"
    },
    {
        question: "6. What program does State Farm offer that can help young drivers learn safe driving habits?",
        choices: ["Drive Safe and Save", "Steer Clear", "Good Student Discount"],
        answer: "Steer Clear"
    },
    {
        question: "7. What discount can drivers get for participating in the Drive Safe & Save program?",
        choices: ["Up to 30%", "Up to 10%", "No discount :("],
        answer: "Up to 30%"
    },
    {
        question: "8. What feature does the State Farm mobile app provide to help drivers improve their driving habits?",
        choices: ["Trip maps with feedback", "Virtual reality driving simulations", "Online driving games"],
        answer: "Trip maps with feedback"
    },
    {
        question: "9. State Farm supports which organization by sponsoring service dogs?",
        choices: ["Guide Dogs for the Blind", "Canine Companions for Independence", "Dogs for Better Lives"],
        answer: "Canine Companions for Independence"
    }
];

function Buttons() {
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    // const [pointCount, setPointCount] = useState(0);

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
            alert(`Game Over! Good job :)`);
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
        <ScoreBoard correctCount={correctCount} />
        <ScoreBoard incorrectCount={incorrectCount} />
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