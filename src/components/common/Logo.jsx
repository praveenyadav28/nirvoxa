import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ className = 'h-10', showTagline = false }) => {
  return (
    <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg">
      <div className="relative flex items-center">
        {/* Crisp logo display */}
        <div className="p-1 rounded-lg bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-brand-navy-border shadow-sm group-hover:border-brand-blue/50 transition-all duration-200">
          <img
            src="/assets/images/nirvoxa-logo.png"
            alt="Nirvoxa IT Solutions Private Limited"
            className={`${className} w-auto object-contain`}
          />
        </div>
      </div>
      {showTagline && (
        <div className="hidden lg:flex flex-col border-l border-slate-300 dark:border-slate-700 pl-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-blue dark:text-brand-cyan">
            Enterprise Solutions
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Ideas | Code | Growth
          </span>
        </div>
      )}
    </Link>
  );
};
