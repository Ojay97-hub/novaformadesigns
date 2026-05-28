import { useState, useEffect } from 'react';
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
    setIsMenuOpen(false); // Close mobile menu first

    // Add a small delay to ensure the menu close animation/state doesn't interfere with scrolling
    setTimeout(() => {
      // Special case for hero/home to go to the very top
      if (id === 'hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        // Account for fixed header height (approx 80px)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
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
            aria-label="nova forma designs - home"
          >
            <img src="/logo-idea.svg" alt="nova forma designs" className="nav-logo-img" />
          </button>

          {/* Desktop Menu (Visible on lg and up) */}
          <div className="nav-desktop-menu">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="nav-link"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              Services
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
                onClick={() => scrollToSection('about')}
                className="nav-mobile-link"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="nav-mobile-link"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="nav-mobile-link"
              >
                Services
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