import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuickInfoCards: React.FC = () => {
  return (
    <section id="quick-info" className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CARD 1: Soft Pink / Peach (Medova "Need Immediate Care?") */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl p-6 sm:p-7 bg-[#FFF0F0] border border-[#FADCDC] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="space-y-2">
            <h3 className="font-display text-lg font-extrabold text-[#132847]">
              Need Immediate Care?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Apple College of Nursing is equipped with standard nursing skills laboratories,
              anatomical learning aids & biological sciences.
            </p>
          </div>

          <div className="pt-5">
            <a
              href="tel:+919346410606"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] transition-all"
            >
              <span>Emergency Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* CARD 2: Pale Green / Mint (Medova "Quality & Patient Safety") */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-2xl p-6 sm:p-7 bg-[#EBF7EE] border border-[#D9EEDF] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="space-y-2">
            <h3 className="font-display text-lg font-extrabold text-[#132847]">
              Quality & Patient Safety
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured clinical training, patient-care simulations, infection control protocols &
              supervised bedside care readiness.
            </p>
          </div>

          <div className="pt-5">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] transition-all"
            >
              <span>More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 3: Pale Yellow / Cream (Medova "Unlock Your Wellness Journey") */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="rounded-2xl p-6 sm:p-7 bg-[#FEF7E2] border border-[#FBEEC3] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="space-y-2">
            <h3 className="font-display text-lg font-extrabold text-[#132847]">
              Unlock Your Wellness Journey
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore admissions for B.Sc. Nursing (Inter BiPC) and GNM diploma programmes under
              Telangana Xpress Educational Society.
            </p>
          </div>

          <div className="pt-5">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 text-xs font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] transition-all"
            >
              <span>Make Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
