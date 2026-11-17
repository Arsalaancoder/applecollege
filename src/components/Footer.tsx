import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10223e] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid (Exact Medova layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Logo & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo variant="light" />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm pt-2">
              Apple College of Nursing is dedicated to undergraduate degree education in Nagaram,
              Hyderabad—combining classroom science, simulation laboratories, and supervised
              clinical readiness.
            </p>
            <div className="text-[11px] text-slate-400">
              Sponsored by {appleCollegeConfig.sponsoringSociety}
              <span className="block text-[#34D399] font-bold">
                Reg. No. {appleCollegeConfig.registrationNumber}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#FF5E5E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF5E5E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#FF5E5E] transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-[#FF5E5E] transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/campus-life" className="hover:text-[#FF5E5E] transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FF5E5E] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#FF5E5E] transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programmes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              Our Programmes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/academics/bsc-nursing" className="hover:text-[#FF5E5E] transition-colors">
                  B.Sc. Nursing (4-Year Degree)
                </Link>
              </li>
              <li>
                <Link to="/academics/gnm" className="hover:text-[#FF5E5E] transition-colors">
                  General Nursing & Midwifery (GNM)
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-[#FF5E5E] transition-colors">
                  Nursing Foundation Skills Lab
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-[#FF5E5E] transition-colors">
                  3D Anatomy Demonstration Room
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#FF5E5E] transition-colors">
                  Admission Guidance & Counseling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF5E5E] shrink-0 mt-0.5" />
                <span>{appleCollegeConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>{appleCollegeConfig.phones[0]} | {appleCollegeConfig.phones[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38B6FF] shrink-0" />
                <a href={`mailto:${appleCollegeConfig.email}`} className="hover:text-white">
                  {appleCollegeConfig.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={appleCollegeConfig.parentWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#34D399] hover:underline font-bold"
                >
                  <span>Orange Colleges Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Apple College of Nursing · Belonging to Orange Colleges. All
            rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            <span>•</span>
            <Link to="/admissions" className="hover:text-white">
              Admissions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
