"use client";

import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { clsx } from 'clsx';

export default function DashboardPreview(): React.JSX.Element {
  const { ref, isVisible } = useReveal();
  const [cpu, setCpu] = useState(42);
  const [users, setUsers] = useState(1248);
  const [mem, setMem] = useState(64);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * (60 - 30) + 30));
      setMem(Math.floor(Math.random() * (80 - 50) + 50));
      setUsers(prev => prev + Math.floor(Math.random() * 5));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={ref}
      className={clsx(
        "py-32 px-[5%] flex flex-col items-center text-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="mb-20">
        <span className="text-brand text-sm font-bold uppercase tracking-widest mb-4 block underline decoration-brand/30 underline-offset-8">Dashboard</span>
        <h2 className="text-4xl md:text-7xl mb-4">Todo en tiempo real.</h2>
        <p className="text-text-dim text-lg">Monitoreá el rendimiento con precisión milimétrica.</p>
      </div>

      <div className="relative w-full max-w-5xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-[32px] p-10 md:p-16 backdrop-blur-3xl overflow-hidden text-left grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-white/5 rounded-2xl p-8">
          <div className="text-text-dim text-sm mb-2">Carga CPU</div>
          <div className="text-4xl font-display font-black text-white mb-6 uppercase tracking-tighter">{cpu}%</div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand to-accent transition-all duration-1000 ease-in-out" 
              style={{ width: `${cpu}%` }}
            />
          </div>
        </div>

        <div className="bg-black/40 border border-white/5 rounded-2xl p-8">
          <div className="text-text-dim text-sm mb-2">Usuarios activos</div>
          <div className="text-4xl font-display font-black text-white uppercase tracking-tighter">{users.toLocaleString()}</div>
        </div>

        <div className="md:col-span-1 bg-black/40 border border-white/5 rounded-2xl p-8">
          <div className="text-text-dim text-sm mb-6 uppercase font-bold tracking-wider">Salud del Servidor</div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-text-dim">Memoria</span>
                <span className="text-white font-bold">{mem}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-pink transition-all duration-1000 ease-in-out" 
                  style={{ width: `${mem}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-text-dim">Red (Ancho de banda)</span>
                <span className="text-white font-bold">12Gbps</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-1000 ease-in-out" 
                  style={{ width: `85%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center bg-brand/10 border border-brand/20 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 bg-brand text-[10px] font-black tracking-tighter">LIVE</div>
            <div className="text-brand font-display text-lg font-black uppercase mb-2">Ready to Scale</div>
            <p className="text-brand/70 text-sm">YAKU nodes are fully operational across Tucumán.</p>
        </div>
      </div>
    </section>
  );
}
