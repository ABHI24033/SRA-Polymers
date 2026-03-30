import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { products } from '../lib/products';

const Products = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-28 bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
            alt="Irrigation field"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-300 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] mb-6">
                Product Range
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                Built for Modern
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  Irrigation Systems
                </span>
              </h1>
              <p className="text-lg text-emerald-50/70 max-w-xl leading-relaxed">
                Explore our four core product families engineered for efficient water delivery, fast deployment, and long-life field performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex justify-end"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/25 rounded-full blur-3xl -mr-20 -mt-16" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-900/30">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="text-white text-xl font-bold">Certified Quality</h3>
                  <p className="text-emerald-100/70 text-sm">
                    Field-tested materials, UV stabilization, and pressure ratings suited for Indian farm conditions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-[0.2em] uppercase">Product Catalog</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Select a product to view details</h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-900/15 hover:-translate-y-0.5 transition-all"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-[1.75rem] border border-slate-100 overflow-hidden shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-emerald-700 text-[11px] font-black uppercase tracking-[0.18em] shadow-lg">
                      {product.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed min-h-[72px]">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center text-emerald-600 font-bold text-sm tracking-tight group/btn"
                    >
                      View Details
                      <span className="ml-2 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <div className="p-2 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 md:p-12 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/25 rounded-full blur-[90px] -mr-28 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6">
              <div>
                <p className="text-emerald-100/70 text-sm font-semibold mb-2">Need configuration help?</p>
                <h3 className="text-2xl md:text-3xl font-black leading-snug">
                  We design complete irrigation layouts with pumps, mains, and field hardware.
                </h3>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-xl font-black shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
