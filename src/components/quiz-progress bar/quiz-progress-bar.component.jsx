import React from 'react';

const QuizProgressBar = ({results}) => {
    console.log(results)
    
    return (
        <div className='quiz-progress-bar' style={{display:'flex'}}>
            {results.toString()}
        </div>
    )
}

export default QuizProgressBar;