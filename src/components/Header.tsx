import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Calendar,
  Menu,
  X,
  GraduationCap,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { AdmissionMarquee } from './AdmissionMarquee';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setAcademicsOpen(false);
  }, [location.pathname]);

  const isNavActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white relative z-50">
      {/* LEVEL 0: Admission Open Marquee Announcement */}
      <AdmissionMarquee />

      {/* Main Navigation Bar */}
      <div
        className={`w-full bg-white transition-all duration-200 border-b border-slate-100 ${
          scrolled ? 'sticky top-0 shadow-md z-40' : ''
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 lg:gap-3 xl:gap-6">
          {/* Logo at Left */}
          <Link to="/" className="group shrink-0 focus:outline-none">
            <BrandLogo variant="dark" />
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center flex-nowrap gap-0.5 xl:gap-1.5 2xl:gap-2 text-xs xl:text-[13px] 2xl:text-sm font-bold text-[#132847]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`
              }
            >
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <NavLink
                to="/about"
                className={`inline-flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isNavActive('/about') ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3 h-3 mt-0.5 shrink-0" />
              </NavLink>

              {aboutOpen && (
                <div className="absolute left-0 top-full pt-1.5 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <Link
                      to="/about"
                      onClick={() => setAboutOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-[#F5F7FC] text-xs font-bold text-[#132847]"
                    >
                      <div>About Apple College</div>
                      <div className="text-[11px] font-normal text-slate-500">
                        Institutional history & campus profile
                      </div>
                    </Link>
                    <Link
                      to="/about#vision-mission"
                      onClick={() => setAboutOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-[#F5F7FC] text-xs font-bold text-[#132847]"
                    >
                      <div>Vision & Mission</div>
                      <div className="text-[11px] font-normal text-slate-500">
                        Nursing philosophy & core values
                      </div>
                    </Link>
                    <Link
                      to="/about#governance"
                      onClick={() => setAboutOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-[#F5F7FC] text-xs font-bold text-[#132847]"
                    >
                      <div>Society & Governance</div>
                      <div className="text-[11px] font-normal text-slate-500">
                        Telangana Xpress Educational Society
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <NavLink
                to="/academics"
                className={`inline-flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isNavActive('/academics') ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`}
              >
                <span>Academics</span>
                <ChevronDown className="w-3 h-3 mt-0.5 shrink-0" />
              </NavLink>

              {academicsOpen && (
                <div className="absolute left-0 top-full pt-1.5 w-72 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <Link
                      to="/academics"
                      onClick={() => setAcademicsOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-[#F5F7FC] text-xs font-bold text-[#132847]"
                    >
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#FF5E5E]" />
                        <span>All Nursing Programmes</span>
                      </div>
                      <div className="text-[11px] font-normal text-slate-500">
                        Overview of offered courses
                      </div>
                    </Link>
                    <Link
                      to="/academics/bsc-nursing"
                      onClick={() => setAcademicsOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-[#F5F7FC] text-xs font-bold text-[#132847]"
                    >
                      <div>B.Sc. Nursing (Degree)</div>
                      <div className="text-[11px] font-normal text-slate-500">
                        4-Year Undergraduate Degree · Inter BiPC
                      </div>
                    </Link>
                    <Link
                      to="/academics/gnm"
                      onClick={() => setAcademicsOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-[#F5F7FC] text-xs font-bold text-[#132847]"
                    >
                      <div>General Nursing & Midwifery (GNM)</div>
                      <div className="text-[11px] font-normal text-slate-500">
                        3-Year Diploma · Any Stream
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`
              }
            >
              Facilities
            </NavLink>
            <NavLink
              to="/campus-life"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`
              }
            >
              Campus Life
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive ? 'text-[#FF5E5E]' : 'hover:text-[#FF5E5E]'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 xl:gap-3 shrink-0">
            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-md bg-[#132847] hover:bg-[#0E1D33] text-white text-xs font-bold transition-all shadow-xs group whitespace-nowrap"
            >
              <span>Apply for Admission</span>
              <Calendar className="w-3.5 h-3.5 text-white/80 group-hover:scale-110 transition-transform shrink-0" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close Navigation' : 'Open Navigation'}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-[#132847] hover:bg-slate-50 cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            Home
          </Link>

          {/* Mobile About Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#132847]"
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180 text-[#FF5E5E]' : ''
                  }`}
              />
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 space-y-1.5 py-1 text-xs">
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-slate-600 hover:text-[#FF5E5E]"
                >
                  About Apple College
                </Link>
                <Link
                  to="/about#vision-mission"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-slate-600 hover:text-[#FF5E5E]"
                >
                  Vision & Mission
                </Link>
                <Link
                  to="/about#governance"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-slate-600 hover:text-[#FF5E5E]"
                >
                  Society & Governance
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Academics Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#132847]"
            >
              <span>Academics</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileAcademicsOpen ? 'rotate-180 text-[#FF5E5E]' : ''
                  }`}
              />
            </button>
            {mobileAcademicsOpen && (
              <div className="pl-4 space-y-1.5 py-1 text-xs">
                <Link
                  to="/academics"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-slate-600 hover:text-[#FF5E5E]"
                >
                  All Programmes
                </Link>
                <Link
                  to="/academics/bsc-nursing"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-slate-600 hover:text-[#FF5E5E]"
                >
                  B.Sc. Nursing (4-Year Degree)
                </Link>
                <Link
                  to="/academics/gnm"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-slate-600 hover:text-[#FF5E5E]"
                >
                  General Nursing & Midwifery (GNM)
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/facilities"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/facilities' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            Facilities
          </Link>
          <Link
            to="/campus-life"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/campus-life' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            Campus Life
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/gallery' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            Gallery
          </Link>
          <Link
            to="/admissions"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/admissions' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            Admissions
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/contact' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            onClick={() => setMobileOpen(false)}
            className={`block py-2 text-sm font-bold ${location.pathname === '/faq' ? 'text-[#FF5E5E]' : 'text-[#132847]'
              }`}
          >
            FAQ
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#132847] text-white text-xs font-bold"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
