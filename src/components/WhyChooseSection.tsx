import React from 'react';
import { Award, Microscope, Hospital, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      id: 'legacy',
      title: '25+ Experience & Society Governance',
      description:
        'Sponsored by Telangana Xpress Educational Society (Reg. 214/2025) under Orange Colleges with dedicated healthcare guidance.',
      icon: <Award className="w-5 h-5 text-[#FF5E5E]" />,
      bg: 'bg-[#FFF0F0]',
    },
    {
      id: 'labs',
      title: 'Modern Skills Laboratories',
      description:
        'Equipped with 3D anatomical models, simulation manikins, and procedural practice setups for hands-on mastery.',
      icon: <Microscope className="w-5 h-5 text-[#248568]" />,
      bg: 'bg-[#EBF7EE]',
    },
    {
      id: 'rotations',
      title: 'Hospital Ward Clinical Rotations',
      description:
        'Supervised clinical postings bridging theoretical knowledge with bedside patient care, hygiene, and vitals monitoring.',
      icon: <Hospital className="w-5 h-5 text-[#2A7FBA]" />,
      bg: 'bg-[#EBF3FB]',
    },
    {
      id: 'faculty',
      title: 'Attentive Faculty Mentorship',
      description:
        'Experienced clinical nursing instructors, individualized academic counseling, and structured career preparation.',
      icon: <Users className="w-5 h-5 text-[#D97706]" />,
      bg: 'bg-[#FEF7E2]',
    },
  ];

  return (
    <section id="why-choose" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading + Features List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>WHY CHOOSE US</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
                Exceptional Care For Every Patient
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                We have world class lab instructors. We are equipped with modern nursing skills labs
                and simulation manikins. We ensure best quality healthcare education.
              </p>
            </div>

            {/* Feature Items List (Exact Medova style) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2"
            >
              {features.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45 },
                    },
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3.5 group cursor-default"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-sm font-extrabold text-[#132847] group-hover:text-[#FF5E5E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Medova Iconic Overlapping Circular Photographs */}
          <div className="lg:col-span-6 relative flex justify-center py-6">
            <div className="relative w-full max-w-md">
              {/* Main Large Circular Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-72 h-72 sm:w-88 sm:h-88 mx-auto rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-slate-100"
              >
                <img
                  src="/images/team-nursing-doctors.png"
                  alt="Apple College of Nursing Healthcare Educators and Trainees"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Smaller Overlapping Circular Photo 1 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[5px] border-white shadow-xl bg-white -mt-16 sm:-mt-20 ml-2 relative z-10"
              >
                <img
                  src="/images/why-communication.jpg"
                  alt="Faculty clinical discussion session"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Smaller Overlapping Circular Photo 2 (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[5px] border-white shadow-xl bg-white absolute bottom-2 right-2 z-10"
              >
                <img
                  src="/images/why-counselling.jpg"
                  alt="Academic counseling and guidance"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
