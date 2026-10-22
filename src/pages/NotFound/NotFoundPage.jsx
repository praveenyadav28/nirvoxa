import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileQuestion,
  Home,
  Layers,
  Sparkles,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';
import { Button } from '../../components/common/Button';

export const NotFoundPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan mx-auto flex items-center justify-center font-bold shadow-lg">
        <FileQuestion className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">
          Error 404: Page Not Found
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          The System Route You Requested Does Not Exist
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          The link may have been moved, updated, or typed incorrectly. Use the quick navigation links below to return to our core software portals.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Button to="/" variant="primary" icon={Home} iconPosition="left">
          Return to Homepage
        </Button>
        <Button to="/products" variant="secondary" icon={Layers} iconPosition="left">
          Browse SaaS Products
        </Button>
        <Button to="/custom-software-solutions" variant="glow" icon={Sparkles} iconPosition="left">
          Custom Software Solutions
        </Button>
        <Button to="/contact" variant="outline" icon={PhoneCall} iconPosition="left">
          Contact Support
        </Button>
      </div>

      <div className="pt-12 border-t border-slate-200 dark:border-brand-navy-border/60 text-xs text-slate-500">
        <span>Looking for a specific product console? </span>
        <Link to="/products/workshop-management" className="text-brand-blue dark:text-brand-cyan underline">
          Workshop OS
        </Link>{' '}
        |{' '}
        <Link to="/products/inventory-management" className="text-brand-blue dark:text-brand-cyan underline">
          Inventory IQ
        </Link>{' '}
        |{' '}
        <Link to="/products/lab-management" className="text-brand-blue dark:text-brand-cyan underline">
          LabFlow LIMS
        </Link>
      </div>
    </div>
  );
};
