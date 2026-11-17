import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Microscope, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuickInfoCards: React.FC = () => {
  return (
    <section id="quick-info" className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CARD 1: Paramedical & Allied Health Sciences */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl p-6 sm:p-7 bg-[#FFF0F0] border border-[#FADCDC] shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#FADCDC] flex items-center justify-center text-[#FF5E5E] shadow-xs">
              <Activity className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-display text-lg font-extrabold text-[#132847]">
                Paramedical & Allied Health Sciences
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized education in medical laboratory technology, emergency medical care, patient diagnostics, and vital clinical support systems for modern healthcare.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] transition-all group"
            >
              <span>Explore Programmes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 2: Clinical Diagnostics & Practical Labs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-2xl p-6 sm:p-7 bg-[#EBF7EE] border border-[#D9EEDF] shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#D9EEDF] flex items-center justify-center text-[#248568] shadow-xs">
              <Microscope className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-display text-lg font-extrabold text-[#132847]">
                Clinical Diagnostics & Practical Labs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hands-on practical training in pathology, anatomy, and microbiology laboratories with advanced diagnostic instruments and sterile clinical procedures.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] transition-all group"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 3: Hospital Rotations & Career Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="rounded-2xl p-6 sm:p-7 bg-[#FEF7E2] border border-[#FBEEC3] shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#FBEEC3] flex items-center justify-center text-[#D97706] shadow-xs">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-display text-lg font-extrabold text-[#132847]">
                Hospital Postings & Career Pathways
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supervised bedside rotations and multi-specialty hospital exposure preparing paramedical professionals for high-demand clinical careers across India.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] transition-all group"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
