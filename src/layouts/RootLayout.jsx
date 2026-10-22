import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/footer/Footer';
import { applySeoMetadata, getSeoMetadata } from '../config/seo';
import {
  Sparkles,
  PhoneCall,
} from 'lucide-react';

export const RootLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    applySeoMetadata(getSeoMetadata(location.pathname));
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-brand-navy-deep text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-blue selection:text-white">
      {/* Clean, Spacious Floating Sticky Navbar */}
      <Navbar />

      {/* Page Content with Generous Breathing Room */}
      <main className={`flex-1 ${location.pathname === '/' ? 'pt-14 sm:pt-16' : 'pt-8 sm:pt-10'}`}>
        <Outlet />
      </main>

      {location.pathname !== '/' && (
        <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
          <Link
            to="/book-a-demo"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Book Demo Walkthrough</span>
            <span className="sm:hidden">Demo</span>
          </Link>

          <Link
            to="/contact"
            className="p-3 rounded-full bg-slate-900 border border-slate-700 text-brand-cyan hover:text-white hover:border-brand-blue shadow-lg hover:scale-110 active:scale-95 transition-all"
            title="Direct Consultation Inquiry"
          >
            <PhoneCall className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Clean, Spacious Mega Footer */}
      <Footer />
    </div>
  );
};
