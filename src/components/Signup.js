import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/todo');
  };

  return (
    <div className="big-sign">
    <div className='hero-sign'>
      <h2 className='header-sign'>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className='name-holder-sign'>
          <div className='name-sign'>Username:</div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='email-holder-sign'>
          <div className='email-sign'>Email:</div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='password-holder-sign'>
          <div className='password-sign'>Password:</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className='btn-sign'>Signup</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
    </div>
  );
}

export default Signup;
