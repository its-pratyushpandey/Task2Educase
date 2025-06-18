import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f3e8ff] relative overflow-hidden font-poppins">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-gradient-to-tr from-[#a18fff]/40 via-[#6c5ce7]/20 to-[#fff]/10 animate-gradient-move" />
      </div>
      {/* Animated Blobs & Sparkles Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#6c5ce7] opacity-20 rounded-full filter blur-3xl animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-80 h-80 bg-[#a18fff] opacity-10 rounded-full filter blur-2xl animate-pulse top-[60%] left-[70%]" />
        <div className="absolute w-72 h-72 bg-[#fdcb6e] opacity-10 rounded-full filter blur-2xl animate-pulse top-[70%] left-[-10%]" />
        {/* Sparkle */}
        <svg className="absolute animate-sparkle1 left-[20%] top-[30%] w-8 h-8 opacity-70" viewBox="0 0 24 24" fill="#fff8e1">
          <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" />
        </svg>
      </div>
      {/* Glassmorphism Card with Glow */}
      <div className="backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center max-w-xl w-full border border-white/40 animate-fade-in ring-4 ring-[#a18fff]/10 hover:ring-[#6c5ce7]/30 transition-all duration-500 relative">
        {/* Floating Premium Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-[#6c5ce7] to-[#a18fff] p-3 rounded-full shadow-xl animate-float-glow">
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
            <span className="text-lg text-gray-700 font-medium text-center max-w-md animate-fade-in-slow italic mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
          {/* Collaboration */}
          <div className="flex flex-col items-center">
            <span className="bg-[#a18fff]/10 p-4 rounded-full mb-2 animate-float-delay2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fdcb6e" className="w-8 h-8">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0113 0" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-[#fdcb6e]">Collaboration</span>
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
      {/* Custom Animations */}
      <style>{`
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