import Accordion from 'react-bootstrap/Accordion';
import './accordian.styles.scss';
import Button from 'react-bootstrap/Button';

function CategoryAccordian() {
  return (
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Music</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}}>All Music</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Hip Hop</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Country</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>EDM</Button></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sports</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}}>All Sports</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Football</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Soccer</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Basketball</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Baseball</Button></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>History</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}}>All History</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Ancient Rome</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Ancient Greece</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>China Dynasty</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>US History</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Geography</Button></li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Science</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}}>All Science</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Chemistry</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Physics</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Biology</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Astronomy</Button></li>


          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Entertainment</Accordion.Header>
        <Accordion.Body>
          <ul style={{listStyleType:'none', width:'100%', padding:'0px'}}>
          <li><Button variant="light" style = {{width:'100%'}}>All Entertainment</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Art</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>Cinema</Button></li>
          <li><Button variant="light" style = {{width:'100%'}}>TV</Button></li>

          <li><Button variant="light" style = {{width:'100%'}}>Literature</Button></li>


          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CategoryAccordian;