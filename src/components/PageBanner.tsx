import React from 'react';
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb';
import { motion } from 'framer-motion';

interface PageBannerProps {
  tag?: string;
  title: string;
  highlightPhrase?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  tag,
  title,
  highlightPhrase,
  description,
  breadcrumbs,
  bgImage = '/images/about-campus-building.jpg',
}) => {
  return (
    <section className="relative w-full bg-[#132847] text-white py-14 sm:py-20 overflow-hidden">
      {/* Background with Medova overlay and blueprint grid */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-hero-grid pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#132847] via-[#132847]/95 to-[#132847]/80" />

      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2A7FBA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#FF5E5E]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-3xl"
          >
            {tag && (
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>{tag}</span>
              </div>
            )}

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {highlightPhrase && title.includes(highlightPhrase) ? (
                <>
                  {title.split(highlightPhrase)[0]}
                  <span className="text-[#FF5E5E]">{highlightPhrase}</span>
                  {title.split(highlightPhrase)[1]}
                </>
              ) : (
                title
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 max-w-2xl">
                {description}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0 pt-2 md:pt-0"
          >
            <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm shadow-inner">
              <Breadcrumb items={breadcrumbs} variant="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
