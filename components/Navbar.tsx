"use client";

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../lib/data';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  onLoginClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onLoginClick, onContactClick }: NavbarProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-[5%] py-6",
      isScrolled && "bg-bg/80 backdrop-blur-xl border-b border-white/10 py-4"
    )}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="font-display text-2xl font-extrabold tracking-tighter text-white">
          YAKU
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-text-dim hover:text-white transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <button 
            onClick={onLoginClick}
            className="btn btn-secondary py-2 px-6 text-sm"
          >
            Iniciar sesión
          </button>
          <button 
            onClick={onContactClick}
            className="btn btn-primary py-2 px-6 text-sm"
          >
            Empezar gratis
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-up">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-text-dim hover:text-white text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <button 
              onClick={() => { onLoginClick(); setIsOpen(false); }}
              className="btn btn-secondary w-full"
            >
              Iniciar sesión
            </button>
            <button 
              onClick={() => { onContactClick(); setIsOpen(false); }}
              className="btn btn-primary w-full"
            >
              Empezar gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}