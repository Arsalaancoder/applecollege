import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';

export const FacilitiesPage: React.FC = () => {
  const facilityHighlights = [
    {
      title: 'Nursing Foundation Skills Laboratory',
      category: 'Practical Clinical Training',
      badge: 'Core Skills',
      image: '/images/facility-skills-lab.jpg',
      desc: 'Our nursing skills laboratory simulates a modern hospital ward environment. Outfitted with adult and pediatric patient-care manikins, clinical beds, sphygmomanometers, stethoscopes, intravenous infusion stands, and emergency procedural equipment, it allows students to master procedures in a controlled setting before hospital postings.',
      points: [
        'Adult and pediatric full-body simulation manikins',
        'Bedside vitals monitoring and charting stations',
        'Sterile dressing, catheterization, and injection practice models',
        'Emergency resuscitation and airway management equipment',
      ],
    },
    {
      title: '3D Anatomy Demonstration Room',
      category: 'Visual & Applied Sciences',
      badge: '3D Simulation',
      image: '/images/facility-anatomy-demo.jpg',
      desc: 'Anatomy and physiology learning is enriched through visual, hands-on demonstration. The room features complete articulated skeletal models, removable-organ torsos, cardiovascular cross-sections, and detailed neurological charts where instructors illustrate physiological functions step-by-step.',
      points: [
        'Articulated human skeleton and bone specimens',
        'Dissectible torso models with detachable internal organs',
        'Brain, heart, kidney, and sensory organ cross-sections',
        'Interactive smart visual aids supporting instructor demonstrations',
      ],
    },
    {
      title: 'Interactive Smart Classrooms',
      category: 'Academic Learning',
      badge: 'Smart AV',
      image: '/images/facility-smart-classroom.jpg',
      desc: 'Spacious, well-ventilated lecture rooms equipped with digital projection boards, audio-visual display setups, anatomical wall charts, and ergonomic tiered seating. Designed to foster interactive discussions and multimedia presentations.',
      points: [
        'High-resolution digital interactive whiteboards',
        'Tiered acoustic seating for clear sightlines',
        'Integrated audio systems for clinical lectures and presentations',
        'Natural lighting and climate-controlled classroom space',
      ],
    },
    {
      title: 'Medical Reference Library & Digital Resources',
      category: 'Learning & Research',
      badge: 'Knowledge Hub',
      image: '/images/facility-library.jpg',
      desc: 'A quiet, well-stocked academic library offering foundational medical and nursing textbooks, Indian and international nursing journals, pathology reference atlases, and quiet individual reading desks.',
      points: [
        'Standard textbooks covering all B.Sc. Nursing and GNM syllabi',
        'Nursing and healthcare periodicals and reference collections',
        'Quiet individual study desks and collaborative reading tables',
        'Digital cataloguing and academic research support',
      ],
    },
    {
      title: 'Health Informatics Computer Facility',
      category: 'Digital Technology',
      badge: 'Digital Lab',
      image: '/images/facility-computer-lab.jpg',
      desc: 'Modern computer workstations providing students with digital literacy, access to electronic healthcare record templates, informatics coursework, and online educational repositories.',
      points: [
        'Dedicated network-connected PC terminals',
        'Health informatics and electronic medical record orientation',
        'Supervised lab sessions for academic assignments and research',
        'High-speed internet for online clinical references',
      ],
    },
    {
      title: 'Audio-Visual Seminar & Training Hall',
      category: 'Workshops & Events',
      badge: 'Auditorium',
      image: '/images/facility-seminar-hall.jpg',
      desc: 'A multi-purpose seminar hall equipped with stage lighting and audio-visual projection, hosting guest lectures by medical clinicians, student CPR orientation workshops, and campus symposiums.',
      points: [
        'Acoustically treated presentation hall with large display',
        'Stage setup for academic ceremonies and health day presentations',
        'Comfortable seating for student batches and faculty panels',
        'Recording and presentation facilities for guest clinical lectures',
      ],
    },
  ];

  return (
    <>
      <SeoHelmet
        title="Campus Facilities & Laboratories | Apple College of Nursing"
        description="Explore modern campus facilities at Apple College of Nursing in Nagaram, Hyderabad: Nursing Foundation Skills Lab, 3D Anatomy Demonstration Room, Smart Classrooms, Library, and Computer Informatics."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="CAMPUS INFRASTRUCTURE"
        title="Purpose-Built Facilities for Healthcare Education"
        highlightPhrase="Healthcare Education"
        description="Explore our specialized nursing simulation labs, visual 3D anatomy rooms, modern lecture halls, and quiet medical reference libraries in Nagaram, Hyderabad."
        breadcrumbs={[{ label: 'Facilities' }]}
        bgImage="/images/facility-skills-lab.jpg"
      />

      {/* INFRASTRUCTURE OVERVIEW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>LEARNING ENVIRONMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              State-of-the-Art Labs for Applied Nursing Mastery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Apple College of Nursing, we believe practical competence is the foundation of quality healthcare.
              Our campus at Bandlaguda Cross Road, Keesara, Nagaram is engineered with dedicated skills stations,
              anatomical learning aids, and digital classrooms that prepare students for seamless clinical transitions.
            </p>
          </div>

          {/* DETAILED FACILITY CARDS (Teamway Style Editorial Cards) */}
          <div className="space-y-12">
            {facilityHighlights.map((facility, idx) => {
              const themes = [
                'bg-[#FDF2E9] border-[#FADCC7]/70',
                'bg-[#EAF5EE] border-[#CCE8D6]/70',
                'bg-[#F1EDFA] border-[#DDD4F3]/70',
                'bg-[#F2F5F8] border-[#C8DFFA]/70',
              ];
              const dots = ['bg-[#FF5E5E]', 'bg-[#248568]', 'bg-[#7C3AED]', 'bg-[#2563EB]'];
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`rounded-[28px] p-7 sm:p-10 ${themes[idx % 4]} border shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  {/* Top Status Pill */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 shadow-xs text-xs font-bold text-slate-800">
                      <span className={`w-2 h-2 rounded-full ${dots[idx % 4]}`} />
                      <span>{facility.category}</span>
                    </div>

                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      {facility.badge}
                    </span>
                  </div>

                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Photo Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 group">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Text Column */}
                    <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#132847] leading-tight">
                        {facility.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {facility.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-black/5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#132847]">
                          Key Specifications:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {facility.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          to="/admissions"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#132847] hover:text-[#FF5E5E] transition-all group"
                        >
                          <span>Enquire for Campus Visit</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINICAL HOSPITAL ROTATIONS SETUP */}
      <section className="py-16 sm:py-20 bg-hex-pattern border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-[#132847] text-white shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-hero-grid opacity-25 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#34D399]">
                  SUPERVISED CLINICAL EXPERIENCE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Hospital Ward Postings & Bedside Exposure
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  In addition to on-campus simulation labs, Apple College coordinates structured,
                  faculty-supervised hospital clinical postings. Students observe bedside care, vital signs
                  charting, ICU triage, and multidisciplinary teamwork under the mentorship of senior preceptors.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                    <span>Infection Control Protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                    <span>Supervised Bedside Shifts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                    <span>Multi-Specialty Healthcare Settings</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/admissions"
                  className="w-full text-center py-3.5 px-6 rounded-xl bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all shadow-md"
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/gallery"
                  className="w-full text-center py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
                >
                  View Facility Photos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <AdmissionCtaBanner
        title="Visit Our Nagaram Campus Laboratories"
        subtitle="Schedule an admissions visit and guided tour of our Nursing Skills Lab and 3D Anatomy Demonstration Room at Bandlaguda Cross Road, Keesara."
      />
    </>
  );
};
