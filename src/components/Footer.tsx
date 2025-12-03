import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[var(--color-gray-dark)] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-white mb-3">nova forma designs</h4>
            <p className="text-white/70">
              Tailoring digital experiences
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white mb-3">Quick Links</h4>
            <div className="space-y-2">
              <motion.button 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-white/70 hover:text-white transition-colors"
              >
                Services
              </motion.button>
              <motion.button 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-white/70 hover:text-white transition-colors"
              >
                About
              </motion.button>
              <motion.button 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-white/70 hover:text-white transition-colors"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white mb-3">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:owen.cotter@novaformadesigns.com" className="block text-white/70 hover:text-white transition-colors">
                owen.cotter@novaformadesigns.com
              </a>
              <a href="tel:+447548290644" className="block text-white/70 hover:text-white transition-colors">
                +44 7548 290644
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center text-white/50"
        >
          <p>&copy; {new Date().getFullYear()} nova forma designs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}