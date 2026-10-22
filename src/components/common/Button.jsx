import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'glow'
  size = 'md',        // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-md shadow-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/35 active:scale-[0.98]',
    glow:
      'bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white shadow-md shadow-brand-cyan/20 hover:shadow-brand-cyan/40 active:scale-[0.98] border border-cyan-400/30',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-brand-navy-card dark:hover:bg-brand-navy-border dark:text-slate-100 border border-slate-200 dark:border-brand-navy-border shadow-sm active:scale-[0.98]',
    outline:
      'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 dark:border-brand-cyan dark:text-brand-cyan dark:hover:bg-brand-cyan/10 active:scale-[0.98]',
    ghost:
      'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-brand-navy-surface hover:text-brand-blue dark:hover:text-brand-cyan',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
