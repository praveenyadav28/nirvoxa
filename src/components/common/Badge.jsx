import React from 'react';

export const Badge = ({
  children,
  variant = 'blue', // 'blue', 'cyan', 'success', 'warning', 'purple', 'neutral'
  size = 'md',
  className = '',
  icon: Icon,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2',
  };

  const variantStyles = {
    blue: 'bg-blue-50 text-brand-blue border-blue-200 dark:bg-brand-blue/15 dark:text-blue-300 dark:border-brand-blue/30',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-brand-cyan/15 dark:text-cyan-300 dark:border-brand-cyan/30',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30',
    warning: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30',
    purple: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/15 dark:text-purple-300 dark:border-purple-500/30',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};
