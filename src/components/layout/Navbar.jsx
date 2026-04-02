import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

void motion;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Distributors', path: '/distributors' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeLink = (path) => location.pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl py-2' : 'bg-transparent py-4 text-white'}`}>
            {/* Top Bar - Only visible when not scrolled or on large screens */}
            {!scrolled && (
                <div className="bg-emerald-900/10 backdrop-blur-sm border-b border-white/10 text-white/90 py-2 hidden lg:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wide">
                        <div className="flex items-center space-x-6">
                            <a href="tel:+919304031185" className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                                <Phone size={14} className="text-emerald-500" />
                                <span>+91 9304031185</span>
                            </a>
                            <a href="mailto:info.srapolymer@gmail.com" className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                                <Mail size={14} className="text-emerald-500" />
                                <span>info.srapolymers@gmail.com</span>
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 overflow-hidden">
                            {/* <a
                                href="https://www.google.com/maps/search/?api=1&query=KHATA+NO+25+85+PLOT+NO+2049+2050+CHOREYA+ROAD+AMAN+NAGAR+TARANGA+CHANHO+RANCHI+JHARKHAND+835214"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-w-0 items-center space-x-2 hover:text-emerald-400 transition-colors"
                            >
                                <MapPin size={14} className="text-emerald-500" />
                                <span className="text-xs sm:text-sm font-medium min-w-0 whitespace-normal wrap-break-word">Factory: Choreya Rd, Aman Nagar, Taranga, Chanho, Ranchi, 835214</span>
                            </a> */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=MEENA+NIWAS+HO+SACHIN+KUMAR+JHA+Simaliya+Near+Jojo+Nagar+Naya+Toli+Ranchi+Jharkhand+835222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-w-0 items-center space-x-2 hover:text-emerald-400 transition-colors"
                            >
                                <MapPin size={14} className="text-emerald-500" />
                                <span className="text-xs sm:text-sm font-medium min-w-0 whitespace-normal wrap-break-word">Registered Office: Simaliya, Near Jojo Nagar, Naya Toli, Ranchi, 835222</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <Link to="/" className="flex items-center shrink-0">
                        <div
                            className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${scrolled
                                ? 'bg-white shadow-sm ring-1 ring-emerald-100'
                                : 'bg-gradient-to-br from-white via-emerald-50 to-lime-50 shadow-lg shadow-emerald-950/15 ring-1 ring-white/40'
                                }`}
                        >
                            <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_transparent_60%)]'}`} />
                            <img
                                src="/maitri logo.png"
                                alt="Maitri logo"
                                className={`relative z-10 block w-auto object-contain transition-all duration-300 ${scrolled
                                    ? 'h-10 px-2 py-1 sm:h-11 sm:px-2.5'
                                    : 'h-11 px-2 py-1 sm:h-12 sm:px-3 md:h-14 md:px-3.5'
                                    }`}
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${activeLink(link.path)
                                    ? 'text-emerald-500 bg-emerald-50'
                                    : scrolled
                                        ? 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className={`ml-4 pl-4 ${scrolled ? 'border-l border-slate-200' : 'border-l border-white/15'}`}>
                            <Link
                                to="/contact"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-emerald-600 to-green-600"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2.5 rounded-xl focus:outline-none transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden absolute top-full left-0 right-0 m-4 p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 z-[60]"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-3 rounded-xl font-bold transition-colors ${activeLink(link.path) ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="mt-4 bg-emerald-600 text-white text-center py-4 rounded-xl font-black shadow-lg shadow-emerald-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
