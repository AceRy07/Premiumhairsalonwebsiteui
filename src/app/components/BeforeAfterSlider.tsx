import React, { useState, useRef } from 'react';

const BEFORE_IMG = "https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"; 
const AFTER_IMG = "https://images.unsplash.com/photo-1637777304873-68c6edca55e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

// For realistic effect, I am using two related aesthetic photos.

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - containerRect.left, containerRect.width));
    const percent = (x / containerRect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Base) */}
      <img 
        src={AFTER_IMG} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={BEFORE_IMG} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-[#D4AF37] pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FDFBF7] border-2 border-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <div className="w-[2px] h-3 bg-[#1A1A1A] rounded-full" />
            <div className="w-[2px] h-3 bg-[#1A1A1A] rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-6 left-6 bg-[#1A1A1A]/80 text-[#FDFBF7] px-4 py-2 text-xs uppercase tracking-widest pointer-events-none backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-6 right-6 bg-[#1A1A1A]/80 text-[#FDFBF7] px-4 py-2 text-xs uppercase tracking-widest pointer-events-none backdrop-blur-sm">
        After
      </div>
    </div>
  );
};
