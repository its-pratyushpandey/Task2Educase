import { useState } from 'react';
import profilePlaceholder from '../assets/profile-placeholder.jpeg';
import './index.css';

const Dashboard = () => {
  const [user] = useState({
    name: 'Pratyush Kumar Pandey',
    email: 'pratyush@example.com',
    photo: profilePlaceholder
  });

  return (
    <div className="container" style={{
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        {/* Profile Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ position: 'relative' }}>
            <img 
              src={user.photo} 
              alt="Profile" 
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #6c5ce7'
              }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              backgroundColor: '#6c5ce7',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#2d3436',
              marginBottom: '5px'
            }}>{user.name}</h2>
            <p style={{
              fontSize: '1rem',
              color: '#636e72',
              marginBottom: '20px'
            }}>{user.email}</p>
            
          </div>
        </div>

        {/* Content Section */}
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#6c5ce7',
            marginBottom: '20px'
          }}>Your Dashboard</h3>
          
          <p style={{
            fontSize: '1rem',
            color: '#2d3436',
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>Welcome to your personalized dashboard. Here you can manage your account settings, view your stats, and access all the features of our platform.</p>
          
          <p style={{
            fontSize: '1rem',
            color: '#2d3436',
            lineHeight: '1.6',
            marginBottom: '15px'
          }}>We're constantly adding new features to help you get the most out of our service. Check back regularly for updates!</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;