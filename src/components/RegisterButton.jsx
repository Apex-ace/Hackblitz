import React from 'react';

const RegisterButton = () => {
  const handleRegister = () => {
    window.location.href = 'https://unstop.com/p/hackblitz-jhulelal-institute-of-technology-1438941';
  };

  return (
    <button
      onClick={handleRegister}
      className="relative group px-12 py-4 text-lg font-bold text-white rounded-full 
                 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] to-[#9F53FF]
                 transform transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,200,118,0.4)]
                 active:scale-95 border border-white/10
                 backdrop-blur-sm overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="relative">
          <span className="block transition-transform duration-500 group-hover:-translate-y-full">
            Register Now
          </span>
          <span className="absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full">
            Register Now
          </span>
        </span>
        <svg 
          className="w-5 h-5 transform transition-all duration-500 group-hover:translate-x-1 group-hover:rotate-12" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </span>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] to-[#9F53FF] 
                      bg-[length:200%_100%] animate-gradient-x opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 
                      group-hover:opacity-100 transition-all duration-500
                      blur-xl group-hover:blur-2xl"></div>
    </button>
  );
};

export default RegisterButton; 