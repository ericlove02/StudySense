import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function NavBar() {
    return (
        <div>
        <Navbar bg="light" style={{ backgroundColor: 'lightgray', zIndex: 1000 }}>
          <Container className="d-flex justify-content-end">
            <Nav>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </div>
    );
  }

function Home() {
    return (
        <div style={{ position: 'relative' }}>
          <NavBar />
    
          <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: '10px', position: 'relative', zIndex: 1 }}>
            <Card style={{ width: '18rem', marginLeft: 'calc(0px + 2.5vw)', backgroundColor: '#eae6deff', borderRadius: '10px' }}>
              <Card.Body>
                <Card.Title>Data</Card.Title>
                <Card.Text>
                  Personal student information such as income, parental education, and
                </Card.Text>
              </Card.Body>
            </Card>
    
            <Button variant="primary" style={{ marginTop: '20px' }}>
              Login
            </Button>
    
            <Card style={{ width: '18rem', marginRight: 'calc(0px + 2.5vw)', backgroundColor: '#eae6deff', borderRadius: '10px' }}>
              <Card.Body>
                This is some text within a card body.
              </Card.Body>
            </Card>
          </div>
        </div>
      );
}

export default Home;