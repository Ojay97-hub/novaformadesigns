import React from 'react';
import { CheckCircle2, Code, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import './About.css';

const highlights = [
  'Client-focused approach',
  'Modern design principles',
  'Clean, maintainable code',
  'Responsive & accessible',
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 about-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-6 about-title">About</h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-text mb-6"
            >
              I'm a digital designer and developer specialising in creating tailored web experiences that help businesses connect with their audiences.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="about-text mb-8"
            >
              With a focus on clean design, modern technology, and user-centred thinking, I transform ideas into impactful digital solutions.
            </motion.p>
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <CheckCircle2 className="about-check-icon shrink-0" size={24} />
                  </motion.div>
                  <span className="about-highlight-text">{highlight}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="https://ojay97-hub.github.io/portfolio-website-2.0/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 about-portfolio-button rounded-lg transition-colors shadow-lg"
            >
              View My Portfolio
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-lg about-gradient-box p-12 flex items-center justify-center"
            >
              <div className="about-gradient-text text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                  className="mb-4 opacity-90"
                >
                  <Code size={64} className="mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="about-gradient-text mb-2"
                >
                  Crafting Digital Excellence
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="opacity-80"
                >
                  Every project is an opportunity to create something exceptional
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}