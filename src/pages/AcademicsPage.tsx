import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { academicProgrammesData, appleCollegeConfig } from '@/data/appleCollegeData';

export const AcademicsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchFilter = (searchParams.get('search') || '').toLowerCase();

  const filteredProgrammes = academicProgrammesData.filter(
    (prog) =>
      prog.name.toLowerCase().includes(searchFilter) ||
      prog.code.toLowerCase().includes(searchFilter) ||
      prog.shortDescription.toLowerCase().includes(searchFilter)
  );

  return (
    <>
      <SeoHelmet
        title="Academics & Nursing Programmes | Apple College of Nursing"
        description="Explore undergraduate B.Sc. Nursing degree and GNM diploma courses at Apple College of Nursing in Nagaram, Hyderabad. Discover our balanced academic curriculum, skills laboratories, and hospital rotations."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="ACADEMIC EXCELLENCE"
        title="Nursing Programmes Designed for Clinical Mastery"
        highlightPhrase="Clinical Mastery"
        description="Comprehensive healthcare curricula integrating biological sciences, simulation laboratory competencies, and supervised patient-care exposure."
        breadcrumbs={[{ label: 'Academics' }]}
        bgImage="/images/program-bsc-nursing.jpg"
      />

      {/* SECTION: ACADEMIC PHILOSOPHY */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>CURRICULUM PHILOSOPHY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              A Balance of Classroom Science and Bedside Practice
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Apple College of Nursing, our academic framework bridges theoretical medical foundations
              with hands-on clinical discipline. We structure each semester to reinforce classroom lectures
              with procedural lab simulations and supervised hospital clinical postings.
            </p>
          </div>

          {/* Search notice if search parameter present */}
          {searchFilter && (
            <div className="mt-6 p-4 rounded-xl bg-[#F5F7FC] border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
              <div>
                Filtering programmes for: <strong>"{searchFilter}"</strong>
              </div>
              <Link to="/academics" className="text-[#FF5E5E] font-bold hover:underline">
                Clear filter
              </Link>
            </div>
          )}

          {/* PROGRAMMES LIST CARDS (Editorial Card Style with Images) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {(filteredProgrammes.length > 0 ? filteredProgrammes : academicProgrammesData).map(
              (prog, idx) => (
                <div
                  key={prog.id}
                  className={`rounded-[28px] p-7 sm:p-9 ${
                    idx === 0 ? 'bg-[#FDF2E9] border-[#FADCC7]/70' : 'bg-[#EAF5EE] border-[#CCE8D6]/70'
                  } border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                >
                  <div>
                    {/* Top Status & Duration Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 shadow-xs text-xs font-bold text-slate-800">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            idx === 0 ? 'bg-[#FF5E5E]' : 'bg-[#248568]'
                          }`}
                        />
                        <span>{prog.degreeType}</span>
                      </div>

                      <span className="text-xs font-bold text-slate-600">
                        Duration: {prog.duration}
                      </span>
                    </div>

                    {/* Image Preview with Rounded Radius */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm mb-6 bg-slate-100">
                      <img
                        src={prog.imageUrl}
                        alt={prog.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {prog.featured && (
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FF5E5E] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          Flagship Programme
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#132847] tracking-tight leading-tight">
                        {prog.name} ({prog.code})
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {prog.fullDescription}
                      </p>

                      <div className="p-3 rounded-xl bg-white/80 border border-black/5 text-xs">
                        <span className="font-bold text-[#132847]">Eligibility: </span>
                        <span className="text-slate-600">{prog.eligibility}</span>
                      </div>

                      {/* Learning Areas Tags */}
                      <div className="space-y-2 pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Core Modules Included:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {prog.learningAreas.slice(0, 5).map((area, areaIdx) => (
                            <span
                              key={areaIdx}
                              className="px-2.5 py-1 rounded-lg bg-white/90 border border-black/5 text-slate-700 text-[11px] font-semibold"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 hidden sm:inline">
                      {prog.institutionNote}
                    </span>
                    <Link
                      to={`/academics/${prog.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#132847] hover:text-[#FF5E5E] transition-all group/link"
                    >
                      <span>Explore Course Syllabus</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION: LEARNING METHODOLOGY (Editorial Card Grid) */}
      <section className="py-16 sm:py-20 bg-hex-pattern border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>PEDAGOGY & TRAINING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Our 4-Pillar Learning Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Structuring student progression from foundational theory to autonomous patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <EditorialCard
              status="Pillar 01"
              statusDotColor="bg-[#E07A5F]"
              theme="peach"
              title="Classroom Scientific Theory"
              description="Structured lecture hours covering human anatomy, physiology, microbiology, pharmacology, and nursing foundations."
              actionText="View Curriculum"
              actionLink="/academics/bsc-nursing"
              graphic="chevron"
            />
            <EditorialCard
              status="Pillar 02"
              statusDotColor="bg-[#248568]"
              theme="mint"
              title="3D Anatomy Visual Demos"
              description="Demonstration-led anatomical sessions using full skeletal models, torso specimens, and interactive smartboards."
              actionText="Anatomy Lab"
              actionLink="/facilities"
              graphic="blocks"
            />
            <EditorialCard
              status="Pillar 03"
              statusDotColor="bg-[#7C3AED]"
              theme="lavender"
              title="Skills Laboratory Simulation"
              description="Hands-on practice on adult and pediatric simulation manikins, mastering catheterization, IV lines, vitals, and CPR."
              actionText="Simulation Facilities"
              actionLink="/facilities"
              graphic="circles"
            />
            <EditorialCard
              status="Pillar 04"
              statusDotColor="bg-[#2563EB]"
              theme="blue"
              title="Supervised Hospital Rotations"
              description="Practical bedside postings in multi-specialty healthcare environments under experienced clinical preceptors."
              actionText="Hospital Training"
              actionLink="/facilities"
              graphic="medical"
            />
          </div>
        </div>
      </section>

      {/* REGULATORY COMPLIANCE NOTE */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 bg-[#F8F9FD] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600">
            <div className="space-y-1">
              <span className="font-bold text-[#132847] uppercase tracking-wider block">
                Regulatory Standards & Council Framework:
              </span>
              <p>{appleCollegeConfig.regulatoryNote}</p>
            </div>
            <Link
              to="/admissions"
              className="shrink-0 px-5 py-2.5 rounded-lg bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white font-bold transition-all"
            >
              Consult Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <AdmissionCtaBanner
        title="Enroll in Our Verified Nursing Programmes"
        subtitle="Submit an admission enquiry to receive counseling on eligibility, syllabus modules, clinical postings, and enrollment dates in Nagaram, Hyderabad."
      />
    </>
  );
};
