import React, { useEffect, useState } from 'react';
import quiz from './quizData';
import QuizQuestion from '../quiz-question/quiz-question.component';
import QuizProgressBar from '../quiz-progress bar/quiz-progress-bar.component';

const Quiz = () => {


    let category = window.location.pathname.replace('/','')
    let results = []
    if (localStorage.getItem('results')){
        results = localStorage.getItem('results').split(',')
    }
    let [quizResults, setQuizResults] = useState(results)
   
    let questionString = ''
    let choices = []
    let correct =[]

    useEffect(() => {
        // storing input name
        localStorage.setItem("results", quizResults);

      }, [quizResults]);
  

    // if it is a specific subcategory
    Object.keys(quiz).forEach((cat, catInd)=>{
        Object.keys(quiz[cat]).forEach((subCat, subCatInd)=>{
            if (subCat == category){
                if (quizResults.length != quiz[cat][subCat].length){
                    questionString = quiz[cat][subCat][quizResults.length]['question']
                    choices = quiz[cat][category][quizResults.length]['choices']
                    correct = quiz[cat][subCat][quizResults.length]['correct']
                }
                else{
                    questionString = 'your done'
                    choices = []
                    correct = 0
                }
     

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
    // if it is a specific category but not specfic subcat
    if (category.includes('all')){
        category = category.replace('all_','')
        let randomSubCat = Math.floor(Math.random()*Object.keys(quiz[category]).length) 
        randomSubCat = Object.keys(quiz[category])[randomSubCat]
        let randomQuestionNumber = Math.floor(Math.random()*quiz[category][randomSubCat].length)
        questionString = quiz[category][randomSubCat][randomQuestionNumber]['question']
        choices = quiz[category][randomSubCat][randomQuestionNumber]['choices']
        correct = quiz[category][randomSubCat][randomQuestionNumber]['correct']
        }
  
    return (
        <div className = 'quiz-questions' >
            {category} <br />
            {/* if they picked a specific subcategory within a category*/}
            <QuizProgressBar results = {quizResults} />
            <QuizQuestion quizResults={quizResults} setQuizResults = {setQuizResults}  question = {questionString} choices = {choices} correct={ correct}/>
        
        </div>
    )
}

export default Quiz;