// Paste to replace existing hero.tsx — uses anime.js CDN; no new files created.
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
    
    let cleanupFunctions: (() => void)[] = [];
    let timeoutIds: number[] = [];
    let animeInstances: any[] = [];

    script.onload = () => {
      const anime = (window as any).anime;
      if (!anime) return;

      // Grab the SVG elements
      const mainBlob = document.getElementById('mainBlob') as SVGPathElement | null;
      const bgBlob = document.getElementById('bgBlob') as SVGPathElement | null;
      const accentBlob = document.getElementById('accentBlob') as SVGPathElement | null;

      if (!mainBlob || !bgBlob || !accentBlob) return;

      // Path arrays for morphing - ultra fluid water-like blobs (very smooth, no sharp angles)
      const mainShapes = [
        "M550 200 Q600 150 700 180 Q800 220 820 320 Q800 420 720 480 Q620 520 520 480 Q440 440 420 340 Q400 240 480 200 Q510 180 550 200 Z",
        "M560 195 Q610 145 710 175 Q805 215 825 315 Q805 415 725 475 Q625 515 525 475 Q445 435 425 335 Q405 235 485 195 Q515 175 560 195 Z",
        "M570 190 Q620 140 720 170 Q810 210 830 310 Q810 410 730 470 Q630 510 530 470 Q450 430 430 330 Q410 230 490 190 Q520 170 570 190 Z",
        "M565 205 Q615 155 715 185 Q807 225 827 325 Q807 425 727 485 Q627 525 527 485 Q447 445 427 345 Q407 245 487 205 Q517 185 565 205 Z",
        "M575 195 Q625 145 725 175 Q815 215 832 315 Q812 415 732 475 Q632 515 532 475 Q452 435 432 335 Q412 235 492 195 Q522 175 575 195 Z",
        "M580 180 Q630 130 730 160 Q820 200 835 300 Q815 400 735 460 Q635 500 535 460 Q455 420 435 320 Q415 220 495 180 Q525 160 580 180 Z",
        "M555 210 Q605 160 705 190 Q800 230 818 330 Q798 430 718 490 Q618 530 518 490 Q438 450 418 350 Q398 250 478 210 Q508 190 555 210 Z",
        "M585 185 Q635 135 735 165 Q825 205 838 305 Q818 405 738 465 Q638 505 538 465 Q458 425 438 325 Q418 225 498 185 Q528 165 585 185 Z",
        "M560 200 Q610 150 710 180 Q802 220 822 320 Q802 420 722 480 Q622 520 522 480 Q442 440 422 340 Q402 240 482 200 Q512 180 560 200 Z",
        "M570 205 Q620 155 720 185 Q812 225 828 325 Q808 425 728 485 Q628 525 528 485 Q448 445 428 345 Q408 245 488 205 Q518 185 570 205 Z"
      ];

      const bgShapes = [
        "M200 280 Q350 240 500 250 Q650 260 800 280 Q900 300 920 380 Q900 450 750 480 Q600 490 450 460 Q300 430 220 380 Q180 330 200 280 Z",
        "M195 285 Q345 242 510 252 Q675 262 820 282 Q910 302 918 382 Q888 452 748 482 Q598 492 448 462 Q298 432 215 382 Q178 332 195 285 Z",
        "M190 290 Q340 245 520 255 Q700 265 850 285 Q940 305 915 385 Q885 455 740 485 Q595 495 440 465 Q295 435 210 385 Q175 335 190 290 Z",
        "M205 275 Q355 238 505 248 Q655 258 805 278 Q905 298 925 378 Q895 448 755 478 Q605 488 455 458 Q305 428 225 378 Q185 328 205 275 Z",
        "M180 300 Q320 250 550 260 Q780 270 950 300 Q1020 340 1000 400 Q960 460 820 480 Q680 490 520 460 Q380 430 280 390 Q160 350 180 300 Z",
        "M195 295 Q335 247 535 257 Q735 267 900 292 Q1010 337 995 397 Q955 457 815 477 Q675 487 515 457 Q375 427 245 387 Q177 342 195 295 Z",
        "M220 290 Q380 240 600 250 Q820 260 980 290 Q1040 330 1010 390 Q970 460 830 480 Q690 490 540 460 Q400 430 300 380 Q200 340 220 290 Z",
        "M210 285 Q370 242 580 252 Q790 262 965 287 Q1035 327 1005 387 Q965 457 825 477 Q685 487 530 457 Q390 427 260 383 Q185 338 210 285 Z",
        "M190 310 Q340 260 570 270 Q800 280 960 310 Q1020 350 990 410 Q950 470 810 490 Q670 500 520 470 Q380 440 280 400 Q170 360 190 310 Z",
        "M200 275 Q350 235 495 245 Q645 255 795 275 Q895 295 915 375 Q885 445 745 475 Q595 485 445 455 Q295 425 220 375 Q180 325 200 275 Z"
      ];

      const accentShapes = [
        "M680 280 Q720 260 760 290 Q780 320 770 360 Q750 390 710 400 Q670 400 640 370 Q620 340 630 300 Q640 270 660 260 Q670 255 680 280 Z",
        "M685 277 Q725 257 765 287 Q778 317 773 357 Q753 387 713 397 Q673 397 643 367 Q623 337 633 297 Q643 267 663 257 Q673 252 685 277 Z",
        "M690 275 Q730 255 770 285 Q785 315 775 355 Q755 385 715 395 Q675 395 645 365 Q625 335 635 295 Q645 265 665 255 Q675 250 690 275 Z",
        "M675 283 Q715 263 755 293 Q777 323 771 363 Q751 393 711 403 Q671 403 641 373 Q621 343 631 303 Q641 273 661 263 Q671 258 675 283 Z",
        "M695 270 Q735 250 775 280 Q788 310 778 350 Q758 380 718 390 Q678 390 648 360 Q628 330 638 290 Q648 260 668 250 Q678 245 695 270 Z",
        "M682 278 Q722 258 762 288 Q779 318 774 358 Q754 388 714 398 Q674 398 644 368 Q624 338 634 298 Q644 268 664 258 Q674 253 682 278 Z",
        "M700 265 Q740 245 780 275 Q790 305 780 345 Q760 375 720 385 Q680 385 650 355 Q630 325 640 285 Q650 255 670 245 Q680 240 700 265 Z",
        "M688 282 Q728 262 768 292 Q779 322 774 362 Q754 392 714 402 Q674 402 644 372 Q624 342 634 302 Q644 272 664 262 Q674 257 688 282 Z",
        "M675 290 Q715 270 755 300 Q782 330 768 370 Q748 400 708 410 Q668 410 638 380 Q618 350 628 310 Q638 280 658 270 Q668 265 675 290 Z",
        "M692 272 Q732 252 772 282 Q786 312 776 352 Q756 382 716 392 Q676 392 646 362 Q626 332 636 292 Q646 262 666 252 Q676 247 692 272 Z"
      ];

      // Color palettes using new warm palette
      const colorPalettes = [
        { main: "#FFFC97", stop: "#FFD643" },
        { main: "#FFD643", stop: "#FFA32B" },
        { main: "#FFA32B", stop: "#DE6335" },
        { main: "#DE6335", stop: "#C03A38" },
        { main: "#C03A38", stop: "#FFFC97" }
      ];

      // Morph element helper - ultra fluid water-like effect
      function morphElement(el: SVGPathElement, shapes: string[], duration: number = 10000, delayBetween: number = 0) {
        let i = 0;
        let currentInstance: any = null;

        function loop() {
          const next = (i + 1) % shapes.length;
          currentInstance = anime({
            targets: el,
            d: [{ value: shapes[next] }],
            easing: 'easeInOutSine',
            duration: duration,
            complete: function() {
              i = next;
              const timeoutId = window.setTimeout(loop, delayBetween);
              timeoutIds.push(timeoutId);
            }
          });
          animeInstances.push(currentInstance);
        }
        loop();

        return () => {
          if (currentInstance) {
            currentInstance.pause();
          }
        };
      }

      // Start color cycling animation
      function startColorCycle() {
        let idx = 0;
        let cycleTimeoutId: number | null = null;

        function step() {
          const next = (idx + 1) % colorPalettes.length;
          
          // Main shape gradient
          const mainStops = document.querySelectorAll('#morphGrad stop');
          if (mainStops.length >= 2) {
            const inst1 = anime({
              targets: mainStops[0],
              stopColor: colorPalettes[next].main,
              duration: 3500,
              easing: 'linear'
            });
            const inst2 = anime({
              targets: mainStops[1],
              stopColor: colorPalettes[next].stop,
              duration: 3500,
              easing: 'linear'
            });
            animeInstances.push(inst1, inst2);
          }

          // Background gradient - offset colors
          const bgStops = document.querySelectorAll('#bgGrad stop');
          const bgNext = (idx + 2) % colorPalettes.length;
          if (bgStops.length >= 2) {
            const inst1 = anime({
              targets: bgStops[0],
              stopColor: colorPalettes[bgNext].main,
              duration: 3500,
              easing: 'linear'
            });
            const inst2 = anime({
              targets: bgStops[1],
              stopColor: colorPalettes[bgNext].stop,
              duration: 3500,
              easing: 'linear'
            });
            animeInstances.push(inst1, inst2);
          }

          // Accent gradient - different offset
          const accentStops = document.querySelectorAll('#accentGrad stop');
          const accentNext = (idx + 1) % colorPalettes.length;
          if (accentStops.length >= 2) {
            const inst1 = anime({
              targets: accentStops[0],
              stopColor: colorPalettes[accentNext].stop,
              duration: 3500,
              easing: 'linear'
            });
            const inst2 = anime({
              targets: accentStops[1],
              stopColor: colorPalettes[accentNext].main,
              duration: 3500,
              easing: 'linear'
            });
            animeInstances.push(inst1, inst2);
          }
          
          idx = next;
          cycleTimeoutId = window.setTimeout(step, 4200);
          if (cycleTimeoutId) timeoutIds.push(cycleTimeoutId);
        }
        step();

        return () => {
          if (cycleTimeoutId) clearTimeout(cycleTimeoutId);
        };
      }

      // Attach pointer parallax handler - blobs follow cursor smoothly
      function attachPointerParallax() {
        if (!morphingRef.current) return () => {};
        
        const hero = morphingRef.current.closest('section');
        if (!hero) return () => {};

        const isMobile = window.innerWidth <= 768;
        const intensity = isMobile ? 0.1 : 0.3;

        const layerMid = document.getElementById('layer-mid');
        const layerFront = document.getElementById('layer-front');
        const mainBlobPath = document.getElementById('mainBlob');
        const accentBlobPath = document.getElementById('accentBlob');

        let targetX = 0;
        let targetY = 0;
        let currentXMid = 0;
        let currentYMid = 0;
        let currentXFront = 0;
        let currentYFront = 0;
        let currentBlobX = 0;
        let currentBlobY = 0;
        let currentAccentX = 0;
        let currentAccentY = 0;

        let rafId: number | null = null;
        let lastMoveTime = Date.now();
        const returnToCenterDelay = 2000; // Return to center after 2 seconds of no movement

        function animate() {
          const now = Date.now();
          const timeSinceLastMove = now - lastMoveTime;
          
          // Gradually return to center if no movement
          if (timeSinceLastMove > returnToCenterDelay) {
            targetX *= 0.95;
            targetY *= 0.95;
          }
          
          // Subtle interpolation for layers - much more gentle
          currentXMid += (targetX * 0.15 - currentXMid) * 0.08;
          currentYMid += (targetY * 0.1 - currentYMid) * 0.08;
          currentXFront += (targetX * 0.2 - currentXFront) * 0.1;
          currentYFront += (targetY * 0.15 - currentYFront) * 0.1;
          
          // Individual blob paths follow cursor very subtly
          currentBlobX += (targetX * 0.2 - currentBlobX) * 0.06;
          currentBlobY += (targetY * 0.15 - currentBlobY) * 0.06;
          currentAccentX += (targetX * 0.25 - currentAccentX) * 0.08;
          currentAccentY += (targetY * 0.18 - currentAccentY) * 0.08;

          if (layerMid) {
            layerMid.style.transform = `translate3d(${currentXMid}px, ${currentYMid}px, 0)`;
          }
          if (layerFront) {
            layerFront.style.transform = `translate3d(${currentXFront}px, ${currentYFront}px, 0)`;
          }
          if (mainBlobPath) {
            mainBlobPath.style.transform = `translate(${currentBlobX}px, ${currentBlobY}px)`;
          }
          if (accentBlobPath) {
            accentBlobPath.style.transform = `translate(${currentAccentX}px, ${currentAccentY}px)`;
          }

          rafId = requestAnimationFrame(animate);
        }

        animate();

        function handleMove(e: MouseEvent | TouchEvent) {
          if (!hero) return;
          
          lastMoveTime = Date.now();
          
          const rect = hero.getBoundingClientRect();
          const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
          const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;
          
          if (clientX === undefined || clientY === undefined) return;

          const x = clientX - rect.left;
          const y = clientY - rect.top;
          
          // Convert to viewBox coordinates (1200x580) and center
          const viewBoxX = (x / rect.width) * 1200;
          const viewBoxY = (y / rect.height) * 580;
          
          // Target positions relative to center - much more subtle
          targetX = (viewBoxX - 600) * intensity;
          targetY = (viewBoxY - 290) * intensity;
        }

        hero.addEventListener('mousemove', handleMove, { passive: true });
        hero.addEventListener('touchmove', handleMove, { passive: true });

        return () => {
          hero.removeEventListener('mousemove', handleMove);
          hero.removeEventListener('touchmove', handleMove);
          if (rafId !== null) cancelAnimationFrame(rafId);
          if (layerMid) layerMid.style.transform = '';
          if (layerFront) layerFront.style.transform = '';
          if (mainBlobPath) mainBlobPath.style.transform = '';
          if (accentBlobPath) accentBlobPath.style.transform = '';
        };
      }

      // Start morphing animations with staggered timings - very frequent fluid morphing
      const cleanup1 = morphElement(mainBlob, mainShapes, 3000, 0);
      const timeout1 = window.setTimeout(() => {
        const cleanup2 = morphElement(accentBlob, accentShapes, 2500, 0);
        cleanupFunctions.push(cleanup2);
      }, 200);
      const timeout2 = window.setTimeout(() => {
        const cleanup3 = morphElement(bgBlob, bgShapes, 4000, 0);
        cleanupFunctions.push(cleanup3);
      }, 400);
      
      timeoutIds.push(timeout1, timeout2);
      cleanupFunctions.push(cleanup1);

      // Start color cycling
      const colorCleanup = startColorCycle();
      cleanupFunctions.push(colorCleanup);

      // Attach parallax
      const parallaxCleanup = attachPointerParallax();
      cleanupFunctions.push(parallaxCleanup);
    };

    document.head.appendChild(script);

    return () => {
      // Remove script
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Clear all timeouts
      timeoutIds.forEach(id => clearTimeout(id));
      // Stop all anime instances
      animeInstances.forEach(inst => {
        if (inst && typeof inst.pause === 'function') {
          inst.pause();
        }
      });
      // Run cleanup functions
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const blurAmount = isMobile ? '40px' : '80px';

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #C03A38 0%, #DE6335 25%, #FFA32B 50%, #FFD643 75%, #FFFC97 100%)',
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
              <stop offset="0%" stopColor="#FFFC97" />
              <stop offset="100%" stopColor="#FFD643" />
            </linearGradient>

            <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFA32B" />
              <stop offset="100%" stopColor="#DE6335" />
            </linearGradient>

            <linearGradient id="accentGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#DE6335" />
              <stop offset="100%" stopColor="#C03A38" />
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
              d="M200 280 Q350 240 500 250 Q650 260 800 280 Q900 300 920 380 Q900 450 750 480 Q600 490 450 460 Q300 430 220 380 Q180 330 200 280 Z"
              fill="url(#bgGrad)" 
              opacity="0.35" 
              filter="url(#morphShadow)"
              style={{ willChange: 'auto' }}
            />
          </g>

          {/* Middle layer - main morphing blob */}
          <g id="layer-mid" transform="translate(0,0)" style={{ willChange: 'transform' }}>
            <path 
              id="mainBlob"
              d="M550 200 Q600 150 700 180 Q800 220 820 320 Q800 420 720 480 Q620 520 520 480 Q440 440 420 340 Q400 240 480 200 Q510 180 550 200 Z"
              fill="url(#morphGrad)" 
              opacity="0.85" 
              filter="url(#morphShadow)"
              style={{ willChange: 'auto' }}
            />
            {/* Highlight overlay for 3D shiny effect */}
            <path 
              d="M550 200 Q600 150 700 180 Q800 220 820 320 Q800 420 720 480 Q620 520 520 480 Q440 440 420 340 Q400 240 480 200 Q510 180 550 200 Z"
              fill="url(#shinyGrad)" 
              opacity="0.6"
              style={{ mixBlendMode: 'screen' }}
            />
          </g>

          {/* Foreground accent blob - fast morph */}
          <g id="layer-front" transform="translate(0,-10)" style={{ willChange: 'transform' }}>
            <path 
              id="accentBlob"
              d="M680 280 Q720 260 760 290 Q780 320 770 360 Q750 390 710 400 Q670 400 640 370 Q620 340 630 300 Q640 270 660 260 Q670 255 680 280 Z"
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
            background: 'radial-gradient(circle, rgba(255, 252, 151, 0.3) 0%, transparent 70%)',
            filter: `blur(${blurAmount})`,
          }}
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 163, 43, 0.3) 0%, transparent 70%)',
            filter: `blur(${blurAmount})`,
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
          <motion.div 
            initial={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(26, 26, 46, 0.2)",
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(26, 26, 46, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(255, 163, 43, 0)",
                "0 0 20px rgba(255, 163, 43, 0.3)",
                "0 0 0px rgba(255, 163, 43, 0)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="inline-block px-4 py-2 backdrop-blur-md text-[#1a1a2e] rounded-full mb-8 border transition-all"
          >
            Digital Design and Development
          </motion.div>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-6 text-[#1a1a2e]"
        >
          {"nova forma designs".split("").map((char, index) => (
            <motion.span
              key={index}
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                color: "#C03A38",
                transition: { duration: 0.3 }
              }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal", color: "#1a1a2e" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#1a1a2e]/90 mb-12 max-w-2xl mx-auto"
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
            className="px-8 py-4 bg-white text-[#1a1a2e] rounded-md hover:bg-white/90 transition-colors flex items-center gap-2"
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
            className="px-8 py-4 border-2 border-[#1a1a2e]/40 bg-white/10 backdrop-blur-sm text-[#1a1a2e] rounded-md hover:border-[#1a1a2e]/60 hover:bg-white/20 transition-colors"
          >
            View Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
