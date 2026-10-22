import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/common/Breadcrumb';

export const CookiePolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-slate-800 dark:text-slate-200">
      <Breadcrumb items={[{ label: 'Cookie Policy', to: '/cookie-policy' }]} />

      <div className="border-b border-slate-200 dark:border-brand-navy-border pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Cookie Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 20, 2026 | Last Updated: October 20, 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            1. What Are Cookies?
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Cookies are small text files stored by a website in your browser. This website currently uses browser local storage to remember your display theme; local storage is not a cookie.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            2. How Nirvoxa Uses Cookies
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            The current website implementation:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600 dark:text-slate-300">
            <li>Stores your selected theme in browser local storage.</li>
            <li>Does not include a configured analytics or advertising-tracking script.</li>
            <li>Loads fonts from Google Fonts; the provider may receive standard connection data when fonts are requested. Review Google's privacy information for its handling of that data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            3. Managing Your Cookie Preferences
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            You can clear local storage or change your theme in the site controls. Clearing local storage resets the saved theme preference. Browser settings can also block or clear cookies set by other services.
          </p>
        </section>

        <section className="pt-4 border-t border-slate-200 dark:border-brand-navy-border flex flex-wrap gap-4 text-xs">
          <Link to="/privacy-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Privacy Policy →
          </Link>
          <Link to="/terms-and-conditions" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Terms & Conditions →
          </Link>
          <Link to="/refund-cancellation-policy" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Refund & Cancellation Policy →
          </Link>
        </section>
      </div>
    </div>
  );
};
