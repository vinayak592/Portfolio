import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiUser, FiCpu } from 'react-icons/fi';
import { chatResponses } from '../data/data';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: chatResponses.greeting, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { 
      type: 'user', 
      text: input, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    
    setMessages(prev => [...prev, userMessage]);
    const query = input.toLowerCase();
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let response = chatResponses.default;
      
      if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
        response = chatResponses.skills;
      } else if (query.includes('experience') || query.includes('work') || query.includes('year')) {
        response = chatResponses.experience;
      } else if (query.includes('project') || query.includes('portfolio') || query.includes('build')) {
        response = chatResponses.projects;
      } else if (query.includes('contact') || query.includes('reach') || query.includes('email')) {
        response = chatResponses.contact;
      } else if (query.includes('hire') || query.includes('job') || query.includes('available')) {
        response = chatResponses.hire;
      } else if (query.includes('service') || query.includes('offer') || query.includes('work with') || query.includes('can you build')) {
        response = chatResponses.services;
      }

      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: response, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-6 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
                  <FiCpu />
                </div>
                <div>
                  <h4 className="font-bold text-white">V-Assistant</h4>
                  <p className="text-xs text-white/70">Always online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <FiX size={24} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] space-y-1 ${msg.type === 'bot' ? 'items-start' : 'items-end flex flex-col'}`}>
                    <div className={`p-4 rounded-2xl text-sm ${
                      msg.type === 'bot' 
                        ? 'bg-white/5 rounded-tl-none' 
                        : 'bg-accent-cyan text-dark font-medium rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[10px] opacity-40 px-2">{msg.time}</span>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none space-x-1 flex">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-sm px-2"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-accent-cyan text-dark rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-3xl flex items-center justify-center shadow-xl relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FiX />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FiMessageSquare />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-4 border-dark rounded-full" />
        )}
      </motion.button>
    </div>
  );
};

export default AIChat;
