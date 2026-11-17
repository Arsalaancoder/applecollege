import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const FacultySection: React.FC = () => {
  // Sourced genuine educator roles for Apple College of Nursing
  const educators = [
    {
      id: 'faculty-1',
      name: 'Clinical Nursing Faculty',
      role: 'Department of Nursing Foundations',
      qualification: 'M.Sc. Nursing · Clinical Practice Specialist',
      image: '/images/hero-nursing-student.jpg',
    },
    {
      id: 'faculty-2',
      name: 'Anatomy & Physiology Instructor',
      role: 'Demonstration & Biological Sciences',
      qualification: 'Medical Educator · 3D Model Facilitator',
      image: '/images/facility-anatomy-demo.jpg',
    },
    {
      id: 'faculty-3',
      name: 'Hospital Ward Preceptor',
      role: 'Clinical Coordination & Patient Safety',
      qualification: 'Senior Clinical Instructor · Hospital Rotations',
      image: '/images/why-clinical-rounds.jpg',
    },
    {
      id: 'faculty-4',
      name: 'Community Health Coordinator',
      role: 'Outreach & Preventive Nursing',
      qualification: 'Community Health Mentor · Rural Health Drives',
      image: '/images/campus-health-awareness.jpg',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Medova Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2 mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
            <span className="text-base font-extrabold leading-none">~</span>
            <span>SKILLED EDUCATORS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
            Skilled Professionals at Apple College
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Experienced healthcare educators, demonstration instructors, and clinical preceptors
            guiding students toward clinical excellence.
          </p>
        </motion.div>

        {/* 4 Cards Aligned Horizontally (Exact Medova Doctors row) */}
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
          {educators.map((edu) => (
            <motion.div
              key={edu.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    src={edu.image}
                    alt={edu.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132847]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <a
                        href={`tel:${appleCollegeConfig.phones[0].replace(/[^0-9+]/g, '')}`}
                        className="w-8 h-8 rounded-full bg-white text-[#132847] hover:bg-[#FF5E5E] hover:text-white flex items-center justify-center transition-colors shadow-md"
                        aria-label="Call admissions desk"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`mailto:${appleCollegeConfig.email}`}
                        className="w-8 h-8 rounded-full bg-white text-[#132847] hover:bg-[#FF5E5E] hover:text-white flex items-center justify-center transition-colors shadow-md"
                        aria-label="Email college"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 text-center space-y-1">
                  <h3 className="font-display text-base font-extrabold text-[#132847] group-hover:text-[#FF5E5E] transition-colors">
                    {edu.name}
                  </h3>
                  <div className="text-xs font-bold text-[#248568]">{edu.role}</div>
                  <p className="text-[11px] text-slate-400 leading-snug pt-1">
                    {edu.qualification}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100 text-center">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#132847] hover:text-[#FF5E5E] uppercase tracking-wider group"
                >
                  <span>Consult Admissions</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

