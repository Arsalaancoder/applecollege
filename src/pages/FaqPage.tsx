import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Minus,
  HelpCircle,
  PhoneCall,
  ArrowRight,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { faqsData, appleCollegeConfig } from '@/data/appleCollegeData';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>([faqsData[0].id]);

  const expandedFaqs = [
    ...faqsData,
    {
      id: 'faq-hostel',
      topic: 'Facilities',
      question: 'Are accommodation and transport facilities accessible for students?',
      answer:
        'Yes. The institution provides assistance with local boarding facilities, hostel tie-ups, and student bus transport connectivity across key transit routes in Secunderabad and Hyderabad.',
    },
    {
      id: 'faq-clinical-shifts',
      topic: 'Academics',
      question: 'How are clinical hospital ward postings organized during the course?',
      answer:
        'Clinical rotations are structured in rotational batches under experienced clinical preceptors. Students gain hands-on exposure to general medical wards, surgical units, pediatric care, labor rooms, and outpatient triage.',
    },
    {
      id: 'faq-society',
      topic: 'Governance',
      question: 'Which educational society governs Apple College of Nursing?',
      answer:
        'Apple College of Nursing is managed under the governance of Telangana Xpress Educational Society (Registration No. 214/2025) and belongs to Orange Colleges (Orange Group of Nursing & Paramedical Colleges).',
    },
    {
      id: 'faq-documents-needed',
      topic: 'Admissions',
      question: 'What original certificates are required at the time of admission enrollment?',
      answer:
        'Candidates must bring SSC/10th marks memo, Intermediate (10+2) marks memo, Transfer Certificate (TC), Conduct Certificate, Migration Certificate (if from outside Telangana), Aadhaar card copies, and passport-size photographs.',
    },
  ];

  const categories = ['All', 'Admissions', 'Academics', 'Facilities', 'Governance'];

  const filteredFaqs = expandedFaqs.filter((faq) => {
    const matchesCategory =
      activeCategory === 'All' ||
      faq.topic.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <SeoHelmet
        title="Frequently Asked Questions (FAQ) | Apple College of Nursing"
        description="Find verified answers to common questions about admissions, eligibility criteria, B.Sc. Nursing, GNM diploma, skills laboratories, and society governance at Apple College of Nursing in Nagaram, Hyderabad."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="ANSWERS & GUIDANCE"
        title="Frequently Asked Questions"
        highlightPhrase="Questions"
        description="Find clear, verified answers regarding nursing programmes, eligibility requirements, admission steps, practical labs, and campus facilities in Nagaram, Hyderabad."
        breadcrumbs={[{ label: 'FAQ' }]}
        bgImage="/images/facility-smart-classroom.jpg"
      />

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Category Cards matching Teamway Pastel Style */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>HELP DIRECTORY</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#132847] tracking-tight">
              Select a Topic for Instant Answers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <EditorialCard
              theme="peach"
              graphic="circles"
              statusBadge="Category • Admissions"
              title="Eligibility & Cutoffs"
              description="BiPC 10+2 marks criteria, minimum age limit, and official counseling schedules."
              linkText="View Admissions FAQs"
              onClick={() => setActiveCategory('Admissions')}
            />
            <EditorialCard
              theme="mint"
              graphic="blocks"
              statusBadge="Category • Academics"
              title="Clinical Training"
              description="Hospital rotations, simulation laboratory practicals, and syllabus progressions."
              linkText="View Academics FAQs"
              onClick={() => setActiveCategory('Academics')}
            />
            <EditorialCard
              theme="lavender"
              graphic="chevron"
              statusBadge="Category • Facilities"
              title="Hostel & Transit"
              description="Hostel boarding assistance, student mess facilities, and bus transit across Hyderabad."
              linkText="View Facilities FAQs"
              onClick={() => setActiveCategory('Facilities')}
            />
            <EditorialCard
              theme="slate"
              graphic="semicircles"
              statusBadge="Category • Governance"
              title="Society Governance"
              description="Telangana Xpress Educational Society (Reg. 214/2025) and Orange Colleges affiliation."
              linkText="View Governance FAQs"
              onClick={() => setActiveCategory('Governance')}
            />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Search & Category Filter Controls */}
          <div className="space-y-6 mb-12">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search questions by keyword (e.g. eligibility, B.Sc., labs, fees)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3.5 pl-11 pr-4 rounded-2xl bg-[#F8F9FD] border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#132847] shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#132847] text-white shadow-md'
                      : 'bg-[#F8F9FD] text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:border-[#132847]/40 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF5E5E] shrink-0" />
                        <span className="font-display text-sm sm:text-base font-extrabold text-[#132847]">
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-[#132847] text-white' : 'bg-[#F8F9FD] text-slate-600'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                          <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-11">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 space-y-2">
                <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs text-slate-500">
                  No matching questions found for "{searchQuery}". Try a different keyword or contact our desk.
                </p>
              </div>
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-14 rounded-3xl p-8 bg-[#F8F9FD] border border-slate-200 text-center space-y-4">
            <h3 className="font-display text-xl font-extrabold text-[#132847]">
              Still Have Unanswered Questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Our admission counseling desk is open Monday to Friday (09:30 AM – 05:00 PM) to assist prospective students and parents.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${appleCollegeConfig.phones[0].replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#132847] text-white text-xs font-bold hover:bg-[#0E1D33] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Call Admissions: {appleCollegeConfig.phones[0]}</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5E5E] text-white text-xs font-bold hover:bg-[#EE4B4B] transition-colors"
              >
                <span>Write to Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <AdmissionCtaBanner
        title="Ready to Apply for the Current Session?"
        subtitle="Complete your admission inquiry form to reserve an enrollment consultation slot at our Nagaram campus."
      />
    </>
  );
};
