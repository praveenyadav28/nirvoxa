import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  HeartHandshake,
  Workflow,
  Compass,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { companyConfig } from '../../config/company';

export const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      <Breadcrumb items={[{ label: 'About Nirvoxa', to: '/about' }]} />

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Corporate Profile
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About {companyConfig.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {companyConfig.shortDescription}
          </p>
          <div className="pt-2">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold">
              {companyConfig.subTagline}
            </span>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold mb-4">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Our Mission
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To build intuitive, robust, and accessible business management software and custom digital solutions that eliminate operational friction, reduce administrative overhead, and give business owners complete clarity over their daily operations.
          </p>
        </div>

        <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-brand-cyan flex items-center justify-center font-bold mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Our Vision
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            To be recognized as a reliable technology partner for scaling enterprises—providing both ready-to-deploy vertical SaaS products and bespoke software engineering built with architectural integrity.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <section>
        <SectionHeading
          badge="Guiding Principles"
          title="The Engineering Philosophy"
          highlightText="Behind Nirvoxa"
          subtitle="How we approach software design, customer data, and technical partnerships."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Business-First Design
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not build software for the sake of complexity. Interfaces are designed around genuine operational steps so that frontline operators can execute tasks quickly without extensive manual reading.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Architectural Honesty
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We aim for maintainable code, clear data models, appropriate access controls, and documented interfaces suited to each project.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Respect for Client Data
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Client data should be handled with care and used only for agreed project needs. Data access, hosting, retention, and security controls are defined for each engagement rather than assumed from a general promise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-brand-navy-surface via-slate-900 to-brand-navy-deep border border-brand-navy-border rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Partner With Nirvoxa On Your Next Digital Initiative
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
          Whether you need a ready-made management software demonstration or want to discuss a custom development roadmap, our team is ready to consult.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="glow" size="lg" to="/contact">
            Schedule a Consultation
          </Button>
          <Button variant="secondary" size="lg" to="/products">
            Explore SaaS Products
          </Button>
        </div>
      </div>
    </div>
  );
};
