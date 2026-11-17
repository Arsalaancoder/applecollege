import React from 'react';
import { Smartphone, Download, QrCode, ArrowRight } from 'lucide-react';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const AppBannerSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#F8F9FD] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBF7EE] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#D9EEDF] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Mockup Graphic */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#248568] shrink-0 border border-[#D9EEDF]">
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#132847] shrink-0 border border-[#D9EEDF]">
              <QrCode className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </div>

          {/* Center Text */}
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#248568]">
              DIGITAL LEARNING & STUDENT SERVICES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#132847] leading-tight">
              Apple College Student Portal That Makes Healthcare Learning Easier
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Access digital anatomy charts, coursework schedules, library research terminals, and
              admission forms on any smartphone or tablet.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#132847] hover:bg-[#0E1D33] text-white text-xs font-bold transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Admissions Guide</span>
            </a>
            <a
              href={`https://wa.me/${appleCollegeConfig.whatsappDigits}?text=${encodeURIComponent(
                'Hello Apple College, please share the B.Sc. Nursing prospectus and digital guide.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all shadow-md"
            >
              <span>WhatsApp Prospectus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

