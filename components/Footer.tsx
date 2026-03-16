import React from 'react';
import { FOOTER_COLUMNS } from '../lib/data';
import { Twitter, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps): React.JSX.Element {
  return (
    <footer className="py-20 px-[5%] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="font-display text-2xl font-extrabold tracking-tighter text-white block mb-6">
              YAKU
            </a>
            <p className="text-text-dim text-sm max-w-xs leading-relaxed mb-8">
              La infraestructura para la próxima era del NOA. Potenciando el talento tucumano al mundo.
            </p>
            <div className="flex gap-4">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="text-center md:text-left">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    {link === 'Contacto' ? (
                      <button 
                        onClick={onContactClick}
                        className="text-text-dim hover:text-brand transition-colors text-sm"
                      >
                        {link}
                      </button>
                    ) : (
                      <a 
                        href={`/#${link.toLowerCase()}`}
                        className="text-text-dim hover:text-brand transition-colors text-sm"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-text-dim text-xs">
            © {new Date().getFullYear()} YAKU infrastructure. <br className="md:hidden" /> Hecho con ❤️ en San Miguel de Tucumán.
          </div>
          <div className="flex gap-8 text-xs text-text-dim">
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Uptime</a>
            <a href="#" className="hover:text-white">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}