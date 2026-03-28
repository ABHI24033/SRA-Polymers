import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="relative pt-48 pb-32 bg-emerald-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact SRA Polymers"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-transparent to-emerald-950"></div>
                </div>

                {/* Floating Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                            Connect With Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Let's Shape the Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                                of Your Business
                            </span>
                        </h1>
                        <p className="text-lg text-emerald-50/70 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our polymer solutions or need a custom formulation? Our technical experts are ready to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Info Cards Column */}
                        <div className="lg:col-span-1 space-y-8">
                            {[
                                {
                                    icon: <Phone className="w-6 h-6" />,
                                    title: "Call Us",
                                    detail: "+91 123 456 7890",
                                    desc: "Mon-Sat, 9AM to 6PM"
                                },
                                {
                                    icon: <Mail className="w-6 h-6" />,
                                    title: "Email Us",
                                    detail: "info@srapolymers.com",
                                    desc: "Quick response within 24h"
                                },
                                {
                                    icon: <MapPin className="w-6 h-6" />,
                                    title: "Visit Us",
                                    detail: "SRA Polymers Pvt. Ltd.",
                                    desc: "Industrial Zone, Phase II, Sector 5"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:bg-emerald-600 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-emerald-700 font-bold mb-1 group-hover:text-white transition-colors">{item.detail}</p>
                                    <p className="text-slate-500 text-sm group-hover:text-emerald-50/70 transition-colors uppercase tracking-widest font-bold">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3 mb-8">
                                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-900">Send us a Message</h2>
                                    </div>

                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Full Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Subject</label>
                                            <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none">
                                                <option>Product Inquiry</option>
                                                <option>Custom Formulation</option>
                                                <option>Partnership</option>
                                                <option>Technical Support</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Your Message</label>
                                            <textarea
                                                rows="5"
                                                placeholder="Describe your requirements..."
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                                            ></textarea>
                                        </div>

                                        <button className="w-full group bg-emerald-900 text-white font-black py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-950/20 flex items-center justify-center space-x-3 hover:-translate-y-1">
                                            <span>Send Inquiry</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>
                                </div>
                            </motion.div>

                            {/* Trust Badge */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="mt-12 flex flex-wrap justify-center gap-12 opacity-40 grayscale"
                            >
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-bold text-sm">Response in 24h</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Globe className="w-5 h-5" />
                                    <span className="font-bold text-sm">Global Support</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span className="font-bold text-sm">Data Secured</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ShieldCheck = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
);

export default Contact;
