import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOnWhite, setIsOnWhite] = useState(true);

  useEffect(() => {
    const getBackgroundColor = (element: HTMLElement | null): string | null => {
      if (!element) return null;
      
      const style = window.getComputedStyle(element);
      const bgColor = style.backgroundColor;
      
      // Check if it's white or very light
      if (bgColor.includes('rgb')) {
        const rgb = bgColor.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const r = parseInt(rgb[0]);
          const g = parseInt(rgb[1]);
          const b = parseInt(rgb[2]);
          // Consider white if all values are > 240
          return r > 240 && g > 240 && b > 240 ? 'white' : 'colored';
        }
      }
      
      // Check parent if current element is transparent
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        return getBackgroundColor(element.parentElement);
      }
      
      return bgColor.includes('white') || bgColor === '#ffffff' || bgColor === 'rgb(255, 255, 255)' ? 'white' : 'colored';
    };

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check background color at cursor position
      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      const bgType = getBackgroundColor(element);
      setIsOnWhite(bgType === 'white');
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', () => setIsVisible(true));
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Diamond shape
  const diamondPath = isHovering
    ? "M20 6 L32 20 L20 34 L8 20 Z"
    : "M20 8 L28 20 L20 32 L12 20 Z";

  const cursorColor = '#6B7280'; // Neutral gray
  const strokeColor = '#9CA3AF'; // Lighter gray for stroke
  const cursorSize = isHovering ? 44 : 40;

  return (
    <>
      <div
        className="fixed pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out',
          opacity: isVisible ? 1 : 0,
          zIndex: 99999,
        }}
      >
        <svg
          width={cursorSize}
          height={cursorSize}
          viewBox="0 0 40 40"
          style={{
            filter: `drop-shadow(0 0 ${isHovering ? '12px' : '8px'} ${cursorColor}60)`,
          }}
        >
          <path
            d={diamondPath}
            fill={cursorColor}
            stroke={strokeColor}
            strokeWidth="1"
            style={{
              transition: 'all 0.3s ease-out',
            }}
          />
        </svg>
      </div>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

