import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 bg-[#0B0F2A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl md:text-2xl font-bold tracking-wider text-white block mb-2">
              Harshavardhan Reddy
            </a>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer building modern web applications.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/harshavardhan-27" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harshavardhan-reddy-256454299/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-[#2563EB] hover:bg-white/10 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Harshavardhan Reddy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-[#2563EB]" fill="#2563EB" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
