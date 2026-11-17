import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, PhoneCall, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const AboutSection: React.FC = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const bulletPoints = [
    'Specialized Care for a Healthier You',
    'Expert Guidance for Optimal Wellness',
    'Personalized Training Plans for Every Student',
    'Cutting-Edge Technology for Superior Healthcare',
    'Innovative Solutions for Enhanced Patient Outcomes',
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Eyebrow + Headline */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E] mb-2">
            <span className="text-base font-extrabold leading-none">~</span>
            <span>ABOUT US</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
            Expert Doctors, Seamless Appointments, Quality Care
          </h2>
        </div>

        {/* 3-Column Medova Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* COLUMN 1 (Left): Video Thumbnail with Circular Play Button */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 group aspect-[3/4]">
              <img
                src="/images/about-video-hallway.jpg"
                alt="Apple College of Nursing clinical learning hallway"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* COLUMN 2 (Middle): Description, Bullet Points, Dual Bottom CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="lg:col-span-5 space-y-5"
          >
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A belief that knowledge is power, we connect our nursing students directly with
              clinical science so they build valuable healthcare skills when they need it most,
              caring about our communities and committed to quality nursing education.
            </p>

            {/* Bullet Points with Checkmark Icons */}
            <ul className="space-y-2.5">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-xs font-bold text-[#132847]">
                  <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Row: Dark Navy CTA + Call Helpline */}
            <div className="pt-4 flex flex-wrap items-center gap-5 border-t border-slate-100">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#132847] hover:bg-[#0E1D33] text-white text-xs font-bold transition-all shadow-xs cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              >
                <span>More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${appleCollegeConfig.phones[0].replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 group"
              >
                <span className="w-9 h-9 rounded-full bg-[#FFF0F0] text-[#FF5E5E] flex items-center justify-center shrink-0 group-hover:bg-[#FF5E5E] group-hover:text-white transition-colors">
                  <PhoneCall className="w-4 h-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] text-slate-400 font-semibold">For emergency, Call Now</div>
                  <div className="text-xs font-extrabold text-[#132847] group-hover:text-[#FF5E5E] transition-colors">
                    {appleCollegeConfig.phones[0]}
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* COLUMN 3 (Right): Two Stacked Photographs + Circular Stamp */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 relative flex flex-col gap-4"
          >
            {/* Top Photo */}
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 group">
              <img
                src="/images/why-clinical-rounds.jpg"
                alt="Nursing faculty and students in clinical discussion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Photo */}
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 group">
              <img
                src="/images/about-skills-practice.jpg"
                alt="Nursing students practicing clinical procedures"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Medova-style Circular Clinic Stamp / Seal */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-white shadow-xl border-2 border-[#FF5E5E]/20 flex-col items-center justify-center text-center p-2"
            >
              <div className="text-[8px] font-black uppercase tracking-wider text-[#FF5E5E] leading-tight">
                Apple College
              </div>
              <div className="w-6 h-6 my-0.5 rounded-full bg-[#EBF7EE] text-[#248568] flex items-center justify-center text-[10px] font-bold">
                ✚
              </div>
              <div className="text-[7px] font-bold uppercase tracking-widest text-[#132847]">
                Nagaram Hyd
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Profile Modal */}
      <AnimatePresence>
        {profileModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProfileModalOpen(false)}
            className="fixed inset-0 z-50 bg-[#132847]/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#FF5E5E] uppercase tracking-wider">
                    Institutional Profile
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-[#132847]">
                    Apple College of Nursing
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setProfileModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <span className="font-bold text-[#132847]">Apple College of Nursing</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Parent Group:</span>
                  <span className="font-bold text-[#132847]">Orange Colleges</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Sponsoring Society:</span>
                  <span className="font-bold text-[#132847]">{appleCollegeConfig.sponsoringSociety}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Society Registration:</span>
                  <span className="font-bold text-[#248568]">Reg. No. {appleCollegeConfig.registrationNumber}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Campus Location:</span>
                  <span className="font-bold text-[#132847] text-right">Bandlaguda Cross Rd, Keesara, Nagaram, Hyd</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#admissions"
                  onClick={() => setProfileModalOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold"
                >
                  <span>Admission Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
