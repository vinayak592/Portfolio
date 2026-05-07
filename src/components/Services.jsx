import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/data';
import CharAnimatedText from './CharAnimatedText';

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <CharAnimatedText 
            text="What I Offer" 
            className="text-4xl md:text-5xl font-bold justify-center mb-4" 
          />
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Combining technology and creativity to deliver high-end digital solutions 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-[2rem] h-full border border-white/5 group-hover:border-accent-cyan/30 transition-all duration-500 overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500`} />
                
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm opacity-60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Subtle indicator */}
                <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}

          {/* Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 p-8 rounded-[2rem] h-full border border-white/10 flex flex-col justify-center items-center text-center group hover:from-accent-cyan/30 hover:to-accent-purple/30 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4">Have a unique idea?</h3>
              <p className="text-sm opacity-70 mb-8">
                I'm always open to custom projects and creative collaborations.
              </p>
              <Link to="/contact">
                <button className="btn-gradient px-8 py-3 rounded-xl font-bold">
                  Let's Talk
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
