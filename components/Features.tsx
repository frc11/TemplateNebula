import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { BarChart3, ShieldCheck, Zap, Globe, Lock, Cpu, Activity } from 'lucide-react';

export const Features: React.FC = () => {
  
  // Staggered Animation Variants for the Grid
  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card appearing
      }
    }
  };

  const gridItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Heavy Physics
      }
    }
  };

  return (
    <section id="solutions" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-12">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-indigo-400 font-medium tracking-wider uppercase text-sm"
        >
          Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Everything you need.
        </motion.h2>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]"
      >
        
        {/* Card 1: Large - Analytics (Col Span 2) */}
        <motion.div variants={gridItemVariants} className="col-span-1 md:col-span-2 h-full">
            <SpotlightCard className="h-full group overflow-hidden">
            <div className="relative p-8 h-full flex flex-col justify-between z-20">
                <div className="space-y-2 relative z-10">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:text-white transition-colors">
                    <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Real-time Analytics</h3>
                <p className="text-slate-400 max-w-md">
                    Monitor your application's performance with millisecond precision. 
                    Our dashboard provides deep insights into user behavior.
                </p>
                </div>
                
                {/* Background Gradient Blob */}
                <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-indigo-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

                {/* Mini Dashboard UI Simulation */}
                <div className="absolute -right-4 -bottom-4 md:right-8 md:bottom-8 w-64 md:w-72 bg-slate-900/90 border border-white/10 rounded-xl p-4 backdrop-blur-md shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 z-10">
                    <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <Activity size={14} className="text-indigo-400" />
                            <span className="text-xs font-semibold text-slate-300">Live Metrics</span>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/80" />
                            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        {/* Metric 1 */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px] font-medium">
                                <span className="text-slate-400">Server Load</span>
                                <span className="text-indigo-300">86%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "86%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                />
                            </div>
                        </div>

                        {/* Metric 2 */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px] font-medium">
                                <span className="text-slate-400">Active Users</span>
                                <span className="text-indigo-300">2.4k</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "64%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "circOut", delay: 0.4 }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                />
                            </div>
                        </div>

                        {/* Metric 3 */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px] font-medium">
                                <span className="text-slate-400">Response Time</span>
                                <span className="text-indigo-300">12ms</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "24%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "circOut", delay: 0.6 }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </SpotlightCard>
        </motion.div>

        {/* Card 2: Small - Security (Col Span 1) */}
        <motion.div variants={gridItemVariants} className="col-span-1 h-full">
            <SpotlightCard className="h-full group">
            <div className="p-8 h-full flex flex-col z-20">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ironclad Security</h3>
                <p className="text-slate-400 text-sm">
                Enterprise-grade encryption and automated threat detection built-in.
                </p>
                <div className="flex-grow flex items-center justify-center mt-4">
                <Lock className="text-slate-700 w-16 h-16 group-hover:text-purple-500/50 transition-colors duration-500" />
                </div>
            </div>
            </SpotlightCard>
        </motion.div>

        {/* Card 3: Small - Speed (Col Span 1) */}
        <motion.div variants={gridItemVariants} className="col-span-1 h-full">
            <SpotlightCard className="h-full group">
            <div className="p-8 h-full flex flex-col z-20">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:text-white transition-colors">
                <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Deploy</h3>
                <p className="text-slate-400 text-sm">
                Push to git and we handle the rest. Zero downtime, instant rollback.
                </p>
                <div className="absolute right-4 bottom-4">
                    <Cpu className="text-slate-800 w-24 h-24 group-hover:text-emerald-500/20 transition-colors duration-500" />
                </div>
            </div>
            </SpotlightCard>
        </motion.div>

        {/* Card 4: Large - Global (Col Span 2) */}
        <motion.div variants={gridItemVariants} className="col-span-1 md:col-span-2 h-full">
            <SpotlightCard className="h-full group">
            <div className="p-8 h-full flex flex-col justify-between z-20">
                <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center mb-4 text-sky-400 group-hover:text-white transition-colors">
                    <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Global Edge Network</h3>
                <p className="text-slate-400 max-w-md">
                    Your data, everywhere. Our intelligent edge network routes requests 
                    to the nearest server for minimal latency.
                </p>
                </div>
                
                {/* Abstract World Grid */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity" 
                    style={{ 
                    backgroundImage: `radial-gradient(circle at center, #0ea5e9 1px, transparent 1px)`, 
                    backgroundSize: '24px 24px' 
                    }} 
                />
            </div>
            </SpotlightCard>
        </motion.div>

      </motion.div>
    </section>
  );
};