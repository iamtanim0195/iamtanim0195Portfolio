import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
const WhatsApp = () => {
    return (
        <div>
            <a
                href="https://wa.me/+8801645017119?text=Hello! I want to connect with you."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 animate-pulse-scale">
                <FaWhatsapp size={28} />
            </a>
        </div>
    )
}

export default WhatsApp