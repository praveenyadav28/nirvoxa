import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { blogPostsData } from '../../config/blog';

export const BlogIndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Automotive & SaaS', 'Product Strategy', 'Supply Chain'];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Blog & Articles', to: '/blog' }]} />

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy-deep via-brand-navy-surface to-slate-900 border border-brand-navy-border p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering & SaaS Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Nirvoxa Technology & Operations Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical articles on digitizing workshop bays, modernizing warehouse inventory, choosing between off-the-shelf SaaS and bespoke custom software, and building reliable systems.
          </p>
        </div>
      </div>

      {/* Search and Filter Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-slate-100 dark:bg-brand-navy-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-brand-navy-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border text-slate-900 dark:text-white text-xs focus:outline-none focus:border-brand-blue"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border rounded-2xl p-6 shadow-sm hover:border-brand-blue/50 hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-semibold text-brand-blue dark:text-brand-cyan">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors leading-snug">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-brand-navy-border/60 flex items-center justify-between text-xs">
              <span className="text-slate-500">{post.publishedDate}</span>
              <Link
                to={`/blog/${post.slug}`}
                className="font-bold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1"
              >
                Read Article <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
