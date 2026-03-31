import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="py-24 bg-white rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
                        >
                            <img
                                // src="https://images.unsplash.com/photo-1625246333195-bf404ec970z?q=80&w=1000&auto=format&fit=crop"
                                src="/farmers.jpg"
                                alt="SRA Polymers Innovation"
                                className="w-full h-auto object-cover aspect-[4/5]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                        </motion.div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -right-6 md:-right-10 bg-emerald-600 p-8 rounded-[2rem] text-white shadow-2xl z-20 hidden md:block border-4 border-white">
                            <div className="text-4xl font-black mb-1">20+</div>
                            <div className="text-xs font-bold uppercase tracking-wider opacity-80">Years of <br /> Manufacturing</div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-50 rounded-full z-0 opacity-50 blur-2xl"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-6">
                                <Shield className="w-4 h-4 text-emerald-600" />
                                <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest">SRA Polymers Legacy</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                Delivering High-Performance <span className="text-emerald-600">Polymer Solutions</span> Worldwide
                            </h2>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                                SRA Polymers Pvt. Ltd. is a leading manufacturer and innovator, committed to transforming how polymer materials contribute to modern industries like agriculture, automotive, and more.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: <Zap className="w-5 h-5" />, text: "Industrial Excellence" },
                                    { icon: <Globe className="w-5 h-5" />, text: "Quality Standards" },
                                    { icon: <CheckCircle className="w-5 h-5" />, text: "R&D Driven Innovation" },
                                    { icon: <Shield className="w-5 h-5" />, text: "Sustainable Solutions" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 group">
                                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-700 font-bold text-sm tracking-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4 border-t border-slate-100">
                                <Link to="/about" className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 text-center">
                                    Learn More About Us
                                </Link>
                                {/* <div className="flex items-center space-x-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                                            +500
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Industry Partners</span>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
