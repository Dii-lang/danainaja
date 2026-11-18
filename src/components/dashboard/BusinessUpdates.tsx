import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { businessUpdates } from '@/data/dashboardData';

export const BusinessUpdates: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="space-y-4">
      <h2 className="font-headline-md text-primary-text">Perkembangan UMKM</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {businessUpdates.map((update) => (
          <Card key={update.id} className="p-4 flex flex-col h-full">
            <div className="flex items-center mb-2">
              <img src={update.image} alt={update.umkmName} className="w-12 h-12 rounded mr-3 object-cover" />
              <div>
                <h3 className="font-label-lg text-primary-text">{update.umkmName}</h3>
                <Badge variant="secondary" className="mt-1">{update.category}</Badge>
              </div>
            </div>
            <p className="text-sm text-secondary-text mb-2 line-clamp-2">{update.description}</p>
            <p className="text-xs text-on-surface-variant mt-auto">{update.date}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 self-start"
              onClick={() => navigate('/investor/jelajahi-umkm')}
            >
              Baca Laporan
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
