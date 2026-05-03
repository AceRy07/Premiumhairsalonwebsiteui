import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { NavLink } from 'react-router';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { cn } from '../../utils/cn';

const SALON_IMG = "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const TRANSFORMATION_IMG = "https://images.unsplash.com/photo-1772442125268-2556be6d627a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const STYLIST_ALI = "https://images.unsplash.com/photo-1771594836586-837aa05be563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const SERVICES = [
  {
    title: "Mikro Kaynak",
    img: "https://images.unsplash.com/photo-1634449571017-5fecfd26ad76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Kusursuz, görünmez ve doğal saç uzatma sanatı."
  },
  {
    title: "Yeni Nesil Saç Düzleştirme",
    img: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Aylarca süren pürüzsüz, sağlıklı ve parlak saçlar."
  },
  {
    title: "Signature Balayage",
    img: "https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Kişiye özel, doğal ve boyutlu renklendirme işlemi."
  }
];

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section - Split Screen Real Salon Look */}
      <section className="relative min-h-screen w-full bg-[#FDFBF7] flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col items-start z-10 pt-12 lg:pt-0">
            <div className="overflow-hidden mb-4">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-[1.1]"
              >
                Modern
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-[1.1] italic text-[#D4AF37]"
              >
                Atelier
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-500 font-sans max-w-md mb-10 text-lg font-light leading-relaxed"
            >
              Step into our warm luxury boutique where years of artistry meet modern techniques. Experience the real transformation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <NavLink 
                to="/booking"
                className="inline-flex items-center gap-4 bg-[#1A1A1A] text-[#FDFBF7] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </NavLink>
              <NavLink to="/gallery" className="uppercase text-sm tracking-widest text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                View Gallery
              </NavLink>
            </motion.div>
          </div>

          {/* Right Images (Layered Instagram Vibe) */}
          <div className="relative h-[600px] w-full mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute top-0 right-0 w-[80%] h-[75%] rounded-sm overflow-hidden shadow-2xl"
            >
              <img src={SALON_IMG} alt="Salon Interior" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-0 w-[60%] h-[60%] border-4 border-[#FDFBF7] rounded-sm overflow-hidden shadow-xl"
            >
              <img src={TRANSFORMATION_IMG} alt="Hair Transformation" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-b border-gray-200 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8 font-sans">Trusted by premium brands</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Kérastase', 'Olaplex', 'L\'Oréal Professionnel', 'Dyson'].map(brand => (
              <span key={brand} className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-bold tracking-wider">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-[#FDFBF7] text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Services</h2>
              <p className="text-gray-500 font-sans max-w-md">Gerçek salon deneyimini yansıtan, özenle seçilmiş imza işlemlerimiz.</p>
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

      {/* The Team / Ustalık ve Sanat Section */}
      <section className="py-32 bg-[#1A1A1A] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-serif mb-6 text-[#D4AF37]"
            >
              Ustalık ve Sanat
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 font-sans max-w-2xl mx-auto text-lg font-light"
            >
              Yılların tecrübesini modern tekniklerle birleştiren uzman kadromuzla tanışın.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlighted Stylist (Ali Bey) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#242424] rounded-sm overflow-hidden border border-gray-800 hover:border-[#D4AF37] transition-colors duration-500 group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={STYLIST_ALI} alt="Ali Bey" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1A1A1A] text-xs uppercase tracking-widest px-3 py-1 font-bold">
                  Master
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-1">Ali Bey</h3>
                <p className="text-[#D4AF37] text-sm uppercase tracking-widest mb-6">Mikro Kaynak Uzmanı</p>
                <div className="bg-[#1A1A1A] p-4 rounded-sm italic text-gray-400 text-sm border-l-2 border-[#D4AF37]">
                  <div className="flex gap-1 mb-2 text-[#D4AF37]">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  "Ali Bey'in mikro kaynak tekniği inanılmaz doğal. Kendi saçım gibi hissediyorum!"
                </div>
              </div>
            </motion.div>

            {/* Other Team Members Placeholders */}
            {[
              { name: "Cem Bey", role: "Renk & Balyaj Uzmanı", img: "https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
              { name: "Zeynep Hanım", role: "Kalıcı Fön & Bakım", img: "https://images.unsplash.com/photo-1774897778836-3b13763e71b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (i + 1) * 0.2 }}
                className="bg-[#242424] rounded-sm overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-500 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Before/After Placeholder */}
      <section className="py-32 bg-[#FDFBF7] text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">The Real Transformation</h2>
          <div className="max-w-4xl mx-auto h-[600px] shadow-2xl rounded-sm overflow-hidden">
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
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#D4AF37]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
      <p className="text-gray-500 font-sans text-sm">{service.desc}</p>
    </motion.div>
  );
};
