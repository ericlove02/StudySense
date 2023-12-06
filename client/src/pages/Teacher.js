import React from 'react';
import NavBar from '../components/appNavBar';

function Teacher() {
  return (
    <div
      style={{
        backgroundColor: '#eae6deff',
        padding: '10px',
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar />
      <div
        style={{
          backgroundColor: '#eef7ffff',
          borderRadius: '10px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
          padding: '15px',
          margin: '10px',
          width: '60%',
          alignSelf: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>
            At-Risk Students: <span style={{ color: '#4285f4' }}>5%</span>
          </h2>
        </div>
        <hr />
        <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>
          Most Prevalent Issues:
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ fontSize: '20px' }}>
            Reason 1: <span style={{ color: '#4285f4' }}>30%</span> of students
            are unsatisfactory in this regard.
          </li>
          <li style={{ fontSize: '20px' }}>
            Reason 2: <span style={{ color: '#4285f4' }}>25%</span> of students
            are unsatisfactory.
          </li>
          <li style={{ fontSize: '20px' }}>
            Reason 3: <span style={{ color: '#4285f4' }}>20%</span> ...
          </li>
          <li style={{ fontSize: '20px' }}>
            Reason 4: <span style={{ color: '#4285f4' }}>15%</span> ...
          </li>
          <li style={{ fontSize: '20px' }}>
            Reason 5: <span style={{ color: '#4285f4' }}>10%</span> ...
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Teacher;
