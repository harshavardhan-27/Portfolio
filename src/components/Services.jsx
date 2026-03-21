import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Smartphone, Globe, Lightbulb } from 'lucide-react';

const servicesData = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-6 h-6" />,
    description: "Creating responsive and interactive user interfaces using React, HTML, CSS, and modern JavaScript frameworks."
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: "Building robust server-side applications with Node.js, Express.js, and RESTful API development."
  },
  {
    title: "Database Design",
    icon: <Database className="w-6 h-6" />,
    description: "Designing and managing databases using MongoDB, MySQL, and implementing efficient data models."
  },
  {
    title: "Responsive Design",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Ensuring websites look great and function perfectly on all devices from mobile to desktop."
  },
  {
    title: "Web Applications",
    icon: <Globe className="w-6 h-6" />,
    description: "Developing full-stack web applications using MERN stack with secure authentication and real-time features."
  },
  {
    title: "Problem Solving",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Applying data structures and algorithms to solve complex problems and optimize application performance."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative bg-[#0B0F2A]">
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
            <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Services</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#2563EB]/50"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Expertise Service! <span className="text-[#7C3AED]">Let's check it out</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            I offer a range of development services to help bring your ideas to life. From frontend to backend, I can build complete web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 shadow-[0_4px_25px_rgba(0,0,0,0.4)] bg-[#11132B]/80 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2563EB] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#2563EB] transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
