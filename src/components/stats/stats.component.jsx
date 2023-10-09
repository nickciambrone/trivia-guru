import React, {  useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Stats = () => {
    const results = JSON.parse(localStorage.getItem('results'))
    const [detailed, setDetailed] = useState(true);
    console.log(results)
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
                                <div><Button variant="primary" style={{ marginRight: "2px" }}  onClick={() => { setDetailed(true) }}>By Day</Button>
                                    <Button variant="primary" style={{ backgroundColor: '#0a58ca' }} >
                                        By Category</Button></div>}


                        </ButtonGroup>
                    </div>

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
                                                        <div style={{ display: 'flex' }}><span style={{ marginRight: '5px', textTransform: 'capitalize' }}>{elem.replace('_', ' ')}: </span><div>{results[day][scores][elem].reduce((acc, curr) => { return curr == true ? acc + 1 : acc }, 0)}/10</div></div> : ''}</div>))}</div> : ''}</div>)}</span></Card>)}
                </div>
                : <div></div>}



        </div>
    )
}

export default Stats;