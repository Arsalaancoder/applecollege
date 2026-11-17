import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { academicProgrammesData } from '@/data/appleCollegeData';

export const BscNursingPage: React.FC = () => {
  const programme = academicProgrammesData.find((p) => p.slug === 'bsc-nursing')!;

  const yearlySyllabus = [
    {
      year: 'Year 1',
      title: 'Foundations & Biological Sciences',
      modules: [
        'Anatomy & Physiology',
        'Nutrition & Biochemistry',
        'Nursing Foundations (Theory & Lab)',
        'Psychology & Healthcare Communication',
        'Microbiology & Infection Control Basics',
        'Introduction to Community Health Nursing',
      ],
    },
    {
      year: 'Year 2',
      title: 'Medical-Surgical Nursing & Pharmacology',
      modules: [
        'Medical-Surgical Nursing I (Adult Care)',
        'Pharmacology, Pathology & Genetics',
        'Community Health Nursing I',
        'Communication & Educational Technology',
        'Clinical Ward Posting (Medical & Surgical Units)',
      ],
    },
    {
      year: 'Year 3',
      title: 'Specialty Nursing & Maternal Care',
      modules: [
        'Medical-Surgical Nursing II (Specialties)',
        'Child Health Nursing (Pediatrics)',
        'Mental Health Nursing (Psychiatry)',
        'Nursing Research & Statistics Orientation',
        'Maternity Ward Clinical Rotations',
      ],
    },
    {
      year: 'Year 4',
      title: 'Advanced Midwifery & Internship Rotations',
      modules: [
        'Midwifery & Obstetrical Nursing',
        'Community Health Nursing II',
        'Management of Nursing Services & Education',
        'Comprehensive Supervised Clinical Internship',
        'Hospital Emergency & ICU Ward Exposure',
      ],
    },
  ];

  return (
    <>
      <SeoHelmet
        title="B.Sc. Nursing (4-Year Degree) | Apple College of Nursing"
        description="Bachelor of Science in Nursing (4-Year Undergraduate Degree) at Apple College of Nursing in Nagaram, Hyderabad. Eligibility: Intermediate with BiPC. Comprehensive curriculum, modern simulation labs, and clinical hospital rotations."
      />

      {/* PROGRAMME HERO BANNER */}
      <PageBanner
        tag="UNDERGRADUATE DEGREE"
        title="Bachelor of Science in Nursing (B.Sc. Nursing)"
        highlightPhrase="B.Sc. Nursing"
        description="A four-year professional degree program equipping students with biological science foundations, laboratory simulation mastery, and supervised bedside care competencies."
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'B.Sc. Nursing' },
        ]}
        bgImage="/images/program-bsc-nursing.jpg"
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
                4 Years
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF0F0] border border-[#FADCDC]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Eligibility
              </span>
              <span className="font-display text-base sm:text-lg font-extrabold text-[#FF5E5E]">
                Inter (10+2) BiPC
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#EBF7EE] border border-[#D9EEDF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Course Level
              </span>
              <span className="font-display text-base sm:text-lg font-extrabold text-[#248568]">
                Bachelor's Degree
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

      {/* COURSE OVERVIEW & LAB TRAINING */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>PROGRAMME OVERVIEW</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
                Preparing Competent Clinical Nurses for Modern Healthcare
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                The Bachelor of Science in Nursing (B.Sc. Nursing) is the flagship undergraduate degree
                at Apple College of Nursing. It prepares high-school graduates who have completed
                Intermediate (10+2) with Physics, Chemistry, and Biology (BiPC) to become registered,
                confident nurses capable of bedside practice, critical care coordination, and healthcare leadership.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Throughout the 4-year degree, students rotate through our Nursing Foundation Skills Lab,
                Anatomy Demonstration Room, and clinical hospital ward postings to translate classroom
                biological principles into patient vitals assessment, wound management, medication safety,
                and sterile procedural execution.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-display text-sm font-extrabold text-[#132847] uppercase tracking-wider">
                  Key Course Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>3D Anatomy demonstration models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Adult & pediatric simulation manikins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Supervised hospital bedside postings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>Community health screening outreach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/program-bsc-nursing.jpg"
                  alt="B.Sc. Nursing students observing clinical monitor in simulation lab"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#132847] text-white shadow-xl max-w-xs text-xs space-y-1 hidden sm:block">
                <div className="text-[#34D399] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Clinical Competency First</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Repetitive procedural practice ensures zero hesitation during real patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-YEAR CURRICULUM BREAKDOWN */}
      <section className="py-16 sm:py-20 bg-hex-pattern border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>STRUCTURED CURRICULUM</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              4-Year Academic Progression
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Progressive coursework aligning medical sciences with hands-on hospital rotations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {yearlySyllabus.map((item, idx) => {
              const themes = ['peach', 'mint', 'lavender', 'blue'] as const;
              const graphics = ['chevron', 'blocks', 'circles', 'medical'] as const;
              const dots = ['bg-[#FF5E5E]', 'bg-[#248568]', 'bg-[#7C3AED]', 'bg-[#2563EB]'];

              return (
                <EditorialCard
                  key={idx}
                  status={`Academic Year 0${idx + 1}`}
                  statusDotColor={dots[idx]}
                  theme={themes[idx]}
                  title={item.title}
                  subtitle={item.year}
                  description="Key syllabus modules combining clinical classroom coursework with skills laboratory practice and hospital ward rotations."
                  actionText="View Admission Eligibility"
                  actionLink="/admissions"
                  graphic={graphics[idx]}
                >
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    {item.modules.map((mod, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#248568] shrink-0" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </EditorialCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>CAREER PATHWAYS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
                Where Can B.Sc. Nursing Take You?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Graduates of the 4-year B.Sc. Nursing degree enjoy broad professional opportunities across
                clinical healthcare delivery, specialized intensive care, hospital administration, and public health sectors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {programme.careerOpportunities.map((career, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8F9FD] border border-slate-200/80 flex items-center gap-2.5 text-xs font-bold text-[#132847]"
                  >
                    <Briefcase className="w-4 h-4 text-[#2A7FBA] shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl p-8 bg-[#132847] text-white shadow-xl space-y-4">
              <h3 className="font-display text-xl font-extrabold text-white">
                Admission Requirements for B.Sc. Nursing
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>
                    <strong>Educational Qualification: </strong>Pass in Intermediate (10+2) or equivalent
                    with Physics, Chemistry, Biology (BiPC) and English from a recognized board.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>
                    <strong>Age Criteria: </strong>Minimum 17 years completed as per state nursing council norms.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>
                    <strong>Counseling & Verification: </strong>Subject to applicable entrance criteria,
                    document verification, and seat allotment.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/admissions"
                  className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all shadow-md"
                >
                  Apply for B.Sc. Nursing
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
                >
                  Talk to Counselor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA BANNER */}
      <AdmissionCtaBanner
        title="Apply for B.Sc. Nursing (Inter BiPC)"
        subtitle="Seats are available for the upcoming session at our Nagaram, Hyderabad campus under Telangana Xpress Educational Society."
      />
    </>
  );
};
