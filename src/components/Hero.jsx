import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#7C3AED] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">Hi, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient drop-shadow-lg">Harshavardhan Reddy</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-10">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Computer Science Student',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </div>

            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
              Computer Science Engineering student passionate about creating modern, scalable web applications. Constantly learning new technologies and striving to build innovative solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <a href="#projects" className="px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-medium transition-all duration-300 glow-primary flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center gap-2">
                Contact Me <Mail size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-[#7C3AED] hover:bg-[#7C3AED]/20 text-white font-medium transition-all duration-300 glow-accent flex items-center gap-2">
                Resume <FileText size={18} />
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="https://github.com/harshavardhan-27" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/harshavardhan-reddy-256454299/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2563EB] hover:scale-110 transition-all duration-300">
                <Linkedin size={28} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image / Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] glow-accent animate-[pulse_4s_ease-in-out_infinite]">
              <div className="w-full h-full rounded-full bg-[#0B0F2A] flex items-center justify-center overflow-hidden border-4 border-[#0B0F2A]">
                <img 
                  src="https://i.postimg.cc/Y9hRJcgh/image-2.jpg" 
                  alt="Harshavardhan Reddy" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
