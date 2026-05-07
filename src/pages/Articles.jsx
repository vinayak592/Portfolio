import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import CharAnimatedText from '../components/CharAnimatedText';
import { articles } from '../data/data';

const ArticleCard = ({ title, date, readTime, category, summary }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="group relative py-12 border-b border-white/10 hover:border-accent-cyan/30 transition-colors"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <CharAnimatedText 
            text={category} 
            className="text-accent-cyan font-code text-sm uppercase tracking-widest" 
          />
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span className="opacity-40 text-sm">{date}</span>
        </div>
        <Link to={`/articles/${id}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-cyan transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="opacity-60 text-lg line-clamp-2 max-w-3xl">
          {summary}
        </p>
      </div>
      
      <div className="flex items-center gap-8">
        <span className="hidden lg:block opacity-40 font-code text-sm whitespace-nowrap">{readTime}</span>
        <Link to={`/articles/${id}`}>
          <motion.div
            whileHover={{ scale: 1.2, x: 5 }}
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl group-hover:bg-accent-cyan group-hover:text-dark transition-all duration-300 cursor-pointer"
          >
            →
          </motion.div>
        </Link>
      </div>
    </div>
    
    {/* Hover underline effect */}
    <motion.div 
      className="absolute bottom-0 left-0 h-[2px] bg-accent-cyan w-0 group-hover:w-full transition-all duration-500"
    />
  </motion.div>
);

const Articles = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <AnimatedText 
            text="Words Can Change The World" 
            className="text-5xl md:text-7xl font-bold justify-center mb-4" 
          />
          <p className="section-subtitle">
            Sharing my thoughts on web development, design systems, and software engineering.
          </p>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline px-12"
          >
            Load More Articles
          </motion.button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Articles;
