import React from 'react'
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
function Header() {
    return (
<Navbar style={{marginTop:'10px',
 boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}} bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Student Registration System</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/">
        <Nav.Link  href="#home">Student list</Nav.Link>
        </Link>
        <Link to="/AddStudent">
        <Nav.Link href="#link">Add Student</Nav.Link>
        </Link>
        
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
