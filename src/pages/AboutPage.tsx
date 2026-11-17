import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Building,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const AboutPage: React.FC = () => {

  const leadershipHighlights = [
    {
      name: 'Clinical Nursing Preceptors',
      role: 'Foundations & Bedside Care',
      desc: 'Guiding undergraduate students through simulation drills and ward triage procedures.',
      image: '/images/team-nursing-doctors.png',
    },
    {
      name: 'Biological & Medical Faculty',
      role: 'Anatomy, Physiology & Microbiology',
      desc: 'Delivering structured biological lectures reinforced with 3D physical models and lab demonstrations.',
      image: '/images/gallery-guest-lecture.jpg',
    },
  ];

  return (
    <>
      <SeoHelmet
        title="About Us | Apple College of Nursing"
        description="Learn about Apple College of Nursing, sponsored by Telangana Xpress Educational Society (Reg. 214/2025). Discover our vision, mission, institutional objectives, and clinical learning culture."
      />

      {/* INNER-PAGE HERO / BANNER */}
      <PageBanner
        tag="ABOUT INSTITUTION"
        title="Nurturing Dedicated Healthcare Leaders"
        highlightPhrase="Healthcare Leaders"
        description="Apple College of Nursing is an institution of Orange Colleges dedicated to excellence in undergraduate nursing science, hands-on clinical mastery, and compassionate community care in Nagaram, Hyderabad."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage="/images/about-campus-building.jpg"
      />

      {/* SECTION: COLLEGE INTRODUCTION & HISTORY */}
      <section id="overview" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>INSTITUTIONAL PROFILE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
                From Scientific Understanding to Bedside Excellence
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Apple College of Nursing is established in Nagaram, Hyderabad to meet the growing need
                for skilled, compassionate nursing professionals. Sponsored by the{' '}
                <strong className="text-[#132847]">{appleCollegeConfig.sponsoringSociety}</strong>{' '}
                (<span className="text-[#248568] font-bold">Reg. No. {appleCollegeConfig.registrationNumber}</span>)
                and belonging to the <strong className="text-[#132847]">{appleCollegeConfig.parentGroup}</strong>,
                the college bridges fundamental medical sciences with practical clinical mastery.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our educational approach combines interactive smart classrooms, visual 3D anatomical
                demonstrations, procedural skills laboratories, and structured hospital rotations to
                ensure our graduates are prepared for modern healthcare environments.
              </p>

              {/* Verified Facts Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FFF0F0] border border-[#FADCDC] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF5E5E] text-white flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Sponsoring Body
                    </div>
                    <div className="text-xs font-extrabold text-[#132847]">
                      {appleCollegeConfig.sponsoringSociety}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EBF7EE] border border-[#D9EEDF] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#248568] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Registration
                    </div>
                    <div className="text-xs font-extrabold text-[#132847]">
                      Reg. No. {appleCollegeConfig.registrationNumber}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sister Institution Clarification */}
              <div className="p-4 rounded-xl bg-[#F5F7FC] border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-[#132847]">Institutional Note: </span>
                {appleCollegeConfig.sisterInstitutionNote}
              </div>
            </div>

            {/* Right Images Composition (Medova Stacked Layout) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/about-campus-building.jpg"
                  alt="Apple College of Nursing Campus Building at Nagaram, Hyderabad"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="hidden sm:block absolute -bottom-8 -left-8 w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/about-skills-practice.jpg"
                  alt="Students practicing clinical procedures"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 text-center">
                  <span className="text-[10px] font-bold text-[#132847] uppercase tracking-wider">
                    Hands-On Simulation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VISION & MISSION */}
      <section id="vision-mission" className="py-16 sm:py-20 bg-hex-pattern border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>GUIDING PRINCIPLES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Our Vision & Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The foundational pillars guiding every curriculum hour, laboratory simulation, and bedside posting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card (Editorial Card Style) */}
            <EditorialCard
              status="Institutional Vision"
              statusDotColor="bg-[#E07A5F]"
              theme="peach"
              title="Our Vision"
              subtitle="Guiding Compass"
              description="To be recognized as a premier centre of nursing education that empowers prospective nurses with exemplary scientific foundations, uncompromising bedside empathy, and ethical discipline—equipping them to serve across regional, national, and global healthcare settings."
              actionText="Apply for Admission"
              actionLink="/admissions"
              graphic="circles"
            >
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#E07A5F]">
                <HeartHandshake className="w-4 h-4" />
                <span>Excellence · Empathy · Ethical Practice</span>
              </div>
            </EditorialCard>

            {/* Mission Card (Editorial Card Style) */}
            <EditorialCard
              status="Core Mission"
              statusDotColor="bg-[#248568]"
              theme="mint"
              title="Our Mission"
              subtitle="Foundational Pillars"
              description="Cultivate practical mastery through repetitive simulation drills in modern nursing skills laboratories, grounding every nursing student in clinical precision."
              actionText="Explore Programmes"
              actionLink="/academics"
              graphic="blocks"
            >
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#248568] shrink-0" />
                  <span>Rigorous undergraduate nursing curriculum & anatomy labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#248568] shrink-0" />
                  <span>Bedside clinical postings in multi-speciality hospitals</span>
                </li>
              </ul>
            </EditorialCard>
          </div>
        </div>
      </section>

      {/* SECTION: INSTITUTIONAL OBJECTIVES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E] mb-2">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>CORE TARGETS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Institutional Objectives
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Measurable benchmarks guiding academic delivery and student clinical performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <EditorialCard
              status="Target 01"
              statusDotColor="bg-[#E07A5F]"
              theme="peach"
              title="Evidence-Based Clinical Practice"
              description="Grounding everyday patient care in sound biological principles, anatomy, and infection control standards across all semesters."
              actionText="View Curriculum"
              actionLink="/academics/bsc-nursing"
              graphic="chevron"
            />
            <EditorialCard
              status="Target 02"
              statusDotColor="bg-[#132847]"
              theme="slate"
              title="Bedside Compassion & Safety"
              description="Fostering ethical bedside demeanor, patient communication, and continuous vitals observation discipline during clinical ward postings."
              actionText="Clinical Practice"
              actionLink="/facilities"
              graphic="semicircles"
            />
            <EditorialCard
              status="Target 03"
              statusDotColor="bg-[#7C3AED]"
              theme="lavender"
              title="Simulation & Practical Readiness"
              description="Developing psychomotor nursing competencies in dedicated skills labs before students step onto active hospital wards."
              actionText="Skills Laboratories"
              actionLink="/facilities"
              graphic="circles"
            />
            <EditorialCard
              status="Target 04"
              statusDotColor="bg-[#248568]"
              theme="mint"
              title="Community Health Awareness"
              description="Educating prospective healthcare professionals on preventive health, public immunization, and rural outreach health drives."
              actionText="Campus Life & Drives"
              actionLink="/campus-life"
              graphic="blocks"
            />
          </div>
        </div>
      </section>

      {/* SECTION: FACULTY & ACADEMIC LEADERSHIP */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E] mb-2">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>ACADEMIC PRECEPTORS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Clinical Preceptors & Faculty Guidance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Experienced nurse educators and biological science instructors mentoring students throughout their training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipHighlights.map((lead, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-8 bg-[#F8F9FD] border border-slate-200/90 flex flex-col sm:flex-row gap-6 items-center shadow-xs"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md bg-white">
                  <img src={lead.image} alt={lead.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5E5E]">
                    {lead.role}
                  </span>
                  <h3 className="font-display text-lg font-extrabold text-[#132847]">
                    {lead.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{lead.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: SOCIETY & GOVERNANCE */}
      <section id="governance" className="py-16 sm:py-20 bg-[#F5F7FC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E5E]">
                  GOVERNANCE & SOCIETY
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#132847]">
                  Telangana Xpress Educational Society
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Apple College of Nursing is managed and governed under the visionary leadership of{' '}
                  <strong>Telangana Xpress Educational Society</strong> (Registration No. <strong>214/2025</strong>).
                  The Society is dedicated to elevating paramedical and nursing educational infrastructure in Telangana,
                  providing modern learning facilities, qualified educators, and direct hospital clinical training linkages.
                </p>
                <div className="text-xs text-slate-500 pt-2">
                  <strong>Campus Address: </strong>
                  {appleCollegeConfig.address}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/admissions"
                  className="w-full text-center py-3 px-5 rounded-xl bg-[#132847] hover:bg-[#0E1D33] text-white text-xs font-bold transition-all shadow-md"
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/contact"
                  className="w-full text-center py-3 px-5 rounded-xl bg-white border border-slate-200 hover:border-[#132847] text-[#132847] text-xs font-bold transition-all"
                >
                  Contact Admissions Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA BANNER */}
      <AdmissionCtaBanner
        title="Begin Your Nursing Journey with Apple College"
        subtitle="Consult our admissions counselors on B.Sc. Nursing and GNM eligibility, seat allotment, and campus facilities in Nagaram, Hyderabad."
      />
    </>
  );
};
