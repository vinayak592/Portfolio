import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import CharAnimatedText from '../components/CharAnimatedText';
import ModernSkills from '../components/ModernSkills';
import { skills, timeline, achievements, testimonials } from '../data/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <AnimatedText 
            text="Passion Fuels Purpose" 
            className="text-5xl md:text-7xl font-bold justify-center mb-4" 
          />
          <p className="section-subtitle max-w-2xl mx-auto">
            I am a full-stack developer and UI/UX designer with a passion for creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Left: Biography */}
          <div className="lg:col-span-7">
            <CharAnimatedText 
              text="Biography" 
              className="text-2xl font-bold mb-6 text-gradient" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 text-lg opacity-80 leading-relaxed"
            >
              <p>
                Hi, I'm Vinayak, a 2nd-year B.Tech student and creative developer with a passion for building 
                robust and high-performance digital experiences. I specialize in **Full-Stack Web Development and Prompt Engineering**.
              </p>
              <p>
                I believe that modern development is about more than just writing code – it's about solving 
                complex problems and creating intuitive, AI-driven solutions that enhance human productivity.
              </p>
              <p>
                Whether I'm architecting a full-stack application or fine-tuning a specialized AI prompt, 
                I bring my commitment to technical excellence and logical thinking to every project I work on. 
                I'm currently looking for internship opportunities where I can push the boundaries of web technology.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div className="glass p-6 rounded-2xl text-center border border-white/5">
                <h4 className="text-4xl font-bold text-accent-cyan mb-1">8+</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Projects</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center border border-white/5">
                <h4 className="text-4xl font-bold text-accent-purple mb-1">100+</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Days of Code</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center border border-white/5">
                <h4 className="text-4xl font-bold text-accent-cyan mb-1">2nd</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Year Student</p>
              </div>
            </div>
          </div>

          {/* Right: Profile Card & Skills */}
          <div className="lg:col-span-5 space-y-12">
            {/* Tilt Card Profile */}
            <motion.div
              whileHover={{ rotateY: 10, rotateX: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="tilt-card relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="/assets/vinayak.png" 
                alt="Vinayak Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-accent-cyan font-code mb-1 tracking-widest">VINAYAK</p>
                <h4 className="text-2xl font-bold">Creative Developer</h4>
              </div>
            </motion.div>
          </div>
        </div>

        {/* New Modern Skills Bento Grid - Full Width */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Technical Arsenal</h3>
            <p className="opacity-50 text-lg">A deep dive into the technologies I use to build the future.</p>
          </div>
          <ModernSkills />
        </div>

        {/* Timeline Section */}
        <div className="mb-32">
          <h3 className="text-4xl font-bold mb-16 text-center text-gradient">My Journey</h3>
          <VerticalTimeline 
            lineColor={isDark ? "rgba(88, 230, 217, 0.2)" : "rgba(182, 62, 150, 0.2)"}
          >
            {timeline.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ 
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  color: isDark ? '#fff' : '#000',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  borderRadius: '1.5rem',
                }}
                contentArrowStyle={{ borderRight: isDark ? '7px solid rgba(255, 255, 255, 0.05)' : '7px solid rgba(255, 255, 255, 0.8)' }}
                date={item.year}
                iconStyle={{ 
                  background: item.type === 'work' ? '#B63E96' : '#58E6D9', 
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                }}
                icon={item.type === 'work' ? <FiBriefcase /> : <FiBookOpen />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-accent-cyan font-semibold mb-2">{item.company}</h4>
                <p className="opacity-70">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div className="mb-32">
            <h3 className="text-4xl font-bold mb-16 text-center text-gradient">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center text-3xl mb-6 group-hover:bg-accent-cyan group-hover:text-dark transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="opacity-50 font-code">{item.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {testimonials && testimonials.length > 0 && (
          <div className="mb-32">
            <h3 className="text-4xl font-bold mb-16 text-center text-gradient">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-3xl border border-white/5 relative"
                >
                  <div className="text-5xl text-accent-cyan/20 absolute top-6 left-6 font-serif">"</div>
                  <p className="text-lg italic opacity-70 mb-8 relative z-10">{item.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center text-2xl">
                      {item.avatar}
                    </div>
                    <div>
                      <h5 className="font-bold">{item.name}</h5>
                      <p className="text-xs opacity-50">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default About;
