import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-emerald-950 text-emerald-50 pt-24 pb-12 overflow-hidden">
            {/* Background Effects matching Hero */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-900/40">
                                S
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">SRA <span className="text-emerald-400">Polymers</span></span>
                        </div>
                        <p className="text-emerald-100/60 leading-relaxed font-medium">
                            Engineering the future of farming with advanced polymer solutions and sustainable technology for Agriculture 4.0.
                        </p>
                        <div>
                            <img src='/iso-9001-logo.png' className='w-30 h-10'/>
                        </div>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300 group">
                                    <Icon size={18} className="text-emerald-100 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Explore</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Products', path: '/products' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-emerald-100/60 hover:text-emerald-400 font-medium transition-colors inline-block">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Info / Products */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Solutions</h3>
                        <ul className="space-y-4">
                            {['Irrigation Systems', 'Greenhouse Films', 'Mulching Films', 'Pipes & Fittings', 'Agricultural Nets'].map((item) => (
                                <li key={item}>
                                    <Link to="/products" className="text-emerald-100/60 hover:text-emerald-400 font-medium transition-colors inline-block">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Get In Touch</h3>
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
                            <div className="flex items-start space-x-4 text-emerald-100/60">
                                <MapPin size={20} className="mt-1 flex-shrink-0 text-emerald-400" />
                                <span className="text-sm leading-relaxed">SRA Polymers Pvt Ltd. <br />Simalya, Near Dhoni Farm House, Ring Road Ranchi</span>
                            </div>
                            <div className="flex items-center space-x-4 text-emerald-100/60">
                                <Phone size={20} className="text-emerald-400" />
                                <span className="text-sm font-bold text-white">+91 9304031185</span>
                            </div>
                            <div className="flex items-center space-x-4 text-emerald-100/60">
                                <Mail size={20} className="text-emerald-400" />
                                <span className="text-sm">info.srapolymer@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:grid md:grid-cols-3 items-center gap-6 text-sm">
                    <div className="order-2 md:order-1 text-emerald-100/40 text-center md:text-left">
                        &copy; {new Date().getFullYear()} SRA Polymers Pvt. Ltd.
                    </div>
                    <div className="order-1 md:order-2 flex justify-center space-x-8">
                        <a href="#" className="text-emerald-100/40 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-emerald-100/40 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                    <div className="order-3 text-emerald-100/40 text-center md:text-right">
                        Designed for Sustainability
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
