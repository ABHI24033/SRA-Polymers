import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, Sparkles, Wind, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

void motion;

const servicesList = [
    {
        icon: <Droplets className="w-8 h-8" />,
        title: "Drip",
        description: "Reliable drip irrigation solutions designed for vegetables, sugarcane, and water-efficient row crop farming.",
        highlights: ["Drip In", "InDrip", "LLDPE Tubing", "Tapes, Emitters & Filters"],
        image: "https://images.unsplash.com/photo-1463123081488-72993af1df4a?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Sprinklers",
        description: "Field-ready sprinkler systems built for uniform water distribution, easy coverage, and dependable long-term use.",
        highlights: ["Uniform irrigation", "Strong field coverage", "Durable moving parts", "Suitable for varied crop layouts"],
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Portable HDPE Piping Systems",
        description: "Flexible portable HDPE piping systems for quick deployment, efficient water movement, and rugged agricultural use.",
        highlights: ["Portable field movement", "Quick setup", "High durability", "Efficient water transfer"],
        image: "https://images.unsplash.com/photo-1584017374018-09142ec3b499?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Wind className="w-8 h-8" />,
        title: "HDPE Pipes",
        description: "Strong HDPE pipes engineered for irrigation networks, pressure handling, and dependable agricultural infrastructure.",
        highlights: ["Pressure-ready piping", "Long service life", "Agricultural applications", "Low maintenance performance"],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop"
    }
];

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
                                Piping Solutions
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-50/70 max-w-3xl mx-auto leading-relaxed">
                            We provide dependable agricultural service categories built around drip systems, sprinklers, portable HDPE piping, and HDPE pipe infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row border border-slate-100 h-full"
                            >
                                {/* Image Side */}
                                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                                </div>

                                {/* Content Side */}
                                <div className="p-10 md:w-3/5 flex flex-col justify-center">
                                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium mb-8">
                                        {service.description}
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
                                        to="/products"
                                        className="inline-flex items-center text-emerald-600 font-bold text-sm tracking-tight group/btn"
                                    >
                                        VIEW PRODUCTS
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
