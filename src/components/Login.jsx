import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isFormValid = email && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Here you would typically make an API call to authenticate
      // For now, we'll just redirect to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '500px'
    }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#6c5ce7',
          marginBottom: '20px'
        }}>Login</h1>
        <p style={{
          fontSize: '1rem',
          color: '#2d3436',
          marginBottom: '10px',
          lineHeight: '1.6'
        }}>Welcome back! Please enter your credentials to access your account.</p>
        <p style={{
          fontSize: '1rem',
          color: '#2d3436',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>Don't have an account? <Link to="/register" style={{ color: '#6c5ce7', fontWeight: '600' }}>Sign up</Link></p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
        </div>

        <button
          type="submit"
          className={isFormValid ? 'btn btn-primary' : 'btn btn-disabled'}
          style={{ width: '100%', marginTop: '20px' }}
          disabled={!isFormValid}
          
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;