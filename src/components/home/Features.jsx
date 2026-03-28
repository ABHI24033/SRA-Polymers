import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Recycle, Users, Sprout, Target } from 'lucide-react';

const features = [
    {
        icon: <Leaf className="w-6 h-6" />,
        title: "Eco-Friendly Design",
        description: "Our products are engineered to minimize environmental impact while maximizing results.",
        color: "bg-green-50 text-green-600"
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Certified Quality",
        description: "Adhering to strict international standards for polymer safety and performance.",
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        icon: <Recycle className="w-6 h-6" />,
        title: "Sustainability Hub",
        description: "Innovating for a circular economy with recyclable and biodegradable film options.",
        color: "bg-teal-50 text-teal-600"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Farmer Focused",
        description: "Direct feedback loops with farmers drive our product development cycle.",
        color: "bg-lime-50 text-lime-600"
    },
    {
        icon: <Sprout className="w-6 h-6" />,
        title: "Yield Optimization",
        description: "Scientifically proven to enhance crop growth and reduce water dependency.",
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Precision Engineering",
        description: "Micron-level accuracy in every film and pipe we manufacture.",
        color: "bg-green-50 text-green-600"
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-bold uppercase tracking-widest text-xs"
                    >
                        Why Choose SRA Polymers
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mt-4"
                    >
                        Engineering the <br className="hidden md:block" /> Future of Farming
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
