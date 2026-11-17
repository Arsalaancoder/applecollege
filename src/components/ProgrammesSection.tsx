import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, HeartPulse, ShieldCheck, Microscope, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgrammesSectionProps {
  onSelectProgramme?: (code: string) => void;
}

export const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({ onSelectProgramme }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: 'bsc-nursing',
      title: 'B.Sc. Nursing',
      code: 'B.Sc. Nursing',
      duration: '4 Years · Inter BiPC',
      linkUrl: '/academics/bsc-nursing',
      description:
        '4-Year undergraduate degree program combining nursing science, human anatomy, simulation labs, and clinical hospital exposure.',
      icon: <Stethoscope className="w-6 h-6 text-[#2A7FBA]" />,
      iconBg: 'bg-[#EBF3FB]',
      isHighlighted: false,
      details: {
        eligibility: 'Intermediate (10+2) with Physics, Chemistry & Biology (BiPC)',
        training: 'Classroom study, skills laboratories, simulation manikins, and hospital rotations.',
        scope: 'Multispecialty hospitals, community healthcare centres, public health, higher studies.',
      },
    },
    {
      id: 'gnm-nursing',
      title: 'General Nursing & Midwifery',
      code: 'GNM',
      duration: '3 Years · Any Stream',
      linkUrl: '/academics/gnm',
      description:
        '3-Year diploma course focusing on essential bedside care routines, vital signs monitoring, maternal health, and community nursing.',
      icon: <HeartPulse className="w-6 h-6 text-[#248568]" />,
      iconBg: 'bg-[#EAF5EE]',
      isHighlighted: false,
      details: {
        eligibility: 'Intermediate (10+2) from any stream/group from a recognized board',
        training: 'Bedside patient care, ward management, maternal health, and clinical practicals.',
        scope: 'Hospital wards, clinics, maternal and child healthcare centres, home healthcare.',
      },
    },
    {
      id: 'practical-skills',
      title: 'Clinical Skills & Practical Labs',
      code: 'Skills Lab',
      duration: 'Foundation Training',
      linkUrl: '/facilities',
      description:
        'Practical stations equipped with simulation manikins, 3D anatomical models, and sterile procedure training for clinical readiness.',
      icon: <ShieldCheck className="w-6 h-6 text-[#34D399]" />,
      iconBg: 'bg-white/10',
      isHighlighted: true, // HIGHLIGHTED IN DARK NAVY AS PER MEDOVA
      details: {
        eligibility: 'Core practical curriculum for all enrolled nursing students',
        training: 'Vitals triage, CPR training, wound dressing, catheterization, and sterile procedures.',
        scope: 'Prepares students for confidence and safety during live hospital ward postings.',
      },
    },
    {
      id: 'clinical-rotations',
      title: 'Hospital Ward Exposure',
      code: 'Hospital Rounds',
      duration: 'Supervised Postings',
      linkUrl: '/facilities',
      description:
        'Supervised clinical ward rotations, patient vital signs monitoring, emergency awareness, and multidisciplinary healthcare teamwork.',
      icon: <Microscope className="w-6 h-6 text-[#8B5CF6]" />,
      iconBg: 'bg-[#F4EEFA]',
      isHighlighted: false,
      details: {
        eligibility: 'Integrated into B.Sc. Nursing and GNM coursework semesters',
        training: 'Bedside case presentations, clinical observations, and senior nurse guidance.',
        scope: 'Real-world clinical experience across partner healthcare institutions in Telangana.',
      },
    },
  ];

  const selectedService = services.find((s) => s.id === activeModal);

  return (
    <section id="academics" className="py-16 sm:py-20 lg:py-24 bg-hex-pattern border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Medova Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
            <span className="text-base font-extrabold leading-none">~</span>
            <span>OUR SERVICES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
            Our Amazing Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed pt-1">
            We have qualified nursing faculty & clinical instructors. We are equipped with modern
            skills laboratories & practical training setups.
          </p>
        </div>

        {/* 4 Cards Aligned Horizontally on Desktop (1 Dark Navy Highlighted) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-center transition-shadow duration-300 ${
                item.isHighlighted
                  ? 'bg-[#132847] text-white shadow-xl border border-[#1A3660] hover:shadow-2xl'
                  : 'bg-white text-[#132847] shadow-sm border border-slate-200/80 hover:shadow-xl'
              }`}
            >
              <div className="space-y-4">
                {/* Centered Icon Box */}
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                >
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      item.isHighlighted ? 'text-[#34D399]' : 'text-slate-400'
                    }`}
                  >
                    {item.duration}
                  </div>
                  <h3
                    className={`font-display text-lg font-extrabold leading-snug ${
                      item.isHighlighted ? 'text-white' : 'text-[#132847]'
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className={`text-xs leading-relaxed ${
                    item.isHighlighted ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6">
                {item.isHighlighted ? (
                  <Link
                    to={item.linkUrl}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all cursor-pointer shadow-xs hover:shadow-md active:scale-95"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to={item.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#132847] hover:text-[#FF5E5E] transition-colors cursor-pointer group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Programmes Link */}
        <div className="text-center pt-8">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#132847] hover:bg-[#0E1D33] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All Academic Programmes</span>
            <ArrowRight className="w-4 h-4 text-[#FF5E5E]" />
          </Link>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-[#132847]/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E5E]">
                    {selectedService.code}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-[#132847]">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">{selectedService.duration}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                <p>
                  <strong>Eligibility / Enrollment:</strong> {selectedService.details.eligibility}
                </p>
                <p>
                  <strong>Practical Curriculum:</strong> {selectedService.details.training}
                </p>
                <p>
                  <strong>Healthcare Scope:</strong> {selectedService.details.scope}
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#admissions"
                  onClick={() => {
                    onSelectProgramme?.(selectedService.code);
                    setActiveModal(null);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF5E5E] text-white text-xs font-bold hover:bg-[#EE4B4B]"
                >
                  <span>Apply for Admission</span>
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
