import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const luxuryWords = [
  'Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing', 'elit,'
];

const Welcome = () => {
  // Loader state
  const [loading, setLoading] = useState(true);
  // Text fill animation state
  const [fillIndex, setFillIndex] = useState(-1);

  useEffect(() => {
    // Loader timeout (simulate loading)
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && fillIndex < luxuryWords.length - 1) {
      const fillTimer = setTimeout(() => setFillIndex((i) => i + 1), 180);
      return () => clearTimeout(fillTimer);
    }
  }, [fillIndex, loading]);

  return (
    <div className="register-bg-pro fade-in-pro min-h-screen flex flex-col justify-center items-center relative overflow-hidden font-poppins" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 50%, #6c5ce7 100%)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 0
    }}>
      {/* Luxury Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#e0c3fc] via-[#a18fff] to-[#6c5ce7] animate-luxury-fade" style={{backdropFilter: 'blur(8px)'}}>
          <svg className="luxury-loader-spin mb-6" width="72" height="72" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#fff" strokeWidth="4" opacity="0.18" />
            <path d="M24 2a22 22 0 0 1 0 44" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span className="text-2xl font-bold text-white tracking-widest luxury-loader-text">PopX</span>
        </div>
      )}
      {/* Animated Blobs */}
      <div className="blob-bg-pro">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>
      {/* Glassmorphism Card with Glow */}
      <div className="register-card-pro animate-card-in backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center max-w-xl w-full border border-white/40 animate-fade-in ring-4 ring-[#a18fff]/10 hover:ring-[#6c5ce7]/30 transition-all duration-500 relative" style={{
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
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(0.23,1,0.32,1)'
      }}>
        {/* Floating Premium Icon */}
        <div className="floating-logo-pro animate-float-pro absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-[#6c5ce7] to-[#a18fff] p-3 rounded-full shadow-xl animate-float-glow" style={{
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
          zIndex: 3
        }}>
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M12 2l3 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L2 9h7z" />
          </svg>
        </div>
        {/* Logo + Animation */}
        <div className="mb-6 flex flex-col items-center mt-6">
          <svg className="w-20 h-20 animate-spin-slow mb-2 drop-shadow-xl" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" stroke="#6c5ce7" strokeWidth="4" opacity="0.2" />
            <path d="M24 2a22 22 0 0 1 0 44" stroke="#6c5ce7" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <h1 className="text-4xl font-extrabold text-[#6c5ce7] drop-shadow mb-2 flex flex-col items-center gap-2">
            <span className="flex items-center gap-2">
              Welcome to PopX
              <span className="inline-block animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#6c5ce7" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </span>
            {/* Word-by-word fill/darkening animation */}
            <span className="text-lg text-gray-700 font-medium text-center max-w-md italic mt-2 luxury-text-fill">
              {luxuryWords.map((word, i) => (
                <span key={i} className={`inline-block transition-all duration-300 luxury-word ${i <= fillIndex ? 'filled' : ''}`} style={{
                  color: i <= fillIndex ? '#2d3436' : '#b2bec3',
                  filter: i <= fillIndex ? 'none' : 'blur(1.5px)',
                  fontWeight: i <= fillIndex ? 600 : 400,
                  transitionDelay: `${i * 0.12}s`
                }}> {word}</span>
              ))}
            </span>
          </h1>
        </div>
        {/* Features Row - Only 4 Premium Icons */}
        <div className="flex flex-wrap justify-center gap-8 my-8">
          {/* Analytics */}
          <div className="flex flex-col items-center">
            <span className="bg-[#a18fff]/10 p-4 rounded-full mb-2 animate-float shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6c5ce7" className="w-8 h-8">
                <rect x="3" y="12" width="4" height="8" />
                <rect x="9" y="8" width="4" height="12" />
                <rect x="15" y="4" width="4" height="16" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-[#6c5ce7]">Analytics</span>
          </div>
          {/* Security */}
          <div className="flex flex-col items-center">
            <span className="bg-[#a18fff]/10 p-4 rounded-full mb-2 animate-float-delay shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00b894" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354l6.364 2.122A2 2 0 0120 8.236V12c0 5.25-4.5 8-8 8s-8-2.75-8-8V8.236a2 2 0 011.636-1.76L12 4.354z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-[#00b894]">Security</span>
          </div>
          {/* Support */}
          <div className="flex flex-col items-center">
            <span className="bg-[#a18fff]/10 p-4 rounded-full mb-2 animate-float-delay3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6c5ce7" className="w-8 h-8">
                <path d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-[#6c5ce7]">24/7 Support</span>
          </div>
        </div>
        {/* Trust Badges / Testimonials */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 animate-fade-in-slow">
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-xl shadow border border-[#a18fff]/20">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            <span className="text-xs font-semibold text-[#6c5ce7]">4.9/5 Rated by 2,000+ users</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-xl shadow border border-[#a18fff]/20">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-semibold text-[#6c5ce7]">Trusted by Top Companies</span>
          </div>
        </div>
        {/* Call to Action Buttons */}
        <div className="flex gap-4 mt-4 w-full justify-center">
          <Link to="/register" className="px-6 py-3 rounded-lg bg-[#6c5ce7] text-white font-bold shadow-lg hover:bg-[#5e54c7] transition-all duration-300 flex items-center gap-2 animate-fade-in ring-2 ring-[#a18fff]/20 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" className="w-5 h-5 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            Create Account
          </Link>
          <Link to="/login" className="px-6 py-3 rounded-lg border-2 border-[#6c5ce7] text-[#6c5ce7] font-bold shadow-lg hover:bg-[#6c5ce7] hover:text-white transition-all duration-300 flex items-center gap-2 animate-fade-in-delay ring-2 ring-[#a18fff]/10 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6c5ce7" className="w-5 h-5 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Login
          </Link>
        </div>
        {/* Subtext */}
        <p className="text-gray-500 text-xs mt-8 animate-fade-in-slow text-center">
          Join thousands of satisfied users who are already benefiting from our services.
        </p>
        {/* Floating Support/Chat Button */}
        <div className="absolute bottom-6 right-6 animate-float-delay3">
          <button className="bg-gradient-to-tr from-[#6c5ce7] to-[#a18fff] p-4 rounded-full shadow-xl ring-2 ring-[#a18fff]/20 hover:ring-[#6c5ce7]/40 transition-all duration-300 animate-pulse focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      {/* Custom Animations & Premium Styles */}
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
        .floating-logo-pro {
          z-index: 3;
        }
        /* Luxury Loader */
        .luxury-loader-spin {
          animation: luxurySpin 2.2s cubic-bezier(0.23,1,0.32,1) infinite;
        }
        @keyframes luxurySpin {
          0% { transform: rotate(0deg) scale(0.92); opacity: 0.7; }
          50% { transform: rotate(180deg) scale(1.08); opacity: 1; }
          100% { transform: rotate(360deg) scale(0.92); opacity: 0.7; }
        }
        .luxury-loader-text {
          letter-spacing: 0.18em;
          text-shadow: 0 2px 16px #fff8, 0 1px 0 #a18fff;
          font-family: 'Poppins', sans-serif;
        }
        .animate-luxury-fade {
          animation: luxuryFadeIn 0.7s;
        }
        @keyframes luxuryFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        /* Word-by-word fill/darkening animation */
        .luxury-text-fill .luxury-word {
          transition: color 0.3s, filter 0.3s, font-weight 0.3s;
        }
        .luxury-text-fill .luxury-word.filled {
          color: #2d3436 !important;
          filter: none !important;
          font-weight: 600 !important;
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
        /* Keep all your existing custom and Tailwind animations */
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-fade-in { animation: fadeIn 1s ease-in; }
        .animate-fade-in-delay { animation: fadeIn 1.5s ease-in; }
        .animate-fade-in-slow { animation: fadeIn 2s ease-in; }
        .animate-bounce { animation: bounce 1.2s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delay { animation: float 3s 0.5s ease-in-out infinite; }
        .animate-float-delay2 { animation: float 3s 1s ease-in-out infinite; }
        .animate-float-delay3 { animation: float 3s 1.5s ease-in-out infinite; }
        .animate-float-glow { animation: floatGlow 4s ease-in-out infinite; }
        .animate-sparkle1 { animation: sparkle 3.5s 0s infinite alternate; }
        .animate-gradient-move { background-size: 200% 200%; animation: gradientMove 8s ease-in-out infinite; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 0 32px #a29bfe44; }
          50% { transform: translateY(-16px) scale(1.08); box-shadow: 0 0 48px #6c5ce7aa; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes sparkle {
          0% { opacity: 0.7; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(20deg); }
          100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Welcome;