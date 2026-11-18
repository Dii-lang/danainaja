import React from 'react';
import { cn } from '@/lib/utils';

type ProgressBarProps = {
  percent: number; // 0-100
  className?: string;
  color?: string; // tailwind color class e.g., 'bg-primary'
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent, className, color = 'bg-primary' }) => {
  return (
    <div className={cn('w-full h-2 bg-border rounded-full overflow-hidden', className)}>
      <div
        className={cn('h-full', color)}
        style={{ width: `${Math.min(Math.max(percent, 0), 100)}%` }}
      />
    </div>
  );
};
