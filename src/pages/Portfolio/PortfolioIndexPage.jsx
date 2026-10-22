import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Filter,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { portfolioData } from '../../config/portfolio';

export const PortfolioIndexPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'SaaS Products', 'Business Management Systems', 'Web Applications', 'Custom Software'];

  const filteredItems =
    selectedFilter === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Portfolio & Case Studies', to: '/portfolio' }]} />

      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Software Architecture Demonstrations
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Portfolio & Systems Showcase
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore architectural concept demonstrations showing how Nirvoxa engineers end-to-end operational software, real-time data sync, and responsive user interfaces.
          </p>
          <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl text-xs text-slate-400 inline-block">
            Note: Demonstrations below illustrate technical capabilities and interface workflows. Fictional sample data is clearly identified.
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-2" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedFilter === cat
                ? 'bg-brand-blue text-white shadow-md'
                : 'bg-slate-100 dark:bg-brand-navy-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-brand-navy-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-blue/50 transition-all shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
                  {item.type}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                {item.title}
              </h2>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-3">
                {item.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Key Features */}
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-6">
                {item.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-brand-navy-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {item.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to={`/portfolio/${item.slug}`}
                className="text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
              >
                Read Architectural Blueprint <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
