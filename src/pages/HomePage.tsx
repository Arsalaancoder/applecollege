import React from 'react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { HeroSection } from '@/components/HeroSection';
import { QuickInfoCards } from '@/components/QuickInfoCards';
import { AboutSection } from '@/components/AboutSection';
import { ProgrammesSection } from '@/components/ProgrammesSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { AdmissionEnquirySection } from '@/components/AdmissionEnquirySection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { StudentFeedbackSection } from '@/components/StudentFeedbackSection';
import { MarqueeRibbon } from '@/components/MarqueeRibbon';
import { FacultySection } from '@/components/FacultySection';
import { FaqSection } from '@/components/FaqSection';
import { PricingPlansSection } from '@/components/PricingPlansSection';
import { BlogSection } from '@/components/BlogSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHelmet
        title="Building Tomorrow's Healthcare Professionals"
        description="Apple College of Nursing in Nagaram, Hyderabad offers premier B.Sc. Nursing and GNM programmes with modern skills laboratories, 3D anatomy simulation, and supervised clinical readiness."
      />

      {/* SECTION 2: HERO CAROUSEL (Full Images) */}
      <HeroSection />

      {/* SECTION 3: THREE FEATURE CARDS (Pink, Green, Yellow) */}
      <QuickInfoCards />

      {/* SECTION 4: ABOUT PREVIEW (Video on left, bullets in middle, 2 stacked photos + seal on right) */}
      <AboutSection />

      {/* SECTION 5: ACADEMIC PROGRAMMES PREVIEW (Hex background, 4 cards with 1 highlighted in dark navy) */}
      <ProgrammesSection />

      {/* SECTION 6: WHY CHOOSE APPLE COLLEGE (Icon features + Overlapping circular photos) */}
      <WhyChooseSection />

      {/* SECTION 7: ADMISSION ENQUIRY CTA (Form card + clinical hospital ward backdrop) */}
      <AdmissionEnquirySection />

      {/* SECTION 8: FACILITIES PREVIEW (4 horizontal cards) */}
      <FacilitiesSection />

      {/* SECTION 9: STUDENT FEEDBACK (Quote card + 98% stat card + 3-photo strip) */}
      <StudentFeedbackSection />

      {/* SECTION 10: MARQUEE RIBBON */}
      <MarqueeRibbon />

      {/* SECTION 11: SKILLED EDUCATORS */}
      <FacultySection />

      {/* SECTION 12: OPENING HOURS & FAQS PREVIEW */}
      <FaqSection />

      {/* SECTION 13: TRANSPARENT ACADEMIC PATHWAYS */}
      <PricingPlansSection />

      {/* SECTION 14: LATEST ARTICLES & NEWS */}
      <BlogSection />
    </>
  );
};

