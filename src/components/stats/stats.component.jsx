import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Stats = () => {
    const results = JSON.parse(localStorage.getItem('results'))
    const [detailed, setDetailed] = useState(true);
    console.log(results)

    let overallResults = {};
    //for each day in results
    if (results){
        Object.keys(results).forEach((day, dayInd) => {
            //for each category in results
            Object.keys(results[day]).forEach((cat, catInd) => {
                // if the results are an array and > 0
                if (results[day][cat].length > 0) {
                    // if theres something there in overallresults
                    if (Object.keys(overallResults).includes(cat)) {
                        overallResults[cat][0] = overallResults[cat] + results[day][cat].reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)
                        overallResults[cat][1] = overallResults[cat][1]+10
    
                    }
                    // is an array and >0 but not there in overall results
                    else {
                        overallResults[cat] = []
    
                        overallResults[cat][0] = results[day][cat].reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)
                        overallResults[cat][1] = 10
    
                    }
                }
                // if its an object
                else if (typeof results[day][cat] === 'object' && !Array.isArray(results[day][cat]) &&
                    results[day][cat] !== null) {
                    console.log('hi')
                    Object.keys(results[day][cat]).forEach((subCat, subCatInd) => {
                        console.log(results[day][cat][subCat])
                        if (results[day][cat][subCat].length > 0) {
                            // object, already there
                            if (Object.keys(overallResults).includes(subCat)) {
                                overallResults[subCat][0] = overallResults[subCat][0] + results[day][cat][subCat].reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)
                                overallResults[subCat][1] = overallResults[subCat][1] +10
    
                            }
                            //object not there
                            else {
                                console.log('obj not there')
                                overallResults[subCat] = []
                                overallResults[subCat][0] = results[day][cat][subCat].reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)
                                overallResults[subCat][1] = 10
    
                            }
    
                        }
                    })
    
                }
            })
        })
    }

    console.log(overallResults)
    return (
        <div className='stats'>

            {results ?
                <div style={{ padding: '5px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <ButtonGroup aria-label="Basic example">
                            {detailed ?
                                <div><Button variant="primary"
                                    style={{ marginRight: "2px", backgroundColor: '#0a58ca' }}
                                >By Day</Button>
                                    <Button variant="primary" onClick={() => { setDetailed(false) }}>By Category</Button></div> :
                                <div><Button variant="primary" style={{ marginRight: "2px" }} onClick={() => { setDetailed(true) }}>By Day</Button>
                                    <Button variant="primary" style={{ backgroundColor: '#0a58ca' }} >
                                        By Category</Button></div>}


                        </ButtonGroup>
                    </div>
                   {detailed ? <div>
                    {Object.keys(results).map((day) =>
                        <Card style={{ marginTop: '6px', padding: '10px' }}><Card.Title>{day}</Card.Title><span>
                            {Object.keys(results[day]).map((scores) =>
                                <div>{results[day][scores].length > 0 ?
                                    <div><span style={{ textTransform: 'capitalize', marginRight: '5px' }}>{scores.replace('_', ' ')}:
                                    </span><span>
                                            {results[day][scores].reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)}/10</span></div>
                                    : typeof results[day][scores] === 'object' && !Array.isArray(results[day][scores]) &&
                                        results[day][scores] !== null ?
                                        <div>
                                            {Object.keys(results[day][scores])
                                                .map((elem =>
                                                    <div > {results[day][scores][elem].length > 0 ?
                                                        <div style={{ display: 'flex' }}>
                                                            <span style={{
                                                                marginRight: '5px',
                                                                textTransform: 'capitalize'
                                                            }}>
                                                                {elem.replace('_', ' ')}: </span>
                                                            <div>
                                                                {results[day][scores][elem]
                                                                    .reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)}/10</div></div> : ''}</div>))}</div> : ''}</div>)}</span></Card>)
                                                                    }
                                                                    </div>:<Card style={{ marginTop: '6px', padding: '10px' }}><Card.Title>Totals:</Card.Title>{Object.keys(overallResults).map((ele, ind)=>{
                                                                        return <div style={{display:'flex'}}><div style={{textTransform:'capitalize', marginRight:'5px'}}>{ele.replaceAll('_',' ')}: </div><div>{overallResults[ele][0]}/{overallResults[ele][1]}</div></div>
                                                                    })}</Card>}
                </div>

                : <div></div>}



        </div>
    )
}

export default Stats;