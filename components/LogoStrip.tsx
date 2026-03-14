import React from 'react';
import { LOGO_COMPANIES } from '../lib/data';
import { useReveal } from '../hooks/useReveal';
import { clsx } from 'clsx';

export default function LogoStrip(): React.JSX.Element {
  const { ref, isVisible } = useReveal();

  return (
    <section 
      ref={ref}
      className={clsx(
        "py-20 px-[5%] text-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <p className="text-text-dim text-[10px] md:text-xs uppercase font-extrabold tracking-[0.3em] mb-12">
        Usado por equipos de todo el NOA
      </p>
      
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        {LOGO_COMPANIES.map((company) => (
          <div 
            key={company} 
            className="font-display text-xl md:text-2xl font-black text-white"
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}
