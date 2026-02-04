import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  "ACME", "GLOBEX", "SOYLENT", "INITECH", "UMBRELLA", "STARK", "MASSIVE", "CYBERDYNE"
];

const LogoTrack = ({ items }: { items: string[] }) => (
  <motion.div
    className="flex flex-shrink-0 gap-16 items-center pr-16"
    initial={{ x: 0 }}
    animate={{ x: "-100%" }}
    transition={{
      ease: "linear",
      duration: 40, // Slower for a more premium/luxury feel
      repeat: Infinity,
    }}
  >
    {items.map((company, index) => (
      <span
        key={index}
        className="text-2xl md:text-3xl font-black tracking-tighter text-slate-600 hover:text-white transition-colors duration-500 cursor-default"
      >
        {company}
      </span>
    ))}
  </motion.div>
);

export const TrustedBy: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center gap-10 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-sm font-medium text-slate-500 uppercase tracking-widest"
      >
        Powering next-gen teams
      </motion.p>

      <div className="relative flex w-full max-w-[100vw] overflow-hidden select-none mask-linear-fade">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <div className="flex">
            <LogoTrack items={companies} />
            <LogoTrack items={companies} />
        </div>
      </div>
    </section>
  );
};