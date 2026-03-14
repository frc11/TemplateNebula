import React from 'react';
import { HERO_STATS } from '../lib/data';

export default function Hero(): React.JSX.Element {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-[5%] pt-32 pb-20 overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] height-[600px] z-0 blur-[60px] opacity-40 pointer-events-none">
        <div className="w-full h-full rounded-full bg-brand animate-float" />
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs md:text-sm font-semibold mb-8">
          v2.0 · Tucumán para el mundo 🌊
        </span>

        <h1 className="text-5xl md:text-8xl lg:text-9xl leading-[0.9] mb-6 max-w-[1000px]">
          Escalá tu app <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent italic">
            al infinito.
          </span>
        </h1>

        <p className="text-text-dim text-lg md:text-xl max-w-[700px] mb-12">
          Desplegá, gestioná y escalá tus aplicaciones a la velocidad de la luz. 
          Construido por tucumanos que exigen lo mejor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#pricing" className="btn btn-primary px-10">Empezar a construir</a>
          <a href="#" className="btn btn-secondary px-10">Leer la docs</a>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-3xl md:text-4xl font-extrabold text-white">{stat.value}</span>
              <span className="text-text-dim text-xs md:text-sm uppercase font-bold tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
