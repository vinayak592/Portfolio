import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '../data/data';

const Footer = () => {
  const getIcon = (platform) => {
    switch (platform) {
      case 'github': return <FiGithub />;
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      case 'instagram': return <FiInstagram />;
      case 'whatsapp': return <FaWhatsapp />;
      default: return null;
    }
  };

  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-bold">
                V
              </div>
              <span className="text-xl font-bold tracking-tight">Vinayak<span className="text-gradient">.</span></span>
            </div>
            <p className="text-sm opacity-50 max-w-xs text-center md:text-left">
              Building the future of the web with passion and precision. 
              Always open to interesting collaborations.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            
            <p className="text-sm opacity-40 flex items-center gap-2">
              © {new Date().getFullYear()} Vinayak. Built with <FiHeart className="text-red-500" /> & Code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
