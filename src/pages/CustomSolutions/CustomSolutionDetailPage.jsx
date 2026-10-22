import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check,
  ChevronRight,
  Server,
  Layers,
  Cpu,
  RefreshCw,
  Building,
  Briefcase,
  Globe,
  Smartphone,
  Network,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { customSolutionsData } from '../../config/customSolutions';
import { CustomSoftwareWorkflow } from '../../components/dashboards/CustomSoftwareWorkflow';
import { ProjectInquiryForm } from '../../components/forms/ProjectInquiryForm';

export const CustomSolutionDetailPage = () => {
  const { slug } = useParams();

  const solution = customSolutionsData.find((cs) => cs.slug === slug);

  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  const relatedSolutions = customSolutionsData
    .filter((cs) => cs.id !== solution.id)
    .slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Custom Software Solutions', to: '/custom-software-solutions' },
              { label: solution.title, to: `/custom-software-solutions/${solution.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>{solution.badge} | Custom Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {solution.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Button
                  size="lg"
                  href="#inquiry"
                  variant="glow"
                  className="w-full sm:w-auto"
                >
                  Request Technical Estimate
                </Button>
                <Button
                  size="lg"
                  to="/contact"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Schedule Architecture Review
                </Button>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-brand-navy-border/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Primary Technology Foundation:
                </span>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Workflow Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-3xl blur-xl opacity-20 dark:opacity-30" />
                <div className="relative z-10">
                  <CustomSoftwareWorkflow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TYPICAL USE CASES & BUSINESS SCENARIOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Practical Application"
          title="When Businesses Commission"
          highlightText={solution.shortName}
          subtitle="Explore the operational bottlenecks and enterprise requirements that this custom solution directly addresses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:border-brand-cyan/50 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center font-bold shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  Operational Scenario #{idx + 1}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Highlights"
          title="Architectural Highlights &"
          highlightText="System Capabilities"
          subtitle="We engineer for longevity, data integrity, security, and low maintenance overhead."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solution.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EMBEDDED PROJECT INQUIRY FORM PRE-SELECTED */}
      <section id="inquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Project Scoping"
          title="Scope Your"
          highlightText={solution.shortName}
          subtitle="Complete the project requirements below to receive a detailed technical proposal and delivery roadmap."
        />

        <ProjectInquiryForm prefilledService={solution.title} />
      </section>

      {/* 5. RELATED CUSTOM SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Related Custom Offerings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedSolutions.map((rs) => (
            <Link
              key={rs.id}
              to={`/custom-software-solutions/${rs.slug}`}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-5 rounded-2xl hover:border-brand-cyan/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">
                  {rs.badge}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-brand-cyan">
                  {rs.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                  {rs.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-brand-navy-border/60 flex items-center justify-between text-xs font-semibold text-brand-cyan">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
