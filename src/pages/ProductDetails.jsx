import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home, ChevronRight, BadgeCheck } from 'lucide-react';
import { getProductBySlug, products } from '../lib/products';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-24">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center space-y-4 border border-slate-100">
          <h1 className="text-2xl font-black text-slate-900">Product not found</h1>
          <p className="text-slate-600">The product you are looking for isn&apos;t available. Please browse our catalog.</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-emerald-900/15"
            >
              Back to Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <section className="pt-40 pb-6 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-emerald-100/80">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">{product.title}</span>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                {product.title}
              </span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                {product.title}
              </h1>
              <p className="text-lg text-emerald-50/80 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-emerald-900 px-5 py-3 rounded-xl font-black shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-400/20 blur-3xl rounded-[2.5rem]" />
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">Specifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {product.categories.map((section) => (
                  <div
                    key={section.title}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <BadgeCheck className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-8 shadow-sm h-fit"
            >
              <p className="text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase mb-3">Applications</p>
              <h3 className="text-xl font-black text-emerald-900 mb-4">Where this fits</h3>
              <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Open-field irrigation blocks and farm infrastructure
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Horticulture, orchards, and protected cultivation
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  Pressurized mains, submains, and portable distribution
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold shadow-md shadow-emerald-900/10 hover:-translate-y-0.5 transition-all"
                >
                  Schedule a consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="pb-18 md:pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">Explore other products</h3>
            <Link to="/products" className="text-emerald-600 font-bold text-sm inline-flex items-center gap-2">
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((item) => item.slug !== product.slug)
              .map((item, idx) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-36 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.shortDescription}</p>
                    <Link
                      to={`/products/${item.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
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

export default ProductDetails;
