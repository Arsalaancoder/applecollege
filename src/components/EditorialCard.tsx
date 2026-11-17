import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export type EditorialTheme = 'peach' | 'mint' | 'lavender' | 'slate' | 'blue' | 'navy';
export type EditorialGraphic = 'chevron' | 'circles' | 'blocks' | 'semicircles' | 'medical' | 'none';

interface EditorialCardProps {
  status?: string;
  statusBadge?: string;
  statusDotColor?: string;
  theme?: EditorialTheme;
  title: string;
  subtitle?: string;
  description: string;
  actionText?: string;
  linkText?: string;
  actionLink?: string;
  linkTo?: string;
  onClick?: () => void;
  graphic?: EditorialGraphic;
  children?: React.ReactNode;
  className?: string;
}

const themeStyles: Record<
  EditorialTheme,
  {
    bg: string;
    border: string;
    dot: string;
    titleColor: string;
    actionColor: string;
    primaryGradient: string;
    secondaryGradient: string;
  }
> = {
  peach: {
    bg: 'bg-[#FDF2E9]',
    border: 'border-[#FADCC7]/70',
    dot: 'bg-[#E07A5F]',
    titleColor: 'text-[#132847]',
    actionColor: 'text-[#132847] hover:text-[#E07A5F]',
    primaryGradient: '#F4A261',
    secondaryGradient: '#E76F51',
  },
  mint: {
    bg: 'bg-[#EAF5EE]',
    border: 'border-[#CCE8D6]/70',
    dot: 'bg-[#248568]',
    titleColor: 'text-[#132847]',
    actionColor: 'text-[#132847] hover:text-[#248568]',
    primaryGradient: '#2A9D8F',
    secondaryGradient: '#248568',
  },
  lavender: {
    bg: 'bg-[#F1EDFA]',
    border: 'border-[#DDD4F3]/70',
    dot: 'bg-[#7C3AED]',
    titleColor: 'text-[#132847]',
    actionColor: 'text-[#132847] hover:text-[#7C3AED]',
    primaryGradient: '#8B5CF6',
    secondaryGradient: '#6D28D9',
  },
  slate: {
    bg: 'bg-[#F4F4F2]',
    border: 'border-slate-200/80',
    dot: 'bg-[#132847]',
    titleColor: 'text-[#132847]',
    actionColor: 'text-[#132847] hover:text-[#FF5E5E]',
    primaryGradient: '#94A3B8',
    secondaryGradient: '#475569',
  },
  blue: {
    bg: 'bg-[#EBF3FB]',
    border: 'border-[#C8DFFA]/70',
    dot: 'bg-[#2563EB]',
    titleColor: 'text-[#132847]',
    actionColor: 'text-[#132847] hover:text-[#2563EB]',
    primaryGradient: '#38BDF8',
    secondaryGradient: '#2563EB',
  },
  navy: {
    bg: 'bg-[#10223E]',
    border: 'border-white/10',
    dot: 'bg-[#38BDF8]',
    titleColor: 'text-white',
    actionColor: 'text-white hover:text-[#38BDF8]',
    primaryGradient: '#38BDF8',
    secondaryGradient: '#1D4ED8',
  },
};

