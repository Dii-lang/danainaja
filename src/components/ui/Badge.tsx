import React from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = React.ComponentProps<'span'> & {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const base = 'inline-flex items-center px-2 py-0.5 rounded-full font-label-sm';
  const variants = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-sky text-on-primary',
    success: 'bg-success-bg text-success',
    danger: 'bg-error text-on-primary',
  };
  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
