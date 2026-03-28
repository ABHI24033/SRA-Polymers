import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                    alt="Agriculture Field"
                    className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950"></div>
            </div>

            {/* Floating Elements for visual interest */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-40">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 px-4 py-2 rounded-full mb-8"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                            <span className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Pioneering Agriculture 4.0</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
                            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Nature</span> <br />
                            Through Technology
                        </h1>

                        <p className="text-base md:text-xl text-emerald-50/70 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            We engineer advanced polymer solutions that redefine agricultural productivity. From precision irrigation to high-performance films, we supply the future of farming.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <LinkButton to="/contact" primary>
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </LinkButton>

                            <button className="flex items-center justify-center space-x-3 text-white font-bold hover:text-emerald-400 transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                                    <Play className="w-5 h-5 fill-current ml-1" />
                                </div>
                                <span>Watch Our Story</span>
                            </button>
                        </div>

                        {/* Trusted By / Quick Stats */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 opacity-60">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">15k+</span>
                                <span className="text-xs text-emerald-100 uppercase tracking-wider">Farmers Trusted</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">25+</span>
                                <span className="text-xs text-emerald-100 uppercase tracking-wider">Countries Supplied</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">99%</span>
                                <span className="text-xs text-emerald-100 uppercase tracking-wider">Quality Score</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop"
                                alt="Smart Agriculture"
                                className="w-full aspect-square object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-[240px] z-20">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="p-2 bg-emerald-500 rounded-lg">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm font-bold text-white">Direct Support</span>
                            </div>
                            <p className="text-xs text-emerald-50/70 font-medium">Ready to discuss your next project? Our experts are available 24/7.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const LinkButton = ({ to, children, primary }) => (
    <button
        className={`group px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center shadow-lg hover:-translate-y-1 active:translate-y-0 ${primary
            ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-emerald-900/40 hover:shadow-emerald-900/60"
            : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
            }`}
    >
        {children}
    </button>
);

export default Hero;
