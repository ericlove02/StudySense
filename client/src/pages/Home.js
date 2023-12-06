import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from '../components/appNavBar';
import Container from 'react-bootstrap/Container';

import LogoMain from '../images/LogoMain.png';

function Chip({ children, ...props }) {
  return (
    <span
      className="chip"
      style={{
        backgroundColor: '#f5f5f5',
        color: '#4285f4',
        padding: '5px 10px',
        borderRadius: '4px',
        ...props,
      }}
    >
      {children}
    </span>
  );
}

function Home() {
  return (
    <div>
      <Navbar />

      <Container>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Card
            bg="light"
            border="light"
            style={{
              width: '300px',
              margin: '10px',
              borderRadius: '10px',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Data
              </Card.Title>
              <Card.Text>
                Understanding the diverse backgrounds of our students is crucial for
                providing personalized and effective education. We collect only the
                necessary information and treat it with the utmost
                confidentiality. Our commitment to privacy ensures a secure and
                nurturing learning environment for every student.
              </Card.Text>
              <Button
                variant="outline-primary"
                style={{ borderColor: '#4285f4', color: '#4285f4' }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
          <Card
            bg="light"
            border="light"
            style={{
              width: '300px',
              margin: '10px',
              borderRadius: '10px',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Analysis
              </Card.Title>
              <Card.Text>
                Leveraging the collected data, our educational platform conducts
                insightful analyses to tailor learning experiences for individual
                students. We identify patterns and trends to better understand the
                unique needs of each learner, implement targeted strategies, and
                ensure that educational resources and support are aligned with the
                diverse backgrounds of our students. Through continuous analysis,
                we strive to enhance engagement, foster inclusivity, and promote
                academic success for every individual in our learning community.
                {' '}
                <Chip color="blue">Data Analysis</Chip>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Home;
