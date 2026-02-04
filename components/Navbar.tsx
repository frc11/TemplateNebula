import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1], // Heavy easing
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const navLinks = ["Product", "Solutions", "Pricing"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-md bg-slate-950/70",
        "border-b border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-white font-bold tracking-[0.2em] text-xl"
            >
              NEBULA
            </motion.span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-50" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#login" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Login
            </a>
            
            {/* Gradient Border Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur-[1px] group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center justify-center px-6 py-2 bg-slate-950 rounded-full border border-white/10 group-hover:bg-slate-900 transition-colors">
                 <span className="text-sm font-medium text-white group-hover:text-indigo-100">Get Started</span>
              </div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  variants={itemVariants}
                  href={`#${link.toLowerCase()}`}
                  className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="pt-4 flex flex-col space-y-4 px-3">
                 <a href="#login" className="block text-slate-300 hover:text-white font-medium">
                   Login
                 </a>
                 <button className="w-full py-3 rounded-md bg-white/10 border border-white/10 text-white font-medium hover:bg-white/20 transition-colors">
                   Get Started
                 </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;