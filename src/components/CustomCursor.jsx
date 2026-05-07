import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.08;
      cursorY += (mouseY - cursorY) * 0.08;
      dotX += (mouseX - dotX) * 0.15;
      dotY += (mouseY - dotY) * 0.15;

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      
      requestAnimationFrame(animate);
    };

    const handleMouseEnterLink = () => {
      cursor.style.width = '60px';
      cursor.style.height = '60px';
      cursor.style.transform = `translate(${cursorX - 30}px, ${cursorY - 30}px)`;
      cursor.style.borderColor = theme === 'dark' ? '#58E6D9' : '#B63E96';
      cursor.style.background = theme === 'dark' ? 'rgba(88,230,217,0.05)' : 'rgba(182,62,150,0.05)';
    };

    const handleMouseLeaveLink = () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';
      cursor.style.background = 'transparent';
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    const links = document.querySelectorAll('a, button, [role="button"], input, textarea, .cursor-pointer');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    // MutationObserver for dynamically added elements
    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll('a, button, [role="button"], input, textarea, .cursor-pointer');
      newLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
        link.addEventListener('mouseenter', handleMouseEnterLink);
        link.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
      observer.disconnect();
    };
  }, [theme]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[10000] transition-[width,height,border-color,background] duration-300 ease-out hidden md:block"
        style={{
          border: `1.5px solid ${theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10001] hidden md:block"
        style={{
          background: 'linear-gradient(135deg, #58E6D9, #B63E96)',
        }}
      />
    </>
  );
}
