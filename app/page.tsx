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

export default function Home(): React.JSX.Element {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string): void => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <LogoStrip />
      <DashboardPreview />
      <Features />
      <Pricing />
      <Team />
      <CTASection onSubscribeSuccess={() => showToast('¡Suscripto! Bienvenido a YAKU 🎉')} />
      <Footer />
      {toastMessage && <Toast message={toastMessage} />}
    </main>
  );
}
