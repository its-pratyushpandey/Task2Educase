import { useState } from 'react';
import { FaBell, FaMoon, FaSun, FaSignOutAlt, FaUserEdit, FaCog, FaChartBar, FaEnvelope, FaHeadset, FaChevronDown, FaChevronUp, FaUserCircle } from 'react-icons/fa';
import profilePlaceholder from '../assets/profile-placeholder.jpeg';
import './index.css';

const statsData = [
  {
    label: 'Projects',
    value: 12,
    icon: <FaChartBar className="text-primary text-2xl" />,
    color: 'bg-[#e0c3fc]'
  },
  {
    label: 'Messages',
    value: 34,
    icon: <FaEnvelope className="text-[#00b894] text-2xl" />,
    color: 'bg-[#d0f5ea]'
  },
  {
    label: 'Analytics',
    value: '98%',
    icon: <FaChartBar className="text-[#6c5ce7] text-2xl" />,
    color: 'bg-[#f3e8ff]'
  },
  {
    label: 'Support',
    value: 5,
    icon: <FaHeadset className="text-[#a18fff] text-2xl" />,
    color: 'bg-[#e0e7ff]'
  },
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
    window.location.href = '/login';
  };

  // Edit profile (simulate)
  const handleEditProfile = () => {
    alert('Edit Profile feature coming soon!');
  };

  // Settings (simulate)
  const handleSettings = () => {
    alert('Settings feature coming soon!');
  };

  // Help (simulate)
  const handleHelp = () => {
    alert('Support feature coming soon!');
  };

  return (
    <div className={`min-h-screen w-full font-poppins transition-all duration-300 ${dark ? 'bg-[#232946] text-white' : 'bg-white text-[#2d3436]'}`}
      style={{ minHeight: '100vh', padding: '0', margin: 0 }}
    >
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
                  <li className="p-3 hover:bg-[#f3e8ff] cursor-pointer">New message from Support</li>
                  <li className="p-3 hover:bg-[#f3e8ff] cursor-pointer">Analytics updated</li>
                  <li className="p-3 hover:bg-[#f3e8ff] cursor-pointer">Profile viewed by recruiter</li>
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
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white/90 rounded-3xl shadow-xl p-8 border border-[#a18fff]/10 animate-fade-in">
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
              <div className="mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm font-semibold text-[#6c5ce7]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 animate-fade-in">
          <button onClick={handleEditProfile} className="px-6 py-3 rounded-lg bg-[#6c5ce7] text-white font-bold shadow-lg hover:bg-[#5e54c7] transition-all flex items-center gap-2"><FaUserEdit /> Edit Profile</button>
          <button onClick={handleSettings} className="px-6 py-3 rounded-lg border-2 border-[#6c5ce7] text-[#6c5ce7] font-bold shadow-lg hover:bg-[#6c5ce7] hover:text-white transition-all flex items-center gap-2"><FaCog /> Settings</button>
          <button onClick={handleHelp} className="px-6 py-3 rounded-lg bg-[#a18fff] text-white font-bold shadow-lg hover:bg-[#6c5ce7] transition-all flex items-center gap-2"><FaHeadset /> Support</button>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease-in; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;