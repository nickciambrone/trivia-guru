import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './quiz-question.scss';
const QuizQuestion = ({ keyForHistory, question, choices, correct, setQuizResults, quizResults, category, subCategory }) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    const [answerDecision, setAnswerDecision] = useState('no answer yet')
    const [slideOut, setSlideOut] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (userAnswer) => {
        let isCorrect = false


        if (correct == userAnswer) {
            isCorrect = true

        }
        setTimeout(() => {

            if (keyForHistory.includes('general')){
                setQuizResults({...quizResults,[today]:{...quizResults[today], 'general':[...quizResults[today]['general'], isCorrect]}})
                // setQuizResults({...quizResults,'general':[...quizResults['general'], isCorrect]})
            }
            else if (keyForHistory.includes('all_')){
                setQuizResults({...quizResults,[today]:{...quizResults[today], [keyForHistory]:[...quizResults[today][keyForHistory], isCorrect]}})


            }else{
                setQuizResults({...quizResults,[today]:{...quizResults[today],[category]:{...quizResults[today][category], [keyForHistory]:[...quizResults[today][category][keyForHistory],isCorrect]} } })

                // setQuizResults({...quizResults,[category]:{...quizResults[category], [subCategory]:[...quizResults[category][subCategory], isCorrect]} })

            }

            setAnswerDecision('no answer yet')

            setSlideOut(true); // Add the class to trigger the slide-out animation


        }, 1500)
        setTimeout(() => {

            setSlideOut(false); // Add the class to trigger the slide-out animation
        }, 3000); // Wait for one second before transitioning

    };
    const checkAnswer = (userAnswer) => {
        if (correct == userAnswer) {
            setAnswerDecision(true)

        }
        else {
            setAnswerDecision(userAnswer)

        }
        handleButtonClick(userAnswer);



    }



    return (
        <div className='quiz-question' style={{ textAlign: 'center', marginTop:"2px" }}>

            <div style={{marginBottom:'2px'}}>Question {question.split(' ')[0]}: {question.split(' ').slice(1, question.split(' ').length).join(' ')} </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={`button-group ${slideOut ? 'slide-animation' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                    {choices.map((ele, ind) => {
                        if (ind === correct) {
                            return (
                                <Button onClick={() => checkAnswer(ind)}
                                    style={{
                                        paddingTop:'12px', 
                                        paddingBottom:'12px',
                                        marginBottom: '10px',
                                        backgroundColor: answerDecision != 'no answer yet' ? '#198754' : '', transform: answerDecision != 'no answer yet' ? 'scale(1.05)' : ''
                                    }}>{ele}</Button>
                            )
                        }
                        else {
                            return (
                                <Button onClick={() => checkAnswer(ind)}
                                    style={{
                                        marginBottom: '10px', transition: 'all 0.3s ease',
                                        backgroundColor: answerDecision === ind ? '#dc3545' : '',
                                        transform: answerDecision === ind ? 'scale(1.05)' : '',
                                        paddingTop:'12px', 
                                        paddingBottom:'12px'
                                    }}>
                                    {ele}
                                </Button>
                            )
                        }

                    })}</div></div>

        </div>
    )
}

export default QuizQuestion;