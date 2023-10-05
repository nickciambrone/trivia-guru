import React, { useState } from 'react';
import quiz from './quizData';
import QuizQuestion from '../quiz-question/quiz-question.component';

console.log(window.location.pathname)
const Quiz = () => {


    let category = window.location.pathname.replace('/','')
    let [currentQuestion, setCurrentQuestion] = useState(0);
    let questionString = ''
    let choices = []
    let correct =[]
    // if it is a specific subcategory
    Object.keys(quiz).forEach((cat, catInd)=>{
        Object.keys(quiz[cat]).forEach((subCat, subCatInd)=>{
            if (subCat == category){
                questionString = quiz[cat][subCat][currentQuestion]['question']
                choices = quiz[cat][category][currentQuestion]['choices']
                correct = quiz[cat][subCat][currentQuestion]['correct']

            }
        })
    })
    // if it is general
    if (category == 'general'){
        let numOfCategories = Object.keys(quiz).length
        let randomCategory = Object.keys(quiz)[Math.floor(Math.random()*numOfCategories)]
        let numOfSubCats = Object.keys(quiz[randomCategory]).length
        let randomSubCat = Object.keys(quiz[randomCategory])[Math.floor(Math.random() * numOfSubCats)]
        let randomQuestionNumber = Math.floor(Math.random()*quiz[randomCategory][randomSubCat].length)
        questionString = quiz[randomCategory][randomSubCat][randomQuestionNumber]['question']
        choices = quiz[randomCategory][randomSubCat][randomQuestionNumber]['choices']
        correct = quiz[randomCategory][randomSubCat][randomQuestionNumber]['correct']

    }
  
    return (
        <div className = 'quiz-questions' >
            {category} <br />
            {/* if they picked a specific subcategory within a category*/}
            
            <QuizQuestion currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} question = {questionString} choices = {choices} correct={ correct}/>
        
        </div>
    )
}

export default Quiz;