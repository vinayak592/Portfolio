import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onComplete(), 800);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background Grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          
          {/* Animated Blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative mb-12"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="text-4xl font-bold text-dark relative z-10">V</span>
            </div>
            
            {/* Orbiting dots */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent-cyan"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1.5, repeat: Infinity },
              }}
              style={{ transformOrigin: '50% 200%' }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold text-light mb-2 tracking-wider"
          >
            VINAYAK
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-light/60 mb-10 tracking-[0.3em] uppercase"
          >
            Full Stack Developer
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '200px' }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <div className="w-[200px] h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-light/40 font-code"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
