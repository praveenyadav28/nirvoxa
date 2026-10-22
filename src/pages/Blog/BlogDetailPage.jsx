import React, { useState } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Share2,
  Linkedin,
  Twitter,
  MessageCircle,
  Copy,
  Check,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { blogPostsData } from '../../config/blog';
import { companyConfig } from '../../config/company';

export const BlogDetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${companyConfig.domain}${location.pathname}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(`${companyConfig.domain}${location.pathname}`);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb
        items={[
          { label: 'Blog', to: '/blog' },
          { label: post.title, to: `/blog/${post.slug}` },
        ]}
      />

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
          <span>{post.category}</span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-slate-200 dark:border-brand-navy-border py-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                {post.author}
              </span>
              <span>Published on {post.publishedDate}</span>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300 mr-1">
              Share:
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-blue transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-cyan transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyLink}
              title="Copy link"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-blue transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
        <p className="text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
          {post.summary}
        </p>

        <div className="whitespace-pre-line">
          {post.content}
        </div>
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-slate-200 dark:border-brand-navy-border flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500">Filed under:</span>
        {post.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
          >
            #{t}
          </span>
        ))}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="pt-8 border-t border-slate-200 dark:border-brand-navy-border space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Related Operational Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.id}
                to={`/blog/${rp.slug}`}
                className="bg-white dark:bg-brand-navy-card border border-slate-200 dark:border-brand-navy-border p-5 rounded-2xl hover:border-brand-blue/50 transition-all group"
              >
                <span className="text-[10px] font-bold text-brand-blue dark:text-brand-cyan uppercase">
                  {rp.category}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 group-hover:text-brand-blue dark:group-hover:text-brand-cyan">
                  {rp.title}
                </h4>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {rp.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="pt-4">
        <Button to="/blog" variant="secondary" size="sm" icon={ArrowLeft} iconPosition="left">
          Back to All Articles
        </Button>
      </div>
    </div>
  );
};
