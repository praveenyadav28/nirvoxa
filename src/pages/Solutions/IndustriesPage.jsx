import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Boxes,
  Stethoscope,
  Building2,
  Car,
  GraduationCap,
  ShoppingBag,
  Utensils,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { industriesData } from '../../config/industries';
import { productsData } from '../../config/products';

export const IndustriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Industries & Solutions', to: '/industries' }]} />

      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Industry Tailored Systems
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Specialized Digital Systems for Every Industry Vertical
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From multi-bay automotive service centers and multi-warehouse supply distributors to diagnostic laboratories and hotels. Discover our industry-configured workflows.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industriesData.map((ind) => {
          const matchedProduct = productsData.find((p) => p.id === ind.recommendedProduct);
          return (
            <div
              key={ind.id}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold">
                    {ind.icon === 'Wrench' && <Wrench className="w-6 h-6" />}
                    {ind.icon === 'Boxes' && <Boxes className="w-6 h-6" />}
                    {ind.icon === 'Stethoscope' && <Stethoscope className="w-6 h-6" />}
                    {ind.icon === 'Building2' && <Building2 className="w-6 h-6" />}
                    {ind.icon === 'Car' && <Car className="w-6 h-6" />}
                    {ind.icon === 'GraduationCap' && <GraduationCap className="w-6 h-6" />}
                    {ind.icon === 'ShoppingBag' && <ShoppingBag className="w-6 h-6" />}
                    {ind.icon === 'Utensils' && <Utensils className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {ind.name}
                    </h3>
                    <span className="text-xs text-brand-blue dark:text-brand-cyan font-semibold">
                      {ind.tagline}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {ind.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-brand-navy-border/60 text-xs text-slate-700 dark:text-slate-300">
                  {ind.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-brand-navy-border flex items-center justify-between">
                {matchedProduct && (
                  <Link
                    to={`/products/${matchedProduct.slug}`}
                    className="text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    View {matchedProduct.shortName} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                <Link
                  to="/contact"
                  className="text-xs text-slate-500 hover:text-white"
                >
                  Custom Requirements →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
