import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
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
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">About Me</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Discover <span className="text-[#7C3AED]">Who I Am</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center glass p-8 md:p-10 rounded-2xl border-2 border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] bg-[#11132B]/80"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">Gedela Harshavardhan Reddy</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Computer Science and Engineering student at Lovely Professional University with a strong passion for full-stack web development. I have experience with technologies like C, C++, Java, JavaScript, PHP, ReactJS, and NodeJS, and enjoy building scalable, user-friendly applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I have worked on projects such as a MERN-based Recipe Recommendation System, focusing on API development and performance optimization. I continuously strive to improve my skills and explore new technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-2xl border-2 border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] bg-[#11132B]/80 hover:-translate-y-2 hover:border-[#2563EB]/60 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2563EB]/20 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                <Laptop size={26} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Web Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Building responsive and interactive single-page applications with React and advanced CSS setups.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-2xl border-2 border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] bg-[#11132B]/80 hover:-translate-y-2 hover:border-[#7C3AED]/60 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                <Code2 size={26} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Problem Solving</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Applying strong computer science fundamentals and algorithms to optimize complex architectural systems.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl border-2 border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] bg-[#11132B]/80 hover:-translate-y-2 hover:border-fuchsia-500/60 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-fuchsia-500/20 text-fuchsia-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300">
                <Rocket size={26} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Learning New Tech</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Continuously exploring emerging technologies like Next.js, modern deployment tooling, and AI integrations.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
