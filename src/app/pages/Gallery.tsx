import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, Play } from 'lucide-react';
import { cn } from '../../utils/cn';

const GALLERY_ITEMS = [
  { id: 1, type: 'image', size: 'large', likes: '1.2k', comments: '84', img: 'https://images.unsplash.com/photo-1774897778836-3b13763e71b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 2, type: 'video', size: 'small', likes: '856', comments: '32', img: 'https://images.unsplash.com/photo-1658932447775-dd78d1e7c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 3, type: 'image', size: 'tall', likes: '2.1k', comments: '145', img: 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 4, type: 'image', size: 'small', likes: '432', comments: '12', img: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 5, type: 'video', size: 'wide', likes: '3.4k', comments: '210', img: 'https://images.unsplash.com/photo-1759675905846-d9ec793714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 6, type: 'image', size: 'small', likes: '945', comments: '44', img: 'https://images.unsplash.com/photo-1739949154765-f2a23bdfa3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 7, type: 'image', size: 'large', likes: '1.8k', comments: '95', img: 'https://images.unsplash.com/photo-1637777304873-68c6edca55e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
];

export const Gallery = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-[#1A1A1A] text-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              The Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-lg font-sans font-light"
            >
              A visual journey through our latest creations. Follow us on Instagram for daily inspiration.
            </motion.p>
          </div>
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 border border-gray-700 px-6 py-3 rounded-full hover:bg-[#FDFBF7] hover:text-[#1A1A1A] transition-all duration-300 group whitespace-nowrap"
          >
            <Instagram className="w-5 h-5 group-hover:text-[#1A1A1A] text-[#D4AF37]" />
            <span className="uppercase tracking-widest text-sm font-medium">@kuaforabdullah</span>
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            
            // Map sizes to Tailwind grid spans
            const sizeClasses = {
              small: "col-span-1 row-span-1",
              wide: "col-span-2 row-span-1",
              tall: "col-span-1 row-span-2",
              large: "col-span-2 row-span-2",
            }[item.size];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn("relative group overflow-hidden bg-gray-900", sizeClasses)}
              >
                <img 
                  src={item.img} 
                  alt={`Gallery item ${item.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Video Indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                )}

                {/* Instagram Icon always visible on top left */}
                <div className="absolute top-4 left-4">
                  <Instagram className="w-5 h-5 text-white/70 drop-shadow-md" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-6 h-6 fill-white" />
                      <span className="font-medium text-lg">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <MessageCircle className="w-6 h-6 fill-white" />
                      <span className="font-medium text-lg">{item.comments}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
