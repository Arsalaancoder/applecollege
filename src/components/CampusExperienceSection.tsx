import React from 'react';
import { motion } from 'framer-motion';
import { campusExperienceData } from '@/data/appleCollegeData';
import {
  BlurInText,
  SectionEyebrow,
  staggerContainerVariant,
  staggerCardVariant,
} from './MotionPrimitives';

export const CampusExperienceSection: React.FC = () => {
  return (
    <section id="campus-life" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <SectionEyebrow label="Campus & Student Experience" />
            <BlurInText>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#142C55] tracking-tight">
                Beyond Textbooks: Workshops, Outreach & Student Life
              </h2>
            </BlurInText>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Practical workshops, community health awareness drives, and collaborative activities that nurture confident, empathetic nursing graduates.
          </p>
        </div>

        {/* Modern Asymmetrical Editorial Photo Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {campusExperienceData.map((item, idx) => {
            const isTallFeature = idx === 0;
            const isWideBanner = idx === 3;

            return (
              <motion.div
                key={item.id}
                variants={staggerCardVariant}
                className={`group relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-900 ${
                  item.spanClass
                } ${
                  isTallFeature
                    ? 'min-h-[340px] md:min-h-[460px]'
                    : isWideBanner
                    ? 'min-h-[260px] md:min-h-[300px]'
                    : 'min-h-[220px]'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142C55]/90 via-[#142C55]/30 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-6 sm:p-7 text-white">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#248568] text-white text-[11px] font-bold uppercase tracking-wider mb-2.5">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1.5 max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

