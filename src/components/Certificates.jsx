import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    title: "Java Mastery",
    issuer: "Udemy",
    date: "Mar 2026",
    link: "/certificates/Java%20Mastery.pdf"
  },
  {
    title: "Git and GitHub Training",
    issuer: "Cipher Schools",
    date: "Feb 2026",
    link: "/certificates/Git%20and%20Github%20%20Training.pdf"
  },
  {
    title: "Build Generative AI Apps",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "/certificates/Build%20Generative%20AI%20Apps%20and%20Solutions%20with%20No-Code%20Tools.pdf"
  },
  {
    title: "ChatGPT Prompt Eng.",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "/certificates/ChatGPT-4%20Prompt%20Engineering%20ChatGPT,%20Generative%20AI%20&%20LLM.pdf"
  },
  {
    title: "Java Programming",
    issuer: "IAMNEO",
    date: "May 2025",
    link: "/certificates/Java%20Programming.pdf"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr 2025",
    link: "/certificates/NPTEL.pdf"
  },
  {
    title: "C++ Programming",
    issuer: "IAMNEO",
    date: "Dec 2024",
    link: "/certificates/C++%20Lanugauge.pdf"
  },
  {
    title: "Fundamentals of Network",
    issuer: "Coursera",
    date: "Oct 2024",
    link: "/certificates/Fundamental%20and%20network%20communication.pdf"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative bg-[#0B0F2A]/30">
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
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Certifications</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-[#7C3AED]">Certificates</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Continuous learning and professional development through various courses and certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-[#7C3AED]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)] bg-[#11132B]/90 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl text-[#2563EB] group-hover:text-[#7C3AED] transition-colors">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white mb-1 group-hover:text-[#2563EB] transition-colors leading-tight">{cert.title}</h3>
                  <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                  <div className="flex items-center text-gray-500 text-[11px] gap-1 opacity-80">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    {cert.date}
                  </div>
                </div>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all"
              >
                <ExternalLink size={16} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
