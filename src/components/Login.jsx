// External dependencies
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaCheckCircle, FaSpinner, FaArrowLeft } from 'react-icons/fa';
import './index.css';

// Login component
const Login = () => {
  // State management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Form validation
  const isFormValid = email && password;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => navigate('/dashboard'), 1200);
      }, 1500);
    }
  };

  return (
    <div
      className="register-bg-pro fade-in-pro"
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 50%, #6c5ce7 100%)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 0,
      }}
    >
      {/* Animated background blobs */}
      <div className="blob-bg-pro">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px #6c5ce71a',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'background 0.2s',
        }}
        title="Back"
      >
        <FaArrowLeft style={{ color: '#6c5ce7', fontSize: '1.2rem' }} />
      </button>

      {/* Glassmorphism card */}
      <div
        className="register-card-pro animate-card-in"
        style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '32px',
          boxShadow: '0 12px 48px 0 rgba(76, 110, 245, 0.18)',
          padding: '48px 36px',
          maxWidth: '440px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid #e0c3fc',
          zIndex: 1,
        }}
      >
        {/* Success overlay after login */}
        {submitted && (
          <div
            className="success-overlay fade-in-pro"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(255,255,255,0.97)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '32px',
              animation: 'fadeIn 0.7s',
            }}
          >
            <FaCheckCircle style={{ color: '#00b894', fontSize: '3.5rem', animation: 'pop 0.6s' }} />
            <h2 style={{ color: '#6c5ce7', marginTop: 18, fontWeight: 700 }}>Login Successful!</h2>
          </div>
        )}

        {/* Floating logo/icon */}
        <div
          className="floating-logo-pro animate-float-pro"
          style={{
            position: 'absolute',
            top: -38,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #6c5ce7 0%, #8ec5fc 100%)',
            borderRadius: '50%',
            width: 76,
            height: 76,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px #6c5ce744',
            zIndex: 3,
          }}
        >
          <FaLock style={{ color: '#fff', fontSize: '2.5rem', filter: 'drop-shadow(0 2px 8px #00b89488)' }} />
        </div>

        {/* Title and description */}
        <div style={{ marginBottom: '20px', textAlign: 'center', marginTop: 32 }}>
          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#6c5ce7',
              marginBottom: '18px',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            Login
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#636e72',
              marginBottom: '30px',
              lineHeight: '1.6',
            }}
          >
            Welcome back! Please enter your credentials to access your account.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#636e72',
              marginBottom: '10px',
              lineHeight: '1.6',
            }}
          >
            Don't have an account?{' '}
            <Link
              to="/register"
              style={{ color: '#6c5ce7', fontWeight: '600', textDecoration: 'underline' }}
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Email input */}
          <div className="form-group input-icon-group-pro">
            <FaEnvelope className="input-icon-pro" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>

          {/* Password input with toggle */}
          <div className="form-group input-icon-group-pro" style={{ position: 'relative' }}>
            <FaLock className="input-icon-pro" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="off"
              required
              style={{ paddingRight: 38 }}
            />
            <span
              className="password-toggle-pro"
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#6c5ce7',
                opacity: 0.8,
              }}
              onClick={() => setShowPassword((v) => !v)}
              title={showPassword ? 'Hide Password' : 'Show Password'}
            >
              {showPassword ? <FaLock /> : <FaLock style={{ opacity: 0.5 }} />}
            </span>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={
              isFormValid && !loading
                ? 'btn-pro btn-primary-pro animated-btn-pro'
                : 'btn-pro btn-disabled-pro'
            }
            style={{
              width: '100%',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: '0.5px',
              transition: 'all 0.2s',
            }}
            disabled={!isFormValid || loading}
          >
            {loading ? (
              <FaSpinner className="spin-pro" style={{ fontSize: '1.2rem' }} />
            ) : (
              <FaCheckCircle style={{ fontSize: '1.2rem' }} />
            )}
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>

      {/* Inline styles for animation and responsiveness */}
      <style>{`
        .fade-in-pro {
          animation: fadeInPro 1.2s;
        }
        @keyframes fadeInPro {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-in {
          animation: cardIn 1.1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes cardIn {
          0% { opacity: 0; transform: scale(0.95) translateY(60px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-float-pro {
          animation: floatPro 3.5s ease-in-out infinite;
        }
        @keyframes floatPro {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-12px); }
        }
        .blob-bg-pro {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.25;
          animation: blobMove 12s infinite alternate;
        }
        .blob1 {
          width: 420px; height: 420px;
          background: #6c5ce7;
          top: -120px; left: -120px;
          animation-delay: 0s;
        }
        .blob2 {
          width: 320px; height: 320px;
          background: #00b894;
          bottom: -100px; right: -100px;
          animation-delay: 2s;
        }
        .blob3 {
          width: 260px; height: 260px;
          background: #a18fff;
          top: 60%; left: 70%;
          animation-delay: 4s;
        }
        @keyframes blobMove {
          0% { transform: scale(1) translateY(0) translateX(0); }
          100% { transform: scale(1.15) translateY(-30px) translateX(30px); }
        }
        .register-card-pro {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .register-card-pro:hover {
          box-shadow: 0 16px 56px 0 rgba(76, 110, 245, 0.22);
          transform: translateY(-2px) scale(1.01);
        }
        .input-icon-group-pro {
          position: relative;
          margin-bottom: 20px;
        }
        .input-icon-pro {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6c5ce7;
          font-size: 1.1rem;
          opacity: 0.85;
          pointer-events: none;
        }
        .input-icon-group-pro input {
          padding-left: 38px;
          border-radius: 10px;
          border: 1.5px solid #dfe6e9;
          height: 46px;
          font-size: 1rem;
          transition: border 0.2s, box-shadow 0.2s, background 0.2s;
          background: #f8fafc;
        }
        .input-icon-group-pro input:focus {
          border: 1.5px solid #6c5ce7;
          box-shadow: 0 0 0 2px #a29bfe33;
          background: #fff;
        }
        .btn-pro.btn-primary-pro {
          background: linear-gradient(90deg, #6c5ce7 0%, #00b894 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 0;
          cursor: pointer;
          box-shadow: 0 2px 8px 0 #6c5ce71a;
        }
        .btn-pro.btn-primary-pro:hover, .btn-pro.btn-primary-pro:focus {
          background: linear-gradient(90deg, #00b894 0%, #6c5ce7 100%);
          box-shadow: 0 4px 16px 0 #6c5ce733;
          transform: translateY(-1px) scale(1.01);
        }
        .btn-pro.btn-disabled-pro {
          background: #dfe6e9;
          color: #b2bec3;
          border-radius: 10px;
          padding: 14px 0;
          cursor: not-allowed;
        }
        .animated-btn-pro {
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .spin-pro {
          animation: spinPro 1s linear infinite;
        }
        @keyframes spinPro {
          100% { transform: rotate(360deg); }
        }
        .success-overlay {
          animation: fadeIn 0.7s;
        }
        .password-toggle-pro:hover {
          color: #00b894;
        }
        @media (max-width: 600px) {
          .register-card-pro {
            padding: 32px 8px;
            max-width: 98vw;
            border-radius: 18px;
          }
          .floating-logo-pro {
            width: 54px; height: 54px; top: -28px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;