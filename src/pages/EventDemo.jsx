import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, CheckCircle, MapPin } from 'lucide-react';

const events = [
  { id: 1, name: "Tech Conference 2026", price: "₹1,500", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", date: "April 15, 2026", location: "Banglore International Centre" },
  { id: 2, name: "Music Festival Live", price: "₹2,000", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80", date: "May 2, 2026", location: "JLB Stadium, Mumbai" },
  { id: 3, name: "Startup Pitch Day", price: "Free", image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80", date: "May 10, 2026", location: "T-Hub, Hyderabad" },
  { id: 4, name: "Art & Design Expo", price: "₹500", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80", date: "June 5, 2026", location: "India Habitat Centre, Delhi" },
  { id: 5, name: "Global Blockchain Summit", price: "₹5,000", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80", date: "July 12, 2026", location: "Pune Exhibition Center" },
  { id: 6, name: "Symphony Orchestra", price: "₹1,200", image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80", date: "August 20, 2026", location: "NCPA, Nakula" },
  { id: 7, name: "Food Carnival", price: "₹300", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", date: "Sept 1, 2026", location: "Palace Grounds, Bangalore" },
  { id: 8, name: "AI Dev Summit", price: "₹3,500", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", date: "Oct 15, 2026", location: "Hitex Exhibition, Hyderabad" },
  { id: 9, name: "College Fest Main Night", price: "₹800", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", date: "Nov 5, 2026", location: "LPU Campus Pavilion" },
  { id: 10, name: "Standup Comedy Show", price: "₹999", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=800&q=80", date: "Dec 31, 2026", location: "Canvas Laugh Club, Gurgaon" }
];

const EventDemo = () => {
  const [view, setView] = useState('list');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleBook = (ev) => {
    setSelectedEvent(ev);
    setView('checkout');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const city = formData.get('city');
    const category = formData.get('category');
    const place = selectedEvent.name;

    if (!name || !email || !city || !category) {
      alert("Please fill all fields");
      setIsSubmitting(false);
      return;
    }

    const params = {
      to_name: name,
      to_email: email,
      place: place,
      date: selectedEvent.date,
      location: selectedEvent.location,
      city: city,
      category: category
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Upcoming <span className="text-[#7C3AED]">Events</span></h1>
              <p className="text-gray-400">Ticket Booking System Live Demo</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {events.map(ev => (
                <div key={ev.id} className="glass-card overflow-hidden group border-[#7C3AED]/20">
                  <div className="h-48 overflow-hidden relative">
                    <img src={ev.image} alt={ev.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{ev.name}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-2 mb-1"><Calendar size={14}/> {ev.date}</p>
                    <p className="text-sm text-gray-400 flex items-center gap-2 mb-4"><MapPin size={14}/> {ev.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#2563EB] font-bold">{ev.price}</span>
                      <button 
                        onClick={() => handleBook(ev)}
                        className="px-4 py-2 bg-[#7C3AED] text-white text-sm font-semibold rounded-lg hover:bg-[#6d28d9] transition shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                      >
                        Book Ticket
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {view === 'checkout' && selectedEvent && (
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto glass p-8 rounded-2xl border-[#7C3AED]/20">
            <button onClick={() => setView('list')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"><ArrowLeft size={18}/> Back to Events</button>
            <h2 className="text-2xl font-bold mb-6">Confirm Reservation</h2>
            <div className="flex gap-6 mb-8 items-center bg-[#0B0F2A]/50 p-4 rounded-xl border border-white/5">
              <img src={selectedEvent.image} className="w-24 h-24 rounded-lg object-cover" alt="" />
              <div>
                <h3 className="text-xl font-bold text-white">{selectedEvent.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{selectedEvent.date} • {selectedEvent.location}</p>
                <p className="text-[#2563EB] font-semibold mt-1">Ticket: {selectedEvent.price}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Attendee Name</label>
                <input required name="name" type="text" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#7C3AED]" placeholder="John Doe"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input required name="email" type="email" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#7C3AED]" placeholder="john@example.com"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Event Venue</label>
                  <div className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 text-white font-medium">
                    {selectedEvent.location}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your City / Region</label>
                  <input required name="city" type="text" className="w-full bg-white/5 rounded-lg px-4 py-3 border border-white/10 outline-none focus:border-[#7C3AED]" placeholder="e.g. Bangalore"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Seat Category</label>
                  <select name="category" className="w-full bg-[#11132B] rounded-lg px-4 py-3 border border-white/10 outline-none hover:border-[#7C3AED] text-white">
                    <option>General Admission</option>
                    <option>VIP Pass</option>
                    <option>VVIP Backstage</option>
                  </select>
                </div>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full py-4 mt-6 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Securing Tickets...' : 'Confirm Reservation'}
              </button>
            </form>
          </motion.div>
        )}

        {view === 'success' && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center glass p-12 rounded-2xl border-[#7C3AED]/20">
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Tickets Secured!</h2>
            <p className="text-gray-400 mb-8">You are all set for <strong className="text-white">{selectedEvent?.name}</strong>. E-tickets have been sent to your registered email.</p>
            <button onClick={() => setView('list')} className="px-6 py-3 bg-white/10 hover:bg-white/20 font-semibold rounded-lg transition">
              Browse More Events
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventDemo;
