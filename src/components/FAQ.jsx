import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-full text-left p-6 bg-black/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated Border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
        
        {/* Content */}
        <div className="relative flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500">
            {question}
          </h3>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl text-white/80 group-hover:text-purple-500 transition-colors duration-300"
          >
            +
          </motion.span>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="relative p-6 bg-black/60 backdrop-blur-sm rounded-b-xl border border-t-0 border-white/10">
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-b-xl blur opacity-30" />
              
              {/* Content */}
              <p className="relative text-white/80 group-hover:text-white/90 transition-colors duration-500">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Hackblitz?",
      answer: "Hackblitz is a competitive programming platform designed to help developers improve their coding skills through daily challenges, real-time competitions, and comprehensive learning resources."
    },
    {
      question: "How do I get started?",
      answer: "Simply create an account, choose your preferred programming language, and start solving our daily challenges. You can track your progress on the leaderboard and compete with other developers."
    },
    {
      question: "What programming languages are supported?",
      answer: "We support multiple programming languages including Python, JavaScript, Java, C++, and more. Each challenge can be solved using any of our supported languages."
    },
    {
      question: "How are the challenges structured?",
      answer: "Our challenges range from beginner to advanced levels, with each problem focusing on different programming concepts and algorithms. We provide detailed explanations and test cases to help you learn."
    },
    {
      question: "Is there a time limit for challenges?",
      answer: "Daily challenges are available for 24 hours, while special competitions may have different time limits. You can practice past challenges at any time."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ; 