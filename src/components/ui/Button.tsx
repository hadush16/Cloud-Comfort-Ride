import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-bold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 shadow-md'
  };

  const variantStyles = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-hover shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30',
    secondary: 'bg-brand-navy text-white hover:bg-brand-navy-light shadow-brand-navy/20',
    outline: 'border-2 border-slate-300 text-slate-800 hover:border-brand-blue hover:text-brand-blue bg-white',
    ghost: 'text-slate-700 hover:text-brand-blue hover:bg-slate-100',
    teal: 'bg-brand-teal text-white hover:bg-brand-teal-emerald shadow-brand-teal/20'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
