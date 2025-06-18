import { useState } from 'react';
import {
  FaBell, FaMoon, FaSun, FaSignOutAlt, FaUserEdit, FaCog, FaChartBar, FaEnvelope, FaHeadset, FaChevronDown, FaChevronUp, FaUserCircle, FaLink, FaRegClock, FaCheckCircle, FaRegCommentDots, FaRocket, FaRegStar
} from 'react-icons/fa';
import profilePlaceholder from '../assets/profile-placeholder.jpeg';
import './index.css';

const statsData = [
  {
    label: 'Projects',
    value: 12,
    icon: <FaChartBar className="text-primary text-2xl" />, color: 'bg-[#e0c3fc]'
  },
  {
    label: 'Messages',
    value: 34,
    icon: <FaEnvelope className="text-[#00b894] text-2xl" />, color: 'bg-[#d0f5ea]'
  },
  {
    label: 'Analytics',
    value: '98%',
    icon: <FaChartBar className="text-[#6c5ce7] text-2xl" />, color: 'bg-[#f3e8ff]'
  },
  {
    label: 'Support',
    value: 5,
    icon: <FaHeadset className="text-[#a18fff] text-2xl" />, color: 'bg-[#e0e7ff]'
  },
];

const recentMessages = [
  { from: 'Support', text: 'Your ticket has been updated.', time: '2m ago', icon: <FaHeadset className="text-[#6c5ce7]" /> },
  { from: 'Analytics', text: 'Your stats improved by 10%.', time: '1h ago', icon: <FaChartBar className="text-[#00b894]" /> },
  { from: 'Recruiter', text: 'Profile viewed.', time: '3h ago', icon: <FaUserCircle className="text-[#a18fff]" /> },
];

const activityTimeline = [
  { icon: <FaCheckCircle className="text-green-500" />, label: 'Completed onboarding', time: 'Today' },
  { icon: <FaRocket className="text-[#6c5ce7]" />, label: 'Launched new project', time: 'Yesterday' },
  { icon: <FaRegStar className="text-yellow-400" />, label: 'Received 5-star review', time: '2 days ago' },
];

const quickLinks = [
  { label: 'Docs', icon: <FaLink />, url: 'https://docs.popx.com' },
  { label: 'Community', icon: <FaRegCommentDots />, url: 'https://community.popx.com' },
  { label: 'Upgrade', icon: <FaRocket />, url: '#' },
];

