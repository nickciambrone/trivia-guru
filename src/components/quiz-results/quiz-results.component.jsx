import React, { useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export const QuizResults = ({done, category, quizResults, relevantQuizResults}) =>{
    const [copySuccess, setCopySuccess] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setCopySuccess('')
        }, "2000");
    }, [copySuccess])
    const navigate = useNavigate();

    return (
        <div className = 'quiz-results'>
                <Modal show={done}  >
                <Modal.Header >
                    <Modal.Title>  Category: <span style={{ color: '#0e6efd' }}>{category.replace('_', ' ')}</span>
                        <br />
                        <span style={{ marginRight: '4px' }}>
                            Today's Score:
                        </span>
                        {relevantQuizResults.length > 0 ? relevantQuizResults.reduce((acc, curr) => { return curr == true ? acc + 1 : acc }) : ''}/10
                        <div>
                        <div style={{ cursor: 'pointer', color: '#0d6efd', marginTop: '2px' }}
                                            onClick={() => {
                                                navigator.clipboard.writeText('verse me in this! \n https://www.thefantasypools.com/' );
                                                setCopySuccess('Copied!')
                                            }}> Copy invite link</div><div>{copySuccess}</div>
                        </div>
                        
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: '20px' }}>
                   <div style={{marginBottom:'3px'}}>Past scores for <span style={{ color: '#0e6efd' }}>{category.replace('_', ' ')}:</span></div> 
                {category.includes('all_') || category == 'general' ? 
                <div>
                  {Object.keys(quizResults).map((day,ind)=>{
                    return (<div>
{quizResults[day][category].length>1 ? <Card><Card.Body style={{paddingTop:'5px', paddingBottom:'5px'}}>{day.replaceAll('/','-')}: <b style={{marginLeft:'4px'}}>{ quizResults[day][category].reduce((acc, curr) => { return curr == true ? acc + 1 : acc })+'/10'}</b> </Card.Body></Card>      :''                 } {/* {Object.keys(quizResults[day]).map((cat, inde)=>{
                            return Object.keys(quizResults[day][cat]).map((subCat,inex)=>  <Card><Card.Body style={{paddingTop:'5px', paddingBottom:'5px'}}> {day.replaceAll('/','-')}:<b style={{marginLeft:'8px'}}>{ quizResults[day][cat].reduce((acc, curr) => { return curr == true ? acc + 1 : acc })}/10</b> </Card.Body></Card>)
                        })} */}
         
                    </div>)
                })}  
                </div> : ''}
                
                {Object.keys(quizResults).map((day,ind)=>{
                    return (<div>
                        
                         {Object.keys(quizResults[day]).map((cat, inde)=>{
                            return Object.keys(quizResults[day][cat]).map((subCat,inex)=>subCat == category ? quizResults[day][cat][subCat].length>0 ? <Card><Card.Body style={{paddingTop:'5px', paddingBottom:'5px'}}> {day.replaceAll('/','-')}:<b style={{marginLeft:'4px'}}>{ quizResults[day][cat][subCat].reduce((acc, curr) => { return curr == true ? acc + 1 : acc })}/10</b> </Card.Body></Card>:'':'')
                        })}
         
                    </div>)
                })}
                     </Modal.Body>
                <Modal.Footer style={{justifyContent:'space-evenly', flexDirection:'row'}}>

                <Button onClick={() => navigate('/stats')} style={{ width: '45%' }}>My Stats</Button>

                    <Button onClick={() => navigate('/')} style={{ width: '45%' }}>Go home</Button>

                </Modal.Footer>
            </Modal>
             
        </div>
    )
}