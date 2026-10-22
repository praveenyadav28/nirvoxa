import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { companyConfig } from '../../config/company';

export const Footer = () => {
  const socialProfiles = [
    { label: 'LinkedIn', href: companyConfig.socialLinks.linkedin, Icon: Linkedin },
    { label: 'X Twitter', href: companyConfig.socialLinks.twitter, Icon: Twitter },
    { label: 'Facebook', href: companyConfig.socialLinks.facebook, Icon: Facebook },
    { label: 'YouTube', href: companyConfig.socialLinks.youtube, Icon: Youtube },
  ].filter((profile) => profile.href);

  return (
    <footer className="bg-brand-navy border-t border-brand-navy-border text-slate-400 font-sans transition-colors pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Brand and direct contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-brand-navy-border/60">
          <div className="lg:col-span-6 space-y-4">
            <Logo className="h-9 sm:h-10" showTagline={false} />
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              {companyConfig.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pt-1">
              <a
                href={`mailto:${companyConfig.contact.email}`}
                className="text-brand-cyan hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{companyConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${companyConfig.contact.phone.replace(/[^+\d]/g, '')}`}
                className="text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{companyConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 border-l-2 border-brand-cyan/60 pl-5 py-2">
            <h4 className="text-white font-bold text-sm sm:text-base mb-1">
              Have a project in mind?
            </h4>
            <p className="text-xs text-slate-400 mb-4 max-w-md">
              Tell us what your business needs. We will help you explore a product or custom software approach.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact" size="sm" variant="glow">
                Contact our team
              </Button>
              <Link to="/book-a-demo" className="text-xs font-semibold text-brand-cyan hover:underline">
                Explore a product demo
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Clean, Well-Spaced Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-xs">
          {/* Column 1: SaaS Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs text-brand-cyan">
              SaaS Products
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products/workshop-management" className="hover:text-white transition-colors">
                  Workshop Management
                </Link>
              </li>
              <li>
                <Link to="/products/inventory-management" className="hover:text-white transition-colors">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link to="/products/lab-management" className="hover:text-white transition-colors">
                  Lab Management (LIMS)
                </Link>
              </li>
              <li>
                <Link to="/products/hostel-hotel-management" className="hover:text-white transition-colors">
                  Hotel & Hostel PMS
                </Link>
              </li>
              <li>
                <Link to="/products/showroom-management" className="hover:text-white transition-colors">
                  Showroom Management
                </Link>
              </li>
              <li>
                <Link to="/products/hospital-management" className="hover:text-white transition-colors">
                  Hospital Management (HMS)
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-cyan hover:underline font-bold pt-1 inline-block">
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Custom Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs text-brand-cyan">
              Custom Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/custom-software-solutions/enterprise-software" className="hover:text-white transition-colors">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link to="/custom-software-solutions/business-management" className="hover:text-white transition-colors">
                  Business Management (BMS)
                </Link>
              </li>
              <li>
                <Link to="/custom-software-solutions/web-applications" className="hover:text-white transition-colors">
                  Web Applications (SPAs)
                </Link>
              </li>
              <li>
                <Link to="/custom-software-solutions/mobile-applications" className="hover:text-white transition-colors">
                  Mobile Apps (Flutter)
                </Link>
              </li>
              <li>
                <Link to="/custom-software-solutions/api-integrations" className="hover:text-white transition-colors">
                  API & Integrations
                </Link>
              </li>
              <li>
                <Link to="/custom-software-solutions/automation" className="hover:text-white transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/custom-software-solutions" className="text-brand-cyan hover:underline font-bold pt-1 inline-block">
                  All Custom Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs text-brand-cyan">
              Company & Learn
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Nirvoxa
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Architecture Showcases
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Tech & SaaS Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers & Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Compliance */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs text-brand-cyan">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-cancellation-policy" className="hover:text-white transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link to="/book-a-demo" className="hover:text-white transition-colors">
                  Request Live Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials with Plenty of Breathing Room */}
        <div className="pt-8 border-t border-brand-navy-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p className="text-slate-400">
              © {new Date().getFullYear()} {companyConfig.legalName}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Ideas | Code | Growth • Business Management Software & Custom IT Solutions
            </p>
          </div>

          {socialProfiles.length > 0 && (
            <div className="flex items-center gap-3">
              {socialProfiles.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
