import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

void motion;

const testimonials = [
  {
    name: 'Rakesh Kumar',
    role: 'Agriculture Distributor, Ranchi',
    quote:
      'SRA Polymers has been dependable in both product quality and service support. Their irrigation materials have helped us serve our dealer network with confidence.',
  },
  {
    name: 'Anil Sharma',
    role: 'Farm Input Dealer, Bokaro',
    quote:
      'The team understands field requirements well. From HDPE piping to drip solutions, the products feel practical, durable, and easy to recommend to customers.',
  },
  {
    name: 'Sunita Verma',
    role: 'Regional Supply Partner, Jharkhand',
    quote:
      'What stands out most is the consistency. Delivery coordination, communication, and material standards have all made SRA Polymers a strong long-term partner for us.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrevious = () =>
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const goToNext = () =>
    setActiveIndex((current) => (current + 1) % testimonials.length);

  return (
    <section className="py-24 bg-[linear-gradient(180deg,#ffffff_0%,#f0fdf4_100%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold uppercase tracking-widest text-xs"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-4"
          >
            Trusted by Partners Who <br className="hidden md:block" />
            Build with Confidence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed"
          >
            Real feedback from distributors and supply partners who work with SRA
            Polymers across agriculture and irrigation markets.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            key={testimonials[activeIndex].name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="group relative rounded-[2.5rem] border border-emerald-100 bg-white p-8 md:p-10 shadow-xl shadow-emerald-950/5"
          >
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-100/60 blur-3xl" />
            <div className="relative z-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-200 hover:text-emerald-700"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Quote className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-200 hover:text-emerald-700"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <p className="mt-8 text-slate-600 leading-8 font-medium text-base md:text-lg">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-lg font-black text-slate-900">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-sm font-medium text-emerald-700 mt-1">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-10 bg-emerald-600' : 'w-2.5 bg-emerald-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
