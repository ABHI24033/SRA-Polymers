import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Successful Projects", value: "2,500+" },
    { label: "Products in Catalog", value: "180+" },
    { label: "Expert Professionals", value: "500+" },
    { label: "Customer Satisfaction", value: "99%" },
];

const Stats = () => {
    return (
        <section className="py-16 bg-emerald-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-emerald-400 font-bold uppercase tracking-wider text-xs">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
