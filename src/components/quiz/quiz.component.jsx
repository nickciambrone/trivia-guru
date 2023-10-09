import React, { useEffect, useState } from 'react';
import quiz from './quizData';
import QuizQuestion from '../quiz-question/quiz-question.component';
import QuizProgressBar from '../quiz-progress bar/quiz-progress-bar.component';
import { useNavigate } from "react-router-dom";
import { QuizResults } from '../quiz-results/quiz-results.component';




const Quiz = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    let done = false;
    let relevantQuizResults = '';

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let category = window.location.pathname.replace('/', '')
    let results = { [today]: {} }
    Object.keys(quiz).forEach((cat, ind) => {
        if (cat != 'general') {
            results[today][cat] = {}

        }
        results[today]['all_' + cat] = []
    })
    results[today]['general'] = []

    Object.keys(quiz).forEach((cat, ind) => {
        Object.keys(quiz[cat]).forEach((subCat, ind) => {
            if (cat != 'general' && subCat.includes('all_') == false)
                results[today][cat][subCat] = []
        })
    })
    let todaysBlankResults = results
    if (localStorage.getItem('results')) {
        results = JSON.parse(localStorage.getItem('results'))
        if (!Object.keys(results).includes(today)){
            results = {...results, [today]:todaysBlankResults[today]}
        }
    }
    let [quizResults, setQuizResults] = useState(results)
    let questionString = ''
    let choices = []
    let correct = []

    useEffect(() => {

        // storing input name
        localStorage.setItem("results", JSON.stringify(quizResults));

    }, [quizResults]);







    let mainCategory = ''
    // if it is a specific subcategory
    Object.keys(quiz).forEach((cat, catInd) => {

        Object.keys(quiz[cat]).forEach((subCat, subCatInd) => {

            if (subCat == category) {


                mainCategory = cat
                relevantQuizResults = quizResults[today][cat][subCat]

                if (quizResults[today][cat][subCat].length != quiz[cat][subCat].length) {
                    console.log(quiz[cat][subCat])
                    console.log(quizResults[today][cat][subCat].length)
                    questionString = quiz[cat][subCat][quizResults[today][cat][subCat].length]['question']
                    console.log(questionString)
                    choices = quiz[cat][category][quizResults[today][cat][subCat].length]['choices']
                    correct = quiz[cat][subCat][quizResults[today][cat][subCat].length]['correct']
                }
                else {
                    done = true

                }


            }
        })
    })
    // if it is general
    if (category == 'general') {
        relevantQuizResults = quizResults[today]['general']
        if (quizResults[today]['general'].length != quiz['general'].length) {
            questionString = quiz['general'][quizResults[today]['general'].length]['question']
            choices = quiz['general'][quizResults[today]['general'].length]['choices']
            correct = quiz['general'][quizResults[today]['general'].length]['correct']
        }
        else {
            done = true
        }

    }
    // if it is a specific category but not specfic subcat
    if (category.includes('all_')) {
        let newCat = category.split('_')[1]
        relevantQuizResults = quizResults[today]['all_' + newCat]

        if (quizResults[today]['all_' + newCat].length != quiz[newCat]['all'].length) {
            questionString = quiz[newCat]['all'][quizResults[today]['all_' + newCat].length]['question']
            choices = quiz[newCat]['all'][quizResults[today]['all_' + newCat].length]['choices']
            correct = quiz[newCat]['all'][quizResults[today]['all_' + newCat].length]['correct']
        }
        else {
            done = true

        }

    }
    return (
        <div className='quiz-questions' >

            <QuizProgressBar results={quizResults} category={mainCategory} subCategory={category} />
            <QuizQuestion keyForHistory={window.location.pathname.replace('/', '')} category={mainCategory} subCategory={category} quizResults={quizResults} setQuizResults={setQuizResults} question={questionString} choices={choices} correct={correct} />
            <QuizResults done={done} category={category} relevantQuizResults={relevantQuizResults} quizResults = {quizResults}/>
        
        </div>
    )
}

export default Quiz;