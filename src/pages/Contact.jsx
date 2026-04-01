import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { getZeptoContactRecipient, sendZeptoMail } from '../lib/zeptoMail';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Product Inquiry',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);

    const recipient = useMemo(() => getZeptoContactRecipient(), []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        try {
            const htmlbody = `
                <div style="font-family: Arial, sans-serif; color: #0f172a;">
                    <h2 style="color:#047857;margin-bottom:16px;">New Contact Inquiry</h2>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Topic:</strong> ${formData.subject}</p>
                    <p style="margin-top:16px;"><strong>Message:</strong></p>
                    <p style="white-space:pre-line;">${formData.message}</p>
                </div>
            `;

            await sendZeptoMail({
                subject: `[Website Contact] ${formData.subject} - ${formData.name}`,
                htmlbody,
                to: [recipient],
                replyTo: { address: formData.email, name: formData.name },
            });

            toast.success('Thanks! Your message was sent.');
            setFormData({ name: '', email: '', subject: 'Product Inquiry', message: '' });
        } catch (error) {
            console.error(error);
            toast.error('We could not send your message right now.');
        } finally {
            setIsSending(false);
        }
    };

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
                        <div className="lg:col-span-1 space-y-4">
                            {[
                                {
                                    icon: <Phone className="w-5 h-5" />,
                                    title: "Call Us",
                                    detail: "+91 9304031185",
                                    link: "tel:+919304031185",
                                    desc: "Mon-Sat, 9AM to 6PM"
                                },
                                {
                                    icon: <Mail className="w-5 h-5" />,
                                    title: "Email Us",
                                    detail: "info.srapolymer@gmail.com",
                                    link: "mailto:info.srapolymer@gmail.com",
                                    desc: "Quick response within 24h"
                                },
                                {
                                    icon: <MapPin className="w-5 h-5" />,
                                    title: "Factory Address",
                                    detail: "KHATA NO 25, 85, PLOT NO 2049, 2050, CHOREYA ROAD, AMAN NAGAR, TARANGA, Chanho, Ranchi, Jharkhand, 835214",
                                    link: "https://www.google.com/maps/search/?api=1&query=KHATA+NO+25+85+PLOT+NO+2049+2050+CHOREYA+ROAD+AMAN+NAGAR+TARANGA+CHANHO+RANCHI+JHARKHAND+835214",
                                    desc: "Open for site visits"
                                },
                                {
                                    icon: <MapPin className="w-5 h-5" />,
                                    title: "Registered Office",
                                    detail: "MEENA NIWAS, HO SACHIN KUMAR JHA, Simaliya, Near Jojo Nagar, Naya Toli, Ranchi, Jharkhand, 835222",
                                    link: "https://www.google.com/maps/search/?api=1&query=MEENA+NIWAS+HO+SACHIN+KUMAR+JHA+Simaliya+Near+Jojo+Nagar+Naya+Toli+Ranchi+Jharkhand+835222",
                                    desc: "Corporate correspondence"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="flex items-start gap-4 p-5 md:p-6 bg-white border border-emerald-100 shadow-sm rounded-3xl hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-sm font-medium text-emerald-700 leading-snug whitespace-normal break-words hover:text-emerald-900"
                                        >
                                            {item.detail}
                                        </a>
                                        <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-md border border-slate-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3 mb-8">
                                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-900">Send us a Message</h2>
                                    </div>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Full Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Subject</label>
                                            <select
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            >
                                                <option value="Product Inquiry">Product Inquiry</option>
                                                <option value="Custom Formulation">Custom Formulation</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="Technical Support">Technical Support</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Your Message</label>
                                            <textarea
                                                rows="5"
                                                placeholder="Describe your requirements..."
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className="w-full group bg-emerald-900 text-white font-black py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-950/20 flex items-center justify-center space-x-3 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            <span>{isSending ? 'Sending…' : 'Send Inquiry'}</span>
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
