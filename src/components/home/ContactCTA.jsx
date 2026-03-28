import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-24 px-4 md:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden bg-emerald-950 rounded-[3rem] md:rounded-[4rem] py-20 px-8 text-center shadow-2xl">
                    {/* Animated Background Orbs */}
                    <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-green-500/10 blur-[100px] animate-pulse delay-700"></div>

                    {/* Subtle Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8"
                        >
                            <MessageCircle className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Connect with Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
                        >
                            Ready to <span className="text-emerald-400">Transform</span> Your Harvest?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-emerald-100/70 mb-12 font-medium leading-relaxed"
                        >
                            Our specialists are ready to help you navigate the future of precise agriculture.
                            Let's engineer your success together with custom-tailored polymer solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-950 font-black rounded-2xl hover:bg-emerald-50 transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center group"
                            >
                                Inquire Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="mailto:support@agritech.com"
                                className="w-full sm:w-auto px-10 py-5 bg-emerald-900 border border-emerald-800 text-white font-black rounded-2xl hover:bg-emerald-800 transition-all flex items-center justify-center"
                            >
                                Direct Support
                            </a>
                        </motion.div>

                        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-40 grayscale contrast-125">
                            {/* Fake Partner Logos Placeholders */}
                            <span className="text-white font-black italic tracking-tighter">AGRI-GLOBAL</span>
                            <span className="text-white font-black italic tracking-tighter">BIO-TECH</span>
                            <span className="text-white font-black italic tracking-tighter">FARM-SOLUTIONS</span>
                            <span className="text-white font-black italic tracking-tighter">NATURE-FIRST</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
