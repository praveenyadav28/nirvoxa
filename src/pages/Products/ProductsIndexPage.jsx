import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Filter,
  Sparkles,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { productsData } from '../../config/products';

export const ProductsIndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Automotive & Service', 'Supply Chain & Commerce', 'Healthcare & Diagnostics', 'Hospitality & Real Estate', 'Automotive & Retail', 'Healthcare & Clinical', 'Education & Institutional', 'Retail & POS', 'Food & Beverage', 'Custom Engineering'];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Products', to: '/products' }]} />

      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Nirvoxa Product Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Intelligent Business Management Software
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Standardize your company's core operations with our specialized SaaS platforms. Built with multi-branch synchronization, GST-ready invoicing, role-based security, and automated customer communication.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Button
              variant="glow"
              size="md"
              to="/book-a-demo"
            >
              Book an Interactive Demo
            </Button>
            <Button
              variant="secondary"
              size="md"
              to="/custom-software-solutions"
            >
              Need Custom Workflows?
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-2" />
        {['All', 'Automotive & Service', 'Supply Chain & Commerce', 'Healthcare & Diagnostics', 'Hospitality & Real Estate', 'Automotive & Retail', 'Healthcare & Clinical'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${selectedCategory === cat
                ? 'bg-brand-blue text-white shadow-md'
                : 'bg-slate-100 dark:bg-brand-navy-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-brand-navy-border'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-blue/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  {product.icon === 'Wrench' && <Wrench className="w-6 h-6" />}
                  {product.icon === 'Boxes' && <Boxes className="w-6 h-6" />}
                  {product.icon === 'FlaskConical' && <FlaskConical className="w-6 h-6" />}
                  {product.icon === 'Building2' && <Building2 className="w-6 h-6" />}
                  {product.icon === 'Car' && <Car className="w-6 h-6" />}
                  {product.icon === 'Stethoscope' && <Stethoscope className="w-6 h-6" />}
                  {product.icon === 'GraduationCap' && <GraduationCap className="w-6 h-6" />}
                  {product.icon === 'ShoppingBag' && <ShoppingBag className="w-6 h-6" />}
                  {product.icon === 'Utensils' && <Utensils className="w-6 h-6" />}
                  {product.icon === 'Layers' && <Layers className="w-6 h-6" />}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {product.badge}
                </span>
              </div>

              <div className="text-[11px] font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider mb-1">
                {product.category}
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                {product.name}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                {product.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-brand-navy-border/60 space-y-2">
                {product.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-brand-navy-border flex items-center justify-between gap-3">
              <Link
                to={`/products/${product.slug}`}
                className="text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
              >
                Explore Solution <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Button
                size="sm"
                variant="glow"
                to={`/book-a-demo?product=${product.id}`}
              >
                Request Demo
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
