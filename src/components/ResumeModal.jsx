import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-dark/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="glass w-full max-w-4xl h-[80vh] rounded-[2.5rem] overflow-hidden flex flex-col border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Interactive Resume</h3>
              <div className="flex items-center gap-4">
                <button className="btn-gradient px-4 py-2 text-sm flex items-center gap-2">
                  <FiDownload /> Download PDF
                </button>
                <button onClick={onClose} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-red-500 transition-colors">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Content Placeholder */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12 bg-white/5">
              <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/10 pb-8">
                <div>
                  <h4 className="text-4xl font-bold text-gradient">Vinayak</h4>
                  <p className="text-xl opacity-70">Full Stack Developer & UI/UX Designer</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-code">vinayak@example.com</p>
                  <p className="font-code">+91 98765 43210</p>
                  <p className="font-code">Bengaluru, India</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                  <section>
                    <h5 className="text-xl font-bold text-accent-cyan mb-6 uppercase tracking-widest">Experience</h5>
                    <div className="space-y-8 border-l border-white/10 pl-8 relative">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(88,230,217,0.5)]" />
                          <h6 className="font-bold text-lg">Senior Developer @ Tech Innovations</h6>
                          <p className="text-sm opacity-50 mb-3">Jan 2023 - Present</p>
                          <p className="opacity-70">Led the migration of microservices to a decentralized architecture, improving system uptime by 99.9%. Architected the frontend design system using Tailwind and Framer Motion.</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h5 className="text-xl font-bold text-accent-purple mb-6 uppercase tracking-widest">Education</h5>
                    <div className="space-y-8 border-l border-white/10 pl-8 relative">
                      <div className="relative">
                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(182,62,150,0.5)]" />
                        <h6 className="font-bold text-lg">B.Tech in Computer Science</h6>
                        <p className="text-sm opacity-50 mb-1">Indian Institute of Technology</p>
                        <p className="text-sm opacity-50">2018 - 2022 | GPA: 9.2/10</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="space-y-12">
                  <section>
                    <h5 className="text-xl font-bold text-accent-cyan mb-6 uppercase tracking-widest">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'Tailwind', 'Three.js'].map((s) => (
                        <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-sm border border-white/10">{s}</span>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h5 className="text-xl font-bold text-accent-purple mb-6 uppercase tracking-widest">Awards</h5>
                    <ul className="space-y-4 text-sm opacity-70">
                      <li>🏆 Hackathon Winner (Google)</li>
                      <li>⭐ Open Source Contributor</li>
                      <li>🎓 Dean's List Award</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
