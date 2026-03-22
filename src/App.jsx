import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TouristDemo from './pages/TouristDemo'
import EventDemo from './pages/EventDemo'
import './index.css'

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <Router>
      <div className="min-h-screen text-white selection:bg-[#7C3AED] selection:text-white bg-[#0B0F2A]">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] origin-left z-[60]"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/tourist" element={<TouristDemo />} />
          <Route path="/demo/events" element={<EventDemo />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
