import React, { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar appearance after scrolling past hero section
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`transition-colors ${
              isScrolled 
                ? 'text-[var(--color-navy)] hover:text-[var(--color-navy)]/80' 
                : 'text-white hover:text-white/80'
            }`}
          >
            nova forma designs
          </button>
          <div className="flex gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-[var(--color-gray-dark)] hover:text-[var(--color-navy)]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-[var(--color-gray-dark)] hover:text-[var(--color-navy)]' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy)]/90' 
                  : 'bg-white text-[var(--color-navy)] hover:bg-white/90'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}