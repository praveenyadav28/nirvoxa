import React from 'react';
import {
  Briefcase,
  Code2,
  Terminal,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Mail,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { companyConfig } from '../../config/company';

export const CareersPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Careers', to: '/careers' }]} />

      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Culture
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Build Meaningful Business Software at Nirvoxa
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We value clean code, thoughtful architecture, business empathy, and continuous learning. For future opportunities, you can introduce yourself by email.
          </p>
        </div>
      </div>

      {/* Culture Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-2xl">
          <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">High Code Standards</h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We write modular, type-safe, and thoroughly reviewed code. No messy hacks or brittle patches.
          </p>
        </div>
        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-2xl">
          <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">Real-World Impact</h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            The software you build runs actual garages, warehouses, pathology labs, and hospitals every day.
          </p>
        </div>
        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-2xl">
          <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">Collaborative Growth</h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Transparent communication, mutual respect, and support for your personal professional development.
          </p>
        </div>
      </div>

      {/* Open Opportunities */}
      <section>
        <SectionHeading
          badge="Careers"
          title="Build with"
          highlightText="Nirvoxa"
          subtitle="There are no specific openings listed on this page right now."
        />

        <div className="border-y border-slate-200 dark:border-brand-navy-border py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            If your experience fits the kind of products and services we build, send a short introduction and links to your work. We will keep it for consideration when a relevant role opens.
          </p>
          <Button
            href={`mailto:${companyConfig.contact.email}?subject=Careers%20at%20Nirvoxa`}
            variant="glow"
            size="sm"
            icon={Mail}
            className="shrink-0"
          >
            Introduce Yourself
          </Button>
        </div>
      </section>

      {/* Spontaneous Application */}
      <div className="bg-slate-50 dark:bg-brand-navy-surface border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        <p>
          Don't see your specific role? Send your resume, GitHub profile, and a brief note about what you enjoy building to{' '}
          <a href={`mailto:${companyConfig.contact.email}`} className="text-brand-blue dark:text-brand-cyan font-bold underline">
            {companyConfig.contact.email}
          </a>.
        </p>
      </div>
    </div>
  );
};
