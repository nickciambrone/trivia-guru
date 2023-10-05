import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './quiz-question.scss';
const QuizQuestion = ({ question, choices, correct, setCurrentQuestion, currentQuestion }) => {

    const [answerDecision, setAnswerDecision] = useState('no answer yet')
    const [slideOut, setSlideOut] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setTimeout(()=>{
            setAnswerDecision('no answer yet')

            setCurrentQuestion(currentQuestion + 1)

            setSlideOut(true); // Add the class to trigger the slide-out animation

        },500)
        setTimeout(() => {

            setSlideOut(false); // Add the class to trigger the slide-out animation

        }, 1000); // Wait for one second before transitioning

    };
    const checkAnswer =  (userAnswer) => {
        if (correct == userAnswer) {
             setAnswerDecision(true)

        }
        else {
             setAnswerDecision(userAnswer)

        }
        handleButtonClick();

   

    }



    return (
        <div className='quiz-question' style={{ textAlign: 'center' }}>
            quiz question: {question} <br />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={`button-group ${slideOut ? 'slide-animation' : ''}`} style={{display:'flex', flexDirection:'column'}}>
                    {choices.map((ele, ind) => {
                        if (ind === correct) {
                            return (
                                <Button onClick={() => checkAnswer(ind)}
                                    style={{
                                        marginBottom: '6px',
                                        backgroundColor: answerDecision != 'no answer yet' ? '#198754' : '', transform: answerDecision != 'no answer yet' ? 'scale(1.05)' : ''
                                    }}>{ele}</Button>
                            )
                        }
                        else {
                            return (
                                <Button onClick={() => checkAnswer(ind)}
                                    style={{
                                        marginBottom: '6px', transition: 'all 0.3s ease',
                                        backgroundColor: answerDecision === ind ? '#dc3545' : '',
                                        transform: answerDecision === ind ? 'scale(1.05)' : ''
                                    }}>
                                    {ele} 
                                </Button>
                            )
                        }

                    })}</div></div>
            <br />
            quiz correct: {correct}

        </div>
    )
}

export default QuizQuestion;