import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { ContactForm } from '../../components/forms/ContactForm';
import { companyConfig } from '../../config/company';

export const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Contact Us', to: '/contact' }]} />

      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Our Team
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let's Discuss Your Business Software Strategy
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have questions about our SaaS management products or need to scope a bespoke custom software solution? Reach out to our engineering and product team.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Corporate Contact Channels
            </h3>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block">General & Technical Inquiries</span>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
                >
                  {companyConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 dark:bg-brand-cyan/20 text-brand-cyan flex items-center justify-center font-bold shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Direct Assistance Line</span>
                <a href={`tel:${companyConfig.contact.phone.replace(/[^+\d]/g, '')}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-cyan">
                  {companyConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Office Address</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  13, Kalwar Rd, Hari Nagar, Jhotwara, Jaipur, Rajasthan 302012.
                </span>
              </div>
            </div>
          </div>

          {/* Quick FAQ Callout */}
          <div className="bg-gradient-to-br from-brand-navy-surface to-slate-950 border border-brand-navy-border p-6 rounded-2xl text-white">
            <h4 className="font-bold text-base text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-brand-cyan" />
              Need an Immediate Software Demo?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              If you want to view live job cards, inventory controls, or medical lab workflows, you can schedule an interactive demo session directly.
            </p>
            <a
              href="/book-a-demo"
              className="text-xs font-bold text-brand-cyan hover:underline flex items-center gap-1"
            >
              Book an Interactive Demo Walkthrough <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Validated Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