export const EditorialCard: React.FC<EditorialCardProps> = ({
  status: propStatus,
  statusBadge,
  statusDotColor,
  theme = 'peach',
  title,
  subtitle,
  description,
  actionText: propActionText,
  linkText,
  actionLink: propActionLink,
  linkTo,
  onClick,
  graphic = 'chevron',
  children,
  className = '',
}) => {
  const currentTheme = themeStyles[theme] || themeStyles.peach;
  const dotColor = statusDotColor || currentTheme.dot;
  const isNavy = theme === 'navy';
  const status = propStatus || statusBadge || 'Verified Programme';
  const actionText = propActionText || linkText || 'Learn more';
  const actionLink = propActionLink || linkTo;

  // SVG Abstract Graphics matching Teamway reference
  const renderGraphic = () => {
    switch (graphic) {
      case 'chevron':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-40 sm:h-40 opacity-80" fill="none">
            <rect
              x="20"
              y="20"
              width="45"
              height="85"
              rx="22"
              transform="rotate(45 20 20)"
              fill={`url(#grad-peach-${title.slice(0, 3)})`}
            />
            <rect
              x="60"
              y="20"
              width="45"
              height="85"
              rx="22"
              transform="rotate(45 60 20)"
              fill={`url(#grad-peach-${title.slice(0, 3)})`}
              opacity="0.85"
            />
            <defs>
              <linearGradient
                id={`grad-peach-${title.slice(0, 3)}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor={currentTheme.primaryGradient} stopOpacity="0.8" />
                <stop offset="100%" stopColor={currentTheme.secondaryGradient} stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'circles':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-40 sm:h-40 opacity-85" fill="none">
            <circle cx="80" cy="80" r="65" fill={`url(#grad-circ-${title.slice(0, 3)})`} opacity="0.25" />
            <circle cx="80" cy="80" r="45" fill={`url(#grad-circ-${title.slice(0, 3)})`} opacity="0.5" />
            <circle cx="80" cy="80" r="25" fill={`url(#grad-circ-${title.slice(0, 3)})`} />
            <defs>
              <linearGradient
                id={`grad-circ-${title.slice(0, 3)}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor={currentTheme.primaryGradient} />
                <stop offset="100%" stopColor={currentTheme.secondaryGradient} />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'semicircles':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-40 sm:h-40 opacity-80" fill="none">
            <circle cx="80" cy="45" r="35" fill={currentTheme.primaryGradient} opacity="0.6" />
            <path
              d="M35 125 A45 45 0 0 1 125 125 Z"
              fill={currentTheme.secondaryGradient}
              opacity="0.75"
            />
          </svg>
        );

      case 'blocks':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-40 sm:h-40 opacity-85" fill="none">
            <rect
              x="30"
              y="30"
              width="50"
              height="50"
              rx="18"
              fill={currentTheme.primaryGradient}
              opacity="0.85"
            />
            <rect
              x="70"
              y="70"
              width="55"
              height="55"
              rx="20"
              fill={currentTheme.secondaryGradient}
              opacity="0.9"
            />
            <rect
              x="30"
              y="90"
              width="35"
              height="35"
              rx="12"
              fill={currentTheme.primaryGradient}
              opacity="0.45"
            />
          </svg>
        );

      case 'medical':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-40 sm:h-40 opacity-75" fill="none">
            <rect x="62" y="25" width="36" height="110" rx="18" fill={currentTheme.primaryGradient} opacity="0.7" />
            <rect x="25" y="62" width="110" height="36" rx="18" fill={currentTheme.secondaryGradient} opacity="0.85" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`rounded-[28px] p-7 sm:p-9 ${currentTheme.bg} border ${currentTheme.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${className}`}
    >
      {/* Top Row: Status Pill Badge */}
      <div className="flex items-center justify-between gap-4 mb-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-xs text-[11px] font-bold text-slate-800">
          <span className={`w-2 h-2 rounded-full ${dotColor}`} />
          <span>{status}</span>
        </div>

        {subtitle && (
          <span className={`text-[11px] font-bold uppercase tracking-wider ${isNavy ? 'text-slate-300' : 'text-slate-500'}`}>
            {subtitle}
          </span>
        )}
      </div>

      {/* Middle Layout: Text Content (Left) + Abstract Motif (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center z-10">
        <div className={`${graphic !== 'none' ? 'md:col-span-8' : 'md:col-span-12'} space-y-3`}>
          <h3 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${currentTheme.titleColor} leading-tight`}>
            {title}
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>

          {children && <div className="pt-2">{children}</div>}
        </div>

        {graphic !== 'none' && (
          <div className="hidden md:flex md:col-span-4 justify-end items-center pointer-events-none select-none transition-transform duration-500 group-hover:scale-105">
            {renderGraphic()}
          </div>
        )}
      </div>

      {/* Bottom Action Link or Button */}
      {(actionLink || onClick) && (
        <div className="pt-6 mt-4 border-t border-black/5 z-10">
          {onClick ? (
            <button
              type="button"
              onClick={onClick}
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold ${currentTheme.actionColor} transition-all group/link cursor-pointer`}
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </button>
          ) : actionLink?.startsWith('http') ||
            actionLink?.startsWith('tel:') ||
            actionLink?.startsWith('mailto:') ||
            actionLink?.startsWith('#') ? (
            <a
              href={actionLink}
              target={actionLink.startsWith('http') ? '_blank' : undefined}
              rel={actionLink.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold ${currentTheme.actionColor} transition-all group/link`}
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          ) : (
            <Link
              to={actionLink!}
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold ${currentTheme.actionColor} transition-all group/link`}
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
};