const Dashboard = () => {
  const [user] = useState({
    name: 'Pratyush Kumar Pandey',
    email: 'pratyush@example.com',
    photo: profilePlaceholder
  });
  const [dark, setDark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showToast, setShowToast] = useState('');

  // Dark mode toggle
  const handleDarkToggle = () => {
    setDark((d) => !d);
    document.body.style.background = !dark
      ? 'linear-gradient(135deg, #232946 0%, #6c5ce7 100%)'
      : 'var(--white)';
    document.body.style.color = !dark ? '#fff' : 'var(--dark)';
  };

  // Logout (simulate)
  const handleLogout = () => {
    setShowToast('Logged out successfully!');
    setTimeout(() => {
      setShowToast('');
      window.location.href = '/login';
    }, 1200);
  };

  // Edit profile (simulate)
  const handleEditProfile = () => {
    setShowToast('Edit Profile feature coming soon!');
    setTimeout(() => setShowToast(''), 1500);
  };

  // Settings (simulate)
  const handleSettings = () => {
    setShowSettings(true);
  };

  // Help (simulate)
  const handleHelp = () => {
    setShowToast('Support feature coming soon!');
    setTimeout(() => setShowToast(''), 1500);
  };

  // Settings modal close
  const closeSettings = () => setShowSettings(false);

  return (
    <div className={`min-h-screen w-full font-poppins transition-all duration-300 ${dark ? 'bg-[#232946] text-white' : 'bg-white text-[#2d3436]'}`}
      style={{ minHeight: '100vh', padding: '0', margin: 0, background: dark ? 'linear-gradient(135deg, #232946 0%, #6c5ce7 100%)' : 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)' }}
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-primary text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in">
          {showToast}
        </div>
      )}
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 animate-fade-in">
          <div className="bg-white text-[#2d3436] rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in">
            <button onClick={closeSettings} className="absolute top-3 right-3 text-xl text-[#6c5ce7] hover:text-[#232946]">&times;</button>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FaCog /> Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><FaMoon /> Dark Mode <input type="checkbox" checked={dark} onChange={handleDarkToggle} className="ml-auto scale-125" /></div>
              <div className="flex items-center gap-3"><FaBell /> Notifications <input type="checkbox" checked readOnly className="ml-auto scale-125" /></div>
              <div className="flex items-center gap-3"><FaUserEdit /> Profile Privacy <input type="checkbox" checked readOnly className="ml-auto scale-125" /></div>
            </div>
            <button onClick={closeSettings} className="btn btn-primary w-full mt-6">Close</button>
          </div>
        </div>
      )}
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 shadow-md bg-white/80 backdrop-blur-lg sticky top-0 z-20 border-b border-[#a18fff]/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-primary tracking-tight flex items-center gap-2">
            <FaChartBar className="text-[#6c5ce7]" />
            PopX Dashboard
          </span>
        </div>
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <div className="relative">
            <button onClick={() => setShowNotif((v) => !v)} className="relative p-2 rounded-full hover:bg-[#f3e8ff] transition">
              <FaBell className="text-xl text-[#6c5ce7]" />
              <span className="absolute -top-1 -right-1 bg-[#00b894] text-white text-xs rounded-full px-1.5 py-0.5 font-bold">3</span>
            </button>
            {showNotif && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-[#2d3436] rounded-xl shadow-xl border border-[#a18fff]/20 z-30 animate-fade-in">
                <div className="p-4 border-b font-semibold text-primary">Notifications</div>
                <ul className="divide-y divide-[#f3e8ff]">
                  {recentMessages.map((msg, i) => (
                    <li key={i} className="p-3 flex items-center gap-2 hover:bg-[#f3e8ff] cursor-pointer">
                      {msg.icon} <span className="font-semibold">{msg.from}:</span> {msg.text} <span className="ml-auto text-xs text-[#636e72]">{msg.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Dark mode toggle */}
          <button onClick={handleDarkToggle} className="p-2 rounded-full hover:bg-[#f3e8ff] transition">
            {dark ? <FaSun className="text-xl text-yellow-400" /> : <FaMoon className="text-xl text-[#6c5ce7]" />}
          </button>
          {/* User menu */}
          <div className="relative">
            <button onClick={() => setShowMenu((v) => !v)} className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-[#f3e8ff] transition">
              <img src={user.photo} alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-primary" />
              <span className="font-semibold text-base hidden sm:block">{user.name.split(' ')[0]}</span>
              {showMenu ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-[#2d3436] rounded-xl shadow-xl border border-[#a18fff]/20 z-30 animate-fade-in">
                <button onClick={handleEditProfile} className="w-full flex items-center gap-2 px-4 py-3 hover:bg-[#f3e8ff] transition text-left"><FaUserEdit className="text-primary" /> Edit Profile</button>
                <button onClick={handleSettings} className="w-full flex items-center gap-2 px-4 py-3 hover:bg-[#f3e8ff] transition text-left"><FaCog className="text-primary" /> Settings</button>
                <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-3 hover:bg-[#f3e8ff] transition text-left"><FaSignOutAlt className="text-red-500" /> Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white/90 rounded-3xl shadow-xl p-8 border border-[#a18fff]/10 animate-fade-in backdrop-blur-md" style={{background: dark ? 'rgba(35,41,70,0.7)' : 'rgba(255,255,255,0.8)'}}>
          <div className="relative">
            <img src={user.photo} alt="Profile" className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-lg" />
            <button onClick={handleEditProfile} className="absolute bottom-2 right-2 bg-primary p-2 rounded-full shadow hover:bg-[#5649c0] transition" title="Edit Profile">
              <FaUserEdit className="text-white text-lg" />
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1 flex items-center gap-2">
              <FaUserCircle className="text-[#a18fff]" /> {user.name}
            </h2>
            <p className="text-base text-[#636e72] mb-2">{user.email}</p>
            <div className="flex gap-3 mt-2">
              <button onClick={handleEditProfile} className="btn btn-outline flex items-center gap-2"><FaUserEdit /> Edit</button>
              <button onClick={handleSettings} className="btn btn-outline flex items-center gap-2"><FaCog /> Settings</button>
              <button onClick={handleLogout} className="btn btn-primary flex items-center gap-2"><FaSignOutAlt /> Logout</button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <div key={stat.label} className={`rounded-2xl shadow-lg p-6 flex flex-col items-center gap-2 border border-[#a18fff]/10 ${stat.color} animate-fade-in`} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="mb-2 animate-bounce-slow">{stat.icon}</div>
              <div className="text-2xl font-bold counter-animate">{stat.value}</div>
              <div className="text-sm font-semibold text-[#6c5ce7]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Activity Timeline & Recent Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {/* Activity Timeline */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#a18fff]/10 backdrop-blur-md" style={{background: dark ? 'rgba(35,41,70,0.7)' : 'rgba(255,255,255,0.8)'}}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary"><FaRegClock /> Activity Timeline</h3>
            <ul className="space-y-4">
              {activityTimeline.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-semibold">{item.label}</span>
                  <span className="ml-auto text-xs text-[#636e72]">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Recent Messages */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-[#a18fff]/10 backdrop-blur-md" style={{background: dark ? 'rgba(35,41,70,0.7)' : 'rgba(255,255,255,0.8)'}}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary"><FaEnvelope /> Recent Messages</h3>
            <ul className="space-y-4">
              {recentMessages.map((msg, i) => (
                <li key={i} className="flex items-center gap-3">
                  {msg.icon}
                  <span className="font-semibold">{msg.from}:</span> {msg.text}
                  <span className="ml-auto text-xs text-[#636e72]">{msg.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 animate-fade-in">
          <button onClick={handleEditProfile} className="px-6 py-3 rounded-lg bg-[#6c5ce7] text-white font-bold shadow-lg hover:bg-[#5e54c7] transition-all flex items-center gap-2"><FaUserEdit /> Edit Profile</button>
          <button onClick={handleSettings} className="px-6 py-3 rounded-lg border-2 border-[#6c5ce7] text-[#6c5ce7] font-bold shadow-lg hover:bg-[#6c5ce7] hover:text-white transition-all flex items-center gap-2"><FaCog /> Settings</button>
          <button onClick={handleHelp} className="px-6 py-3 rounded-lg bg-[#a18fff] text-white font-bold shadow-lg hover:bg-[#6c5ce7] transition-all flex items-center gap-2"><FaHeadset /> Support</button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 animate-fade-in">
          {quickLinks.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg bg-white/80 border border-[#a18fff]/20 shadow hover:bg-[#f3e8ff] transition-all flex items-center gap-2 text-primary font-semibold">
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease-in; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .counter-animate {
          animation: counterUp 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes counterUp {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;