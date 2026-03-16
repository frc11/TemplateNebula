import React from 'react';
import { TEAM_MEMBERS } from '../lib/data';
import { useReveal } from '../hooks/useReveal';
import { clsx } from 'clsx';
import { TeamMember } from '../types';

interface TeamCardProps extends TeamMember {
  delay?: number;
}

const TeamCard = ({ initials, name, role, gradient, delay = 0 }: TeamCardProps): React.JSX.Element => {
    const { ref, isVisible } = useReveal();
    
    return (
        <div 
            ref={ref}
            className={clsx(
                "text-center group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div 
                className="w-32 h-32 rounded-[28px] mx-auto mb-6 flex items-center justify-center text-4xl font-display font-black text-white transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
            >
                {initials}
            </div>
            <h4 className="text-xl text-white font-display mb-1">{name}</h4>
            <p className="text-text-dim text-sm">{role}</p>
        </div>
    );
};

export default function Team(): React.JSX.Element {
  return (
    <section id="team" className="py-32 px-[5%] text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-brand text-sm font-bold uppercase tracking-widest mb-4 block">El equipo</span>
          <h2 className="text-3xl md:text-7xl mb-4">Hecho en Tucumán.</h2>
          <p className="text-text-dim text-lg mt-6 max-w-2xl mx-auto">Somos un equipo tucumano construyendo tecnología de clase mundial desde el NOA.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamCard 
                key={member.name} 
                {...member} 
                delay={idx * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
