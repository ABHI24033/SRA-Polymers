import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Building2,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sprout,
} from 'lucide-react';
import DistributorForm from '../components/distributors/DistributorForm';

void motion;

const valueCards = [
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description:
      'We work with distribution partners who want steady growth, transparent communication, and dependable support.',
  },
  {
    icon: Globe2,
    title: 'Market Expansion Ready',
    description:
      'Share your territory, customer base, and goals so we can evaluate the best fit for your region.',
  },
];

const contactCards = [
  {
    title: 'Address',
    value: 'SRA Polymers Pvt Ltd.',
    text: 'Simalya, Near Dhoni Farm House, Ring Road Ranchi',
    icon: MapPin,
  },
  {
    title: 'Call Us',
    value: '+91 9304031185',
    text: 'Mon-Sat, 9AM to 6PM',
    icon: Phone,
  },
  // {
  //   title: 'Whatsapp',
  //   value: '+91 9304031185',
  //   text: 'Fast response for distributor queries',
  //   icon: Phone,
  // },
  {
    title: 'Email Us',
    value: 'info.srapolymer@gmail.com',
    text: 'Sales and distributor support',
    icon: Mail,
  },
];

const Distributors = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <section className="relative overflow-hidden pt-44 pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-emerald-950" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,44,34,0.92)_0%,rgba(6,78,59,0.88)_55%,rgba(248,250,252,0)_100%)]" />
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute right-[-5rem] top-10 h-96 w-96 rounded-full bg-green-300/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-lime-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-300 shadow-sm backdrop-blur-sm">
              <Sprout className="h-4 w-4" />
              Distributor Network
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build your next distribution partnership with SRA Polymers.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/75">
              Register your interest through a polished custom form instead of an
              embedded Google Form. The experience is fast, responsive, and ready for
              production deployment on the frontend.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-5 self-end"
          >
            {valueCards.map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-[1.8rem] border border-white/10 bg-white/10 p-6 shadow-lg shadow-emerald-950/10 backdrop-blur-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  {React.createElement(icon, { className: 'h-5 w-5' })}
                </div>
                <h2 className="mt-5 text-xl font-black text-white">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-emerald-50/70">{description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mt-14 bg-white pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className=''>
              <DistributorForm />
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6 rounded-[2rem] border border-white/10 bg-emerald-950 p-8 text-white shadow-2xl shadow-black/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Building2 className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-black">What we look for</h2>
                <p className="text-sm leading-7 text-emerald-50/75">
                  Strong regional reach, a credible customer base, and a clear view of
                  how you want to grow in the agricultural market.
                </p>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  {[
                    'Company, corporate, and infrastructure details',
                    'Organisation strength and dealer network',
                    'Declaration, association, and territory inputs',
                    'Document checklist with file upload fields',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                      <p className="text-sm leading-6 text-emerald-50/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map(({ title, value, text, icon }) => (
                  <div
                    key={title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/90 p-5 shadow-lg shadow-emerald-950/5 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      {React.createElement(icon, { className: 'h-5 w-5' })}
                    </div>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                      {title}
                    </p>
                    <p className="mt-2 text-base font-bold text-slate-900">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distributors;
