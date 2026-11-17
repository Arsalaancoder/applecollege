import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '@/data/appleCollegeData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(faqsData[0].id);

  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>FAQ QUESTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Frequently Ask Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Verified information regarding nursing courses, eligibility criteria, and admissions.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqsData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F8F9FD] border-slate-300 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-[#132847]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#132847] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* View Full FAQ Page Link */}
          <div className="pt-2 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#132847] hover:text-[#FF5E5E] transition-colors"
            >
              <span>Have More Questions? View All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
