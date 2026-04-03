import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    const phoneNumber = '9304031185';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20SRA%20Polymers`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 group"
            title="Chat with us on WhatsApp"
        >
            {/* Animated ripple rings */}
            <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

            {/* Main button */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-125 transition-all duration-300 ease-in-out group hover:from-green-500 hover:to-green-700 cursor-pointer border-2 border-green-300/30 hover:border-green-200/60">
                {/* Decorative inner circle */}
                <div className="absolute inset-2 bg-gradient-to-br from-green-300/20 to-green-700/20 rounded-full"></div>
                
                {/* Image with better styling */}
                <img 
                    src='/whatsapp.png' 
                    alt="WhatsApp"
                    className="w-8 h-8 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Tooltip - appears on hover */}
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                Chat with us!
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
