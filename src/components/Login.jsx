import React, { useState,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import './Login.css';
import logo from '../assets/logo.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };
  const { login } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const data = { name, password };
    axios.post('https://daarconn-dev.alarkan.com/Account/validatelogin', data)
      .then((response) => {
        const token = response.data.token;
        login(token);
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('jwtToken', token, { expires: 3600 }); // Token expires in 1 hour
        alert('Logged in! Token: ' + token);
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };


  return (
    <><div className="login-page">
      <div className="login-form">

        <form>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>Member Login</h2>
          <div className="form-group">
            <input type="text" id="username" placeholder='UserName' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder='Password'
              value={password} onChange={(e) => setPassword(e.target.value)}  />
            <span
              className={`eye-icon ${showPassword ? 'visible' : ''}`}
              onClick={handlePasswordToggle}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
</div>
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
    </>
    );
};

export default Login;
