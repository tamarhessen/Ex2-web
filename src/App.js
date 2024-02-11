// App.js
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import FeedScreen from './feed/FeedScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import './Login.css';
import { authenticateUser } from './Users';
import {LoggedIn} from "./loggedIn";

function App() {
  const [displayName, setDisplayName] = useState(''); 
  const [profilePicture, setProfilePicture] = useState('');
  let {loggedIn, setLoggedIn} = LoggedIn();

  return (
    <Router>
      <Routes>
        {/* Pass setUsername and setProfilePicture as props */}
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} setDisplayName={setDisplayName} setProfilePicture={setProfilePicture} />} />
        <Route path="/create-account" element={<Signup />} />
          { loggedIn ? (
              <Route path="/feed" element={<FeedScreen displayName={displayName} profilePicture={profilePicture} />} />
          ) : (
              <Route path='/feed' element={<Navigate replace to={"/"}/>} />
          )}

        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;