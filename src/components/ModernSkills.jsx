import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const ModernSkills = () => {
  // Categories for the bento grid
  const categories = [
    {
      title: "Frontend Mastery",
      skills: skills.filter(s => ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript'].includes(s.name)),
      color: "from-cyan-500/20 to-blue-500/20",
      accent: "text-accent-cyan"
    },
    {
      title: "Backend & Logic",
      skills: skills.filter(s => ['Node.js', 'Express.js', 'Java', 'Python'].includes(s.name)),
      color: "from-purple-500/20 to-pink-500/20",
      accent: "text-accent-purple"
    },
    {
      title: "AI & Specialized",
      skills: skills.filter(s => ['Prompt Engineering', 'SQL', 'MongoDB'].includes(s.name)),
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br ${cat.color} relative overflow-hidden group`}
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-500" />
            
            <h4 className={`text-xl font-bold mb-8 ${cat.accent} flex items-center gap-2`}>
              <span className="w-2 h-2 rounded-full bg-current" />
              {cat.title}
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-dark/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-3 group/item hover:border-white/20 transition-all shadow-lg"
                >
                  <img 
                    src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  />
                  <span className="text-sm font-bold opacity-80 group-hover/item:opacity-100">{skill.name}</span>
                  
                  {/* Progress bar mini */}
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      className={`h-full bg-gradient-to-r ${cat.accent.replace('text-', 'bg-')}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Large Bento Item */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-12 rounded-[3rem] border border-white/5 bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-cyan/10 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-bold text-gradient">Full Stack Architect</h3>
          <p className="text-lg opacity-60 leading-relaxed">
            I specialize in building high-performance, scalable web applications from the ground up. 
            My expertise spans across the entire development lifecycle, ensuring seamless integration between frontend elegance and backend robustness.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            {['Performance Optimization', 'Clean Architecture', 'Real-time Systems', 'UI/UX Excellence'].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <div className="absolute inset-0 bg-accent-cyan/20 blur-3xl animate-pulse" />
          <div className="relative w-full h-full rounded-full border-2 border-dashed border-white/20 animate-spin-slow flex items-center justify-center">
             <div className="w-20 h-20 bg-dark rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl rotate-45">
                <span className="text-4xl -rotate-45">🚀</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ModernSkills;
