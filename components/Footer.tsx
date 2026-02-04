import React from 'react';
import { Twitter, Github, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-slate-950 pt-32 pb-12 overflow-hidden border-t border-white/10 z-20">
        {/* Massive Watermark Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
            <span className="text-[25vw] font-black text-white/[0.02] tracking-tighter leading-none block transform translate-y-[-20%]">
                NEBULA
            </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-24">
                
                {/* Col 1: Product */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-semibold text-white tracking-wide">Product</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Changelog</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Docs</a></li>
                    </ul>
                </div>

                {/* Col 2: Company */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-semibold text-white tracking-wide">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Partners</a></li>
                    </ul>
                </div>

                {/* Col 3: Resources */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-semibold text-white tracking-wide">Resources</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Global</a></li>
                    </ul>
                </div>

                {/* Col 4: Legal */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-semibold text-white tracking-wide">Legal</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
                    </ul>
                </div>

                {/* Col 5: Newsletter */}
                <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-6">
                    <h4 className="font-semibold text-white tracking-wide">Subscribe</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Join our newsletter to stay up to date on features and releases.
                    </p>
                    <div className="flex flex-col gap-3">
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                        <button className="w-full bg-white text-slate-950 font-semibold text-sm px-4 py-3 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                            Subscribe <Send size={14} />
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Brand / Logo Small */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-slate-950" />
                    </div>
                    <span className="text-lg font-bold tracking-widest text-white">NEBULA</span>
                </div>

                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} Nebula Inc. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <SocialLink icon={<Twitter size={18} />} />
                    <SocialLink icon={<Github size={18} />} />
                    <SocialLink icon={<Linkedin size={18} />} />
                </div>
            </div>
        </div>
    </footer>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/5">
        {icon}
    </a>
);