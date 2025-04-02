import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from "../components/Section";
import { Gradient } from "../components/design/Hero";
import { curve } from "../assets";

const ProblemStatementPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Animation variants
  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const generateParticles = () => {
    const particleCount = isMobile ? 8 : 20;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/20"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0 
          }}
          animate={{ 
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0]
          }}
          transition={{ duration: 5 + Math.random() * 10, repeat: Infinity, repeatType: "loop", delay: Math.random() * 5 }}
        />
      );
    }
    return particles;
  };

  // Data for problem statements
  const problems = [
    {
      title: "BlockVerify - Decentralized Credential Verification System",
      domain: "Domain: Blockchain, Web3",
      description: "Develop a decentralized platform for issuing, verifying, and managing academic and professional certificates using blockchain. It should enable institutions to issue tamper-proof credentials and allow users to share verifiable proof of qualifications securely."
    },
    {
      title: "AirCare - Smart Air Quality Monitoring and Alert System",
      domain: "Domain: IoT, AI/ML, Health-Tech",
      description: "Create an IoT-based system that monitors indoor and outdoor air quality in real-time and uses AI to predict harmful levels of pollutants, triggering alerts and safety recommendations to users."
    },
    {
      title: "SkillXR - Immersive AR/VR Learning Platform",
      domain: "Domain: WEB, EdTech, AI/ML",
      description: "Design an WEB learning environment that simulates real-world problem-solving tasks and provides AI-based feedback on user performance to improve learning retention."
    },
    {
      title: "GuardianAssist - AI-Enabled Personal Safety App",
      domain: "Domain: Android, AI/ML, IoT",
      description: "Develop a mobile app that integrates with wearable IoT devices to monitor user activity, detect emergencies like falls or distress signals, and alert emergency contacts or nearby help."
    },
    {
      title: "ChainFund - Transparent Charity Donation Tracker",
      domain: "Domain: Blockchain, Web3, Social Impact",
      description: "Create a blockchain-based platform where donors can transparently track how their donations are used by charities or NGOs using smart contracts and tokenized contributions."
    },
    {
      title: "ShopLens - Virtual Try-On for E-commerce",
      domain: "Domain: AR/VR, AI/ML, App/Web",
      description: "Build an app that allows users to try on clothes, glasses, or accessories virtually using their phone camera and AR overlays, combined with AI for personalized recommendations."
    },
    {
      title: "MedGuard -WEB -based Smart Medicine Reminder",
      domain: "Domain: App/Web, Health-Tech",
      description: "Design a smart Application that reminds users to take medication on time, monitors consumption, and alerts caregivers if doses are missed."
    },
    {
      title: "FinBuddy - AI-Powered Financial Health Assistant",
      domain: "Domain: AI/ML, App/Web",
      description: "Create a web and mobile application that analyzes a user's spending patterns using AI, provides budgeting suggestions, and forecasts future expenses and saving goals."
    },
    {
      title: "SkillMatch - Career Guidance & Portfolio Web Platform",
      domain: "Domain: Web App, AL/ML, EdTech",
      description: "Build a responsive web platform that recommends career paths and learning resources based on user skills, interests and market trends while offering an interactive portfolio builder."
    },
    {
      title: "EcoSwap - Web-Based Sustainable Product Exchange Platform",
      domain: "Domain: Web App, Sustainability, Marketplace",
      description: "Develop a web application that facilitates the exchange or donation of gently used items like clothes, books, and electronics, promoting circular economy."
    }
  ];

  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <motion.div
          key="problem-statement-page"
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <Section className="pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden" crosses>
            {/* Background Gradient & Particles */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/5 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {generateParticles()}
            </div>

            {/* Main Container */}
            <motion.div 
              className="container relative z-10 px-4 sm:px-6 md:px-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Header */}
              <motion.div className="text-center mb-12" variants={fadeIn}>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.span 
                    className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  >
                    Problem Statements
                  </motion.span>
                  <motion.img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </motion.h1>
                <motion.p 
                  className="body-1 max-w-3xl mx-auto text-n-2 text-sm sm:text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Explore innovative problem statements across emerging technologies.
                </motion.p>
              </motion.div>
              
              {/* Problem Statement Grid - Modified to 1 column on small/medium, 2 columns on large */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto"
                variants={staggerContainer}
              >
                {problems.map((problem, index) => (
                  <motion.div 
                    key={problem.title}
                    className="flex"
                    variants={cardAnimation}
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="relative p-0.5 rounded-xl bg-conic-gradient w-full h-full"
                      initial={{ opacity: 0, boxShadow: '0 0 0 rgba(59,130,246,0)' }}
                      animate={{ opacity: 1, boxShadow: '0 0 15px rgba(59,130,246,0.2)' }}
                      transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: '0 0 25px rgba(59,130,246,0.4)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="relative h-full bg-n-8/80 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 p-6 md:p-7"
                        initial={{ backdropFilter: 'blur(0px)' }}
                        animate={{ backdropFilter: 'blur(12px)' }}
                        transition={{ duration: 1 }}
                      >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                          {problem.title}
                        </h2>
                        <div className="inline-block mb-4 px-3 py-1 bg-gray-800 text-white text-xs rounded">
                          {problem.domain}
                        </div>
                        <p className="text-sm md:text-base text-white/90">
                          {problem.description}
                        </p>
                      </motion.div>
                      <Gradient />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Final Call-to-Action Box */}
              <motion.div 
                className="mt-12 md:mt-16 text-center mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: isMobile ? 2.6 : 2.9 }}
              >
                <motion.div
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base font-bold"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                   Happy Innovating with Hackblitz 
                </motion.div>
              </motion.div>

              {/* Back Button */}
              <motion.div 
                className="mt-8 md:mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: isMobile ? 2.7 : 3 }}
              >
                <motion.a
                  href="/"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: '0 0 15px rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Home
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Background Animated Elements */}
            <motion.div 
              className="absolute top-1/4 -left-32 sm:-left-48 md:-left-64 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-blue-500/10 blur-[50px] sm:blur-[75px] md:blur-[100px] pointer-events-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-1/3 -right-32 sm:-right-48 md:-right-64 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-purple-500/10 blur-[50px] sm:blur-[75px] md:blur-[100px] pointer-events-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            ></motion.div>
          </Section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProblemStatementPage;