import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Login.css'; // Import the CSS file

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform login logic if needed
  };

  const handleCreateAccount = () => {
    // Implement logic to navigate to the create account page
    console.log('SignUP');
    navigate('/create-account'); // Use navigate function to redirect to the create account page
  };

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
        <div className="email-password-container">
          <div className="email-password-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <input
    type="text" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email address or phone number"
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
    </div>
  );
}

export default Login;
