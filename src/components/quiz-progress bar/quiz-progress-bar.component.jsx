import React from 'react';

import IconFileExcel from '../icons/x';
import IconFileCheck from '../icons/check';
import IconCircle from '../icons/circle';
const QuizProgressBar = ({ results, category, subCategory }) => {

    let urlParam = window.location.pathname.replace('/', '')
    return (
        <div className='quiz-progress-bar' style={{ display: 'flex', justifyContent: 'center' }}>
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele, ind) => {
                    return (<div style={{ marginRight: '3px' }}>
                        {urlParam.includes('general') ?
                            <div>
                                {ind + 1 > results['general'].length ?
                                    <IconCircle /> : results['general'][ind] == true
                                        ? <IconFileCheck /> : <IconFileExcel />}
                            </div> : urlParam.includes('all_') ? <div>
                                {ind + 1 > results['all_' + urlParam.split('_')[1]].length ?
                                    <IconCircle /> : results['all_' + urlParam.split('_')[1]][ind] == true
                                        ? <IconFileCheck /> : <IconFileExcel />}
                            </div> :
                                ind + 1 > results[category][subCategory].length ?
                                    <IconCircle /> : results[category][subCategory][ind] == true
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