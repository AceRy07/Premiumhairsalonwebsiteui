import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FDFBF7] py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif uppercase tracking-widest">Kuaför Abdullah</h2>
          <p className="text-sm text-gray-400 max-w-sm font-sans font-light leading-relaxed">
            Elevating hair artistry through minimal luxury and expert precision. Redefining your natural beauty.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-serif text-[#D4AF37] uppercase tracking-widest">Contact</h3>
          <ul className="space-y-4 text-sm font-sans font-light text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              Nişantaşı, Istanbul, Turkey
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              +90 555 123 4567
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              hello@kuaforabdullah.com
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-serif text-[#D4AF37] uppercase tracking-widest">Hours</h3>
          <ul className="space-y-2 text-sm font-sans font-light text-gray-400">
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Mon - Fri</span>
              <span>10:00 - 20:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Saturday</span>
              <span>09:00 - 19:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
          <div className="pt-4 flex gap-4">
            <a href="#" className="p-2 border border-gray-800 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 text-center text-xs text-gray-600 uppercase tracking-widest font-sans">
        &copy; {new Date().getFullYear()} Kuaför Abdullah. All Rights Reserved.
      </div>
    </footer>
  );
};
