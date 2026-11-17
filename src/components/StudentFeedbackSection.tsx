import React from 'react';
import { Quote, Star } from 'lucide-react';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const StudentFeedbackSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
            <span className="text-base font-extrabold leading-none">~</span>
            <span>WHAT OUR STUDENTS SAY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
            What Our Students Think About Apple College
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Practical learning, attentive faculty mentorship, and thorough laboratory exposure
            preparing students for clinical nursing excellence.
          </p>
        </div>

        {/* Medova Split Testimonial + 98% Stat Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Testimonial Card */}
          <div className="lg:col-span-8 bg-[#F8F9FD] rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-[#FF5E5E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#FF5E5E]/40" />
              <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                "The skills laboratories and 3D anatomy demonstration sessions at Apple College of
                Nursing made medical theory easy to understand and apply. The faculty guided us with
                patience during simulation practice and clinical ward postings."
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200/60 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-200">
                <img
                  src="/images/hero-nursing-student.jpg"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-sm font-extrabold text-[#132847]">
                  Undergraduate Nursing Student
                </div>
                <div className="text-[11px] text-[#248568] font-bold">
                  B.Sc. Nursing Batch · Nagaram Campus
                </div>
              </div>
            </div>
          </div>

          {/* Right Dark Navy Stat Card with 98% (Exact Medova layout) */}
          <div className="lg:col-span-4 bg-[#132847] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#38B6FF]">
                ACADEMIC PERFORMANCE
              </span>
              <div className="font-display text-5xl sm:text-6xl font-extrabold text-[#FF5E5E]">
                98%
              </div>
              <h3 className="font-display text-base font-extrabold text-white">
                Clinical Readiness & Exam Success
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Combining structured syllabus, anatomical demonstration, and disciplined laboratory
                rounds.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 text-[11px] text-slate-300">
              {appleCollegeConfig.sponsoringSociety}
              <span className="block text-[#34D399] font-bold">
                Reg. No. {appleCollegeConfig.registrationNumber}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Photos Strip Below (Medova style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
          <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-xs">
            <img
              src="/images/campus-cpr-workshop.jpg"
              alt="CPR Workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-xs">
            <img
              src="/images/campus-health-awareness.jpg"
              alt="Health Awareness"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-xs">
            <img
              src="/images/facility-anatomy-demo.jpg"
              alt="Anatomy Demonstration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

