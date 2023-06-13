import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import sam1 from "../Assests/product.png";
import '../styles/signup.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const baseURL = "http://localhost:8080";

  const handleSignup = async () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/api/users/signup`, { username, password });
      console.log(response.data);
      navigate('/login');
      // Redirect to login page or perform other actions on successful signup
    } catch (error) {
      console.log(error);
      // Handle error, display error message, etc.
      toast.error("Failed to sign. Please try again.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div>
      <div className="background-image">
        <img src={sam1} alt="Background" />
      </div>
        <div>
          <form className="signup-form card">
            <div className="card_header">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
              </svg>
              <h1 className="form_heading">Sign Up</h1>
            </div>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input className="input" name="username" type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input className="input" name="user_password" type={showPassword ? "text" : "password"} placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="checkbox" id="checkbox" onChange={toggleShowPassword} />
                <label htmlFor="checkbox" className="switch">
                  <div className="powersign"></div>
                </label>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="field">
              <button className="sign_button" onClick={handleSignup}>Signup</button>
            </div>
            <p className="signin">
            Already a Member?<a href="/login">Login</a>
          </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
