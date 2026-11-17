import React from 'react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { GallerySection } from '@/components/GallerySection';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <SeoHelmet
        title="Campus Photo Gallery | Apple College of Nursing"
        description="Explore photo gallery of Apple College of Nursing in Nagaram, Hyderabad: campus building, anatomy demonstration rooms, nursing skills laboratories, interactive smart classrooms, and clinical student activities."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="CAMPUS VISUALS"
        title="Visual Showcase of Our Campus & Clinical Facilities"
        highlightPhrase="Clinical Facilities"
        description="Take a visual tour through our Nagaram campus, skills simulation stations, 3D anatomy specimens, smart classrooms, and student outreach activities."
        breadcrumbs={[{ label: 'Gallery' }]}
        bgImage="/images/gallery-campus-frontage.jpg"
      />

      {/* FULL GALLERY SECTION WITH FILTERING & LIGHTBOX */}
      <div className="bg-white">
        <GallerySection showViewMoreButton={false} />
      </div>

      {/* ADMISSION CTA */}
      <AdmissionCtaBanner
        title="Visit Our Campus in Person"
        subtitle="Schedule a tour of our classrooms, skills laboratories, and library at Bandlaguda Cross Road, Keesara, Nagaram, Hyderabad."
      />
    </>
  );
};

