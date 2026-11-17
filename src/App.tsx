import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { BscNursingPage } from './pages/BscNursingPage';
import { GnmPage } from './pages/GnmPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { GalleryPage } from './pages/GalleryPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

export const AppContent: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#475569] overflow-x-hidden">
      <ScrollToTop />

      {/* Subtle Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#FF5E5E] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* HEADER (Two-level header with dropdowns & search) */}
      <Header />

      {/* MULTIPAGE MAIN CONTENT */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/academics/bsc-nursing" element={<BscNursingPage />} />
          <Route path="/academics/gnm" element={<GnmPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* FOOTER (Medova 4-column dark navy footer) */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
