import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../utils/cn';

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for hobby projects.",
    features: ["1 Project", "Community Support", "Basic Analytics", "1GB Storage"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams & startups.",
    features: ["Unlimited Projects", "Priority 24/7 Support", "Advanced Analytics", "100GB Storage", "Custom Domain"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Maximum performance & security.",
    features: ["Unlimited Everything", "Dedicated Success Manager", "SSO & SAML", "99.99% Uptime SLA", "On-premise Deployment"],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-12 relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-400 font-medium tracking-wider uppercase text-sm"
        >
          Pricing
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Simple, transparent pricing.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-xl"
        >
           Choose the plan that fits your scale. No hidden fees. Cancel anytime.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2, 
              ease: [0.16, 1, 0.3, 1] // Heavy physics ease
            }}
            className={cn(
              "relative flex flex-col p-8 rounded-3xl backdrop-blur-sm transition-all duration-300",
              plan.popular 
                ? "bg-slate-950/80 z-10 md:py-12 md:px-8 shadow-2xl transform md:scale-105 border-transparent" 
                : "bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
            )}
          >
            {/* Pro Card Gradient Border & Glow Effect */}
            {plan.popular && (
              <>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-100 -z-10 p-[1px]" aria-hidden="true">
                   <div className="h-full w-full bg-slate-950 rounded-[23px]" />
                </div>
                <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] -z-20 rounded-full" />
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                   <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                     Most Popular
                   </span>
                </div>
              </>
            )}

            {/* Card Content */}
            <div className="space-y-6">
                <div>
                    <h3 className={cn("text-xl font-semibold", plan.popular ? "text-white" : "text-slate-200")}>
                        {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                    <span className="text-slate-500 font-medium">/month</span>
                </div>

                <ul className="space-y-4 pt-4">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-8 mt-auto">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "w-full py-4 rounded-xl font-semibold transition-all duration-300",
                        plan.popular
                            ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                            : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                    )}
                >
                    {plan.cta}
                </motion.button>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};