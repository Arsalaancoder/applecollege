import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogSection: React.FC = () => {
  const articles = [
    {
      id: 'art-1',
      title: 'CPR & Resuscitation Hands-On Workshop for Nursing Trainees',
      date: '14 Nov 2026',
      author: 'Academic Faculty',
      category: 'Clinical Workshop',
      image: '/images/campus-cpr-workshop.jpg',
      excerpt:
        'Faculty-guided practical simulation on floor manikins teaching vitals assessment and basic cardiac life support protocols.',
    },
    {
      id: 'art-2',
      title: 'Community Health & Hygiene Outreach Drive at Keesara Mandal',
      date: '08 Nov 2026',
      author: 'Community Wing',
      category: 'Field Health',
      image: '/images/campus-outreach-camp.jpg',
      excerpt:
        'Nursing students conducted free blood pressure monitoring, health education, and hygiene awareness for local families.',
    },
    {
      id: 'art-3',
      title: 'Annual Lamp Lighting Ceremony & Professional Nursing Pledge',
      date: '01 Nov 2026',
      author: 'Student Affairs',
      category: 'Campus Event',
      image: '/images/campus-cultural-fest.jpg',
      excerpt:
        'Induction ceremony celebrating the professional commitment, compassion, and ethical duties of our incoming nursing cohort.',
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
            <span>LATEST ARTICLES & BLOG</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
            Apple College's Latest News & Events
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Seminars, hands-on workshops, community outreach drives, and student achievements from
            our Nagaram campus.
          </p>
        </motion.div>

        {/* 3 Blog Cards (Exact Medova layout) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {articles.map((art) => (
            <motion.article
              key={art.id}
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
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[#132847] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    {art.category}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF5E5E]" />
                      <span>{art.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#248568]" />
                      <span>{art.author}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-base font-extrabold text-[#132847] group-hover:text-[#FF5E5E] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">{art.excerpt}</p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                <a
                  href="/campus-life"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#132847] group-hover:text-[#FF5E5E] transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

