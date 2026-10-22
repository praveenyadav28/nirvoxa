import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { companyConfig } from '../../config/company';
import { AlertCircle } from 'lucide-react';

export const TermsConditionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-slate-800 dark:text-slate-200">
      <Breadcrumb items={[{ label: 'Terms & Conditions', to: '/terms-and-conditions' }]} />

      <div className="border-b border-slate-200 dark:border-brand-navy-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan mb-3">
          Terms of Use
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Terms and Conditions
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 20, 2026 | Last Updated: October 20, 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            By browsing, accessing, or utilizing the website and interactive demonstration portals of {companyConfig.legalName} ("Nirvoxa"), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            2. Intellectual Property Rights
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Nirvoxa names and marks, and original content created for this website, belong to Nirvoxa IT Solutions Private Limited or their respective rights holders. Third-party names and technologies remain the property of their owners. Rights to any software, deliverables, or source code are determined by the relevant written agreement.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            3. Interactive Demonstrations & Sample Data
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Interactive dashboard panels and workflow previews accessible on this website are provided for demonstration purposes. Any patient names, vehicle plate numbers, or business transaction values rendered within public previews are entirely fictitious sample data designed to illustrate functional capability.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Website information and interactive previews are provided for general information and may change. Project deliverables, warranties, support commitments, and liability are governed by the applicable written agreement and mandatory law. Nothing on this page excludes rights or liability that cannot legally be excluded.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            5. Governing Law
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Applicable law and dispute jurisdiction should be confirmed in the signed agreement and reviewed for the company's place of registration before these terms are published as final.
          </p>
        </section>

        <section className="pt-4 border-t border-slate-200 dark:border-brand-navy-border flex flex-wrap gap-4 text-xs">
          <Link to="/privacy-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Privacy Policy →
          </Link>
          <Link to="/cookie-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Cookie Policy →
          </Link>
          <Link to="/refund-cancellation-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Refund & Cancellation Policy →
          </Link>
        </section>
      </div>
    </div>
  );
};
