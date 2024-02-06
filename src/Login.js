import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import './Login.css';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from './Users';

function Login() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserAuthenticated = authenticateUser(username, password);
    
    if (isUserAuthenticated) {
      navigate('/HelloWorldPage');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleCreateAccount = () => {
    modalRef.current.show();
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    console.log("ww");
    const modal = document.getElementById('signupModal'); // Assuming 'signupModal' is the ID of your modal
    modal.dataset.bsDismiss = 'modal'; // Setting the data-bs-dismiss attribute
    console.log("z");
    setShowSignupModal(false);
    console.log("ee");
  };

  useEffect(() => {
    modalRef.current = new Modal(document.getElementById('signupModal'), {});
  }, []);

  useEffect(() => {
    if (showSignupModal) {
      modalRef.current.show();
    }
  }, [showSignupModal]);

  return (
    <div className='login-page'>
      <div className="welcome-text">
        <h2>facebook</h2>
      </div>
      <div className="additional-info">
        <p>Facebook helps you connect and share</p>
        <p>with the people in your life.</p>
      </div>
      <div className='sign-in-container'>
        <div className="username-password-container">
          <div className="username-password-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="button-blue">Log In</button>
              {loginError && <p className="error-message">{loginError}</p>}
            </form>
          </div>
        </div>
        <div className="button-container">
          <div className="forgot-password">
            <a href="#">Forgotten password?</a>
          </div>
          <div className="SignUp">
            <button type="button" className="green-button" onClick={handleCreateAccount}>Create new account</button>
          </div>
        </div>
      </div>
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
          <Signup handleCloseSignupModal={handleCloseSignupModal}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
