import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, ArrowLeft, CheckCircle } from 'lucide-react';

const destinations = [
  { id: 1, name: "Taj Mahal, Agra", price: "₹2,500", image: "/destinations/tourist_taj_mahal.png" },
  { id: 2, name: "Jaipur City Tour", price: "₹3,200", image: "/destinations/tourist_jaipur.png" },
  { id: 3, name: "Kerala Backwaters", price: "₹5,000", image: "/destinations/tourist_kerala.png" },
  { id: 4, name: "Goa Beaches", price: "₹4,500", image: "/destinations/tourist_goa.png" },
  { id: 5, name: "Manali Trip", price: "₹4,000", image: "/destinations/tourist_manali.png" },
  { id: 6, name: "Leh Ladakh", price: "₹8,500", image: "/destinations/tourist_leh.png" },
  { id: 7, name: "Darjeeling", price: "₹5,500", image: "/destinations/tourist_darjeeling.png" },
  { id: 8, name: "Rishikesh", price: "₹4,200", image: "/destinations/tourist_rishikesh.png" },
  { id: 9, name: "Varanasi", price: "₹3,000", image: "/destinations/tourist_varanasi.png" },
  { id: 10, name: "Hampi Valley", price: "₹6,000", image: "/destinations/tourist_hampi.png" },
  { id: 11, name: "Araku Valley", price: "₹3,500", image: "/destinations/tourist_araku.png" },
  { id: 12, name: "Tirupati", price: "₹2,000", image: "/destinations/tourist_tirupati.png" },
  { id: 13, name: "Arunachalam", price: "₹2,500", image: "/destinations/tourist_arunachalam.png" }
];

const TouristDemo = () => {
  const [view, setView] = useState('list'); // list -> checkout -> success
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleBook = (dest) => {
    setSelectedDestination(dest);
    setView('checkout');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const place = selectedDestination.name;

    if (!name || !email) {
      alert("Please fill all fields");
      setIsSubmitting(false);
      return;
    }

    const params = {
      to_name: name,
      to_email: email,
      place: place
    };

    emailjs.init("wN5w_FqHbP-2MyyYn");
    emailjs.send("VijayHarsha@27", "template_nbam68f", params)
      .then(function(response) {
          setIsSubmitting(false);
          alert("✅ Booking Successful!\nEmail sent to user and admin.");
          setView('success');
      }, function(error) {
          setIsSubmitting(false);
          alert("❌ Email Failed: " + JSON.stringify(error));
          console.log(error);
      });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {view === 'list' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 mb-4">
               <a href="/" className="text-gray-400 hover:text-white transition group flex items-center gap-2"><ArrowLeft size={18} className="group-hover:-translate-x-1 transition"/> Back to Portfolio</a>
            </div>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore <span className="text-[#2563EB]">Destinations</span></h1>
              <p className="text-gray-400">Tourist Management System Live Demo</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destinations.map(dest => (
                <div key={dest.id} className="glass-card overflow-hidden group">
                  <div className="h-48 overflow-hidden relative">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><MapPin size={16} className="text-[#2563EB]"/> {dest.name}</h3>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-[#7C3AED] font-bold">{dest.price}</span>
                      <button 
                        onClick={() => handleBook(dest)}
                        className="px-4 py-2 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {view === 'checkout' && selectedDestination && (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto glass p-8 rounded-2xl">
            <button onClick={() => setView('list')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"><ArrowLeft size={18}/> Back to Destinations</button>
            <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
            <div className="flex gap-6 mb-8 items-center bg-[#0B0F2A]/50 p-4 rounded-xl border border-white/5">
              <img src={selectedDestination.image} className="w-24 h-24 rounded-lg object-cover" alt="" />
              <div>
                <h3 className="text-xl font-bold text-white">{selectedDestination.name}</h3>
                <p className="text-[#7C3AED] font-semibold mt-1">Total: {selectedDestination.price}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input required name="name" type="text" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#2563EB]" placeholder="John Doe"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input required name="email" type="email" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#2563EB]" placeholder="john@example.com"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input required type="tel" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#2563EB]" placeholder="+91 9999999999"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Travel Date</label>
                  <input required type="date" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#2563EB]" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Number of Persons</label>
                  <input required type="number" min="1" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#2563EB]" placeholder="2"/>
                </div>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full py-4 mt-6 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
              </button>
            </form>
          </motion.div>
        )}

        {view === 'success' && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center glass p-12 rounded-2xl">
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Booking Confirmed!</h2>
            <p className="text-gray-400 mb-8">Thank you for booking your trip to <strong className="text-white">{selectedDestination?.name}</strong>. Your confirmation details have been sent to your email.</p>
            <button onClick={() => setView('list')} className="px-6 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg transition">
              Explore More Destinations
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TouristDemo;
