import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { companyConfig } from '../../config/company';
import { AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-slate-800 dark:text-slate-200">
      <Breadcrumb items={[{ label: 'Privacy Policy', to: '/privacy-policy' }]} />

      <div className="border-b border-slate-200 dark:border-brand-navy-border pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan mb-3">
          Legal Notice & Disclosures
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 20, 2026 | Last Updated: October 20, 2026
        </p>
      </div>


      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6">
        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            1. Information We Collect
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            This website does not currently send contact, demo, project, or newsletter form data to a Nirvoxa server. When you use a mail link or submit a form, your browser opens a pre-filled email draft; you decide whether to send it. If you email us, {companyConfig.legalName} ("Nirvoxa", "we", "our", or "us") receives the information included in that email.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600 dark:text-slate-300">
            <li><strong>Contact Identifiers:</strong> Name, business email, telephone/WhatsApp number, company name.</li>
            <li><strong>Project Specifications:</strong> Selected software modules, estimated users, operational bottlenecks, budget preferences.</li>
            <li><strong>Theme preference:</strong> Your selected display theme is stored in browser local storage.</li>
            <li><strong>Technical requests:</strong> The website host and external font provider may receive standard connection data when your browser requests pages or fonts. Check their notices for details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            2. How We Use Collected Information
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Information you choose to email us may be used to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600 dark:text-slate-300">
            <li>Scheduling and conducting interactive product demonstrations tailored to your industry.</li>
            <li>Preparing commercial software proposals and architectural roadmaps.</li>
            <li>Responding to technical customer support requests.</li>
            <li>Follow up about the request you sent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            3. Client Data Sovereignty & Confidentiality
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Do not include passwords, payment credentials, health records, or other sensitive personal information in a website inquiry. Email is handled by the email services you and Nirvoxa use; their own privacy terms also apply. Any project data handling must be agreed separately in writing.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            4. Security Standards
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            This website does not provide a form-submission backend. Email security depends on the mail applications and providers involved. Specific security controls for a product or project should be confirmed in its written agreement; this page does not make a certification or encryption guarantee.
          </p>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            5. Your Rights & Privacy Inquiries
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            For a privacy question or to request access to, correction of, or deletion of information you emailed us, contact{' '}
            <a href={`mailto:${companyConfig.contact.email}`} className="text-brand-blue dark:text-brand-cyan underline">
              {companyConfig.contact.email}
            </a>.
          </p>
        </section>

        <section className="pt-4 border-t border-slate-200 dark:border-brand-navy-border flex flex-wrap gap-4 text-xs">
          <Link to="/terms-and-conditions" className="text-brand-blue dark:text-brand-cyan hover:underline">
            Terms & Conditions →
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
