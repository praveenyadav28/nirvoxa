import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Wrench,
  Boxes,
  FlaskConical,
  Building2,
  Car,
  Stethoscope,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { productsData } from '../../config/products';
import { companyConfig } from '../../config/company';
import { createMailtoHref } from '../../utils/createMailtoHref';

export const BookDemoPage = () => {
  const [searchParams] = useSearchParams();
  const requestedProduct = searchParams.get('product');
  const initialProduct = productsData.some((product) => product.id === requestedProduct)
    ? requestedProduct
    : 'workshop-management';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    product: initialProduct,
    teamSize: '5-20',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
    specificRequirements: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [mailDraftHref, setMailDraftHref] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid business email is required';
    if (!formData.phone.trim() || formData.phone.length < 8)
      errs.phone = 'Valid phone number is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.consent) errs.consent = 'Please confirm before preparing your email draft';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const productName = productsData.find((product) => product.id === formData.product)?.name || 'Custom software';
    const body = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company}`,
      `Business address: ${formData.address || 'Not provided'}`,
      `Product: ${productName}`,
      `Team size: ${formData.teamSize}`,
      `Preferred time: ${formData.preferredTime}`,
      '',
      'Workflows to discuss:',
      formData.specificRequirements || 'Not specified',
    ].join('\n');
    setMailDraftHref(createMailtoHref(companyConfig.contact.email, `Product walkthrough request: ${productName}`, body));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Book a Demo', to: '/book-a-demo' }]} />

      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Live Guided Walkthrough
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Schedule an Interactive Product Demonstration
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            See real workflows in action: live job cards, barcode scanning, stock reorders, patient records, and GST tax invoicing tailored to your business model.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              What to Expect During Your Demo
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Personalized Walkthrough:</strong> We tailor the session to your industry and current bottlenecks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Live Dashboard Console:</strong> Test job card generation, stock transfers, and invoice creation on a live screen share.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Architecture & Security Review:</strong> Discuss role permissions, data migration feasibility, and hosting options.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Transparent Pricing:</strong> Receive a clear estimate with zero high-pressure sales tactics.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-brand-navy-surface to-slate-950 border border-brand-navy-border p-6 rounded-2xl text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
              Flexible Deployment
            </span>
            <h4 className="font-bold text-sm mt-1 text-white">
              Need Multi-Branch Architecture?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              All Nirvoxa platforms support unified multi-location operations with branch-wise isolation.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          {mailDraftHref ? (
            <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Demo Email Draft Ready
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your walkthrough request is ready in an email draft. It has not been sent yet; review the details and press Send in your email app.
              </p>
              <div className="pt-4">
                <Button
                  variant="glow"
                  href={mailDraftHref}
                >
                  Open Email Draft
                </Button>
              </div>
              <p className="text-xs text-slate-500">If your email app does not open, write to {companyConfig.contact.email}.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Which Nirvoxa Platform Would You Like to Tour? *
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-brand-blue"
                >
                  {productsData.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                  <option value="custom-solution">Custom Software / Bespoke ERP Architecture</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vikram Malhotra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  />
                  {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    placeholder="vikram@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  />
                  {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Contact Phone (WhatsApp Ready) *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98200 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  />
                  {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Industrial Solutions"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  />
                  {errors.company && <p className="text-rose-500 text-[11px] mt-1">{errors.company}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Business Address (Optional)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      autoComplete="street-address"
                      placeholder="Street, city, state, postal code"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  >
                    <option>Morning (10:00 AM - 1:00 PM IST)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM IST)</option>
                    <option>Evening (5:00 PM - 7:30 PM IST)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Expected Users / Team Scale
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                  >
                    <option value="1-5">1 - 5 Users (Single Location)</option>
                    <option value="5-20">5 - 20 Users (Growing Business)</option>
                    <option value="20-50">20 - 50 Users (Multi-Branch)</option>
                    <option value="50+">50+ Users (Enterprise Hub)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Specific Workflows You Want To See (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. How does technician allocation work? Can we scan barcodes using mobile cameras? How are GST invoices exported?"
                  value={formData.specificRequirements}
                  onChange={(e) => setFormData({ ...formData, specificRequirements: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full"
                >
                  Request Product Walkthrough
                </Button>
              </div>
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-400 text-brand-blue focus:ring-brand-blue"
                  />
                  <span>
                    I understand these details will be placed in an email draft and shared only if I send it. See the{' '}
                    <a href="/privacy-policy" target="_blank" className="text-brand-blue dark:text-brand-cyan underline">Privacy Policy</a>.
                  </span>
                </label>
                {errors.consent && <p className="text-rose-500 text-[11px] mt-1">{errors.consent}</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
