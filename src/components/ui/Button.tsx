import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const base = 'font-label-lg rounded-lg transition-colors inline-flex items-center justify-center';
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-primary-hover',
    secondary: 'bg-sky text-on-primary hover:bg-sky/80',
    outline: 'border border-primary text-primary hover:bg-light-blue',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
