import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';

export const CampusLifePage: React.FC = () => {
  const experiences = [
    {
      title: 'CPR & Emergency Resuscitation Drills',
      category: 'Hands-On Clinical Workshops',
      image: '/images/campus-cpr-workshop.jpg',
      tag: 'Skill Drills',
      desc: 'Regular simulation sessions where students practice basic life support (BLS), CPR chest compressions on feedback manikins, bag-valve-mask ventilations, and emergency response coordination.',
    },
    {
      title: 'Preventive Health & Hygiene Awareness',
      category: 'Community Wellness',
      image: '/images/campus-health-awareness.jpg',
      tag: 'Public Outreach',
      desc: 'Student-led health booths demonstrating proper hand hygiene protocols, sanitization techniques, nutritional awareness, and seasonal illness prevention for local communities.',
    },
    {
      title: 'Rural & Urban Community Screening Camps',
      category: 'Field Learning',
      image: '/images/campus-outreach-camp.jpg',
      tag: 'Bedside Outreach',
      desc: 'Faculty-guided camps where nursing students record vital signs, monitor blood pressure, assess blood glucose indicators, and interact directly with patients across diverse age groups.',
    },
    {
      title: 'Annual Cultural Celebrations & Milestones',
      category: 'Campus Community',
      image: '/images/campus-cultural-fest.jpg',
      tag: 'Student Vibrancy',
      desc: 'Celebration of nursing milestones, international nurses day, cultural festivals, and student performances fostering camaraderie, peer bonding, and collective morale.',
    },
  ];

  const studentTestimonials = [
    {
      quote:
        'The hands-on simulation sessions in the skills lab gave me the confidence I needed before starting my hospital postings. The faculty are always available to guide us through patient care routines.',
      student: 'Final Year B.Sc. Nursing Student',
      session: 'Nagaram Campus',
    },
    {
      quote:
        'The 3D anatomy demonstration room makes complex human physiology simple to understand. Collaborative group study with my batchmates in the library has made learning an enjoyable journey.',
      student: 'Second Year GNM Student',
      session: 'Nagaram Campus',
    },
  ];

  return (
    <>
      <SeoHelmet
        title="Campus Life & Student Experience | Apple College of Nursing"
        description="Discover student life at Apple College of Nursing in Nagaram, Hyderabad. Explore CPR simulation workshops, community health outreach camps, academic collaboration, and cultural celebrations."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="STUDENT LIFE & CULTURE"
        title="Vibrant Community, Rigorous Clinical Preparation"
        highlightPhrase="Clinical Preparation"
        description="Experience an enriching campus culture where nursing education, peer teamwork, community outreach camps, and personal growth come together."
        breadcrumbs={[{ label: 'Campus Life' }]}
        bgImage="/images/campus-cultural-fest.jpg"
      />

      {/* INTRODUCTORY SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>CAMPUS CULTURE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] leading-tight tracking-tight">
                Where Education Meets Empathy and Teamwork
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Campus life at Apple College of Nursing is purposeful, active, and supportive.
                Students do not merely attend lectures; they participate in small-group skill drills,
                conduct public health awareness campaigns, engage in collaborative peer study, and celebrate
                healthcare milestones together.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                From emergency CPR resuscitation workshops to lively cultural events and community
                health screenings, our students build lifelong friendships and the interpersonal resilience
                essential for nursing careers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FFF0F0] border border-[#FADCDC] text-center">
                  <span className="text-2xl font-black font-display text-[#FF5E5E]">100%</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mt-1">
                    Hands-On Training
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#EBF7EE] border border-[#D9EEDF] text-center">
                  <span className="text-2xl font-black font-display text-[#248568]">24/7</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mt-1">
                    Student Support
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FEF7E2] border border-[#FBEEC3] text-center col-span-2 sm:col-span-1">
                  <span className="text-2xl font-black font-display text-[#D97706]">Small</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mt-1">
                    Mentor Groups
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/why-communication.jpg"
                  alt="Nursing students in collaborative discussion"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[#132847] text-white shadow-xl max-w-xs text-xs space-y-1 hidden sm:block">
                <div className="text-[#34D399] font-bold flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Peer Collaboration</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Daily small-group discussions reinforce classroom lectures with clinical reasoning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES & WORKSHOPS GRID (Medova Cards) */}
      <section className="py-16 sm:py-20 bg-hex-pattern border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>EXPERIENTIAL LEARNING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Activities, Drills & Field Outreach
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Real-world engagement preparing students for compassionate bedside advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {experiences.map((item, idx) => {
              const themes: ('peach' | 'mint' | 'lavender' | 'slate')[] = [
                'peach',
                'mint',
                'lavender',
                'slate',
              ];
              const graphics: ('chevron' | 'circles' | 'blocks' | 'semicircles')[] = [
                'chevron',
                'circles',
                'blocks',
                'semicircles',
              ];
              const theme = themes[idx % themes.length];
              const graphic = graphics[idx % graphics.length];

              return (
                <EditorialCard
                  key={idx}
                  theme={theme}
                  graphic={graphic}
                  statusBadge={item.tag}
                  title={item.title}
                  description={item.desc}
                  linkText="View Activity Photos in Gallery"
                  linkTo="/gallery"
                >
                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="font-bold text-[#132847]">{item.category}</span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400">
                      Nagaram Campus
                    </span>
                  </div>
                </EditorialCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDENT VOICES & EXPERIENCES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E] mb-2">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>STUDENT TESTIMONIALS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Life at Apple College in Their Own Words
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Reflections from undergraduate students undergoing clinical training at our Nagaram campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-[#F8F9FD] border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-serif text-[#FF5E5E]">“</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-sm font-extrabold text-[#132847]">
                      {t.student}
                    </h4>
                    <span className="text-[11px] text-slate-500">{t.session}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#EBF7EE] text-[#248568] text-[10px] font-bold">
                    Verified Trainee
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <AdmissionCtaBanner
        title="Experience the Apple College Community"
        subtitle="Join an active, supportive student body dedicated to professional nursing excellence at Nagaram, Hyderabad."
      />
    </>
  );
};
