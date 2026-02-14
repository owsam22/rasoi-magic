import React from 'react';
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-orange-50/50 border-t border-orange-100 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    <a
                        href="https://github.com/owsam22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-orange-600 transition-colors duration-300"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href="https://instagram.com/owsam22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-pink-600 transition-colors duration-300"
                    >
                        <span className="sr-only">Instagram</span>
                        <Instagram className="h-6 w-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/samarpan22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-slate-500 flex items-center justify-center md:justify-start">
                        &copy; {new Date().getFullYear()} Rasoi Magic. Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by{' '}
                        <a
                            href="https://github.com/owsam22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-bold text-orange-600 hover:underline"
                        >
                            owsam22
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
