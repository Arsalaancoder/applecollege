import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Rocket,
  BarChart3,
  Search,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { appleCollegeConfig } from '@/data/appleCollegeData';

interface PathwayCard {
  id: string;
  stepNumber: string;
  icon: React.ElementType;
  name: string;
  duration: string;
  eligibility: string;
  description: string;
  features: string[];
  buttonLabel: string;
  link: string;
  accentColor: string;
  tintColor: string;
  glowColor: string;
  badge: string;
}

export const PricingPlansSection: React.FC = () => {
  const pathways: PathwayCard[] = [
    {
      id: 'step-01',
      stepNumber: '01',
      icon: Monitor,
      name: 'B.Sc. Nursing Degree',
      duration: '4-Year University Degree',
      eligibility: '10+2 with BiPC (Min. 45-50%)',
      description:
        'Comprehensive undergraduate programme affiliated to KNRUHS, integrating pre-clinical sciences, anatomy simulation labs, and multi-speciality clinical rotations.',
      features: [
        'Recognized KNRUHS University Degree',
        'Advanced 3D Anatomy Simulation',
        'Multispeciality Hospital Postings',
      ],
      buttonLabel: 'Enquire B.Sc.',
      link: '/academics/bsc-nursing',
      accentColor: '#FF5E5E',
      tintColor: '#FFF0F0',
      glowColor: 'rgba(255, 94, 94, 0.35)',
      badge: 'Flagship Degree',
    },
    {
      id: 'step-02',
      stepNumber: '02',
      icon: Rocket,
      name: 'GNM Nursing Diploma',
      duration: '3-Year Clinical Diploma',
      eligibility: '10+2 Intermediate (Any Stream)',
      description:
        'Rigorous 3-year diploma certified by INC & TSNC, designed for direct bedside care mastery, maternal & child healthcare, and emergency triage operations.',
      features: [
        'Approved by INC & TSNC Hyderabad',
        'Bedside Nursing Care & Midwifery',
        'Community Health Field Postings',
      ],
      buttonLabel: 'Enquire GNM',
      link: '/academics/gnm',
      accentColor: '#F97316',
      tintColor: '#FFF7ED',
      glowColor: 'rgba(249, 115, 22, 0.35)',
      badge: 'Diploma Course',
    },
    {
      id: 'step-03',
      stepNumber: '03',
      icon: BarChart3,
      name: 'Clinical Rotations',
      duration: 'Supervised Hospital Postings',
      eligibility: 'Enrolled Apple College Students',
      description:
        'Supervised bedside clinical postings in leading partner hospitals in Hyderabad, providing practical experience in casualty, surgical wards, and critical ICUs.',
      features: [
        '100% Supervised Ward Training',
        'Casualty & ICU Clinical Exposure',
        'Continuous Competency Evaluation',
      ],
      buttonLabel: 'View Facilities',
      link: '/facilities',
      accentColor: '#2563EB',
      tintColor: '#EFF6FF',
      glowColor: 'rgba(37, 99, 235, 0.35)',
      badge: 'Practical Track',
    },
    {
      id: 'step-04',
      stepNumber: '04',
      icon: Search,
      name: 'Council Registration',
      duration: 'State & National Licensing',
      eligibility: 'Final Year Graduating Cohort',
      description:
        'Dedicated administrative and faculty guidance for registration under Telangana State Nursing Council (TSNC) and nationwide professional career placements.',
      features: [
        'TSNC & INC Registration Guidance',
        'Career & Placement Mentorship',
        'Global Healthcare Opportunities',
      ],
      buttonLabel: 'Admissions Info',
      link: '/admissions',
      accentColor: '#7C3AED',
      tintColor: '#F5F3FF',
      glowColor: 'rgba(124, 58, 237, 0.35)',
      badge: 'Licensing & Career',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FD] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2 mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
            <span className="text-base font-extrabold leading-none">~</span>
            <span>TRANSPARENT ADMISSIONS & PATHWAYS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
            Transparent Academic Pathways
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Clear, step-by-step educational milestones from admission eligibility to hands-on
            clinical training and professional state council registration.
          </p>
        </motion.div>

        {/* 4 INFOGRAPHIC ELEMENT CARDS (Exact match to reference design) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-6 lg:gap-8 items-stretch"
        >
          {pathways.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="relative group flex flex-col pt-3 pr-3 pb-3 pl-3"
              >
                {/* BACK LAYER: Colored Offset Frame with Glow Shadow */}
                <div
                  className="absolute inset-0 rounded-[28px] border-[2.5px] transition-all duration-300 pointer-events-none group-hover:scale-[1.02]"
                  style={{
                    borderColor: plan.accentColor,
                    boxShadow: `0 14px 34px -8px ${plan.glowColor}`,
                    transform: 'translate(6px, 8px)',
                  }}
                />

                {/* FOREGROUND LAYER: Main White Card with Notched Corner Aesthetics */}
                <div className="relative bg-white rounded-[24px] p-6 shadow-md border border-slate-100 flex flex-col justify-between h-full z-10 transition-all duration-300 group-hover:shadow-xl">
                  {/* Decorative corner accent hugs the colored frame */}
                  <div
                    className="absolute top-2 right-2 w-5 h-5 rounded-tr-xl border-t-2 border-r-2 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: plan.accentColor }}
                  />
                  <div
                    className="absolute bottom-2 left-2 w-5 h-5 rounded-bl-xl border-b-2 border-l-2 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: plan.accentColor }}
                  />

                  {/* Top: Centered Minimalist Icon in Soft Tinted Badge */}
                  <div className="text-center pt-1 pb-2">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                      style={{
                        backgroundColor: plan.tintColor,
                        color: plan.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div
                      className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-2"
                      style={{
                        backgroundColor: plan.tintColor,
                        color: plan.accentColor,
                      }}
                    >
                      {plan.badge}
                    </div>

                    <h3 className="font-display text-base font-extrabold text-[#132847] uppercase tracking-tight">
                      {plan.name}
                    </h3>

                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {plan.duration}
                    </div>
                  </div>

                  {/* Middle Content: Eligibility & Description */}
                  <div className="space-y-3 py-3 border-t border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed text-center">
                      {plan.description}
                    </p>

                    <div className="rounded-xl bg-[#F8F9FD] p-2.5 border border-slate-100 text-center">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Eligibility
                      </div>
                      <div className="text-[11px] font-bold text-[#132847]">
                        {plan.eligibility}
                      </div>
                    </div>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 text-[11px] text-slate-600 pt-1">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-1.5">
                          <span
                            className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: plan.tintColor,
                              color: plan.accentColor,
                            }}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Area: CTA Button + Step Number (Matching Infographic) */}
                  <div className="pt-4 border-t border-slate-100 mt-2 flex items-center justify-between gap-3">
                    <Link
                      to={plan.link}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white transition-all shadow-xs hover:shadow-md active:scale-95"
                      style={{
                        backgroundColor:
                          plan.accentColor === '#FF5E5E' ? '#FF5E5E' : '#132847',
                      }}
                    >
                      <span>{plan.buttonLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    {/* Step Number at Bottom Right in Accent Color */}
                    <span
                      className="font-mono text-3xl font-extrabold tracking-tighter select-none transition-transform duration-300 group-hover:scale-105"
                      style={{ color: plan.accentColor }}
                    >
                      {plan.stepNumber}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Regulatory Note */}
        <div className="text-center mt-8 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5E5E]" />
          <span>{appleCollegeConfig.regulatoryNote}</span>
        </div>
      </div>
    </section>
  );
};
