import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Database, Wrench } from 'lucide-react';

const skillsCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    items: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 70 }
    ]
  },
  {
    title: "Frameworks & Web Technologies",
    icon: <Monitor size={20} />,
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "ReactJS", level: 85 },
      { name: "NodeJS", level: 80 },
      { name: "Express.js", level: 75 }
    ]
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    items: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 70 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={20} />,
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-[#0B0F2A]/20">
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
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">My Skills</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What I'm <span className="text-[#7C3AED]">Good At</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            I have hands-on experience with various programming languages, frameworks, and tools that help me build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 shadow-[0_4px_25px_rgba(0,0,0,0.4)] bg-[#11132B]/80 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white/5 rounded-lg text-[#2563EB] group-hover:text-[#7C3AED] transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#2563EB] transition-colors">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs font-bold text-[#7C3AED]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#0B0F2A] rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
