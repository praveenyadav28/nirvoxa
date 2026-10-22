import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { faqData } from '../../config/faq';

export const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqData.map((category) => {
    const filteredQuestions = category.questions.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, questions: filteredQuestions };
  }).filter((category) => category.questions.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Frequently Asked Questions', to: '/faq' }]} />

      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about software onboarding, customization capabilities, data security, code ownership, and technical support.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-[calc(50%+4px)] -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic (e.g. GST, data migration, code ownership)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>
      </div>

      {/* Accordion Categories */}
      <div className="space-y-10">
        {filteredCategories.map((category, catIdx) => (
          <div key={category.category} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-brand-navy-border pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
              {category.category}
            </h2>

            <div className="space-y-3">
              {category.questions.map((item, qIdx) => {
                const key = `${catIdx}-${qIdx}`;
                const isOpen = openItems[key];
                return (
                  <div
                    key={qIdx}
                    className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(catIdx, qIdx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                    >
                      <span className="pr-4">{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-cyan shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-brand-navy-border/60 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-slate-50 dark:bg-brand-navy-surface border border-slate-200 dark:border-brand-navy-border rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Still Have Specific Technical Questions?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Our solutions engineering desk can address questions about specific hardware compatibility, database migration, or enterprise compliance.
        </p>
        <div className="pt-2">
          <Button variant="glow" to="/contact">
            Speak With Technical Support
          </Button>
        </div>
      </div>
    </div>
  );
};
