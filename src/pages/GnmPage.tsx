import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Building,
  Briefcase,
  Baby,
} from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { academicProgrammesData, appleCollegeConfig } from '@/data/appleCollegeData';

export const GnmPage: React.FC = () => {
  const programme = academicProgrammesData.find((p) => p.slug === 'gnm')!;

  const yearlySyllabus = [
    {
      year: 'Year 1',
      title: 'Foundations of Nursing & Biological Sciences',
      modules: [
        'Bio-Sciences (Anatomy & Physiology, Microbiology)',
        'Behavioral Sciences (Psychology & Sociology)',
        'Nursing Foundations (Fundamentals of Nursing & First Aid)',
        'Community Health Nursing I & Environmental Hygiene',
        'English & Computer Literacy',
        'Supervised Lab Practice on Simulation Manikins',
      ],
    },
    {
      year: 'Year 2',
      title: 'Medical-Surgical Nursing & Mental Health',
      modules: [
        'Medical-Surgical Nursing I (Adult Patient Care)',
        'Medical-Surgical Nursing II (Specialty Units)',
        'Mental Health & Psychiatric Nursing',
        'Child Health Nursing (Pediatrics)',
        'Hospital Bedside Clinical Postings',
      ],
    },
    {
      year: 'Year 3',
      title: 'Midwifery, Maternal Care & Community Outreach',
      modules: [
        'Midwifery & Gynaecological Nursing',
        'Community Health Nursing II',
        'Nursing Administration & Ward Management Basics',
        'Clinical Internship / Supervised Rotations in Labor Rooms & Wards',
        'Rural & Urban Community Health Field Postings',
      ],
    },
  ];

  return (
    <>
      <SeoHelmet
        title="General Nursing & Midwifery (GNM) | Apple College of Nursing"
        description="General Nursing & Midwifery (3-Year Diploma) at Apple College of Nursing & Apple School of Nursing, Nagaram, Hyderabad. Eligibility: Intermediate Any Stream. Hands-on bedside care, maternal health, and clinical rotations."
      />

      {/* PROGRAMME HERO BANNER */}
      <PageBanner
        tag="PROFESSIONAL DIPLOMA"
        title="General Nursing & Midwifery (GNM)"
        highlightPhrase="GNM"
        description="A three-year diploma course focused on foundational bedside patient care, maternal health, vital signs monitoring, and community healthcare readiness."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'GNM Diploma' },
        ]}
        bgImage="/images/program-gnm-nursing.jpg"
      />

      {/* QUICK FACTS STRIP */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Duration
              </span>
              <span className="font-display text-lg sm:text-xl font-extrabold text-[#132847]">
                3 Years
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#EBF7EE] border border-[#D9EEDF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Eligibility
              </span>
              <span className="font-display text-base sm:text-lg font-extrabold text-[#248568]">
                Inter (10+2) Any Stream
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF0F0] border border-[#FADCDC]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Programme Type
              </span>
              <span className="font-display text-base sm:text-lg font-extrabold text-[#FF5E5E]">
                Nursing Diploma
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FEF7E2] border border-[#FBEEC3]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Campus Location
              </span>
              <span className="font-display text-base sm:text-lg font-extrabold text-[#D97706]">
                Nagaram, Hyderabad
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW & SISTER INSTITUTION NOTE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>DIPLOMA PATHWAY</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
                Practical Bedside Care & Midwifery Training
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                The General Nursing and Midwifery (GNM) course provides comprehensive, practice-focused
                training for students interested in clinical nursing routines, maternal-child healthcare,
                and vital signs observation. It welcomes candidates from Any Group in Intermediate (10+2),
                offering an accessible, hands-on path into healthcare service.
              </p>

              {/* Sister Institution Distinction Box */}
              <div className="p-5 rounded-2xl bg-[#F5F7FC] border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-[#132847] flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#2A7FBA]" />
                  <span>Campus Institutional Arrangement</span>
                </div>
                <p className="leading-relaxed">
                  On the Nagaram campus, the GNM diploma is listed on the Apple College of Nursing profile
                  and delivered alongside sister institution <strong>Apple School of Nursing</strong> under{' '}
                  <strong>{appleCollegeConfig.sponsoringSociety}</strong>.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-display text-sm font-extrabold text-[#132847] uppercase tracking-wider">
                  Core Training Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Bedside patient care and comfort routines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Labor room & maternity training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Community health field screenings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Skills lab simulation with nursing instructors</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/program-gnm-nursing.jpg"
                  alt="Nursing students practicing blood pressure monitoring and patient care"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#132847] text-white shadow-xl max-w-xs text-xs space-y-1 hidden sm:block">
                <div className="text-[#34D399] font-bold flex items-center gap-1.5">
                  <Baby className="w-4 h-4" />
                  <span>Maternal & Midwifery Care</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Practical instruction in neonatal wellness, obstetric monitoring, and pediatric nursing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-YEAR CURRICULUM BREAKDOWN */}
      <section className="py-16 sm:py-20 bg-hex-pattern border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>YEARLY SYLLABUS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              3-Year Diploma Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Balanced syllabus blending fundamental biological knowledge with direct hospital ward exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {yearlySyllabus.map((item, idx) => {
              const themes = ['mint', 'peach', 'lavender'] as const;
              const graphics = ['blocks', 'chevron', 'circles'] as const;
              const dots = ['bg-[#248568]', 'bg-[#FF5E5E]', 'bg-[#7C3AED]'];

              return (
                <EditorialCard
                  key={idx}
                  status={`Diploma Year 0${idx + 1}`}
                  statusDotColor={dots[idx]}
                  theme={themes[idx]}
                  title={item.title}
                  subtitle={item.year}
                  description="Annual diploma curriculum emphasizing practical patient hygiene, clinical medication drills, and supervised hospital ward rotations."
                  actionText="Enquire GNM Pathway"
                  actionLink="/admissions"
                  graphic={graphics[idx]}
                >
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    {item.modules.slice(0, 4).map((mod, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#248568] shrink-0" />
                        <span className="truncate">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </EditorialCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES & ADMISSIONS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>CAREER PATHWAYS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
                Career Scope After GNM
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                GNM qualified nurses are eligible for staff nursing positions across hospitals, maternity centers,
                rural clinics, and community healthcare initiatives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {programme.careerOpportunities.map((career, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8F9FD] border border-slate-200/80 flex items-center gap-2.5 text-xs font-bold text-[#132847]"
                  >
                    <Briefcase className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl p-8 bg-[#132847] text-white shadow-xl space-y-4">
              <h3 className="font-display text-xl font-extrabold text-white">
                Admission Requirements for GNM
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>
                    <strong>Educational Qualification: </strong>Pass in Intermediate (10+2) or equivalent
                    from any group/stream (BiPC, MPC, CEC, HEC, etc.) recognized by the board.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>
                    <strong>Age Limit: </strong>Minimum 17 years completed as per nursing council regulations.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>
                    <strong>Enrollment & Counseling: </strong>Direct admission counseling available at our
                    Nagaram campus office.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/admissions"
                  className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all shadow-md"
                >
                  Apply for GNM Diploma
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
                >
                  Contact Admissions Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA BANNER */}
      <AdmissionCtaBanner
        title="Apply for GNM Diploma (Inter Any Stream)"
        subtitle="Seats are available for the current session at our Nagaram, Hyderabad campus under Telangana Xpress Educational Society."
      />
    </>
  );
};
