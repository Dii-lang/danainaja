import React from 'react';
import { cn } from '@/lib/utils';

type CardProps = React.ComponentProps<'div'> & {
  hover?: boolean;
};

export const Card: React.FC<CardProps> = ({ hover = true, className, children, ...props }) => {
  const base = 'bg-white rounded-card shadow-sm border border-border overflow-hidden';
  const hoverStyle = hover ? 'hover:shadow-md transition-shadow' : '';
  return (
    <div className={cn(base, hoverStyle, className)} {...props}>
      {children}
    </div>
  );
};
