"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import DashboardPreview from '../components/DashboardPreview';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Toast from '../components/Toast';

import Modal from '../components/Modal';

export default function Home(): React.JSX.Element {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const showToast = (message: string): void => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLoginSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsLoginOpen(false);
    showToast('Iniciando sesión... ¡Bienvenido!');
  };

  const handleContactSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsContactOpen(false);
    showToast('Mensaje enviado. Te contactaremos pronto.');
  };

  return (
    <main className="relative min-h-screen">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} onContactClick={() => setIsContactOpen(true)} />
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Ticker />
      <LogoStrip />
      <DashboardPreview />
      <Features />
      <Pricing onContactClick={() => setIsContactOpen(true)} />
      <Team />
      <CTASection onSubscribeSuccess={() => showToast('¡Suscripto! Bienvenido a YAKU 🎉')} />
      <Footer onContactClick={() => setIsContactOpen(true)} />
      
      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Iniciar Sesión">
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-dim uppercase tracking-widest">Email</label>
            <input 
              type="email" 
              required 
              placeholder="tu@email.com" 
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-dim uppercase tracking-widest">Contraseña</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-brand transition-colors"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full py-4 text-base mt-2">
            Entrar
          </button>
        </form>
      </Modal>

      {/* Contact Modal */}
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Contacto">
        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-dim uppercase tracking-widest">Nombre</label>
            <input 
              type="text" 
              required 
              placeholder="Gervasio" 
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-dim uppercase tracking-widest">Email</label>
            <input 
              type="email" 
              required 
              placeholder="tu@email.com" 
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-dim uppercase tracking-widest">Mensaje</label>
            <textarea 
              required 
              placeholder="¿En qué podemos ayudarte?" 
              rows={4}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-brand transition-colors resize-none"
            />
          </div>
          <div className="flex flex-col gap-4 pt-2">
            <button type="submit" className="btn btn-primary w-full py-4 text-base">
              Enviar Mensaje
            </button>
            <a 
              href="https://wa.me/5493810000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary w-full py-4 text-base flex items-center justify-center gap-2"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </form>
      </Modal>

      {toastMessage && <Toast message={toastMessage} />}
    </main>
  );
}
