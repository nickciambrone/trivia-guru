import React, { useEffect, useState } from 'react';
import quiz from './quizData';
import QuizQuestion from '../quiz-question/quiz-question.component';
import QuizProgressBar from '../quiz-progress bar/quiz-progress-bar.component';

const Quiz = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    let category = window.location.pathname.replace('/','')
    let results = {[today]:{}}
    Object.keys(quiz).forEach((cat,ind)=>{
        if (cat!='general'){
            results[today][cat] = {}

        }
        results[today]['all_'+cat]=[]
    })
    results[today]['general']=[]
    
    Object.keys(quiz).forEach((cat,ind)=>{
        Object.keys(quiz[cat]).forEach((subCat,ind)=>{
            if (cat!='general' && subCat.includes('all_')==false)
            results[today][cat][subCat] = []
        })
    })
    if (localStorage.getItem('results')){
        results = JSON.parse(localStorage.getItem('results'))
    }
    let [quizResults, setQuizResults] = useState(results)
    console.log(quizResults)

    let questionString = ''
    let choices = []
    let correct =[]

    useEffect(() => {
        // storing input name
        localStorage.setItem("results", JSON.stringify(quizResults));

      }, [quizResults]);
  
    let mainCategory = ''
    // if it is a specific subcategory
    Object.keys(quiz).forEach((cat, catInd)=>{

        Object.keys(quiz[cat]).forEach((subCat, subCatInd)=>{

            if (subCat == category){
        

                mainCategory = cat
                if (quizResults[today][cat][subCat].length != quiz[cat][subCat].length){

                    questionString = quiz[cat][subCat][quizResults[today][cat][subCat].length]['question']
                    choices = quiz[cat][category][quizResults[today][cat][subCat].length]['choices']
                    correct = quiz[cat][subCat][quizResults[today][cat][subCat].length]['correct']
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

        if (quizResults[today]['general'].length != quiz['general'].length){
            questionString = quiz['general'][quizResults[today]['general'].length]['question']
            choices = quiz['general'][quizResults[today]['general'].length]['choices']
            correct = quiz['general'][quizResults[today]['general'].length]['correct']
        }
        else{
            questionString = 'your done'
            choices = []
            correct = 0
        }

    }
    // if it is a specific category but not specfic subcat
    if (category.includes('all_')){
            let newCat = category.split('_')[1]
       
            if (quizResults[today]['all_'+newCat].length != quiz[newCat]['all'].length){
                questionString = quiz[newCat]['all'][quizResults[today]['all_'+newCat].length]['question']
                choices = quiz[newCat]['all'][quizResults[today]['all_'+newCat].length]['choices']
                correct = quiz[newCat]['all'][quizResults[today]['all_'+newCat].length]['correct']
            }
            else{
                questionString = 'your done'
                choices = []
                correct = 0
            }
    
        }
    return (
        <div className = 'quiz-questions' >
            {category} <br />
            {/* if they picked a specific subcategory within a category*/}
            <QuizProgressBar results = {quizResults} category ={mainCategory} subCategory = {category}/>
            <QuizQuestion keyForHistory = {window.location.pathname.replace('/','')} category ={mainCategory} subCategory = {category} quizResults={quizResults} setQuizResults = {setQuizResults}  question = {questionString} choices = {choices} correct={ correct}/>
        
        </div>
    )
}

export default Quiz;