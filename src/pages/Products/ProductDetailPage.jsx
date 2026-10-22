import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Wrench,
  Boxes,
  FlaskConical,
  Building2,
  Car,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronRight,
  Users,
  Lock,
  Workflow,
  HelpCircle,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { productsData } from '../../config/products';

// Specialized Dashboard Previews
import { WorkshopDashboard } from '../../components/dashboards/WorkshopDashboard';
import { InventoryDashboard } from '../../components/dashboards/InventoryDashboard';
import { LabDashboard } from '../../components/dashboards/LabDashboard';
import { HotelDashboard } from '../../components/dashboards/HotelDashboard';
import { ShowroomDashboard } from '../../components/dashboards/ShowroomDashboard';
import { HospitalDashboard } from '../../components/dashboards/HospitalDashboard';
import { CustomSoftwareWorkflow } from '../../components/dashboards/CustomSoftwareWorkflow';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const [activeFaq, setActiveFaq] = useState(null);

  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  // Render the appropriate live interactive dashboard preview
  const renderDashboardPreview = () => {
    switch (product.id) {
      case 'workshop-management':
        return <WorkshopDashboard />;
      case 'inventory-management':
        return <InventoryDashboard />;
      case 'lab-management':
        return <LabDashboard />;
      case 'hostel-hotel-management':
        return <HotelDashboard />;
      case 'showroom-management':
        return <ShowroomDashboard />;
      case 'hospital-management':
        return <HospitalDashboard />;
      default:
        return <CustomSoftwareWorkflow />;
    }
  };

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Products', to: '/products' },
              { label: product.name, to: `/products/${product.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/30">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>{product.badge} | {product.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Target Users Pill Badges */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Designed Specifically For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.targetUsers.map((user, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Button
                  size="lg"
                  variant="glow"
                  to={`/book-a-demo?product=${product.id}`}
                  className="w-full sm:w-auto"
                >
                  Schedule Live {product.shortName} Demo
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  to="/contact"
                  className="w-full sm:w-auto"
                >
                  Inquire About Pricing
                </Button>
              </div>

              {/* Stats Highlights */}
              {product.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-brand-navy-border/80">
                  {product.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-lg sm:text-xl font-extrabold text-brand-blue dark:text-brand-cyan">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hero Right: Live Interactive Dashboard preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl blur-xl opacity-20 dark:opacity-30" />
                <div className="relative z-10">
                  {renderDashboardPreview()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE MODULES & FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Functional Modules"
          title="Engineered With Complete"
          highlightText="Operational Modules"
          subtitle={`Everything required to coordinate frontline operators, parts inventory, accounting, and customer communication in ${product.shortName}.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.modules.map((module, i) => (
            <div
              key={i}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm hover:border-brand-blue/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BUSINESS WORKFLOW TIMELINE */}
      {product.workflow && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="End-to-End Workflow"
            title="How Information Flows"
            highlightText="From Arrival to Handover"
            subtitle="Eliminate manual bottlenecks with an automated 5-step operational pipeline."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflow.map((w, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-xl p-5 relative"
              >
                <div className="text-3xl font-extrabold text-brand-blue/30 dark:text-brand-cyan/30 font-mono mb-2">
                  {w.step}
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {w.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. ROLE-BASED VALUE PROPOSITION */}
      {product.roleBenefits && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Stakeholder Value"
            title="Tailored Value for Every"
            highlightText="Business Persona"
            subtitle="Different team members interact with the software differently. Here is how each role benefits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.roleBenefits.map((rb, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-brand-cyan/20 text-cyan-600 dark:text-brand-cyan flex items-center justify-center font-bold mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {rb.role}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {rb.benefit}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. SECURITY & ONBOARDING STRATEGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Security & Role-Based Governance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Access policies can be scoped by role and workflow. The permissions needed for your team should be confirmed during product evaluation and setup.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Hosting and encryption controls confirmed per deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Backup and recovery arrangements defined for the selected service</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Audit history can be scoped to relevant workflows</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-brand-cyan/20 text-cyan-600 dark:text-brand-cyan flex items-center justify-center font-bold mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              3 to 10-Day Implementation & Staff Onboarding
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              We know your business cannot stop for software upgrades. Our onboarding team provides turnkey data migration from your existing spreadsheets, hardware integration (barcode guns/printers), and live staff training.
            </p>
            <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Automated CSV/Excel import templates for SKU catalogs & customer databases</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Personalized screen share training for advisors, cashiers & managers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Dedicated deployment manager during your first two weeks of go-live</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Related Management Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rp) => (
            <Link
              key={rp.id}
              to={`/products/${rp.slug}`}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-5 rounded-2xl hover:border-brand-blue/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
                  {rp.category}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-brand-blue dark:group-hover:text-brand-cyan">
                  {rp.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                  {rp.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-brand-navy-border/60 flex items-center justify-between text-xs font-semibold text-brand-blue dark:text-brand-cyan">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. FINAL PRODUCT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-navy-surface via-slate-900 to-brand-navy-deep p-8 sm:p-12 border border-brand-navy-border text-center text-white shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Upgrade to {product.shortName}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a personalized demonstration with a solution specialist to see live workflows, invoice templates, and reporting dashboards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="glow"
                size="lg"
                to={`/book-a-demo?product=${product.id}`}
              >
                Schedule Interactive Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                to="/contact"
              >
                Inquire With Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
