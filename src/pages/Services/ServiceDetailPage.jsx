import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Code,
  Globe,
  Smartphone,
  Terminal,
  Palette,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Package,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { servicesData } from '../../config/services';

export const ServiceDetailPage = () => {
  const { slug } = useParams();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO */}
      <section className="relative pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Services', to: '/services' },
              { label: service.title, to: `/services/${service.slug}` },
            ]}
          />

          <div className="max-w-3xl space-y-6 pt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/30">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Technology Capability</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Button
                size="lg"
                to="/contact"
                variant="glow"
                className="w-full sm:w-auto"
              >
                Inquire About {service.shortName}
              </Button>
              <Button
                size="lg"
                to="/custom-software-solutions"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Custom Solutions Architecture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES & DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Capabilities */}
          <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Core Capabilities & Specializations
            </h3>
            <div className="space-y-3">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-slate-50 dark:bg-brand-navy-surface border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-brand-blue dark:text-brand-cyan" />
              Tangible Project Deliverables
            </h3>
            <div className="space-y-3">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-brand-blue dark:bg-brand-cyan mt-2 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Related Technology Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rs) => (
            <Link
              key={rs.id}
              to={`/services/${rs.slug}`}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-5 rounded-2xl hover:border-brand-blue/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-brand-blue dark:group-hover:text-brand-cyan">
                  {rs.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                  {rs.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-brand-navy-border/60 flex items-center justify-between text-xs font-semibold text-brand-blue dark:text-brand-cyan">
                <span>Explore Service</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-navy-surface via-slate-900 to-brand-navy-deep p-8 sm:p-12 border border-brand-navy-border text-center text-white shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Need Expert {service.shortName}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Consult with our engineering team to define technology specifications, architectural roadmaps, and delivery schedules.
            </p>
            <div className="pt-2">
              <Button
                variant="glow"
                size="lg"
                to="/contact"
              >
                Inquire With Engineering Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
