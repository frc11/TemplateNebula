import React from 'react';
import { FEATURES } from '../lib/data';
import { useReveal } from '../hooks/useReveal';
import { clsx } from 'clsx';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps): React.JSX.Element => {
    const { ref, isVisible } = useReveal();
    
    return (
        <div 
            ref={ref}
            className={clsx(
                "bg-white/5 border border-white/10 p-10 rounded-[32px] transition-all duration-700 hover:border-brand hover:bg-brand/5 group cursor-default",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="text-4xl mb-6 w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl group-hover:bg-brand/10 group-hover:scale-110 transition-all">
                {icon}
            </div>
            <h3 className="text-xl mb-3 text-white">{title}</h3>
            <p className="text-text-dim text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default function Features(): React.JSX.Element {
  return (
    <section id="features" className="py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-brand text-sm font-bold uppercase tracking-widest mb-4 block">Capacidades</span>
          <h2 className="text-4xl md:text-7xl mb-4">Todo lo que necesitás.</h2>
          <p className="text-text-dim text-lg">Herramientas pensadas para equipos que no tienen tiempo que perder.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <FeatureCard 
                key={feature.title} 
                {...feature} 
                delay={idx * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}