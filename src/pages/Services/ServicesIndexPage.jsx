import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Globe,
  Smartphone,
  Terminal,
  Palette,
  Cloud,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { servicesData } from '../../config/services';

export const ServicesIndexPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Services', to: '/services' }]} />

      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering & Technology Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Full-Lifecycle Software Development & Cloud Engineering
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From strategic UI/UX wireframing and frontend engineering to scalable backend microservices, cross-platform mobile apps, and automated cloud deployments.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Button
              variant="glow"
              size="md"
              to="/contact"
            >
              Discuss Your Project
            </Button>
            <Button
              variant="secondary"
              size="md"
              to="/custom-software-solutions"
            >
              Explore Custom Software Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((svc) => (
          <div
            key={svc.id}
            className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-blue/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                {svc.icon === 'Code' && <Code className="w-6 h-6" />}
                {svc.icon === 'Globe' && <Globe className="w-6 h-6" />}
                {svc.icon === 'Smartphone' && <Smartphone className="w-6 h-6" />}
                {svc.icon === 'Terminal' && <Terminal className="w-6 h-6" />}
                {svc.icon === 'Palette' && <Palette className="w-6 h-6" />}
                {svc.icon === 'Cloud' && <Cloud className="w-6 h-6" />}
                {svc.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                {svc.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                {svc.description}
              </p>

              {/* Capabilities */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-brand-navy-border/60 space-y-2">
                {svc.capabilities.slice(0, 3).map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span className="line-clamp-1">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-brand-navy-border flex items-center justify-between">
              <Link
                to={`/services/${svc.slug}`}
                className="text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
              >
                Service Overview <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="text-xs text-slate-500 hover:text-white"
              >
                Inquire →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
