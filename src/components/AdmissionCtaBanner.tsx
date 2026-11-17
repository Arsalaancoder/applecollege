import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, ShieldCheck } from 'lucide-react';
import { appleCollegeConfig } from '@/data/appleCollegeData';

interface AdmissionCtaBannerProps {
  title?: string;
  subtitle?: string;
}

export const AdmissionCtaBanner: React.FC<AdmissionCtaBannerProps> = ({
  title = "Ready to Begin Your Healthcare Career?",
  subtitle = "Admissions are open for B.Sc. Nursing (Inter BiPC) and GNM diploma programmes at our Nagaram, Hyderabad campus.",
}) => {
  return (
    <section className="py-14 sm:py-18 bg-[#F8F9FD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#132847] text-white p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl">
          {/* Background decorative styling */}
          <div className="absolute inset-0 bg-hero-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2A7FBA]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#FF5E5E]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FF5E5E] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span>Apple College Admissions Open</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {subtitle}
              </p>

              <div className="text-[11px] text-slate-400">
                Sponsored by {appleCollegeConfig.sponsoringSociety} ·{' '}
                <span className="text-[#34D399] font-bold">
                  Reg. No. {appleCollegeConfig.registrationNumber}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#FF5E5E]/20"
              >
                <span>Apply for Admission</span>
                <Calendar className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${appleCollegeConfig.phones[0].replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-bold transition-all backdrop-blur-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#34D399]" />
                <span>{appleCollegeConfig.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
