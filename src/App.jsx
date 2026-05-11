import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import FluidBackground from './components/FluidBackground';
import ResumeModal from './components/ResumeModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));

const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  // Listen for custom event to open resume
  useEffect(() => {
    const handleOpenResume = () => setIsResumeOpen(true);
    window.addEventListener('openResume', handleOpenResume);
    return () => window.removeEventListener('openResume', handleOpenResume);
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <FluidBackground theme={theme} />
      <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={() => setLoading(false)} />
          ) : (
            <>
              <Navbar />
              <div className="noise-overlay" />
              <main className="relative z-10">
                <Suspense fallback={<div className="h-screen bg-dark" />}>
                  <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/services" element={<Services />} />
                    </Routes>
                  </AnimatePresence>
                </Suspense>
              </main>
              <Footer />
              <AIChat />
              <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
            </>
          )}
        </AnimatePresence>
      </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
