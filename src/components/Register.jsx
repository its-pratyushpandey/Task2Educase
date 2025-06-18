import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaLock, FaBuilding, FaCheckCircle, FaRegDotCircle, FaSpinner, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter, FaArrowLeft } from 'react-icons/fa';
import './index.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    hasExperience: 'no'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.fullName && formData.phone && formData.email && 
                     formData.password && formData.company;

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

  // Social sign up handlers (placeholder)
  const handleSocial = (provider) => {
    alert(`Sign up with ${provider} coming soon!`);
  };

  return (
    <div className="register-bg fade-in" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      padding: '40px 0',
      position: 'relative'
    }}>
      <button onClick={() => navigate(-1)} style={{
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
        transition: 'background 0.2s'
      }} title="Back">
        <FaArrowLeft style={{ color: '#6c5ce7', fontSize: '1.2rem' }} />
      </button>
      <div className="register-card" style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px 0 rgba(76, 110, 245, 0.15)',
        padding: '40px 32px',
        maxWidth: '420px',
        width: '100%',
        animation: 'fadeInUp 0.8s',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated success checkmark overlay */}
        {submitted && (
          <div className="success-overlay fade-in" style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,255,255,0.95)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '24px',
            animation: 'fadeIn 0.7s'
          }}>
            <FaCheckCircle style={{ color: '#00b894', fontSize: '3.5rem', animation: 'pop 0.6s' }} />
            <h2 style={{ color: '#6c5ce7', marginTop: 18, fontWeight: 700 }}>Registration Successful!</h2>
          </div>
        )}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#6c5ce7',
            marginBottom: '20px',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <FaCheckCircle style={{ color: '#00b894', fontSize: '2rem', marginRight: '8px' }} />
            Create Account
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#636e72',
            marginBottom: '10px',
            lineHeight: '1.6'
          }}>Join our platform today and start your journey with us.</p>
          <p style={{
            fontSize: '1rem',
            color: '#636e72',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>Already have an account? <Link to="/login" style={{ color: '#6c5ce7', fontWeight: '600', textDecoration: 'underline' }}>Login</Link></p>
        </div>
        {/* Social sign up section */}
        <div className="social-signup fade-in" style={{ display: 'flex', justifyContent: 'center', gap: '18px', marginBottom: 24 }}>
          <button type="button" className="social-btn" title="Sign up with Google" onClick={() => handleSocial('Google')}>
            <FaGoogle style={{ color: '#db4437', fontSize: '1.3rem' }} />
          </button>
          <button type="button" className="social-btn" title="Sign up with Facebook" onClick={() => handleSocial('Facebook')}>
            <FaFacebook style={{ color: '#4267B2', fontSize: '1.3rem' }} />
          </button>
          <button type="button" className="social-btn" title="Sign up with Twitter" onClick={() => handleSocial('Twitter')}>
            <FaTwitter style={{ color: '#1da1f2', fontSize: '1.3rem' }} />
          </button>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group input-icon-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group input-icon-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group input-icon-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group input-icon-group" style={{ position: 'relative' }}>
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
              required
              style={{ paddingRight: 38 }}
            />
            <span
              className="password-toggle"
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#6c5ce7',
                opacity: 0.8
              }}
              onClick={() => setShowPassword(v => !v)}
              title={showPassword ? 'Hide Password' : 'Show Password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="form-group input-icon-group">
            <FaBuilding className="input-icon" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group fade-in" style={{ marginBottom: '18px', marginTop: '10px' }}>
            <label style={{
              color: '#2d3436',
              fontWeight: '500',
              marginBottom: '6px',
              display: 'block',
              fontSize: '1rem'
            }}>Are you an Agency?</label>
            <div className="radio-group" style={{ display: 'flex', gap: '18px', marginTop: '6px' }}>
              <div className="radio-option" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <input
                  type="radio"
                  id="yes"
                  name="hasExperience"
                  value="yes"
                  checked={formData.hasExperience === 'yes'}
                  onChange={handleChange}
                  style={{ accentColor: '#6c5ce7' }}
                />
                <label htmlFor="yes" style={{ color: '#2d3436', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FaRegDotCircle style={{ color: formData.hasExperience === 'yes' ? '#6c5ce7' : '#b2bec3' }} /> Yes
                </label>
              </div>
              <div className="radio-option" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <input
                  type="radio"
                  id="no"
                  name="hasExperience"
                  value="no"
                  checked={formData.hasExperience === 'no'}
                  onChange={handleChange}
                  style={{ accentColor: '#6c5ce7' }}
                />
                <label htmlFor="no" style={{ color: '#2d3436', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FaRegDotCircle style={{ color: formData.hasExperience === 'no' ? '#6c5ce7' : '#b2bec3' }} /> No
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={isFormValid && !loading ? 'btn btn-primary animated-btn' : 'btn btn-disabled'}
            style={{ width: '100%', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.5px', transition: 'all 0.2s' }}
            disabled={!isFormValid || loading}
          >
            {loading ? <FaSpinner className="spin" style={{ fontSize: '1.2rem' }} /> : <FaCheckCircle style={{ fontSize: '1.2rem' }} />}
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>
      </div>
      <style>{`
        .fade-in {
          animation: fadeIn 1.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        .register-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .register-card:hover {
          box-shadow: 0 12px 40px 0 rgba(76, 110, 245, 0.22);
          transform: translateY(-2px) scale(1.01);
        }
        .input-icon-group {
          position: relative;
          margin-bottom: 18px;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6c5ce7;
          font-size: 1.1rem;
          opacity: 0.85;
          pointer-events: none;
        }
        .input-icon-group input {
          padding-left: 38px;
          border-radius: 8px;
          border: 1.5px solid #dfe6e9;
          height: 44px;
          font-size: 1rem;
          transition: border 0.2s, box-shadow 0.2s;
          background: #f8fafc;
        }
        .input-icon-group input:focus {
          border: 1.5px solid #6c5ce7;
          box-shadow: 0 0 0 2px #a29bfe33;
          background: #fff;
        }
        .btn-primary {
          background: linear-gradient(90deg, #6c5ce7 0%, #00b894 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 0;
          cursor: pointer;
          box-shadow: 0 2px 8px 0 #6c5ce71a;
        }
        .btn-primary:hover, .btn-primary:focus {
          background: linear-gradient(90deg, #00b894 0%, #6c5ce7 100%);
          box-shadow: 0 4px 16px 0 #6c5ce733;
          transform: translateY(-1px) scale(1.01);
        }
        .btn-disabled {
          background: #dfe6e9;
          color: #b2bec3;
          border-radius: 8px;
          padding: 12px 0;
          cursor: not-allowed;
        }
        .animated-btn {
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .social-btn {
          background: #fff;
          border: 1.5px solid #e0e0e0;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px #6c5ce71a;
          transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
          margin: 0 2px;
        }
        .social-btn:hover {
          box-shadow: 0 4px 16px #a29bfe33;
          transform: scale(1.08);
          border: 1.5px solid #6c5ce7;
        }
        .success-overlay {
          animation: fadeIn 0.7s;
        }
        .password-toggle:hover {
          color: #00b894;
        }
      `}</style>
    </div>
  );
};

export default Register;
