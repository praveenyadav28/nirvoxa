import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Wrench,
  Boxes,
  FlaskConical,
  Building2,
  Car,
  Stethoscope,
  ChevronRight,
  Check,
  Globe,
  Smartphone,
  Code2,
  Cloud,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SaaSAppConsole } from '../../components/dashboards/SaaSAppConsole';
import { productsData } from '../../config/products';
import { servicesData } from '../../config/services';
import { companyConfig } from '../../config/company';

export const HomePage = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaqIndex(activeFaqIndex === idx ? null : idx);
  };

  const priorityProducts = productsData.slice(0, 6);
  const featuredServices = servicesData.slice(0, 4);
  const serviceIcons = [Code2, Globe, Smartphone, Cloud];

  return (
    <div className="space-y-20 sm:space-y-28 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4">
        <div className="grid lg:grid-cols-2 gap-7 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue dark:text-brand-cyan">
              <span className="w-7 h-px bg-brand-blue dark:bg-brand-cyan" />
              <span>Ideas. Code. Growth.</span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="max-w-[12ch] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.08]">
                {companyConfig.name}
              </h1>
              <p className="max-w-lg text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                Technology built around how your business works.
              </p>
              <p className="max-w-lg text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                We create practical business software, custom web and mobile applications, and digital products shaped around real workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3 pt-1">
              <Button size="lg" to="/services" variant="glow" className="w-full !px-3 !py-3 text-sm sm:w-auto sm:!px-6 sm:!py-3.5 sm:text-base">
                <span className="sm:hidden">Services</span>
                <span className="hidden sm:inline">Explore Our Services</span>
              </Button>
              <Button size="lg" to="/products" variant="secondary" icon={ArrowRight} className="w-full !px-3 !py-3 text-sm sm:w-auto sm:!px-6 sm:!py-3.5 sm:text-base">
                <span className="sm:hidden">Products</span>
                <span className="hidden sm:inline">View Industry Software</span>
              </Button>
            </div>

            <div className="hidden flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-medium text-slate-600 dark:text-slate-400 sm:flex">
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-cyan" /> Custom software</span>
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-cyan" /> Industry platforms</span>
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-cyan" /> Web & mobile apps</span>
            </div>
          </div>

          <figure className="relative max-w-xl w-full justify-self-center lg:justify-self-end">
            <div className="relative isolate aspect-auto min-h-[14rem] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-3 shadow-2xl shadow-brand-blue/10 sm:aspect-[4/3] sm:p-7 dark:border-brand-navy-border dark:bg-brand-navy">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(8,102,245,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(8,102,245,0.08)_1px,transparent_1px)] [background-size:36px_36px]"
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-brand-navy-border sm:pb-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Code2 className="h-4 w-4 text-brand-blue dark:text-brand-cyan" />
                    Nirvoxa / Product Suite
                  </div>
                  <span className="hidden text-[10px] font-semibold text-brand-blue dark:text-brand-cyan sm:inline">Built for business</span>
                </div>

                <div className="py-2 sm:py-6">
                  <p className="text-xs font-semibold text-brand-blue dark:text-brand-cyan">One connected workspace</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-200 sm:hidden">
                    Tools for everyday operations.
                  </p>
                  <h2 className="mt-1 hidden text-xl font-bold leading-tight text-slate-900 dark:text-white sm:block sm:text-2xl">
                    Software for the work that moves you forward.
                  </h2>
                </div>

                <div className="space-y-1.5 sm:space-y-2.5">
                  {productsData.slice(0, 3).map((product, index) => {
                    const ProductIcon = product.icon === 'Wrench' ? Wrench : product.icon === 'Boxes' ? Boxes : FlaskConical;
                    return (
                      <div
                        key={product.id}
                        className={`${index > 1 ? 'hidden sm:flex' : 'flex'} min-w-0 items-center gap-2.5 rounded-lg border border-slate-200 bg-white/90 p-2 shadow-sm dark:border-brand-navy-border dark:bg-brand-navy-card/90 sm:gap-3 sm:p-3.5`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan sm:h-9 sm:w-9">
                          <ProductIcon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold text-slate-900 dark:text-white">{product.shortName}</span>
                          <span className="mt-0.5 hidden truncate text-[11px] text-slate-500 dark:text-slate-400 sm:block">{product.highlights[0]}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto hidden items-center justify-between gap-3 border-t border-slate-200 pt-3 dark:border-brand-navy-border sm:flex sm:pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Products</span>
                  <span className="h-px flex-1 bg-brand-blue/30 dark:bg-brand-cyan/30" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-cyan">Custom solutions</span>
                </div>
              </div>
            </div>
            <figcaption className="mt-3 hidden items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 sm:flex">
              <span>{companyConfig.legalName}</span>
              <span className="text-brand-blue dark:text-brand-cyan">Built around your business</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE 6 CORE SOFTWARE PRODUCTS (CLEAN & VISUAL)          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan mb-2 block">
            Ready-to-Deploy Software
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Purpose-Built for Your Industry
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Pick your industry software below to see tailored workflows, digital job cards, and automated billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityProducts.map((p) => {
            const Icon =
              p.icon === 'Wrench' ? Wrench :
                p.icon === 'Boxes' ? Boxes :
                  p.icon === 'FlaskConical' ? FlaskConical :
                    p.icon === 'Building2' ? Building2 :
                      p.icon === 'Car' ? Car : Stethoscope;

            return (
              <div
                key={p.id}
                className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:border-brand-blue/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {p.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-brand-navy-border/60 space-y-2">
                    {p.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-brand-navy-border flex items-center justify-between">
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    View Software Tour <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <Button
                    size="sm"
                    variant="glow"
                    to={`/book-a-demo?product=${p.id}`}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CORE ENGINEERING SERVICES                              */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan mb-2 block">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The right team for your next digital product
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            From early product design to launch and ongoing care, bring your idea to one engineering partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredServices.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group border border-slate-200 dark:border-brand-navy-border bg-white dark:bg-brand-navy-card p-5 rounded-lg transition-colors hover:border-brand-cyan/60"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-blue dark:text-brand-cyan">
                  Service details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Link to="/services" className="text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline">
            See all services <ArrowRight className="inline w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CUSTOM SOFTWARE SPOTLIGHT (CLEAR & PRACTICAL)          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-gradient-to-br from-brand-navy-surface via-slate-900 to-brand-navy-deep border border-brand-navy-border p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan px-2.5 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 inline-block">
                Bespoke Software Division
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Software should fit your business, not the other way around.
              </h2>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                When off-the-shelf software is not the right fit, we can shape a custom application around your workflows, team, and goals.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-cyan" /> Web applications</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-cyan" /> Mobile experiences</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-cyan" /> Product integrations</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                size="lg"
                to="/custom-software-solutions"
                variant="glow"
                className="w-full text-center"
              >
                Explore Custom Solutions
              </Button>
              <Button
                size="lg"
                to="/contact"
                variant="secondary"
                className="w-full text-center"
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SIMPLE 3-STEP GETTING STARTED                          */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-cyan mb-2 block">
          A Clear Starting Point
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
          From first conversation to launch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-lg">
            <span className="text-3xl font-extrabold text-brand-blue/30 dark:text-brand-cyan/30 font-mono block mb-2">01</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
              Understand the Need
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Share your idea, current workflow, and the problem you want technology to solve.
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-lg">
            <span className="text-3xl font-extrabold text-brand-blue/30 dark:text-brand-cyan/30 font-mono block mb-2">02</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
              Shape the Solution
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              We map the right product, service, or custom build to your requirements.
            </p>
          </div>

          <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-6 rounded-lg">
            <span className="text-3xl font-extrabold text-brand-blue/30 dark:text-brand-cyan/30 font-mono block mb-2">03</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
              Build and Improve
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Work together through delivery and keep improving as your needs evolve.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CLEAN FAQ & FINAL CTA                                  */}
      {/* ========================================================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">
          Common Questions
        </h2>

        <div className="space-y-3">
          {[
            {
              q: 'What does Nirvoxa IT Solutions build?',
              a: 'We build industry-focused business software, custom web and mobile applications, and digital products tailored to operational needs.',
            },
            {
              q: 'Can I choose between a ready-made product and a custom solution?',
              a: 'Yes. Explore our industry products for established workflows, or talk to us about a custom solution when your requirements need a different approach.',
            },
            {
              q: 'How do I start a project with your team?',
              a: 'Get in touch with a short description of your goals and current process. We can discuss requirements, scope, and suitable next steps together.',
            },
            {
              q: 'Do you provide support after delivery?',
              a: 'Ongoing maintenance and support are among our services. The right support arrangement depends on your product and project requirements.',
            },
          ].map((item, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-lg overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-slate-900 dark:text-white"
                >
                  <span>{item.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-brand-cyan transition-transform ${isOpen ? 'rotate-90' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-brand-navy-border/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-navy-card p-8 sm:p-12 text-center text-white shadow-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have a better way of working in mind?
          </h2>
          <p className="text-sm text-blue-100 max-w-lg mx-auto">
            Tell us what you want to improve. We will help you explore a practical software solution for your business.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="font-bold text-slate-900"
              to="/contact"
            >
              Discuss Your Project
            </Button>
            <Button
              size="lg"
              to="/custom-software-solutions"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Explore Custom Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
