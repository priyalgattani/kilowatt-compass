import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavTop() {
  return (
    <>
      <Navbar expand="lg" className=" green-bg">
        <Container>
          <Navbar.Brand href="home">KiloWatt Compass</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="trip-planner">Locator</Nav.Link>
              <Nav.Link href="profile">My Profile</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="help-center">Help Center</NavDropdown.Item>
                <NavDropdown.Item href="contact-us">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item href="privacy-policy">
                  Privacy Policy
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
