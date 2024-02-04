import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './SignUp'; // Import the Signup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<Signup />} /> {/* Route for the Signup component */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
