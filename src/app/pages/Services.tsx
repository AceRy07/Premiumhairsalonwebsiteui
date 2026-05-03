import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Search, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

const ALL_SERVICES = [
  { id: 1, title: 'Mikro Kaynak (Micro Extensions)', category: 'Hair', desc: 'Premium quality undetectable extensions applied strand by strand by Master Ali Bey.', price: '₺8,500', duration: '4h 30m Process', img: 'https://images.unsplash.com/photo-1634449571017-5fecfd26ad76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 2, title: 'Yeni Nesil Saç Düzleştirme (Kalıcı Fön)', category: 'Care', desc: 'Keratin infused smoothing treatment for flawlessly straight, healthy hair.', price: '₺3,200', duration: '2h 00m Process', img: 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 3, title: 'Bridal Hair & Makeup', category: 'Wedding', desc: 'Complete bespoke styling package for your special day.', price: '₺12,000', duration: '5h 00m Process', img: 'https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 4, title: 'Signature Balayage & Toner', category: 'Hair', desc: 'Hand-painted highlights for a natural, sun-kissed look.', price: '₺4,500', duration: '3h 30m Process', img: 'https://images.unsplash.com/photo-1774897778836-3b13763e71b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 5, title: 'Olaplex Repair Treatment', category: 'Care', desc: 'Deep restructuring bond builder for damaged hair.', price: '₺1,500', duration: '1h 00m Process', img: 'https://images.unsplash.com/photo-1739949154765-f2a23bdfa3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 6, title: 'Signature Cut & Style', category: 'Hair', desc: 'Personalized haircut with our signature voluminous blow-dry.', price: '₺1,200', duration: '1h 15m Process', img: 'https://images.unsplash.com/photo-1772442125268-2556be6d627a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
];

const CATEGORIES = ['All', 'Hair', 'Care', 'Wedding'];

// Spotlight Card Component
const SpotlightCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden border border-gray-200 bg-white/50 transition-colors duration-300", className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};


export const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mb-6"
          >
            Services & Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto font-light text-lg"
          >
            Discover our curated selection of premium hair treatments, designed for real transformations with realistic process times.
          </motion.p>
        </div>

        {/* Sticky Search & Filter */}
        <div className="sticky top-24 z-30 bg-[#FDFBF7]/90 backdrop-blur-md py-6 mb-12 border-b border-gray-200 flex flex-col md:flex-row gap-6 justify-between items-center">
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full border text-sm uppercase tracking-widest whitespace-nowrap transition-all duration-300",
                  activeCategory === cat 
                    ? "bg-[#1A1A1A] text-[#FDFBF7] border-[#1A1A1A]" 
                    : "bg-transparent text-[#1A1A1A] border-gray-300 hover:border-[#1A1A1A]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none placeholder:text-gray-400 font-sans"
            />
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col group cursor-pointer rounded-sm p-4">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-sm">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-[#1A1A1A] rounded-full shadow-sm">
                      {service.category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">{service.title}</h3>
                  <p className="text-gray-500 font-sans text-sm mb-6 flex-grow">{service.desc}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-auto">
                    <span className="font-bold text-lg text-[#1A1A1A]">{service.price}</span>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No services found matching your criteria.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
