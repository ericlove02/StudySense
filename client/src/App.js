import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        {/* <Route path="/" render={() => {
          return (
            // check if user is auth, if yes send home, else send to login
            this.isAuth ?
            <Navigate to="/home" /> :
            <Navigate
          ) }} />*/}
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
