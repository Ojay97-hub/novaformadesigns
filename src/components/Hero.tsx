import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const morphingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Load anime.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.async = true;
    
    script.onload = () => {
      const anime = (window as any).anime;
      if (!anime) return;

      // Grab the SVG elements
      const mainBlob = document.getElementById('mainBlob');
      const bgBlob = document.getElementById('bgBlob');
      const accentBlob = document.getElementById('accentBlob');

      if (!mainBlob || !bgBlob || !accentBlob) return;

      // Path arrays for morphing
      const mainShapes = [
        // Rounded blob 1
        "M600 100 Q750 150 800 280 Q850 400 700 500 Q550 550 400 480 Q300 400 350 270 Q400 150 600 100 Z",
        // Soft triangle
        "M600 120 Q650 130 750 450 Q720 500 600 480 Q480 500 450 450 Q550 130 600 120 Z",
        // Rounded hexagon
        "M600 140 Q680 160 730 240 Q760 320 730 400 Q680 460 600 480 Q520 460 470 400 Q440 320 470 240 Q520 160 600 140 Z",
        // Soft square with rounded corners
        "M450 220 Q440 210 500 200 Q700 200 760 210 Q770 220 770 420 Q770 480 760 490 Q750 500 550 500 Q450 500 440 490 Q430 480 430 280 Q430 220 450 220 Z",
        // Organic star
        "M600 120 Q620 200 650 280 Q730 290 800 320 Q780 360 720 430 Q730 510 720 580 Q680 550 600 520 Q520 550 480 580 Q470 510 480 430 Q420 360 400 320 Q470 290 550 280 Q580 200 600 120 Z"
      ];

      const bgShapes = [
        // Soft wave 1
        "M200 280 Q250 220 500 240 Q750 260 950 300 Q1000 340 980 420 Q900 460 600 450 Q300 440 220 400 Q180 360 200 280 Z",
        // Flowing curve
        "M180 300 Q300 240 600 260 Q900 280 1020 340 Q1040 400 950 460 Q800 480 600 470 Q400 460 280 420 Q160 370 180 300 Z",
        // Smooth diamond
        "M600 180 Q700 200 880 320 Q920 360 880 420 Q700 520 600 540 Q500 520 320 420 Q280 360 320 320 Q500 200 600 180 Z",
        // Rounded pentagon
        "M600 200 Q680 220 820 310 Q860 350 800 480 Q760 520 600 530 Q440 520 400 480 Q340 350 380 310 Q520 220 600 200 Z"
      ];

      const accentShapes = [
        // Smooth circle
        "M700 220 Q760 230 790 280 Q800 330 770 360 Q730 380 700 370 Q650 360 620 330 Q610 280 640 230 Q660 220 700 220 Z",
        // Soft triangle
        "M680 200 Q700 210 820 270 Q840 290 820 310 Q700 370 680 360 Q640 340 630 310 Q640 270 660 240 Q670 210 680 200 Z",
        // Rounded square
        "M670 220 Q680 215 740 220 Q780 225 785 235 Q790 280 785 320 Q780 335 740 340 Q680 335 665 325 Q660 280 665 235 Q670 220 670 220 Z",
        // Smooth diamond
        "M720 200 Q740 210 820 270 Q840 290 820 310 Q740 370 720 380 Q700 370 620 310 Q600 290 620 270 Q700 210 720 200 Z"
      ];

      // Color palettes using Nova Forma colors
      const colorPalettes = [
        { main: "#75DDDD", stop: "#508991" },
        { main: "#09BC8A", stop: "#004346" },
        { main: "#508991", stop: "#75DDDD" }
      ];

      // Morph animation helper
      function morphElement(el: any, shapes: string[], opts: any = {}) {
        const duration = opts.duration || 7000;
        const delayBetween = opts.delay || 200;
        let i = 0;

        function loop() {
          const next = (i + 1) % shapes.length;
          anime({
            targets: el,
            d: [{ value: shapes[next] }],
            easing: 'easeInOutSine',
            duration: duration,
            complete: function() {
              i = next;
              setTimeout(loop, delayBetween);
            }
          });
        }
        loop();
      }

      // Start morphing animations with staggered timings
      morphElement(mainBlob, mainShapes, { duration: 3500, delay: 500 });
      setTimeout(() => morphElement(accentBlob, accentShapes, { duration: 2800, delay: 400 }), 200);
      setTimeout(() => morphElement(bgBlob, bgShapes, { duration: 5000, delay: 500 }), 400);

      // Color cycling animation
      (function colorCycle() {
        let idx = 0;
        function step() {
          const next = (idx + 1) % colorPalettes.length;
          
          // Main shape gradient
          const mainStops = document.querySelectorAll('#morphGrad stop');
          if (mainStops.length >= 2) {
            anime({
              targets: mainStops[0],
              stopColor: colorPalettes[next].main,
              duration: 3500,
              easing: 'linear'
            });
            anime({
              targets: mainStops[1],
              stopColor: colorPalettes[next].stop,
              duration: 3500,
              easing: 'linear'
            });
          }

          // Background gradient - offset colors
          const bgStops = document.querySelectorAll('#bgGrad stop');
          const bgNext = (idx + 2) % colorPalettes.length;
          if (bgStops.length >= 2) {
            anime({
              targets: bgStops[0],
              stopColor: colorPalettes[bgNext].main,
              duration: 3500,
              easing: 'linear'
            });
            anime({
              targets: bgStops[1],
              stopColor: colorPalettes[bgNext].stop,
              duration: 3500,
              easing: 'linear'
            });
          }

          // Accent gradient - different offset
          const accentStops = document.querySelectorAll('#accentGrad stop');
          const accentNext = (idx + 1) % colorPalettes.length;
          if (accentStops.length >= 2) {
            anime({
              targets: accentStops[0],
              stopColor: colorPalettes[accentNext].stop,
              duration: 3500,
              easing: 'linear'
            });
            anime({
              targets: accentStops[1],
              stopColor: colorPalettes[accentNext].main,
              duration: 3500,
              easing: 'linear'
            });
          }
          
          idx = next;
          setTimeout(step, 4200);
        }
        step();
      })();

      // Subtle parallax on mouse move (desktop only)
      if (window.innerWidth > 768 && morphingRef.current) {
        const hero = morphingRef.current.closest('section');
        function onMove(e: MouseEvent) {
          if (!hero) return;
          const width = hero.offsetWidth;
          const x = e.clientX;
          const pct = (x / width - 0.5) * 2; // -1 to 1
          
          const layerMid = document.getElementById('layer-mid');
          const layerFront = document.getElementById('layer-front');
          
          if (layerMid) layerMid.style.transform = `translateX(${pct * -8}px)`;
          if (layerFront) layerFront.style.transform = `translateX(${pct * 15}px)`;
        }
        hero?.addEventListener('mousemove', onMove);
        
        return () => {
          hero?.removeEventListener('mousemove', onMove);
        };
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #172A3A 0%, #004346 25%, #508991 50%, #09BC8A 75%, #75DDDD 100%)',
      }}
    >
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle gradient orbs for extra depth */}
      <div ref={morphingRef} className="absolute inset-0 overflow-hidden">
        {/* Morphing SVG Shapes Background */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1200 580" 
          preserveAspectRatio="xMidYMid slice" 
          aria-hidden="true"
          style={{ opacity: 0.45 }}
        >
          <defs>
            {/* 3D Gradient for shapes */}
            <radialGradient id="shinyGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="morphGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#75DDDD" />
              <stop offset="100%" stopColor="#508991" />
            </linearGradient>

            <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#09BC8A" />
              <stop offset="100%" stopColor="#004346" />
            </linearGradient>

            <linearGradient id="accentGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#508991" />
              <stop offset="100%" stopColor="#75DDDD" />
            </linearGradient>

            {/* Soft shadow for depth */}
            <filter id="morphShadow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur"/>
              <feOffset in="blur" dx="0" dy="15" result="offsetBlur"/>
              <feComposite in="offsetBlur" in2="blur" operator="out" result="composite"/>
              <feColorMatrix in="composite" type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0.2 0" />
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background layer - slow morph */}
          <g transform="translate(0,20)">
            <path 
              id="bgBlob" 
              d="M200 280 Q250 220 500 240 Q750 260 950 300 Q1000 340 980 420 Q900 460 600 450 Q300 440 220 400 Q180 360 200 280 Z"
              fill="url(#bgGrad)" 
              opacity="0.35" 
              filter="url(#morphShadow)"
              style={{ willChange: 'auto' }}
            />
          </g>

          {/* Middle layer - main morphing blob */}
          <g id="layer-mid" transform="translate(0,0)">
            <path 
              id="mainBlob"
              d="M600 100 Q750 150 800 280 Q850 400 700 500 Q550 550 400 480 Q300 400 350 270 Q400 150 600 100 Z"
              fill="url(#morphGrad)" 
              opacity="0.85" 
              filter="url(#morphShadow)"
              style={{ willChange: 'auto' }}
            />
            {/* Highlight overlay for 3D shiny effect */}
            <path 
              d="M600 100 Q750 150 800 280 Q850 400 700 500 Q550 550 400 480 Q300 400 350 270 Q400 150 600 100 Z"
              fill="url(#shinyGrad)" 
              opacity="0.6"
              style={{ mixBlendMode: 'screen' }}
            />
          </g>

          {/* Foreground accent blob - fast morph */}
          <g id="layer-front" transform="translate(0,-10)">
            <path 
              id="accentBlob"
              d="M700 220 Q760 230 790 280 Q800 330 770 360 Q730 380 700 370 Q650 360 620 330 Q610 280 640 230 Q660 220 700 220 Z"
              fill="url(#accentGrad)" 
              opacity="0.4"
              style={{ willChange: 'auto' }}
            />
          </g>
        </svg>

        {/* Original gradient orbs (now layered with SVG) */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(117, 221, 221, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(9, 188, 138, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full mb-8 border border-white/20">
            Digital Design and Development
          </div>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-6 text-white"
        >
          {"nova forma designs".split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                color: "#75DDDD",
                transition: { duration: 0.3 }
              }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 mb-12 max-w-2xl mx-auto"
        >
          Tailoring digital experiences
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-[var(--color-navy)] rounded-md hover:bg-white/90 transition-colors flex items-center gap-2"
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
            className="px-8 py-4 border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white rounded-md hover:border-white/60 hover:bg-white/20 transition-colors"
          >
            View Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}