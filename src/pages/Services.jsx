import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, Sparkles, Wind, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../lib/services';

void motion;

const iconMap = {
    export: <Sparkles className="w-8 h-8" />,
    subsidy: <Droplets className="w-8 h-8" />,
    'non-subsidy': <Settings className="w-8 h-8" />,
    plantation: <Wind className="w-8 h-8" />
};

const Services = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative pt-48 pb-32 bg-emerald-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                        alt="Agriculture and Gardening"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Comprehensive Irrigation and <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                                Project Services
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-50/70 max-w-3xl mx-auto leading-relaxed">
                            Export programs, subsidy execution, non-subsidy projects, and plantation-focused irrigation designs—delivered with localized engineering and training.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col border border-slate-100 h-full p-10"
                            >
                                {/* Content Side */}
                                <div className="flex flex-col justify-center h-full">
                                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        {iconMap[service.slug] ?? <Sparkles className="w-8 h-8" />}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium mb-8">
                                        {service.summary}
                                    </p>
                                    <div className="mb-8 grid grid-cols-1 gap-3">
                                        {service.highlights.map((item) => (
                                            <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="inline-flex items-center text-emerald-600 font-bold text-sm tracking-tight group/btn"
                                    >
                                        VIEW DETAILS
                                        <div className="ml-3 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-all duration-300">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
