import React from 'react';
import { PRICING_PLANS } from '../lib/data';
import { useReveal } from '../hooks/useReveal';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps extends PricingPlan {
  delay?: number;
  onContactClick: () => void;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  featured,
  badge,
  ctaLabel,
  ctaGradient,
  delay = 0,
  onContactClick
}: PricingCardProps): React.JSX.Element => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={clsx(
        "relative bg-white/5 border border-white/10 p-10 rounded-[40px] flex flex-col transition-all duration-700 h-full",
        featured && "border-brand bg-brand/5 md:scale-105 z-10",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-tighter uppercase">
          {badge}
        </div>
      )}

      <h3 className="text-2xl mb-2 text-white">{name}</h3>
      <p className="text-text-dim text-sm mb-8">{description}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-white text-sm font-bold opacity-60">USD</span>
        <span className="text-6xl font-display font-black text-white">{price}</span>
        <span className="text-text-dim text-lg">/mes</span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-text-dim text-sm">
            <Check size={16} className="text-accent shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button 
        onClick={onContactClick}
        className={clsx(
            "btn w-full py-4 text-base",
            ctaGradient ? "bg-gradient-to-r from-brand to-pink text-white hover:shadow-[0_0_30px_rgba(255,77,170,0.3)]" : "btn-secondary"
        )}
      >
        {ctaLabel}
      </button>
    </div>
  );
};

interface PricingProps {
  onContactClick: () => void;
}

export default function Pricing({ onContactClick }: PricingProps): React.JSX.Element {
  return (
    <section id="pricing" className="py-32 px-[5%] relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-brand text-sm font-bold uppercase tracking-widest mb-4 block">Precios</span>
          <h2 className="text-2xl md:text-7xl mb-4">Simple y transparente.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRICING_PLANS.map((plan, idx) => (
            <PricingCard
              key={plan.name}
              {...plan}
              delay={idx * 150}
              onContactClick={onContactClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}