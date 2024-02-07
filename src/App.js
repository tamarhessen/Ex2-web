// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import FeedScreen from './feed/FeedScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import './Login.css';
import { authenticateUser } from './Users';

function App() {
  const [displayName, setDisplayName] = useState(''); 
  const [profilePicture, setProfilePicture] = useState(''); 

  return (
    <Router>
      <Routes>
        {/* Pass setUsername and setProfilePicture as props */}
        <Route path="/" element={<Login setDisplayName={setDisplayName} setProfilePicture={setProfilePicture} />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/feed" element={<FeedScreen displayName={displayName} profilePicture={profilePicture} />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;