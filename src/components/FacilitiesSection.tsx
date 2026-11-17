import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { facilitiesData } from '@/data/appleCollegeData';

export const FacilitiesSection: React.FC = () => {
  // Take first 4 primary facilities to match Medova's 4-card "Our Care Values" row
  const displayFacilities = facilitiesData.slice(0, 4);

  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FD] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E] mb-2">
            <span className="text-base font-extrabold leading-none">~</span>
            <span>OUR CARE VALUES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
            Specialized Learning & Practical Facilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Purpose-built nursing skills stations, 3D anatomy models, smart classrooms and digital
            learning terminals in Nagaram, Hyderabad.
          </p>
        </motion.div>

        {/* 4 Cards Aligned Horizontally (Exact Medova "Our Care Values" row) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayFacilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={facility.imageUrl}
                  alt={facility.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[#132847] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  {facility.category}
                </span>
              </div>

              <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-extrabold text-[#132847] group-hover:text-[#FF5E5E] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Facilities Link */}
        <div className="text-center pt-10">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#132847] hover:bg-[#132847] hover:text-white hover:border-[#132847] shadow-sm hover:shadow-md transition-all"
          >
            <span>Explore All Campus Facilities & Laboratories</span>
            <ArrowRight className="w-4 h-4 text-[#FF5E5E]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
