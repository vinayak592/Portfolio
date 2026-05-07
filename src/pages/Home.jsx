import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import CharAnimatedText from '../components/CharAnimatedText';
import Profile3D from '../components/Profile3D';
import MagneticButton from '../components/MagneticButton';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0 min-h-[90vh]">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CharAnimatedText 
              text="<hello world />"
              className="text-accent-cyan font-code mb-4 tracking-widest text-lg"
              delay={0.2}
            />
            <AnimatedText 
              text="Turning Vision Into Reality With Code And Design"
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <p className="text-lg md:text-xl mb-10 max-w-xl opacity-70">
                I am a 2nd-year CS student and creative developer specialized in **Full-Stack Web Development and Prompt Engineering**. 
                I focus on building high-performance applications and optimized AI-driven solutions.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-6 items-center">
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.dispatchEvent(new Event('openResume'))}
                  className="btn-gradient flex items-center gap-2"
                >
                  Resume <FiDownload />
                </motion.button>
              </MagneticButton>
              <Link to="/contact">
                <MagneticButton>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 font-bold text-lg hover:text-accent-cyan transition-colors"
                  >
                    Contact Me <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </MagneticButton>
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex gap-12 border-l-2 border-accent-cyan/30 pl-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gradient">8+</h3>
              <p className="text-sm opacity-60 uppercase tracking-widest">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gradient">2nd</h3>
              <h4 className="text-sm opacity-60 uppercase tracking-widest">Year Student</h4>
            </div>
          </motion.div>
        </div>

        {/* Right Content - 3D Profile */}
        <div className="order-1 lg:order-2 relative">
          <Profile3D />
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl text-yellow-400 shadow-xl hidden md:flex"
          >
            💡
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </PageWrapper>
  );
};

export default Home;
