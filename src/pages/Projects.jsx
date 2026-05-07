import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import CharAnimatedText from '../components/CharAnimatedText';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/data';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'react', label: 'React' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ui', label: 'UI/UX' },
  ];

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Imagination Trumps Knowledge" 
            className="text-5xl md:text-7xl font-bold justify-center mb-4" 
          />
          <p className="section-subtitle">
            A selection of my best work, spanning across various tech stacks and domains.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                filter === cat.id 
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-lg' 
                  : 'glass hover:bg-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Placeholder if empty */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl opacity-50">No projects found in this category.</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Projects;
