import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './Navigation.css';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`nav-container ${isScrolled || isMenuOpen ? 'nav-scrolled' : 'nav-transparent'
        }`}
    >
      <div className="nav-inner">
        <div className="nav-content">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="nav-logo"
          >
            nova forma designs
          </button>

          {/* Desktop Menu (Visible on lg and up) */}
          <div className="nav-desktop-menu">
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-button"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle (Visible on md and below) */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-overlay"
          >
            <div className="nav-mobile-content">
              <button
                onClick={() => scrollToSection('services')}
                className="nav-mobile-link"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-mobile-link"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-mobile-button"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}