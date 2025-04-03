import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const RevealCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  
  useEffect(() => {
    // Simulate loading delay for dramatic effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const revealItems = [
    {
      id: 'code-of-conduct',
      title: 'Code of Conduct',
      description: 'Principles and guidelines for all participants',
      path: '/code-of-conduct',
      color: 'from-purple-500 to-blue-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'topics',
      title: 'Problem Statements',
      description: 'This year\'s exciting challenge topics',
      path: '/topics',
      color: 'from-blue-500 to-indigo-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'rules',
      title: 'Rule Book',
      description: 'Everything you need to know to compete',
      path: '/rules',
      color: 'from-cyan-500 to-teal-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const handleCardClick = (id) => {
    setClickedCard(id);
    // The actual navigation is handled by the Link component
  };

  // Card variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.3 + index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }),
    clicked: {
      scale: 0.95,
      y: -5,
      transition: { duration: 0.2 }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="relative z-10 max-w-5xl mx-auto mb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="mb-8 text-center"
        variants={titleVariants}
      >
        <h3 className="inline-block text-center text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
          Tap to Unlock
        </h3>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">
          Access essential information about the hackathon
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {revealItems.map((item, index) => (
          <Link to={item.path} key={item.id}>
            <motion.div
              className="relative h-48 sm:h-52 rounded-xl p-0.5 cursor-pointer group"
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              animate={clickedCard === item.id ? "clicked" : "visible"}
              onClick={() => handleCardClick(item.id)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${clickedCard === item.id ? 'animate-pulse' : ''}`}></div>
              
              {/* Card Content */}
              <div className="absolute inset-0.5 rounded-lg bg-n-8/90 backdrop-blur-sm flex flex-col justify-center items-center p-5 border border-white/10 group-hover:border-white/20 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-15 transition-all duration-700 group-hover:scale-[8]`}
                    animate={hoveredCard === item.id ? {
                      boxShadow: [
                        `0 0 20px 0px rgba(var(--${item.color.split('-')[1].split('/')[0]}-500-rgb), 0.7)`,
                        `0 0 60px 15px rgba(var(--${item.color.split('-')[1].split('/')[0]}-500-rgb), 0.5)`,
                        `0 0 20px 0px rgba(var(--${item.color.split('-')[1].split('/')[0]}-500-rgb), 0.7)`
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </div>
                
                {/* Icon Container with Lock/Unlock Animation */}
                <div className="relative flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                  {/* Background pulse */}
                  <motion.div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20`}
                    animate={hoveredCard === item.id ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Lock Icon */}
                  <motion.div
                    className="absolute text-white"
                    animate={hoveredCard === item.id ? { rotateY: 180, opacity: 0 } : { rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </motion.div>
                  
                  {/* Unlock Icon */}
                  <motion.div
                    className="absolute text-white"
                    animate={hoveredCard === item.id ? { rotateY: 0, opacity: 1 } : { rotateY: -180, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                
                {/* Text Content */}
                <motion.div 
                  className="flex flex-col items-center text-center z-10"
                  animate={hoveredCard === item.id ? { y: 0 } : { y: 0 }}
                >
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-white/95">{item.title}</h3>
                  <p className="text-white/60 text-sm group-hover:text-white/80 max-w-[90%]">{item.description}</p>
                  
                  {/* View Button - Only appears on hover */}
                  <motion.div
                    className="mt-4 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={hoveredCard === item.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.div>
                </motion.div>
                
                {/* Particle Effects on Hover */}
                <AnimatePresence>
                  {hoveredCard === item.id && (
                    <>
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${item.color}`}
                          initial={{
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0
                          }}
                          animate={{
                            x: (Math.random() - 0.5) * 150,
                            y: (Math.random() - 0.5) * 150,
                            opacity: [0, 0.8, 0],
                            scale: [0, Math.random() * 2 + 0.5, 0]
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: Math.random() * 0.5,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      
      {/* Interactive element below the cards */}
      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 cursor-pointer hover:bg-white/10 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">Need more information?</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RevealCards;