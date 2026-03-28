import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Users, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Header */}
            <section className="relative pt-48 pb-32 bg-emerald-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                        alt="Innovation in Polymers"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950"></div>
                </div>

                {/* Floating Decorative Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Shaping the Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                                Through Polymer Innovation
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-50/70 max-w-3xl mx-auto leading-relaxed">
                            SRA Polymers Pvt. Ltd. is at the forefront of material science, delivering high-performance solutions for modern industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-bold text-xs uppercase tracking-widest">
                                Who We Are
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-emerald-900 leading-tight">
                                SRA Polymers Pvt. Ltd. <br />
                                <span className="text-emerald-600">Leading Manufacturer & Innovator</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                SRA Polymers Pvt. Ltd. is a leading manufacturer and innovator in the polymer industry, committed to delivering high-performance polymer solutions for a wide range of industrial and commercial applications. With a focus on quality, sustainability, and customer-centric innovation, we aim to be at the forefront of material science and technology.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Established with a vision to transform how polymer materials contribute to modern industries, SRA Polymers offers a diverse portfolio of products tailored to meet the evolving needs of sectors like agriculture, irrigation, construction, automotive, packaging, and more. Our advanced manufacturing processes and stringent quality control ensure that every product stands up to international standards.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 pt-8">
                                <div className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 group hover:bg-emerald-500 transition-colors duration-500">
                                    <Shield className="w-12 h-12 text-emerald-600 mb-6 group-hover:text-white transition-colors" />
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-white transition-colors">Quality First</h3>
                                    <p className="text-slate-600 group-hover:text-emerald-50/80 transition-colors">International standards and rigorous testing in every product.</p>
                                </div>
                                <div className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 group hover:bg-emerald-500 transition-colors duration-500">
                                    <Lightbulb className="w-12 h-12 text-emerald-600 mb-6 group-hover:text-white transition-colors" />
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-white transition-colors">R&D Driven</h3>
                                    <p className="text-slate-600 group-hover:text-emerald-50/80 transition-colors">Innovation-led approach to keep you ahead in the market.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visuals / Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:sticky lg:top-32"
                        >
                            <div className="bg-emerald-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-[60px] -ml-24 -mb-24"></div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black mb-8 leading-tight">Our Philosophy</h3>
                                    <p className="text-emerald-50/70 text-lg leading-relaxed mb-10">
                                        At SRA Polymers, we believe in building long-term partnerships by delivering consistent value, technical expertise, and environmentally responsible solutions. Whether it's developing custom formulations or improving existing materials, our R&D-driven approach ensures that we help our clients stay ahead in a competitive market.
                                    </p>

                                    <div className="pt-10 border-t border-white/10 flex flex-col space-y-2">
                                        <span className="text-2xl font-black text-emerald-400 italic">"Innovation Meets Sustainability"</span>
                                        <span className="text-emerald-50/40 font-bold uppercase tracking-widest text-sm">Powered by Polymers</span>
                                    </div>

                                    <button className="mt-12 group flex items-center space-x-3 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black transition-all hover:bg-emerald-400 hover:text-white hover:-translate-y-1">
                                        <span>Join Our Journey</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* Outer decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500 rounded-[2.5rem] -z-10 rotate-12 opacity-50"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
