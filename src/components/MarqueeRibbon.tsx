import React from 'react';
import { Link } from 'react-router-dom';

export const MarqueeRibbon: React.FC = () => {
  const items = [
    { text: 'ADMISSIONS OPEN 2026-27', highlight: true },
    { text: 'B.Sc. Nursing Degree (4 Years · BiPC)', highlight: false },
    { text: 'General Nursing & Midwifery (GNM · 3 Years)', highlight: false },
    { text: 'ENROLLMENT DESK ACTIVE', highlight: true },
    { text: '3D Anatomy Demonstration Room', highlight: false },
    { text: 'Nursing Foundation Skills Laboratory', highlight: false },
    { text: 'Supervised Hospital Ward Exposure', highlight: false },
    { text: 'Telangana Xpress Educational Society (Reg. 214/2025)', highlight: false },
    { text: 'LIMITED SEATS AVAILABLE', highlight: true },
    { text: 'Nagaram, Hyderabad Campus', highlight: false },
  ];

  // Repeat twice for seamless infinite scroll at -50%
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-[#132847] text-white py-3.5 overflow-hidden border-y border-[#1E3D73] select-none">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 text-xs font-bold tracking-wider uppercase">
            <span className="text-[#FF5E5E] text-base font-black">•</span>
            {item.highlight ? (
              <Link
                to="/admissions"
                className="px-3 py-1 rounded-full bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white font-black text-[11px] shadow-sm tracking-wider transition-transform hover:scale-105"
              >
                {item.text}
              </Link>
            ) : (
              <span className="text-slate-200">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

