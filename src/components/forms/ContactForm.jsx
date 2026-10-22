import React, { useState } from 'react';
import {
  Mail,
  User,
  Phone,
  Building,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { Button } from '../common/Button';
import { productsData } from '../../config/products';
import { companyConfig } from '../../config/company';
import { createMailtoHref } from '../../utils/createMailtoHref';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    interest: 'workshop-management',
    contactMethod: 'Phone / WhatsApp',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [mailDraftHref, setMailDraftHref] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid business email is required';
    if (!formData.phone.trim() || formData.phone.length < 8)
      newErrors.phone = 'Valid phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = 'Please provide a message (at least 10 characters)';
    if (!formData.consent)
      newErrors.consent = 'Please confirm before preparing your email draft';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const interest = productsData.find((product) => product.id === formData.interest)?.name || formData.interest;
    const body = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company}`,
      `Business address: ${formData.address || 'Not provided'}`,
      `Area of interest: ${interest}`,
      `Preferred contact: ${formData.contactMethod}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');
    setMailDraftHref(createMailtoHref(companyConfig.contact.email, `Website inquiry: ${interest}`, body));
  };

  if (mailDraftHref) {
    return (
      <div className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 text-center space-y-4 shadow-xl">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
          Email Draft Ready
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          Your email app should open with your inquiry details. The message has not been sent yet; review it and press Send to contact Nirvoxa.
        </p>
        <div className="pt-2">
          <Button
            href={mailDraftHref}
            variant="glow"
            size="sm"
          >
            Open Email Draft
          </Button>
        </div>
        <p className="text-xs text-slate-500">If your email app does not open, write to <a className="underline" href={`mailto:${companyConfig.contact.email}`}>{companyConfig.contact.email}</a>.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 text-xs"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. Ramesh Patil"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
            />
          </div>
          {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Business Email *
          </label>
          <div className="relative">
            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              placeholder="ramesh@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
            />
          </div>
          {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              placeholder="+91 98200 XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
            />
          </div>
          {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Company Name *
          </label>
          <div className="relative">
            <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. Apex Auto Enterprises"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
            />
          </div>
          {errors.company && <p className="text-rose-500 text-[11px] mt-1">{errors.company}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Business Address (Optional)
          </label>
          <div className="relative">
            <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              autoComplete="street-address"
              placeholder="Street, city, state, postal code"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Subject / Area of Interest
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
          >
            <optgroup label="SaaS Products">
              {productsData.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Custom Solutions">
              <option value="custom-dev">Custom Software Solutions</option>
              <option value="enterprise-erp">Enterprise Software / ERP</option>
              <option value="mobile-apps">Mobile App Development</option>
              <option value="other-inquiry">General Inquiry</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Preferred Contact Method
          </label>
          <select
            value={formData.contactMethod}
            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
          >
            <option>Phone / WhatsApp</option>
            <option>Email</option>
            <option>Google Meet / Screen Share</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
          How can we help your business? *
        </label>
        <textarea
          rows={4}
          placeholder="Briefly describe your requirements, questions, or current operational pain points..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
        />
        {errors.message && <p className="text-rose-500 text-[11px] mt-1">{errors.message}</p>}
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
            <a href="/privacy-policy" target="_blank" className="text-brand-blue dark:text-brand-cyan underline">
              Privacy Policy
            </a>.
          </span>
        </label>
        {errors.consent && <p className="text-rose-500 text-[11px] mt-1">{errors.consent}</p>}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="glow"
          size="lg"
          className="w-full"
          icon={Send}
        >
          Prepare Email Draft
        </Button>
      </div>
    </form>
  );
};
