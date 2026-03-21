import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "2023 \u2013 Present",
    score: "CGPA: 6.28",
    status: "Current"
  },
  {
    degree: "Intermediate (12th)",
    institution: "Sri Chaitanya Junior College",
    location: "Vijayawada",
    date: "2023",
    score: "Percentage: 79",
    status: "Completed"
  },
  {
    degree: "Secondary School (10th)",
    institution: "Arunodaya High School",
    location: "Srikakulam",
    date: "2021",
    score: "Percentage: 100",
    status: "Completed"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Education</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-[#7C3AED]">Academic Journey</span>
          </h2>
        </motion.div>

        <div className="relative pl-10 md:pl-16 space-y-8 mt-12 mx-auto max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-3 top-2 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#2563EB] to-transparent"></div>
          
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[54px] md:-left-[76px] top-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1e1b4b] border-[3px] border-[#7C3AED] flex items-center justify-center glow-accent z-10 transition-transform hover:scale-110">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              
              <div className="glass-card p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 ml-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] bg-[#11132B]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                  {edu.status === 'Current' && (
                    <span className="px-4 py-1 text-xs font-medium rounded-full bg-[#2563EB]/20 text-[#2563EB] whitespace-nowrap self-start sm:self-auto border border-[#2563EB]/30">
                      {edu.status}
                    </span>
                  )}
                </div>
                
                <h4 className="text-[16px] md:text-[18px] font-medium text-[#2563EB] mb-4">{edu.institution}</h4>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" /> {edu.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" /> {edu.date}
                  </div>
                </div>
                
                <div className="font-semibold text-[#2563EB]">
                  {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
