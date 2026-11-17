import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Expand, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, type GalleryItem } from '@/data/appleCollegeData';
import {
  BlurInText,
  SectionEyebrow,
  staggerContainerVariant,
  staggerCardVariant,
} from './MotionPrimitives';

const categories: Array<'All' | GalleryItem['category']> = [
  'All',
  'Campus',
  'Classrooms',
  'Laboratories',
  'Practical Learning',
  'Student Activities',
];

interface GallerySectionProps {
  showViewMoreButton?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ showViewMoreButton = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((idx) =>
      idx === null ? null : (idx - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((idx) => (idx === null ? null : (idx + 1) % filteredItems.length));
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FC] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <SectionEyebrow label="Campus Gallery" />
            <BlurInText>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#142C55] tracking-tight">
                Inside Apple College of Nursing
              </h2>
            </BlurInText>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#142C55] text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#248568] hover:text-[#248568]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={selectedCategory}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              variants={staggerCardVariant}
              onClick={() => setLightboxIndex(idx)}
              className="group relative text-left rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#248568]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#142C55]/0 group-hover:bg-[#142C55]/35 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity w-11 h-11 rounded-full bg-white text-[#142C55] flex items-center justify-center shadow-lg">
                    <Expand className="w-4 h-4" />
                  </span>
                </div>
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 text-[#142C55] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-base font-extrabold text-[#142C55] group-hover:text-[#248568] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {showViewMoreButton && (
          <div className="text-center pt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#132847] hover:bg-[#0E1D33] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Complete Campus Photo Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#FF5E5E]" />
            </Link>
          </div>
        )}
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#0E203F]/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#142C55] flex items-center justify-center shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative bg-slate-900">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.imageAlt}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                />

                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#142C55] flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#142C55] flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#248568]">
                    {activeItem.category}
                  </span>
                  <h4 className="font-display text-lg font-extrabold text-[#142C55]">
                    {activeItem.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{activeItem.caption}</p>
                </div>
                <span className="text-xs font-bold text-slate-400 shrink-0">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

