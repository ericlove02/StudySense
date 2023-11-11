import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function NavBar() {
  return (
    <Navbar bg="light" style={{ backgroundColor: '#500000ff', color: 'white', zIndex: 1000 }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '45px' }}>Garbonzo</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/home" style={{ color: 'white', marginRight: '15px', textDecoration: 'none', fontSize: '25px' }}>Home</Nav.Link>
          <Nav.Link href="/login" style={{ color: 'white', marginRight: '15px', textDecoration: 'none', fontSize: '25px' }}>Login</Nav.Link>
          <Nav.Link href="/teacher" style={{ color: 'white', marginRight: '15px', textDecoration: 'none', fontSize: '25px' }}>Teacher</Nav.Link>
          <Nav.Link href="/student" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Student</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;