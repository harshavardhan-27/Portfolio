import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
