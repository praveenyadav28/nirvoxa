import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/common/Breadcrumb';

export const RefundCancellationPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-slate-800 dark:text-slate-200">
      <Breadcrumb items={[{ label: 'Refund & Cancellation Policy', to: '/refund-cancellation-policy' }]} />

      <div className="border-b border-slate-200 dark:border-brand-navy-border pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Refund and Cancellation Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 20, 2026 | Last Updated: October 20, 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            1. SaaS Subscription Software
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            This website does not currently sell or renew subscriptions. If a product subscription is offered, its cancellation window, renewal date, and refund eligibility must be stated in the applicable order before purchase.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            2. Custom Software Engineering Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            For custom projects, payment milestones, cancellation steps, and any refund eligibility should be agreed in the signed proposal or statement of work. This website does not establish those commercial terms.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            3. Contact for Commercial Queries
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            For questions about a specific order, use the contact details in your signed agreement or email{' '}
            <a href="mailto:contact@nirvoxaitsolutions.com" className="text-brand-blue dark:text-brand-cyan underline">contact@nirvoxaitsolutions.com</a>.
          </p>
        </section>

        <section className="pt-4 border-t border-slate-200 dark:border-brand-navy-border flex flex-wrap gap-4 text-xs">
          <Link to="/privacy-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Privacy Policy →
          </Link>
          <Link to="/terms-and-conditions" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Terms & Conditions →
          </Link>
          <Link to="/cookie-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Cookie Policy →
          </Link>
        </section>
      </div>
    </div>
  );
};
