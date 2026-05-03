import React from 'react';
import { NavLink } from 'react-router';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Now', path: '/booking' },
  ];

  return (
    <nav className="fixed w-full z-50 mix-blend-difference text-[#FDFBF7] px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-serif tracking-widest uppercase">
          Kuaför Abdullah
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-widest hover:text-[#D4AF37] transition-colors relative group",
                  isActive ? "text-[#D4AF37]" : "text-[#FDFBF7]"
                )
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-[#1A1A1A] text-[#FDFBF7] z-50 flex flex-col justify-center items-center mix-blend-normal"
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-3xl font-serif uppercase tracking-widest",
                      isActive ? "text-[#D4AF37]" : "text-[#FDFBF7]"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="absolute bottom-10 flex gap-6">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-[#D4AF37] transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-[#D4AF37] transition-colors" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
