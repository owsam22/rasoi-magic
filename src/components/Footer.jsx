import React from 'react';
import { Github, Instagram, Linkedin, Heart, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-slate-900 text-slate-300 mt-24 relative overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.3a9 9 0 0 0 12 10" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-display">
                                Rasoi Magic
                            </h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Discover the authentic taste of Indian cuisine and beyond. We bring the world's best recipes right to your kitchen with premium quality and ease.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://github.com/owsam22" icon={<Github className="w-5 h-5" />} label="GitHub" />
                            <SocialLink href="https://instagram.com/owsam22" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="https://linkedin.com/in/samarpan22" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">Home</FooterLink>
                            <FooterLink href="#">Popular Recipes</FooterLink>
                            <FooterLink href="#">Vegetarian Only</FooterLink>
                            <FooterLink href="#">My Cookbook</FooterLink>
                            <FooterLink href="#">Submit Recipe</FooterLink>
                        </ul>
                    </div>

                    {/* Legal / Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms of Service</FooterLink>
                            <FooterLink href="#">Cookie Policy</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Stay Updated</h4>
                        <p className="text-slate-400 mb-6 text-sm">
                            Subscribe to get the latest spice blends and seasonal recipes delivered to your inbox.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                                />
                                <Mail className="absolute right-3 top-3.5 text-slate-500 w-5 h-5" />
                            </div>
                            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center group shadow-lg shadow-orange-900/20">
                                Subscribe Now
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Rasoi Magic. All rights reserved.</p>
                    <div className="flex items-center mt-4 md:mt-0">
                        <span>Made with <Heart className="w-4 h-4 inline text-red-500 fill-current mx-1 animate-pulse" /> by</span>
                        <a
                            href="https://github.com/owsam22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-orange-400 hover:text-orange-300 font-bold transition-colors"
                        >
                            owsam22
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        aria-label={label}
    >
        {icon}
    </a>
);

const FooterLink = ({ href, children }) => (
    <li>
        <a
            href={href}
            className="text-slate-400 hover:text-orange-400 transition-colors flex items-center group"
        >
            <span className="w-0 group-hover:w-2 h-[2px] bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
            {children}
        </a>
    </li>
);

export default Footer;
