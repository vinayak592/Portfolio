import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { articles } from '../data/data';
import { FiArrowLeft, FiClock, FiCalendar, FiShare2 } from 'react-icons/fi';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <PageWrapper>
        <div className="max-w-3xl mx-auto px-6 text-center py-20">
          <h2 className="text-3xl font-bold mb-6">Article Not Found</h2>
          <Link to="/articles" className="btn-gradient">Back to Articles</Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/articles" className="flex items-center gap-2 text-accent-cyan hover:underline font-bold">
            <FiArrowLeft /> Back to all articles
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="px-4 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-bold border border-accent-cyan/20">
              {article.category}
            </span>
            <div className="flex items-center gap-2 opacity-50 text-sm">
              <FiCalendar /> {article.date}
            </div>
            <div className="flex items-center gap-2 opacity-50 text-sm">
              <FiClock /> {article.readTime}
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-8"
          >
            {article.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between py-6 border-y border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-cyan">
                <img src="/assets/vinayak.png" alt="Vinayak" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold">Vinayak</p>
                <p className="text-xs opacity-50">Full Stack Developer</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-cyan transition-colors">
              <FiShare2 />
            </button>
          </motion.div>
        </header>

        {/* Content */}
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none space-y-8 opacity-80 leading-relaxed"
        >
          <p className="text-xl font-medium text-light/90">
            {article.summary}
          </p>
          
          <div className="space-y-6">
            <p>{article.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 my-12 italic text-lg border-l-4 border-l-accent-cyan">
              "Programming isn't about what you know; it's about what you can figure out."
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <h2 className="text-2xl font-bold text-light pt-8">Key Takeaways</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Understand the core principles of React component architecture.</li>
              <li>Implementing clean, maintainable logic for complex UI states.</li>
              <li>Optimizing performance through selective re-rendering.</li>
              <li>Creating accessible and responsive design patterns.</li>
            </ul>
          </div>
        </motion.article>

        {/* Footer Navigation */}
        <footer className="mt-20 pt-12 border-t border-white/10 flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest opacity-40">Previous Post</p>
            <p className="font-bold text-accent-cyan">Mastering Tailwind CSS</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-xs uppercase tracking-widest opacity-40">Next Post</p>
            <p className="font-bold text-accent-cyan">Future of Web Dev</p>
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
};

export default ArticleDetail;
