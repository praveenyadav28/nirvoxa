import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check,
  ChevronRight,
  Layers,
  Cpu,
  AlertCircle,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { portfolioData } from '../../config/portfolio';

export const PortfolioDetailPage = () => {
  const { slug } = useParams();

  const item = portfolioData.find((p) => p.slug === slug);

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb
        items={[
          { label: 'Portfolio', to: '/portfolio' },
          { label: item.title, to: `/portfolio/${item.slug}` },
        ]}
      />

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan font-mono">
              {item.type}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {item.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-200 font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge vs Solution Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold mb-4">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            The Operational Challenge
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.challenge}
          </p>
        </div>

        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            The Engineering Solution
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.solution}
          </p>
        </div>
      </div>

      {/* Key Architectural Features */}
      <section>
        <SectionHeading
          badge="System Highlights"
          title="Engineered Capabilities &"
          highlightText="Specifications"
          subtitle="Specific technical components designed into this architecture demonstration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {item.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-5 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
            >
              <Check className="w-5 h-5 text-brand-cyan shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-brand-navy-surface via-slate-900 to-brand-navy-deep border border-brand-navy-border rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Need a Similar System Built for Your Enterprise?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
          Schedule an architecture discovery session with our engineering leads to discuss your company's workflows and receive a technical proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="glow" size="lg" to="/contact">
            Discuss Your System Requirements
          </Button>
          <Button variant="secondary" size="lg" to="/portfolio">
            Back to All Showcases
          </Button>
        </div>
      </div>
    </div>
  );
};
