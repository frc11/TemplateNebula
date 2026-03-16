"use client";

import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { clsx } from 'clsx';
import { Send } from 'lucide-react';

interface CTASectionProps {
  onSubscribeSuccess: () => void;
}

export default function CTASection({ onSubscribeSuccess }: CTASectionProps): React.JSX.Element {
  const { ref, isVisible } = useReveal();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      onSubscribeSuccess();
    }, 1500);
  };

  return (
    <section 
      ref={ref}
      className={clsx(
        "py-32 px-[5%] text-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-bg2 to-bg border border-white/10 p-12 md:p-24 rounded-[64px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand/5 opacity-50" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl mb-6">¿Listo para el infinito?</h2>
          <p className="text-text-dim text-lg mb-12 max-w-xl mx-auto">
            Unite a la próxima generación de startups que están escalando con YAKU.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="flex-grow bg-white/5 border border-white/10 px-8 py-4 rounded-full text-white outline-none focus:border-brand transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn btn-primary px-8 flex items-center gap-2 disabled:opacity-50"
            >
                {isSubmitting ? 'Enviando...' : (
                    <>
                        Empezar gratis
                        <Send size={18} />
                    </>
                )}
            </button>
          </form>
          
          <p className="text-text-dim text-xs mt-6 opacity-40">
            Sin tarjeta de crédito. Setup en 5 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
