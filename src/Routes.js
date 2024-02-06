import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import Login from './login/Login';
import Signup from './SignUp'; // Assuming you have a Signup component

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Router */}
        <Route exact path="/login" element={<Login />} /> {/* Use element prop to specify component */}
        <Route exact path="/signup" element={<Signup />} /> {/* Use element prop to specify component */}
        {/* Add more routes as needed */}
      </Routes> {/* Use Routes instead of Router */}
    </Router>
  );
}

export default App;
