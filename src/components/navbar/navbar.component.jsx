import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
       
<div style={{width:'100%'}}>        
<Navbar.Brand href="#home">Trivia-Guru</Navbar.Brand>
</div>
       
    </Navbar>
  );
}

export default NavExample;