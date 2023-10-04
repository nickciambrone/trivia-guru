import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconSettingsOutline from '../icons/setting';
import IconClipboardData from '../icons/clipboard';
import IconQuestionCircle from '../icons/question';
import IconAccountCircleOutline from '../icons/account';

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Trivia Guru</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features"><IconClipboardData/></Nav.Link>
            <Nav.Link href="#howtoplay"><IconQuestionCircle/></Nav.Link>
            <Nav.Link href="#home" ><IconSettingsOutline/></Nav.Link>

          </Nav>
          <Nav>
          <Nav.Link href="#account" ><IconAccountCircleOutline/>
</Nav.Link>

          </Nav>

        </Container>
      </Navbar>

     
    </>
  );
}

export default ColorSchemesExample;