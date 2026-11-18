import React from 'react';
import { Card } from '@/components/ui/Card';
import { Wallet, Store, Rocket, Receipt } from 'lucide-react';
import { dashboardSummary } from '@/data/dashboardData';

export const SummaryCards: React.FC = () => {
  const cards = [
    {
      title: 'Total Dana Simulasi Dialokasikan',
      value: `Rp${dashboardSummary.totalAllocated.toLocaleString('id-ID')}`,
      icon: <Wallet className="h-6 w-6 text-primary" />, // primary blue
      supporting: 'Total alokasi pada seluruh UMKM.',
    },
    {
      title: 'UMKM Didukung',
      value: `${dashboardSummary.supportedUMKMCount} UMKM`,
      icon: <Store className="h-6 w-6 text-primary" />,
      supporting: 'Jumlah usaha yang kamu dukung.',
    },
    {
      title: 'Kampanye Aktif',
      value: `${dashboardSummary.activeCampaignsCount}`,
      icon: <Rocket className="h-6 w-6 text-primary" />,
      supporting: 'Proyek pendanaan yang masih berlangsung.',
    },
    {
      title: 'Pembaruan Usaha',
      value: `${dashboardSummary.businessUpdatesCount}`,
      icon: <Receipt className="h-6 w-6 text-primary" />,
      supporting: 'Laporan perkembangan tersedia.',
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c) => (
        <Card key={c.title} className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-md text-label-md text-on-surface-variant">
              {c.title}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/50 text-primary">
              {c.icon}
            </div>
          </div>
          <div className="font-numeric-xl text-numeric-xl text-primary font-bold">
            {c.value}
          </div>
          <p className="mt-2 text-sm text-on-surface-variant">{c.supporting}</p>
        </Card>
      ))}
    </section>
  );
};
