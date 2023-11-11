import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import NavBar from "../components/appNavBar";


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
    
            <Button variant="primary" style={{ marginTop: '20px', width: '9rem', backgroundColor: '#eae6deff', borderRadius: '10px'  }}>
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