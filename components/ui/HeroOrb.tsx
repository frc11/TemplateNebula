import React from 'react';
import { motion } from 'framer-motion';

export const HeroOrb: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[300px] md:max-w-[400px] aspect-square mt-12 md:mt-20 pointer-events-none select-none">
      
      {/* 1. Atmospheric Glow (Back) */}
      <motion.div 
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-indigo-600/30 blur-[80px] rounded-full" 
      />

      {/* 2. Rotating Rings (Outer) */}
      <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-[spin_20s_linear_infinite] opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" className="rotate-180 origin-center" />
        </svg>
      </div>

      {/* 3. The Main Orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: [0.4, 0, 0.2, 1] // Heavy ease
        }}
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
        style={{
          background: "radial-gradient(circle at 35% 30%, #6366f1 0%, #4338ca 40%, #1e1b4b 100%)",
          boxShadow: "inset 0px 10px 20px rgba(255,255,255,0.2), inset -10px -20px 30px rgba(0,0,0,0.8), 0px 20px 50px rgba(79, 70, 229, 0.4)"
        }}
      >
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Inner Highlight Reflection */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl transform -translate-x-4 -translate-y-4" />
      </motion.div>

      {/* 4. Foreground Mist (Front) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent rounded-full" />
    </div>
  );
};