import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Layers,
  Clock,
  DollarSign,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { Button } from '../common/Button';
import { customSolutionsData } from '../../config/customSolutions';
import { industriesData } from '../../config/industries';
import { companyConfig } from '../../config/company';
import { createMailtoHref } from '../../utils/createMailtoHref';

export const ProjectInquiryForm = ({ prefilledService = '' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: About You
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',

    // Step 2: Project Details
    solutionType: prefilledService || 'enterprise-software',
    industry: 'automotive',
    existingProcess: 'Spreadsheets (Excel / Google Sheets)',
    mainProblem: '',
    requiredFeatures: '',
    expectedUsers: '10-25',

    // Step 3: Project Planning
    budgetRange: '₹3 Lakhs - ₹8 Lakhs (Flexible)',
    desiredTimeline: '2 to 3 Months',
    engagementType: 'Milestone-Based Development',
    additionalNotes: '',

    // Step 4: Consent
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [mailDraftHref, setMailDraftHref] = useState('');

  // Validate step before advancing
  const handleNext = () => {
    const stepErrors = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) stepErrors.fullName = 'Full name is required';
      if (!formData.email.trim() || !formData.email.includes('@'))
        stepErrors.email = 'Valid business email is required';
      if (!formData.phone.trim() || formData.phone.length < 8)
        stepErrors.phone = 'Valid phone number is required';
      if (!formData.company.trim()) stepErrors.company = 'Company name is required';
    } else if (currentStep === 2) {
      if (!formData.mainProblem.trim() || formData.mainProblem.length < 15) {
        stepErrors.mainProblem = 'Please describe your main business challenge (at least 15 characters)';
      }
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrors({ consent: 'Please confirm before preparing your email draft.' });
      return;
    }

    setErrors({});
    const body = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company}`,
      `Business address: ${formData.address || 'Not provided'}`,
      `Solution: ${formData.solutionType}`,
      `Industry: ${formData.industry}`,
      `Current process: ${formData.existingProcess}`,
      `Expected users: ${formData.expectedUsers}`,
      `Budget range: ${formData.budgetRange}`,
      `Desired timeline: ${formData.desiredTimeline}`,
      `Engagement: ${formData.engagementType}`,
      '',
      'Main challenge:',
      formData.mainProblem,
      '',
      'Required features:',
      formData.requiredFeatures || 'Not specified',
      '',
      'Additional notes:',
      formData.additionalNotes || 'None',
    ].join('\n');
    setMailDraftHref(createMailtoHref(companyConfig.contact.email, `Project inquiry: ${formData.company}`, body));
  };

  if (mailDraftHref) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Project Email Draft Ready
        </h3>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          Your project details are ready in an email draft. They have not been sent to Nirvoxa; review the message and press Send in your email app.
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-left space-y-2 text-slate-400">
          <div className="flex justify-between">
            <span>Contact:</span>
            <span className="text-white font-medium">{formData.email} | {formData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span>Solution Category:</span>
            <span className="text-brand-cyan font-medium">{formData.solutionType}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Engagement:</span>
            <span className="text-white font-medium">{formData.engagementType}</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          If no email app opens, send your inquiry to {companyConfig.contact.email}.
        </p>

        <div className="mt-6">
          <Button
            variant="primary"
            href={mailDraftHref}
          >
            Open Email Draft
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto transition-all">
      {/* Multi-Step Progress Tracker */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 text-xs font-semibold">
          <span className="text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
            Step {currentStep} of 4: {['About You', 'Project Details', 'Planning & Scope', 'Review & Confirm'][currentStep - 1]}
          </span>
          <span className="text-slate-400">{Math.round((currentStep / 4) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: ABOUT YOU */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Who are we partnering with?
              </h4>
              <p className="text-xs text-slate-500">
                Please provide your contact details so our solution architect can reach you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Vikram Malhotra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
                {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="vikram@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
                {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+91 98200 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
                {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Company / Organization Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Apex Industrial Solutions"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
                {errors.company && <p className="text-rose-500 text-[11px] mt-1">{errors.company}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: PROJECT DETAILS */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Tell us about your project requirements
              </h4>
              <p className="text-xs text-slate-500">
                What kind of digital system does your business need?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Type of Custom Solution
                </label>
                <select
                  value={formData.solutionType}
                  onChange={(e) => setFormData({ ...formData, solutionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                >
                  {customSolutionsData.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                  <option value="Customized SaaS Implementation">Customized SaaS Product Implementation</option>
                  <option value="Other Bespoke System">Other Bespoke Digital System</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Industry Vertical
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                >
                  {industriesData.map((ind) => (
                    <option key={ind.id} value={ind.name}>
                      {ind.name}
                    </option>
                  ))}
                  <option value="Manufacturing & Heavy Industry">Manufacturing & Heavy Industry</option>
                  <option value="Logistics & Fleet">Logistics & Fleet</option>
                  <option value="Other Industry">Other Industry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Current Software / Process Being Used
              </label>
              <input
                type="text"
                placeholder="e.g. Disjointed Excel sheets, Tally, manual paper files, or outdated desktop software"
                value={formData.existingProcess}
                onChange={(e) => setFormData({ ...formData, existingProcess: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                What is the primary business problem you want solved? *
              </label>
              <textarea
                rows={3}
                placeholder="e.g. We have 3 branches where stock counts differ constantly. We need centralized inventory, job card tracking for mechanics, and automated billing that connects to Tally."
                value={formData.mainProblem}
                onChange={(e) => setFormData({ ...formData, mainProblem: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
              />
              {errors.mainProblem && <p className="text-rose-500 text-[11px] mt-1">{errors.mainProblem}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Key Features or Modules Needed (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. WhatsApp invoice alerts, Barcode dispatch, Field technician mobile app, Multi-level approvals"
                value={formData.requiredFeatures}
                onChange={(e) => setFormData({ ...formData, requiredFeatures: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>
        )}

        {/* STEP 3: PROJECT PLANNING */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Budget, Timeline & Engagement Model
              </h4>
              <p className="text-xs text-slate-500">
                Help us align with your scheduling expectations and commercial preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Estimated Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                >
                  <option>₹1 Lakh - ₹3 Lakhs (Focused MVP / Module)</option>
                  <option>₹3 Lakhs - ₹8 Lakhs (Complete Business System)</option>
                  <option>₹8 Lakhs - ₹20 Lakhs (Enterprise Multi-Branch Platform)</option>
                  <option>₹20 Lakhs+ (Large Scale SaaS / Ecosystem)</option>
                  <option>To be determined after discovery</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Desired Go-Live Timeline
                </label>
                <select
                  value={formData.desiredTimeline}
                  onChange={(e) => setFormData({ ...formData, desiredTimeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
                >
                  <option>Urgent (&lt; 4 Weeks)</option>
                  <option>2 to 3 Months (Standard)</option>
                  <option>3 to 6 Months (Phased rollout)</option>
                  <option>Flexible timeline</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Preferred Engagement Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Fixed-Scope Project', title: 'Fixed-Scope Project', desc: 'Documented scope, milestones, and agreed commercial terms.' },
                  { id: 'Milestone-Based Development', title: 'Milestone-Based', desc: 'Iterative bi-weekly sprints with review & phased payments.' },
                  { id: 'Ongoing Retainer', title: 'Dedicated Retainer', desc: 'Dedicated engineering pod for continuous software evolution.' },
                ].map((model) => (
                  <div
                    key={model.id}
                    onClick={() => setFormData({ ...formData, engagementType: model.id })}
                    className={`p-3 rounded-xl border cursor-pointer transition-all text-xs ${formData.engagementType === model.id
                      ? 'bg-brand-blue/10 border-brand-blue dark:bg-brand-cyan/15 dark:border-brand-cyan text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                  >
                    <div className="font-bold mb-1">{model.title}</div>
                    <p className="text-[11px] leading-tight opacity-80">{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Additional Requirements or Integrations (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Existing MySQL database, requires Razorpay webhook, need iOS app in Flutter"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW & CONFIRM */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Review Your Project Specification
              </h4>
              <p className="text-xs text-slate-500">
                Please review your details before submitting to our engineering desk.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 text-xs space-y-3">
              <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <div>
                  <span className="text-slate-400 block text-[11px]">Contact Person:</span>
                  <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Organization:</span>
                  <strong className="text-slate-900 dark:text-white">{formData.company}</strong>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <div>
                  <span className="text-slate-400 block text-[11px]">Email & Phone:</span>
                  <span className="text-slate-900 dark:text-white font-mono">{formData.email} | {formData.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Solution Category:</span>
                  <strong className="text-brand-cyan">{formData.solutionType}</strong>
                </div>
              </div>

              <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="text-slate-400 block text-[11px]">Core Challenge / Workflow Goal:</span>
                <p className="text-slate-800 dark:text-slate-200 mt-0.5">{formData.mainProblem}</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <span className="text-slate-400 block text-[11px]">Budget Bracket:</span>
                  <span className="text-emerald-500 font-semibold">{formData.budgetRange}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Target Timeline:</span>
                  <span className="text-slate-900 dark:text-white font-medium">{formData.desiredTimeline}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Engagement Model:</span>
                  <span className="text-brand-blue dark:text-brand-cyan font-medium">{formData.engagementType}</span>
                </div>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded border-slate-400 text-brand-blue focus:ring-brand-blue"
                />
                <span>
                  I understand these details will be placed in an email draft and shared only if I send it. See the{' '}
                  <a href="/privacy-policy" target="_blank" className="text-brand-blue dark:text-brand-cyan underline">
                    Privacy Policy
                  </a>.
                </span>
              </label>
              {errors.consent && <p className="text-rose-500 text-[11px] mt-1">{errors.consent}</p>}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-brand-navy-border">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handlePrev}
              icon={ArrowLeft}
              iconPosition="left"
            >
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleNext}
              icon={ArrowRight}
              iconPosition="right"
            >
              Continue to Step {currentStep + 1}
            </Button>
          ) : (
            <Button
              type="submit"
              variant="glow"
              size="md"
            >
              Open Project Email Draft
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
