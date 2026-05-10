import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import AnimatedText from '../components/AnimatedText';
import CharAnimatedText from '../components/CharAnimatedText';
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCheckCircle, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { socialLinks as socialData } from '../data/data';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const [emailCopied, setEmailCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // No longer using socket connection for emails
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // EmailJS Configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Vinayak',
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormState('success');
      }, (err) => {
        console.log('FAILED...', err);
        setFormState('error');
        alert('Failed to send message. Please try again or email me directly.');
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('vinayak@example.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const getIcon = (platform) => {
    switch (platform) {
      case 'github': return <FiGithub />;
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      case 'instagram': return <FiInstagram />;
      case 'whatsapp': return <FaWhatsapp />;
      default: return <FiMail />;
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText 
            text="Let's Build Something Together" 
            className="text-5xl md:text-7xl font-bold justify-center mb-4" 
          />
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <CharAnimatedText 
                text="Get In Touch" 
                className="text-2xl font-bold mb-8 text-gradient" 
              />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg mb-10"
              >
                I'm currently available for freelance work and full-time positions. 
                If you have any questions or want to collaborate, don't hesitate to contact me.
              </motion.p>
              
              <div 
                onClick={copyEmail}
                className="glass p-6 rounded-2xl flex items-center justify-between cursor-pointer group hover:border-accent-cyan transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-cyan/10 text-accent-cyan rounded-full flex items-center justify-center text-xl">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Email Me</p>
                    <p className="font-bold text-lg">vinayakkathare859@gmail.com</p>
                  </div>
                </div>
                <div className="text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  {emailCopied ? <FiCheckCircle size={24} /> : 'Copy'}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
              <div className="flex gap-4 flex-wrap">
                {socialData.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl hover:text-accent-cyan transition-colors"
                    aria-label={link.label}
                  >
                    {getIcon(link.platform)}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-24 h-24 bg-accent-cyan/20 text-accent-cyan rounded-full flex items-center justify-center text-5xl mx-auto mb-8">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-lg opacity-70 mb-10">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => {
                      setFormState('idle');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white/5 border-b-2 border-white/10 py-4 px-2 outline-none focus:border-accent-cyan transition-all peer"
                        placeholder=" "
                      />
                      <label className="absolute left-2 top-4 opacity-40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                        Your Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white/5 border-b-2 border-white/10 py-4 px-2 outline-none focus:border-accent-cyan transition-all peer"
                        placeholder=" "
                      />
                      <label className="absolute left-2 top-4 opacity-40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="relative group">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      rows="5"
                      className="w-full bg-white/5 border-b-2 border-white/10 py-4 px-2 outline-none focus:border-accent-cyan transition-all peer resize-none"
                      placeholder=" "
                    />
                    <label className="absolute left-2 top-4 opacity-40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                      Your Message
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-gradient py-5 text-xl flex items-center justify-center gap-4 disabled:opacity-50"
                  >
                    {formState === 'sending' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Send Message <FiSend /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;

