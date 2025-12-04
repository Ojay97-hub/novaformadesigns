import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import './Hero.css';

import chartsImg from '../assets/Charts Pie And Bars Streamline Bangalore - teal_upscayl_5x_high-fidelity-4x.png';
import ipadImg from '../assets/Illustrator Drawing With Ipad Streamline Bangalore - teal_upscayl_5x_high-fidelity-4x.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Subtle noise texture overlay */}
      <div className="hero-noise" />

      {/* Illustrations Container */}
      <div className="hero-illustration-container">
        {/* Left Illustration - Ideas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            x: { duration: 0.8, delay: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="hero-illustration hero-illustration-left"
        >
          <img src={ipadImg} alt="Digital Design" className="hero-illustration-img" />
        </motion.div>

        {/* Right Illustration - Tailor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            x: { duration: 0.8, delay: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 // Offset the animation slightly
            }
          }}
          className="hero-illustration hero-illustration-right"
        >
          <img src={chartsImg} alt="Data and Strategy" className="hero-illustration-img" />
        </motion.div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-badge-container"
        >
          <motion.div
            initial={{
              backgroundColor: "rgba(23, 42, 58, 0.05)",
              borderColor: "rgba(23, 42, 58, 0.1)",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(23, 42, 58, 0.1)",
              borderColor: "rgba(23, 42, 58, 0.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className="hero-badge"
          >
            Digital Design and Development
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hero-title"
        >
          {"nova forma designs".split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.2,
                y: -10,
                color: "#75dddd",
                transition: { duration: 0.3 }
              }}
              className="hero-char"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-subtitle"
        >
          Tailoring digital experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-buttons"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="hero-btn-primary"
          >
            Start a Project
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hero-btn-secondary"
          >
            View Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
