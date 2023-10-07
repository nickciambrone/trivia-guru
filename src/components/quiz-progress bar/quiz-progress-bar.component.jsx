import React from 'react';

import IconFileExcel from '../icons/x';
import IconFileCheck from '../icons/check';
import IconCircle from '../icons/circle';
const QuizProgressBar = ({ results, category, subCategory }) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    let urlParam = window.location.pathname.replace('/', '')
    return (
        <div className='quiz-progress-bar' style={{ display: 'flex', justifyContent: 'center' }}>
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, ind) => {
                    return (<div style={{ marginRight: '3px' }}>
                        {urlParam.includes('general') ?
                            <div>
                                {ind + 1 > results[today]['general'].length ?
                                    <IconCircle /> : results[today]['general'][ind] == true
                                        ? <IconFileCheck /> : <IconFileExcel />}
                            </div> : urlParam.includes('all_') ? <div>
                                {ind + 1 > results[today]['all_' + urlParam.split('_')[1]].length ?
                                    <IconCircle /> : results[today]['all_' + urlParam.split('_')[1]][ind] == true
                                        ? <IconFileCheck /> : <IconFileExcel />}
                            </div> :
                                ind + 1 > results[today][category][subCategory].length ?
                                    <IconCircle /> : results[today][category][subCategory][ind] == true
                                        ? <IconFileCheck /> : <IconFileExcel />

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