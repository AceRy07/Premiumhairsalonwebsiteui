import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

const HERO_IMG = "https://images.unsplash.com/photo-1774897778836-3b13763e71b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyJTIwc3R5bGluZyUyMG1vZGVsfGVufDF8fHx8MTc3NzgyMjk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const SERVICES = [
  {
    title: "Micro Extensions",
    img: "https://images.unsplash.com/photo-1658932447775-dd78d1e7c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Seamless, ultra-discreet luxury extensions."
  },
  {
    title: "Permanent Blow-Dry",
    img: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Flawless, frizz-free hair for months."
  },
  {
    title: "Bridal Styling",
    img: "https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Bespoke elegance for your special day."
  }
];

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={HERO_IMG} 
            alt="Professional Hair Styling" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-8xl font-serif text-[#FDFBF7] leading-tight"
            >
              Artistry in
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif text-[#FDFBF7] leading-tight italic text-[#D4AF37]"
            >
              Every Strand
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <NavLink 
              to="/booking"
              className="inline-flex items-center gap-4 border border-[#D4AF37] bg-transparent text-[#FDFBF7] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-b border-gray-200 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8 font-sans">Trusted by premium brands</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Logos to mock brands */}
            {['Kérastase', 'Olaplex', 'L\'Oréal Professionnel', 'Dyson'].map(brand => (
              <span key={brand} className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-bold tracking-wider">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-[#FDFBF7] text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Services</h2>
              <p className="text-gray-500 font-sans max-w-md">Experience our most sought-after transformations, tailored to elevate your natural beauty.</p>
            </div>
            <NavLink to="/services" className="hidden md:inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-1 uppercase tracking-widest text-sm hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <NavLink to="/services" className="inline-flex w-full justify-center items-center gap-2 border border-[#1A1A1A] py-4 uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:text-[#FDFBF7] transition-all">
              View All Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Interactive Before/After Placeholder */}
      <section className="py-32 bg-[#1A1A1A] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">The Transformation</h2>
          <div className="max-w-4xl mx-auto h-[600px]">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
      <p className="text-gray-500 font-sans text-sm">{service.desc}</p>
    </motion.div>
  );
};
