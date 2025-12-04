import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}