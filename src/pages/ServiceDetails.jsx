import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home, ChevronRight, CheckCircle } from 'lucide-react';
import { getServiceBySlug, services } from '../lib/services';

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-24">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center space-y-4 border border-slate-100">
          <h1 className="text-2xl font-black text-slate-900">Service not found</h1>
          <p className="text-slate-600">The service you are looking for isn&apos;t available. Please browse our services.</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-emerald-900/15"
            >
              Back to Services
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
      <section className="pt-40 pb-10 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-emerald-100/80">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">{service.title}</span>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                {service.title}
              </span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">{service.title}</h1>
              <p className="text-lg text-emerald-50/80 leading-relaxed">{service.summary}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-emerald-900 px-5 py-3 rounded-xl font-black shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to services
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
                <img src={service.heroImage} alt={service.title} className="w-full h-[360px] md:h-[420px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {service.description.map((para, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed text-base">
                {para}
              </p>
            ))}

            {service.bullets?.map((section) => (
              <div key={section.title || section.items[0]} className="space-y-3">
                {section.title && (
                  <h4 className="text-lg font-bold text-slate-900">{section.title}</h4>
                )}
                <ul className="space-y-2 text-slate-700 text-sm leading-relaxed list-disc list-inside">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm h-fit"
          >
            <p className="text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase mb-3">Key Points</p>
            <h3 className="text-xl font-black text-slate-900 mb-4">What you get</h3>
            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold shadow-md shadow-emerald-900/10 hover:-translate-y-0.5 transition-all"
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-18 md:pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.gallery && service.gallery.length > 0 && (
            <div className="mb-12 space-y-8">
              {service.gallery.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4">{section.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {section.images.map((img) => (
                      <div
                        key={img.src}
                        className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-900">Explore other services</h3>
            <Link to="/services" className="text-emerald-600 font-bold text-sm inline-flex items-center gap-2">
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services
              .filter((item) => item.slug !== service.slug)
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
                    <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.summary}</p>
                    <Link
                      to={`/services/${item.slug}`}
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

export default ServiceDetails;
