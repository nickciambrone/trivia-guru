import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconSettingsOutline from '../icons/setting';
import IconClipboardData from '../icons/clipboard';
import IconQuestionCircle from '../icons/question';
import IconAccountCircleOutline from '../icons/account';
import IconSchoolOutline from '../icons/school';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ColorSchemesExample() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = (category) => {
    setShow(false);
 
}
  return (
    <>
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><IconSchoolOutline onClick ={()=>navigate('/')} style={{cursor:'pointer'}}/> <span style={{marginLeft:'6px', cursor:'pointer'}} onClick ={()=>navigate('/')}>Trivia Battle </span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick ={()=>navigate('/stats')}><IconClipboardData/></Nav.Link>
            <Nav.Link onClick = {()=>setShow(true)}><IconQuestionCircle/></Nav.Link>

          </Nav>
          <Nav>
          {/* <Nav.Link href="#account" ><IconAccountCircleOutline/>
</Nav.Link> */}

          </Nav>

        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  
          <div style={{display:'flex'}}><h3 style={{marginRight:'7px', color:'#0c6dfc'}}>Trivia Battle </h3> <h3>- Daily Trivia</h3></div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{marginBottom:'4px'}}>How to play: </div>
          <ul>
          <li>Choose from the wide variety of categories provided, and test your knowledge in a series of 10 questions. </li>
          <li>Come back every day for a new slate of questions.</li>
          <li>Trivia Battle will keep track of your past results so that you can compare with friends.</li>

          <li>No sign up or sign in necessary.  </li>
          </ul>
           </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

     
    </>
  );
}

export default ColorSchemesExample;