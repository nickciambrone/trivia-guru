import React from 'react';
 
import IconFileExcel from '../icons/x';
import IconFileCheck from '../icons/check';
import IconCircle from '../icons/circle';
const QuizProgressBar = ({results, category, subCategory}) => {


    return (
        <div className='quiz-progress-bar' style={{display:'flex', justifyContent:'center'}}>
            {
                [0,1,2,3,4,5,6,7,8,9].map((ele,ind)=>{
                    return (<div style={{marginRight:'3px'}}>
{                        ind+1>results[category][subCategory].length ? <IconCircle/> :results[category][subCategory][ind]==true ? <IconFileCheck/> : <IconFileExcel/>
}                    </div>)
                })
            }
            {/* {results.map((ele,ind)=>{
                return (ele.toString() == 'false' ? <IconFileExcel/> : ele.toString() == 'true' ? <IconFileCheck/>: <IconCircle/>)
            })
            } */}
        </div>
    )
}

export default QuizProgressBar;