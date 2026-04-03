import React from 'react';
import { motion } from 'framer-motion';
import { Image, Sprout } from 'lucide-react';

const Gallery = () => {
    const images = [
        { src: '/farmers.jpg', alt: 'Farmers working in the field', title: 'Our Farmers' },
        { src: '/fields.jpeg', alt: 'Beautiful agricultural fields', title: 'Agricultural Fields' },
        { src: '/plant.jpeg', alt: 'Healthy plants growing', title: 'Plant Growth' },
        { src: '/plant_2.jpeg', alt: 'Another view of plants', title: 'Crop Cultivation' },
        { src: '/fruits.jpeg', alt: 'Fresh fruits harvest', title: 'Fruit Harvest' },
        { src: '/pipes.jpeg', alt: 'Irrigation pipes', title: 'Irrigation Systems' },
        { src: '/pipe_2.jpeg', alt: 'HDPE pipes', title: 'HDPE Pipes' },
        { src: '/coil_2.jpeg', alt: 'Pipe coils', title: 'Pipe Coils' },
        { src: '/sprinkler_prod.jpeg', alt: 'Sprinkler system', title: 'Sprinkler Irrigation' },
        { src: '/drip_prod.png', alt: 'Drip irrigation', title: 'Drip Irrigation' },
        { src: '/hdpe-coil-pipes_prod.jpg', alt: 'HDPE coil pipes', title: 'HDPE Coil Pipes' },
        { src: '/hdpe_system_prod.jpg', alt: 'HDPE system', title: 'HDPE System' },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-44 pb-28">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-emerald-950" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,44,34,0.92)_0%,rgba(6,78,59,0.88)_55%,rgba(248,250,252,0)_100%)]" />
                    <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
                    <div className="absolute right-[-5rem] top-10 h-96 w-96 rounded-full bg-green-300/15 blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-lime-200/10 blur-3xl" />
                </div>

                <div className="relative flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-5xl text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-300 shadow-sm backdrop-blur-sm">
                            <Image className="h-4 w-4" />
                            Photo Gallery
                        </span>

                        <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Explore our agricultural innovations and farming excellence.
                        </h1>

                        <p className="mt-6 max-w-5xl text-lg leading-8 text-emerald-50/75">
                            Discover the world of modern agriculture through our collection of images showcasing farming practices, irrigation solutions, and agricultural products that drive sustainable farming.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="relative -mt-20 z-10 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-emerald-950/10 p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;