import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { activityFeed } from '@/data/dashboardData';
import { Wallet, FileText, CheckCircle, User } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  allocation: <Wallet className="h-5 w-5 text-primary" />,
  report: <FileText className="h-5 w-5 text-primary" />,
  status: <CheckCircle className="h-5 w-5 text-primary" />,
  profile: <User className="h-5 w-5 text-primary" />,
};

export const RecentActivity: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="font-headline-md text-primary-text">Aktivitas Terbaru</h2>
      <Card className="p-4">
        <ul className="space-y-3">
          {activityFeed.map((act) => (
            <li key={act.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 pt-1">{iconMap[act.iconType] || <User className="h-5 w-5 text-primary" />}</div>
              <div className="flex-1">
                <p className="text-sm text-primary-text">{act.title}</p>
                <p className="text-xs text-secondary-text">
                  {act.date} {act.time}
                </p>
                <Badge variant="secondary" className="mt-1">{act.category}</Badge>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <Link to="/investor/aktivitas" className="text-primary hover:underline font-label-sm">
            Lihat Semua Aktivitas
          </Link>
        </div>
      </Card>
    </section>
  );
};
