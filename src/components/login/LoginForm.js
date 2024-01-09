import React, { useState } from 'react';
import './LoginForm.css';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Shivam' && password === 'Shivam@123') {
      
      setAuthenticated(true); 
    } else {
      alert('Invalid credentials');
    }
  };

  if (authenticated) {
    return <Navigate to="/ipo" />;
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder='Shivam'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Shivam@123'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
