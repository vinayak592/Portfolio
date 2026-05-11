import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import MagneticButton from './MagneticButton';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isDark = theme === 'dark';

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
              : 'bg-light/80 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" id="nav-logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center shadow-lg">
                <span className={`text-xl font-bold ${isDark ? 'text-dark' : 'text-white'}`}>V</span>
              </div>
              <span className={`text-xl font-bold hidden sm:block ${isDark ? 'text-light' : 'text-dark'}`}>
                Vinayak<span className="text-gradient">.</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link key={path} to={path} id={`nav-${label.toLowerCase()}`}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-gradient'
                        : isDark
                        ? 'text-light/70 hover:text-light'
                        : 'text-dark/70 hover:text-dark'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <MagneticButton>
              <motion.button
                id="theme-toggle"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-accent-cyan'
                    : 'bg-black/10 hover:bg-black/20 text-accent-purple'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </MagneticButton>

            {/* Hire Me Button */}
            <Link to="/contact" id="nav-hireme" className="hidden sm:block">
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gradient text-sm px-5 py-2 font-semibold rounded-full"
                >
                  Hire Me
                </motion.button>
              </MagneticButton>
            </Link>

            {/* Hamburger */}
            <motion.button
              id="mobile-menu-toggle"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-[73px] left-0 right-0 z-[99] md:hidden ${
              isDark ? 'bg-dark/95' : 'bg-light/95'
            } backdrop-blur-xl border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(({ path, label }, i) => {
                const isActive = location.pathname === path;
                return (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={path}
                      className={`block text-lg font-semibold py-2 border-b ${
                        isDark ? 'border-white/5' : 'border-black/5'
                      } ${isActive ? 'text-gradient' : isDark ? 'text-light/80' : 'text-dark/80'}`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link to="/contact">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="btn-gradient w-full mt-2"
                >
                  Hire Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
