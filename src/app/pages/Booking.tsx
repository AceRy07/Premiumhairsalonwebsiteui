import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { cn } from '../../utils/cn';

const MAP_IMG = "https://images.unsplash.com/photo-1728577379969-768bf0747172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export const Booking = () => {
  return (
    <div className="w-full pt-32 pb-0 bg-[#FDFBF7] min-h-screen font-sans flex flex-col">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mb-6 text-center"
        >
          Reserve Appointment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 max-w-2xl mx-auto font-light text-lg"
        >
          Choose your service and preferred date. We will contact you to confirm the exact time and process duration.
        </motion.p>
      </div>

      {/* Booking Form Section */}
      <section className="max-w-5xl mx-auto w-full px-6 mb-32">
        <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 rounded-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left: Inputs */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-6 border-b border-gray-100 pb-4">Personal Details</h3>
              
              <div className="relative z-0 w-full group">
                <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-base text-[#1A1A1A] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest">Full Name</label>
              </div>

              <div className="relative z-0 w-full group">
                <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-base text-[#1A1A1A] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer" placeholder=" " required />
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest">Phone Number</label>
              </div>

              <div className="relative z-0 w-full group mt-12">
                <select name="service" id="service" className="block py-2.5 px-0 w-full text-base text-[#1A1A1A] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer" defaultValue="">
                  <option value="" disabled>Select a Service...</option>
                  <option value="extensions">Mikro Kaynak (Micro Extensions)</option>
                  <option value="blowdry">Yeni Nesil Saç Düzleştirme (Kalıcı Fön)</option>
                  <option value="color">Signature Balayage & Toner</option>
                  <option value="wedding">Bridal Hair & Makeup</option>
                  <option value="cut">Signature Cut & Style</option>
                </select>
                <label htmlFor="service" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] uppercase tracking-widest">Service</label>
              </div>
            </div>

            {/* Right: Calendar */}
            <div>
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-6 border-b border-gray-100 pb-4">Select Date</h3>
              <CustomCalendar />
            </div>

            {/* Actions */}
            <div className="md:col-span-2 mt-4 space-y-4">
              <button type="button" className="w-full bg-[#1A1A1A] text-[#FDFBF7] py-5 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors duration-300 rounded-sm">
                Reserve Appointment
              </button>
              
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-widest">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* WhatsApp Trigger */}
              <a 
                href="#" 
                className="group relative flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-5 rounded-sm overflow-hidden hover:bg-[#1EBE5A] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:animate-ping transition-opacity duration-300 rounded-sm"></span>
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="font-medium relative z-10 uppercase tracking-widest text-sm text-shadow-sm">WhatsApp ile Hızlı Randevu</span>
              </a>
            </div>
            
          </form>
        </div>
      </section>

      {/* Contact Section: Split Screen */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 mt-auto border-t border-gray-200">
        
        {/* Left: Map */}
        <div className="h-[500px] md:h-auto relative bg-[#1A1A1A]">
          {/* Dark Mode Google Maps Placeholder */}
          <img src={MAP_IMG} alt="Map Location" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-[#1A1A1A]/40 mix-blend-multiply" />
          <div className="absolute bottom-8 left-8 bg-[#1A1A1A] text-[#D4AF37] p-4 flex items-center gap-3 border border-gray-800 shadow-xl">
            <MapPin className="w-5 h-5" />
            <span className="font-serif text-lg">Çankaya, Ankara</span>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-[#1A1A1A] text-[#FDFBF7] p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#D4AF37]">Visit Us</h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-1">Address</h4>
                <p className="text-lg font-light">Birlik, Podgoritsa Cd.<br/>Çankaya<br/>Ankara, Turkey</p>
                <a href="#" className="inline-block mt-3 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37]">Direct Directions</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-1">Phone</h4>
                <p className="text-lg font-light">+90 555 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-1">Email</h4>
                <p className="text-lg font-light">hello@kuaforabdullah.com</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

        </div>

      </section>
    </div>
  );
};

// Simple Custom Calendar Component for the aesthetic
const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  
  // Mock days for current month
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="bg-[#FDFBF7] p-6 rounded-sm border border-gray-200 shadow-inner">
      <div className="flex justify-between items-center mb-6">
        <button type="button" className="text-gray-400 hover:text-[#1A1A1A]">&lt;</button>
        <h4 className="font-serif text-lg">May 2026</h4>
        <button type="button" className="text-gray-400 hover:text-[#1A1A1A]">&gt;</button>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-xs uppercase text-gray-400 font-medium">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {/* Empty slots for May 2026 start (Friday start) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`empty-${i}`} className="h-10"></div>
        ))}
        
        {days.map(day => {
          const isSelected = selectedDate === day;
          return (
            <button
              type="button"
              key={day}
              onClick={() => setSelectedDate(day)}
              className={cn(
                "h-10 w-10 flex items-center justify-center rounded-full text-sm transition-all mx-auto",
                isSelected 
                  ? "bg-[#D4AF37] text-white font-medium shadow-md shadow-[#D4AF37]/30" 
                  : "hover:bg-gray-200 text-[#1A1A1A]"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};
