import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from "../components/Section";
import { Gradient } from "../components/design/Hero";
import { curve } from "../assets";


const CodeOfConductPage = () => {
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

  // Animation Variants
  const pageTransition = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 }
    }
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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const cardAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 30
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: isMobile ? 0.3 : 0.5
      }
    }
  };
  
  const listItemAnimation = {
    hidden: { opacity: 0, x: isMobile ? -5 : -10 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: isMobile ? 0.5 + (i * 0.05) : 0.8 + (i * 0.1),
        duration: isMobile ? 0.3 : 0.5
      }
    })
  };

  // Animated background particles (fewer on mobile)
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
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5
          }}
        />
      );
    }
    return particles;
  };

  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <motion.div
          key="code-of-conduct-page"
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <Section className="pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden" crosses>
            {/* Background Gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/5 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {generateParticles()}
            </div>
            <motion.div 
              className="container relative z-10 px-4 sm:px-6 md:px-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                variants={fadeIn}
              >
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
                    Code of Conduct
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
                  Principles and guidelines for all participants in Hackblitz 2024.
                </motion.p>
              </motion.div>

              {/* Single Card with Code of Conduct Content */}
              <motion.div 
                className="relative max-w-4xl mx-auto px-4 sm:px-0"
                variants={cardAnimation}
              >
                <motion.div 
                  className="relative p-0.5 rounded-xl md:rounded-2xl bg-conic-gradient"
                  initial={{ opacity: 0, boxShadow: "0 0 0 rgba(59, 130, 246, 0)" }}
                  animate={{ 
                    opacity: 1, 
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" 
                  }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <motion.div 
                    className="relative bg-n-8/80 backdrop-blur-sm rounded-lg md:rounded-[1rem] border border-white/10 p-5 sm:p-6 md:p-8 lg:p-10 space-y-8 text-white"
                    initial={{ backdropFilter: "blur(0px)" }}
                    animate={{ backdropFilter: "blur(12px)" }}
                    transition={{ duration: 1 }}
                  >
                    {/* TL;DR and Introduction */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        HACKBLITZ CODE OF CONDUCT
                      </h2>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="font-medium text-center">
                          TL;DR. Be respectful. Harassment and abuse are never tolerated.
                        </p>
                        <p className="text-sm mt-2 text-center text-white/80">
                          If you experience or witness any behavior that makes you uncomfortable at HackBlitz, please report it immediately.
                        </p>
                      </div>
                      <p>
                        HackBlitz is committed to fostering an inclusive and welcoming environment. We believe that every participant has the right to hack in a space that is safe, respectful, and free of harassment.
                      </p>
                    </div>

                    {/* Anti-Harassment Policy */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        ANTI-HARASSMENT POLICY
                      </h2>
                      <p>Harassment includes, but is not limited to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-white/90">
                        <li className="transition-all duration-300 hover:text-blue-300">
                          Offensive verbal or written comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, social class, economic status, or veteran status.
                        </li>
                        <li className="transition-all duration-300 hover:text-blue-300">
                          Sharing of sexual images, violent depictions, or using vulgar language.
                        </li>
                        <li className="transition-all duration-300 hover:text-blue-300">
                          Deliberate intimidation, stalking, following, brigading, doxxing, or harassing photography/recording.
                        </li>
                        <li className="transition-all duration-300 hover:text-blue-300">
                          Sustained disruption of talks or other events.
                        </li>
                        <li className="transition-all duration-300 hover:text-blue-300">
                          Inappropriate physical contact or unwelcome sexual attention.
                        </li>
                        <li className="transition-all duration-300 hover:text-blue-300">
                          Any behavior that creates a hostile or uncomfortable environment.
                        </li>
                      </ul>
                      <p>
                        Participants should avoid using sexualized images, activities, or materials in their hacks or during the event.
                      </p>
                      <p className="font-medium">
                        If your behavior makes someone feel uncomfortable, that counts as harassment and must stop immediately.
                      </p>
                    </div>

                    {/* Enforcement and Consequences */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                        ENFORCEMENT AND CONSEQUENCES
                      </h2>
                      <p>
                        All participants – including sponsors, judges, mentors, volunteers, organizers, and staff – are subject to this policy. Harassing behavior may result in a warning, removal from the event, or a permanent ban from future events.
                      </p>
                      <p className="italic text-white/80">
                        No refunds will be provided to individuals removed due to policy violations.
                      </p>
                    </div>

                    {/* Reporting Procedures */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
                        REPORTING PROCEDURES
                      </h2>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p>
                          If you experience or witness harassment, or have any concerns, please report it immediately. Reports can be made anonymously.
                        </p>
                        <ul className="mt-3 space-y-2">
                          <li className="flex items-start">
                            <span className="inline-block bg-white/10 rounded-full p-1 mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <span><strong>General Reporting:</strong> [Sujal : +91 7066666042, Ayush : +91 7387812003]</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block bg-white/10 rounded-full p-1 mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </span>
                            <span><strong>Emergency Contact:</strong> [Walay : +91 8169004107, Pranay : +91 9373861373]</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        HackBlitz organizers are available to help participants contact venue security or local law enforcement as needed.
                      </p>
                    </div>

                    {/* Scope */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
                        SCOPE
                      </h2>
                      <p>
                        These rules apply at all HackBlitz venues, social events, transportation provided by the hackathon, and all online interactions related to the event.
                      </p>
                    </div>

                    {/* Policy Updates */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                        POLICY UPDATES
                      </h2>
                      <p>
                        HackBlitz reserves the right to revise, amend, or make exceptions to these policies. For questions, please contact us at <span className="text-blue-300">student.acm.chapter@gmail.com</span>.
                      </p>
                      <p className="text-sm text-white/60 text-right italic">
                        This document was last updated on: April 1, 2025
                      </p>
                    </div>
                  </motion.div>
                  
                  <Gradient />
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
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.1)", 
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Home
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Background Elements with Animation */}
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

export default CodeOfConductPage;
