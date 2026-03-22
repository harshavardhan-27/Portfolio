import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "Recipe Recommendation Website",
    date: "Dec 2025",
    description: "MERN stack application that recommends recipes based on ingredients. Built REST APIs, optimized MongoDB queries, and implemented JWT authentication.",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express.js"],
    github: "https://github.com/harshavardhan-27/Recipe-Recommendation-Based-on-Available",
    live: "https://cool-genie-c1bbae.netlify.app",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Tourist Management System",
    date: "Apr 2025",
    description: "Developed a dynamic tourism web application allowing users to explore tourist places. Implemented booking system, database relationships, MVC architecture, and secure authentication.",
    tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/harshavardhan-27/Tourist-Management-website",
    live: "/demo/tourist",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Event Management and Ticket Booking",
    date: "Dec 2023",
    description: "Responsive web application with multi-page navigation. Implemented JavaScript validation and dynamic UI for event exploration and ticket booking.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/harshavardhan-27/Event-Management-and-Ticket-booking-website1",
    live: "/demo/events",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-[#0B0F2A]/50">
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
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Portfolio</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#7C3AED]">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            A showcase of my recent full-stack applications and professional work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden group border-2 border-white/10 hover:border-[#2563EB]/60 hover:-translate-y-2 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#7C3AED]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#2563EB] transition-colors">{project.title}</h3>
                </div>
                <p className="text-xs text-[#7C3AED] font-semibold mb-4 tracking-wider uppercase">{project.date}</p>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] px-4 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
