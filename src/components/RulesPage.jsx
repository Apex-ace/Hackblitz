import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from "../components/Section";
import { Gradient } from "../components/design/Hero";
import { curve } from "../assets";

const RulesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Slight delay to ensure animation starts after navigation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
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
  
  // Entrance animation for the main card - adjusted for mobile
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
  
  // List item animations - simplified for mobile
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

  // Particle animation - fewer particles on mobile
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
          key="rules-page"
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          <Section className="pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden" crosses>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/5 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {generateParticles()}
            </div>
            
            {/* Header */}
            <motion.div 
              className="container relative z-10 px-4 sm:px-6 md:px-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                className="text-center mb-8 md:mb-12"
                variants={fadeIn}
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 relative inline-block"
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
                    Competition Rules
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
                  className="body-1 max-w-3xl mx-auto text-n-2 text-sm sm:text-base md:text-lg px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  The official rulebook for Hackblitz 2025. All participants must adhere to these guidelines.
                </motion.p>
              </motion.div>

              {/* Main Content */}
              <motion.div 
                className="relative max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0"
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
                    className="relative bg-n-8/80 backdrop-blur-sm rounded-lg md:rounded-[1rem] border border-white/10 p-5 sm:p-6 md:p-8 lg:p-10"
                    initial={{ backdropFilter: "blur(0px)" }}
                    animate={{ backdropFilter: "blur(12px)" }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div 
                      className="text-white space-y-6 md:space-y-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      <div className="space-y-3 md:space-y-4">
                        <motion.h2 
                          className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                        >
                          HACKBLITZ 2025 HACKATHON RULES
                        </motion.h2>
                        <motion.p
                          className="text-sm sm:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 1 }}
                        >
                          This document serves as an rulebook to the Hackblitz 2025 hackathon. It explains and expands on the rules detailed in the Hackblitz 2025.
                        </motion.p>
                      </div>
                      
                      <motion.div 
                        className="space-y-3 md:space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                      >
                        <motion.h2 
                          className="text-lg sm:text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        >
                          THE RULES OF THE COMPETITION
                        </motion.h2>
                        <ol className="list-decimal pl-6 space-y-2 md:space-y-3 text-sm sm:text-base">
                          {[...Array(7)].map((_, i) => (
                            <motion.li
                              key={i}
                              custom={i}
                              variants={listItemAnimation}
                              initial="hidden"
                              animate="visible"
                              className="transition-all duration-300 hover:text-blue-300"
                              whileHover={{ 
                                x: isMobile ? 3 : 5, 
                                color: "#93c5fd", 
                                transition: { duration: 0.2 } 
                              }}
                            >
                              {i === 0 && "A team can have a maximum of 4 members."}
                              {i === 1 && "Teams should be made up exclusively of accepted members who are not organizers, volunteers, mentors, judges, sponsors, or any other privileged position at the event."}
                              {i === 2 && "Teams can gain advice and support from organizers, volunteers, sponsors, and others."}
                              {i === 3 && "All work on a project must be done at the hackathon."}
                              {i === 4 && "Teams can use libraries, frameworks. Working on a project before the event and open-sourcing it for the sole purpose of using the code during the event is against the spirit of the rules and is not allowed."}
                              {i === 5 && "Teams must stop Code once the time is up. However, teams are allowed to debug and make small fixes to their programs after time is up. e.g. If during presenting you find a bug or exception that breaks your application and the fix is only a few lines of code, it's okay to fix that. Making large changes or adding new features is not allowed."}
                              {i === 6 && "Teams can be disqualified from the competition at the organizers' discretion. Reasons might include but are not limited to breaking the Competition Rules, breaking the [Code of Conduct], or other unsporting behaviour."}
                            </motion.li>
                          ))}
                        </ol>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-3 md:space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: isMobile ? 1.6 : 1.8 }}
                      >
                        <motion.h2 
                          className="text-lg sm:text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          SUBMISSION
                        </motion.h2>
                        <motion.p 
                          className="text-center italic text-sm sm:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: isMobile ? 1.7 : 2 }}
                        >
                          Instructions will be given during hackathon
                        </motion.p>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-3 md:space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: isMobile ? 1.8 : 2.1 }}
                      >
                        <motion.h2 
                          className="text-lg sm:text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          JUDGING CRITERIA
                        </motion.h2>
                        <motion.div
                          className="text-sm sm:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: isMobile ? 1.9 : 2.2 }}
                        >
                          <p className="mb-2">
                            Teams will be judged on following points. During judging, participants should try to describe what they did for each criterion in their project. For example, how well designed is the interface? For a website, this might be about how beautiful the CSS or graphics are.
                          </p>
                          <p className="mb-2">
                            These criteria will guide judges but ultimately judges are free to make decisions based on their gut feeling of which projects are the most impressive and most deserving.
                          </p>
                          <p className="font-medium mb-2">
                            It's important to note that these judging criteria do not include:
                          </p>
                          <ul className="list-disc pl-6 space-y-1 sm:space-y-2">
                            <motion.li
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: isMobile ? 2.0 : 2.3 }}
                            >
                              How good your code is. It doesn't matter if your code is messy, or not well commented. Code is about playing around, making mistakes, and learning new things. If your code isn't production ready, we're not going to mark you down.
                            </motion.li>
                            <motion.li
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: isMobile ? 2.1 : 2.4 }}
                            >
                              How well you pitch. Code is about building and learning, not about selling.
                            </motion.li>
                            <motion.li
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: isMobile ? 2.2 : 2.5 }}
                            >
                              How well the project solves a problem. You can build something totally useless and as long as you're learning and having fun!
                            </motion.li>
                          </ul>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="border-t border-white/10 pt-5 md:pt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: isMobile ? 2.3 : 2.6 }}
                      >
                        <motion.p 
                          className="text-center font-bold text-sm sm:text-base"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: isMobile ? 2.4 : 2.7 }}
                        >
                          REMEMBER!
                        </motion.p>
                        <motion.p 
                          className="text-center text-sm sm:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: isMobile ? 2.5 : 2.8 }}
                        >
                          The competition is just a part of the hackathon. To make the most out of the event, try something new, teach other people, and make new friends!
                        </motion.p>
                        <motion.div 
                          className="mt-4 md:mt-6 text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: isMobile ? 2.6 : 2.9 }}
                        >
                          <motion.div
                            className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base font-bold"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{ backgroundPosition: "100% 50%" }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                          >
                            Happy Code from Hackblitz
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    
                    <Gradient />
                  </motion.div>
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

export default RulesPage;