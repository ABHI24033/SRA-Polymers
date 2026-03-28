import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Stats from '../components/home/Stats';
import ServicesPreview from '../components/home/ServicesPreview';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
    return (
        <div className="overflow-x-hidden bg-white">
            <Hero />

            {/* Overlapping section for premium feel */}
            <div className="relative z-20 -mt-32 px-4 md:px-0 mb-32">
                <AboutPreview />
            </div>

            <Stats />
            <Features />
            <Testimonials />

            <div className="py-24 bg-emerald-50/50">
                <ServicesPreview />
            </div>

            <ContactCTA />
        </div>
    );
};

export default Home;
