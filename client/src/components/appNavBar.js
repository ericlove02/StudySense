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
          <Navbar.Brand href="#home" style={{ color: 'white', textDecoration: 'none'}}>Garbonzo</Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link href="#home" style={{ color: 'white', marginRight: '15px', textDecoration: 'none'}}>Home</Nav.Link>
          <Nav.Link href="#login" style={{ color: 'white', textDecoration: 'none'}}>Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
  }
  export default NavBar;