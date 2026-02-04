import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* 
         Grid Pattern 
         Using a subtle SVG pattern for better performance and crisp lines 
      */}
      <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")` 
           }}
      ></div>
      
      {/* Ambient Glow spot (optional, for that 'Cosmic' feel) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
    </div>
  );
};