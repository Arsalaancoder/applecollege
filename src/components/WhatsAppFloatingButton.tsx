import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello Apple College of Nursing, I would like to enquire about Admissions for the 2026-27 academic session.'
  );

  const whatsappUrl = `https://wa.me/${appleCollegeConfig.whatsappDigits}?text=${defaultMessage}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Prompt bubble (Desktop) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex flex-col bg-[#132847] text-white px-3.5 py-2 rounded-xl shadow-xl text-right border border-white/10 pointer-events-none"
          >
            <span className="text-[11px] font-bold text-[#34D399]">Chat on WhatsApp</span>
            <span className="text-[10px] text-slate-300">Instant Admission Guidance</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apple College of Nursing Admissions on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-xl shadow-green-900/30 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400/50"
      >
        {/* Pulsing ring aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current drop-shadow-sm z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.01 2.01c-7.73 0-14 6.27-14 14 0 2.48.65 4.89 1.88 7.03L2 30l7.19-1.89c2.08 1.14 4.43 1.74 6.82 1.74 7.73 0 14-6.27 14-14s-6.27-14.85-14-14.85zm0 25.64c-2.14 0-4.23-.58-6.07-1.67l-.44-.26-4.52 1.19 1.21-4.41-.29-.46c-1.2-1.92-1.84-4.14-1.84-6.39 0-6.6 5.37-11.97 11.97-11.97 6.6 0 11.97 5.37 11.97 11.97 0 6.6-5.38 12.03-12.03 12.03zm6.57-8.99c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.96-1.8-2.14-2.01-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.3-.72-.6-.62-.81-.63-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.54.59 2.06.76.87.28 1.66.24 2.28.15.7-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
        </svg>
      </motion.a>
    </div>
  );
};

