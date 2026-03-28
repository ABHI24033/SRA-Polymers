import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sun, Sprout, ShoppingBag, Truck, ShieldCheck, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: <Droplets className="w-8 h-8" />,
        title: "Irrigation Systems",
        description: "Advanced drip and sprinkler irrigation systems designed to maximize water efficiency and crop yield.",
        image: "https://images.unsplash.com/photo-1463123081488-72993af1df4a?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Sun className="w-8 h-8" />,
        title: "Greenhouse Solutions",
        description: "High-quality greenhouse films and structures providing optimal growing conditions for your crops.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Sprout className="w-8 h-8" />,
        title: "Sustainable Mulching",
        description: "Eco-friendly mulching films that suppress weeds, retain moisture, and regulate soil temperature.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
    }
];

const ServicesPreview = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-bold uppercase tracking-widest text-xs"
                    >
                        Our Core Offerings
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight"
                    >
                        Premium Solutions for <br /> Modern Agriculture
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center group shadow-sm hover:shadow-md">
                        View All Services
                        <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(5,150,105,0.15)] transition-all duration-500 flex flex-col h-full border border-slate-100"
                    >
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                                <div className="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg">
                                    {service.icon}
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-grow">
                                {service.description}
                            </p>

                            <button className="flex items-center text-emerald-600 font-bold text-sm tracking-tight group/btn">
                                Explrore Service
                                <div className="ml-2 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPreview;
