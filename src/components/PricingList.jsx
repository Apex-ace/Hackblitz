import { useEffect, useState } from "react";
import Button from "./Button";

const WinnerList = () => {
  const [rotations, setRotations] = useState({
    gold: 0,
    silver: 0,
    techbox: 0
  });

  // Animation for rotating coins
  useEffect(() => {
    const interval = setInterval(() => {
      setRotations(prev => ({
        gold: prev.gold + 1,
        silver: prev.silver + 1,
        techbox: prev.techbox + 1
      }));
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  const winners = [
    {
      id: "1",
      title: "1st Runner Up",
      description: "5,000 RS",
      coinType: "silver",
      features: [
        "Recognition Certificate",
        "Featured on our social media"
      ],
    },
    {
      id: "0",
      title: "Winner",
      description: "10,000 RS",
      coinType: "gold",
      features: [
        "Official Recognition Certificate",
        "Featured on our website"
      ],
    },
    {
      id: "2",
      title: "Prize",
      description: "Exclusive Special Prize",
      coinType: "techbox",
      features: [
        "Innovation Certificate",
        "Mentorship Opportunity"
      ],
    },
  ];

  const getTechCoinSvg = (type) => {
    // SVG definitions for different tech-themed coins
    const coins = {
      gold: (
        <svg width="120" height="120" viewBox="0 0 120 120" className="mb-4">
          {/* Base coin */}
          <circle cx="60" cy="60" r="55" fill="#1A1A2E" stroke="#FFD700" strokeWidth="2" />
          
          {/* Circuit pattern */}
          <path d="M20,60 L40,60 M40,60 L45,50 M45,50 L55,50 M55,50 L60,40 M60,40 L75,40 M75,40 L80,50 M80,50 L100,50" 
                stroke="#FFD700" strokeWidth="1.5" fill="none" />
          <path d="M20,70 L35,70 M35,70 L40,80 M40,80 L60,80 M60,80 L65,70 M65,70 L90,70" 
                stroke="#FFD700" strokeWidth="1.5" fill="none" />
          
          {/* Center tech elements */}
          <circle cx="60" cy="60" r="25" fill="#0F0F1B" stroke="#FFD700" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="20" fill="#FFD700" fillOpacity="0.1" stroke="#FFD700" strokeWidth="1" />
          
          {/* Digital number */}
          <text x="60" y="65" fontSize="22" fontFamily="monospace" fontWeight="bold" fill="#FFD700" textAnchor="middle">1ST</text>
          
          {/* Tech dots */}
          <circle cx="30" cy="40" r="2" fill="#FFD700" />
          <circle cx="90" cy="40" r="2" fill="#FFD700" />
          <circle cx="30" cy="80" r="2" fill="#FFD700" />
          <circle cx="90" cy="80" r="2" fill="#FFD700" />
          
          {/* Glow effect */}
          <circle cx="60" cy="60" r="52" fill="url(#goldGlow)" fillOpacity="0.15" />
          
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ),
      silver: (
        <svg width="120" height="120" viewBox="0 0 120 120" className="mb-4">
          {/* Base coin */}
          <circle cx="60" cy="60" r="55" fill="#1A1A2E" stroke="#C0C0C0" strokeWidth="2" />
          
          {/* Circuit pattern */}
          <path d="M20,55 L45,55 M45,55 L50,45 M50,45 L70,45 M70,45 L75,55 M75,55 L100,55" 
                stroke="#C0C0C0" strokeWidth="1.5" fill="none" />
          <path d="M20,75 L40,75 M40,75 L45,65 M45,65 L60,65 M60,65 L65,75 M65,75 L95,75" 
                stroke="#C0C0C0" strokeWidth="1.5" fill="none" />
          
          {/* Center tech elements */}
          <circle cx="60" cy="60" r="25" fill="#0F0F1B" stroke="#C0C0C0" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="20" fill="#C0C0C0" fillOpacity="0.1" stroke="#C0C0C0" strokeWidth="1" />
          
          {/* Digital number */}
          <text x="60" y="65" fontSize="22" fontFamily="monospace" fontWeight="bold" fill="#C0C0C0" textAnchor="middle">2ND</text>
          
          {/* Tech dots */}
          <circle cx="35" cy="40" r="2" fill="#C0C0C0" />
          <circle cx="85" cy="40" r="2" fill="#C0C0C0" />
          <circle cx="35" cy="80" r="2" fill="#C0C0C0" />
          <circle cx="85" cy="80" r="2" fill="#C0C0C0" />
          
          {/* Glow effect */}
          <circle cx="60" cy="60" r="52" fill="url(#silverGlow)" fillOpacity="0.15" />
          
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="silverGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ),
      techbox: (
        <svg width="120" height="120" viewBox="0 0 120 120" className="mb-4">
          {/* Tech Prize Box */}
          <rect x="20" y="30" width="80" height="70" rx="8" fill="#1A1A2E" stroke="#4F46E5" strokeWidth="2" />
          
          {/* Box lid */}
          <path d="M15,30 L60,15 L105,30 L105,40 L60,25 L15,40 Z" fill="#1A1A2E" stroke="#4F46E5" strokeWidth="2" />
          
          {/* Tech items peeking out */}
          <circle cx="50" cy="25" r="5" fill="#4F46E5" />
          <rect x="65" cy="23" width="10" height="5" rx="1" fill="#4F46E5" />
          
          {/* Inner glow */}
          <rect x="25" y="35" width="70" height="60" rx="5" fill="url(#techGlow)" fillOpacity="0.2" />
          
          {/* Tech elements inside */}
          <circle cx="40" cy="50" r="8" fill="none" stroke="#4F46E5" strokeWidth="1.5" />
          <rect x="55" y="45" width="25" height="10" rx="2" fill="none" stroke="#4F46E5" strokeWidth="1.5" />
          
          <path d="M35,70 L55,70 M55,70 L60,65 M60,65 L80,65" 
                stroke="#4F46E5" strokeWidth="1.5" fill="none" />
                
          <circle cx="40" cy="80" r="5" fill="#4F46E5" fillOpacity="0.5" />
          <circle cx="60" cy="80" r="5" fill="#4F46E5" fillOpacity="0.5" />
          <circle cx="80" cy="80" r="5" fill="#4F46E5" fillOpacity="0.5" />
          
          {/* Special badge */}
          <circle cx="90" cy="40" r="12" fill="#1A1A2E" stroke="#4F46E5" strokeWidth="1.5" />
          <text x="90" y="45" fontSize="16" fontFamily="monospace" fontWeight="bold" fill="#4F46E5" textAnchor="middle">SP</text>
          
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="techGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      )
    };

    return coins[type] || null;
  };

  return (
    <div className="flex gap-4 max-lg:gap-6 lg:gap-8 max-lg:flex-col lg:flex-row justify-between w-full">
      {winners.map((item) => (
        <div
          key={item.id}
          className="w-full lg:w-1/3 h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] py-8 text-center"
        >
          <h4 className={`h4 mb-4 ${
            item.coinType === 'gold' ? 'text-yellow-500' : 
            item.coinType === 'silver' ? 'text-gray-300' : 'text-indigo-500'
          }`}>
            {item.title}
          </h4>
          
          <div className="flex justify-center items-center mb-6">
            <div
              style={{
                transform: `rotateY(${rotations[item.coinType]}deg)`,
                transition: "transform 0.05s linear"
              }}
            >
              {getTechCoinSvg(item.coinType)}
            </div>
          </div>
          
          <p className="body-2 min-h-[3rem] mb-6 text-n-1/50 text-xl font-bold">
            {item.description}
          </p>

          <Button
            className="w-full mb-6"
            href="#"
            white={true}
          >
            View Details
          </Button>

          <ul className="text-left">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start py-5 border-t border-n-6">
                <span className="inline-block w-6 h-6 text-center leading-6 rounded-full bg-green-500 text-white">✓</span>
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WinnerList;