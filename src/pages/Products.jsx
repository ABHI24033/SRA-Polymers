import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ShoppingBag, ShieldCheck, ArrowRight, Zap, Globe, Search, Filter } from 'lucide-react';

const productsList = [
    {
        id: 1,
        name: "Premium Drip Tape",
        category: "Irrigation",
        description: "High-tensile drip tape with clog-resistant emitters for long-row applications.",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Greenhouse Film",
        category: "Greenhouse",
        description: "200-micron UV-stabilized film with anti-drip and anti-fog properties.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Silver/Black Mulch",
        category: "Mulching",
        description: "Multi-layer co-extruded film for optimal weed suppression and soil temperature control.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Anti-Insect Net",
        category: "Nets",
        description: "High-density polyethylene netting for protection against pests and physical damage.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "HDPE Supply Pipes",
        category: "Piping",
        description: "Ultra-durable supply pipes manufactured to international standards for high-pressure systems.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Impact Sprinklers",
        category: "Irrigation",
        description: "Precision-engineered sprinklers for large-scale field coverage and uniform watering.",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop"
    }
];

const Products = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative pt-48 pb-32 bg-emerald-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                        alt="SRA Polymers Products"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                                Product Catalog
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                High-Performance <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                                    Polymer Products
                                </span>
                            </h1>
                            <p className="text-lg text-emerald-50/70 max-w-xl leading-relaxed">
                                Explore our comprehensive range of industrial-grade polymer solutions designed for durability, efficiency, and sustainability.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="hidden lg:flex justify-end"
                        >
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6">
                                        <ShoppingBag className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-4">Quality Guaranteed</h3>
                                    <p className="text-emerald-100/60 text-sm">Every product undergoes rigorous testing to meet international performance standards.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Filter & Grid Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                            />
                        </div>
                        <div className="flex items-center space-x-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            {['All Products', 'Irrigation', 'Greenhouse', 'Mulching', 'Piping'].map((cat, i) => (
                                <button key={i} className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-sm transition-all ${i === 0 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {productsList.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-emerald-700 text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                        <button className="flex items-center text-emerald-600 font-bold text-sm tracking-tight group/btn hover:text-emerald-700 transition-colors">
                                            ENQUIRE NOW
                                            <div className="ml-2 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </button>
                                        <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 p-12 bg-emerald-900 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black mb-6">Need a custom solution?</h2>
                            <p className="text-emerald-50/70 max-w-2xl mx-auto mb-10 text-lg">
                                Our R&D team can develop custom polymer formulations tailored to your specific industrial or agricultural requirements.
                            </p>
                            <button className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-black hover:bg-emerald-400 hover:text-white transition-all shadow-xl hover:-translate-y-1">
                                Talk to an Expert
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Products;
