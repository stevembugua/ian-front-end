import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/todo');
  };

  return (
    <div className='big'>
    <div className='hero'>
      <h1 className='header'>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='email-holder'>
          <div className='email'>Email:</div>
          <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='password-holder'>
          <div className='password'>Password:</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className='btn'>Login</button>
      </form>
      <p>Don't have an account?<a href="/signup"> Signup </a></p>
    </div>
    </div>
  );
}

export default Login;
