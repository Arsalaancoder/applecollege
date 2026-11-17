import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const AdmissionMarquee: React.FC = () => {
  const announcements = [
    'Admissions Open for Academic Year 2026-27',
    'B.Sc. Nursing (4-Year Degree Course · Intermediate BiPC)',
    'General Nursing & Midwifery (GNM · 3-Year Diploma · Any Stream)',
    `Telangana Xpress Educational Society (Reg. ${appleCollegeConfig.registrationNumber})`,
    `Admissions Helpline: ${appleCollegeConfig.phones[0]} / ${appleCollegeConfig.phones[1]}`,
    'Hands-on Clinical Skills Lab & 3D Anatomy Demonstration Room',
    'Supervised Multi-Specialty Hospital Ward Postings',
    'Campus: Bandlaguda Cross Road, Keesara, Nagaram, Hyderabad',
    'Merit & Management Quota Admissions Open — Apply Online Now',
  ];

  // Repeat for seamless 50% loop
  const loopItems = [...announcements, ...announcements];

  return (
    <div className="w-full bg-[#0E1E36] text-white py-1.5 sm:py-2 border-b border-[#1E375F] overflow-hidden flex items-center relative z-40 select-none">
      {/* Fixed Left Badge: Admission Open Indicator */}
      <div className="shrink-0 z-20 pl-3 sm:pl-6 pr-2 sm:pr-4 flex items-center">
        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-md transition-transform hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>Admission Open 2026-27</span>
        </Link>
      </div>

      {/* Scrolling Marquee Ticker */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {loopItems.map((text, idx) => (
            <Link
              key={idx}
              to="/admissions"
              className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer group"
            >
              <span className="text-[#38B6FF] font-black">•</span>
              <span className="group-hover:underline">{text}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Fixed Right Shortcut (Desktop only) */}
      <div className="hidden lg:flex shrink-0 z-20 pr-4 sm:pr-6 pl-3 items-center">
        <Link
          to="/admissions"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#34D399] hover:text-white transition-colors"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

