import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    emailjs.sendForm('VijayHarsha@27', 'template_nbam68f', formRef.current, 'wN5w_FqHbP-2MyyYn')
      .then((result) => {
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          e.target.reset();
      }, (error) => {
          setStatusMessage('Failed to send message. Please try again.');
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Contact Me</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#7C3AED]">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 flex flex-col h-full justify-between shadow-[0_4px_25px_rgba(0,0,0,0.4)] bg-[#11132B]/90"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#2563EB] group-hover:bg-[#2563EB]/10 transition-colors">
                    <Mail className="text-[#2563EB] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:harshavardhanreddy2707@gmail.com" className="text-white hover:text-[#2563EB] transition-colors font-medium">harshavardhanreddy2707@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED]/10 transition-colors">
                    <Phone className="text-[#7C3AED] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+919347440409" className="text-white hover:text-[#7C3AED] transition-colors font-medium">+91 9347440409</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500 group-hover:bg-fuchsia-500/10 transition-colors">
                    <MapPin className="text-fuchsia-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white group-hover:bg-white/10 transition-colors">
                    <Github className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a href="https://github.com/harshavardhan-27" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors font-medium">github.com/harshavardhan-27</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2]/10 transition-colors">
                    <Linkedin className="text-[#0A66C2] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/harshavardhan-reddy-256454299/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0A66C2] transition-colors font-medium">linkedin.com/in/harshavardhan</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 flex flex-col h-full shadow-[0_4px_25px_rgba(0,0,0,0.4)] bg-[#11132B]/90"
          >
            <form ref={formRef} className="flex flex-col h-full justify-between space-y-5" onSubmit={sendEmail}>
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="to_name"
                  id="user_name" 
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="to_email"
                  id="user_email" 
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all"
                />
              </div>
              
              <div className="flex-grow mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows="4" 
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full h-full min-h-[120px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all resize-none"
                ></textarea>
              </div>
              
              {statusMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className={`text-sm font-medium tracking-wide p-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] ${statusMessage.includes('success') ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}
                >
                  {statusMessage}
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={isSending}
                className={`w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold tracking-wide transition-all flex items-center justify-center gap-2 group ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]'}`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                {!isSending && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
