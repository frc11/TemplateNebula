import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GridBackground } from './components/ui/GridBackground';
import Navbar from './components/Navbar';
import { TrustedBy } from './components/TrustedBy';
import { HeroOrb } from './components/ui/HeroOrb';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Staggered Animation Configuration
  const heroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Heavy Physics
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-300 font-sans flex flex-col overflow-x-hidden">
      
      {/* Background Layer */}
      <GridBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layer */}
      <main className="relative z-10 flex-grow flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12">
        
        {/* Hero Section Container */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center gap-8 md:gap-12"
        >
          {/* Hero Content */}
          <div className="w-full flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 py-8 md:py-16">
             
             {/* Badge */}
             <motion.div variants={heroItemVariants}>
                <div className="inline-block p-1 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs md:text-sm text-slate-400">
                  v2.0 &bull; The Future is Here
                </div>
             </motion.div>
             
             {/* H1 Title */}
             <motion.h1 
               variants={heroItemVariants}
               className="max-w-4xl text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.95] md:leading-[0.9]"
             >
               Scale your SaaS <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-500/50">
                  to Infinity.
               </span>
             </motion.h1>

             {/* Subtitle */}
             <motion.p 
               variants={heroItemVariants}
               className="max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed px-4"
             >
               Deploy, manage, and scale your applications with the speed of light. 
               Built for developers who demand the best in performance and aesthetics.
             </motion.p>

             {/* Buttons */}
             <motion.div 
               variants={heroItemVariants}
               className="flex flex-col sm:flex-row gap-4 pt-4 relative z-20 w-full sm:w-auto px-4 sm:px-0"
             >
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors"
               >
                 Start Building
               </motion.button>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800 transition-colors"
               >
                 Read Documentation
               </motion.button>
             </motion.div>

             {/* Visual Element: Cosmic Orb */}
             <motion.div variants={heroItemVariants} className="w-full flex justify-center">
                <HeroOrb />
             </motion.div>
          </div>

          {/* Trusted By Section */}
          <TrustedBy />

          {/* Features Bento Grid */}
          <Features />

          {/* Pricing Section */}
          <Pricing />

        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;