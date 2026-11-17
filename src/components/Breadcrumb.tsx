import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <nav aria-label="Breadcrumb" className="inline-flex items-center">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm font-semibold">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isLight
                ? 'text-white/80 hover:text-white'
                : 'text-slate-500 hover:text-[#132847]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight
                className={`w-3.5 h-3.5 ${
                  isLight ? 'text-white/40' : 'text-slate-400'
                }`}
              />
              {isLast || !item.href ? (
                <span
                  className={
                    isLight ? 'text-[#FF5E5E] font-bold' : 'text-[#FF5E5E] font-bold'
                  }
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={`transition-colors ${
                    isLight
                      ? 'text-white/80 hover:text-white'
                      : 'text-slate-500 hover:text-[#132847]'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

