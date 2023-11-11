import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import LogoMain from '../images/LogoMain.png';

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
                Understanding the diverse backgrounds of our students is crucial for providing personalized and effective education. Although a range of personal information is collected,   only the necessary information is shown to the professor. It's important to note that this information is treated with the utmost confidentiality, and only the essential details required for customized support are shared with educators. Our commitment to privacy ensures a secure and nurturing learning environment for every student.
                </Card.Text>
              </Card.Body>
            </Card>
    
                <img
            src={LogoMain}
            alt="Garbonzo Logo"
            style={{ marginTop: '20px', width: '29rem', borderRadius: '10px' }}
                />
    
            <Card style={{ width: '18rem', marginRight: 'calc(0px + 2.5vw)', backgroundColor: '#eae6deff', borderRadius: '10px' }}>
              <Card.Body>
              <Card.Title>Analysis</Card.Title>
                <Card.Text>
                In leveraging the collected data, our educational platform conducts insightful analyses to tailor learning experiences for individual students. By examining a range of student paramteres, we identify patterns and trends that help us better understand the unique needs of each learner. This data-driven approach enables us to implement targeted strategies, ensuring that educational resources and support are aligned with the diverse backgrounds of our students. Through continuous analysis, we strive to enhance engagement, foster inclusivity, and promote academic success for every individual in our learning community.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
}

export default Home;