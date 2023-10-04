import Accordion from 'react-bootstrap/Accordion';
import './accordian.styles.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategoryAccordian(props) {
  const selectCategory = (cat) =>{
    props.setCategory(cat);
    props.showModal();
  }
  return (
    <Accordion >
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>Music</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('All Music')}>All Music</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Hip Hop')}>Hip Hop</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Country')}>Country</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('EDM')}>EDM</Button></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sports</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('All Sports')}> All Sports</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Football')}>Football</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Soccer')}>Soccer</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Basketball')}>Basketball</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Baseball')}>Baseball</Button></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>History</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('All History')}>All History</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Ancient Rome')}>Ancient Rome</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Ancient Greece')}>Ancient Greece</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('US History')}>US History</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Geography</Button></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Science</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('All Science')}>All Science</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Chemistry')}>Chemistry</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Physics')}>Physics</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Biology')}>Biology</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Astronomy')}>Astronomy</Button></li>


          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{marginBottom:'10px'}}>
        <Accordion.Header>Entertainment</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('All Entertainment')}>All Entertainment</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Art')}>Art</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Cinema')}>Cinema</Button></li>
          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('TV')}>TV</Button></li>

          <li><Button variant="light" style = {{width:'100%'}} onClick = {()=>selectCategory('Literature')}>Literature</Button></li>


          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
            <Card bg='primary' style={{color:'white', cursor:'pointer', fontWeight:'500'}} onClick = {()=>selectCategory('General')}><Card.Header>
            General (All Categories)

              </Card.Header></Card>
 
      </Accordion.Item>
    </Accordion>
  );
}

export default CategoryAccordian;