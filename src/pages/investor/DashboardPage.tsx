import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { WelcomeSection } from '@/components/dashboard/WelcomeSection';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { AllocationChart } from '@/components/dashboard/AllocationChart';
import { RecommendedUMKM } from '@/components/dashboard/RecommendedUMKM';
import { SupportedUMKMTable } from '@/components/dashboard/SupportedUMKMTable';
import { BusinessUpdates } from '@/components/dashboard/BusinessUpdates';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { BookOpen, BadgeCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="mx-auto max-w-[1440px] space-y-6">
        <WelcomeSection />
        <SummaryCards />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <AllocationChart />
          </div>
          <div className="lg:col-span-5">
            <RecentActivity />
          </div>
        </div>
        <RecommendedUMKM />
        <SupportedUMKMTable />
        <BusinessUpdates />
        <section className="rounded-2xl border border-[#c1c7d4]/30 bg-[#eef4ff] p-6 sm:p-8" id="edukasi-section">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-wider text-[#006494]">Pusat Informasi Edukasi</p><h2 className="mt-1 text-xl font-semibold text-[#021d33]">Wawasan &amp; Edukasi Pendanaan</h2><p className="mt-1 text-sm text-[#414752]">Pahami konsep pendanaan usaha sebelum menjelajahi peluang.</p></div>
            <BookOpen className="hidden text-[#005eab] sm:block" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Mengenal Ekosistem UMKM', text: 'Pahami model usaha lokal dan tahap pertumbuhannya.', Icon: BookOpen },
              { title: 'Evaluasi Proposal Usaha', text: 'Kenali tujuan penggunaan modal dan rencana usaha.', Icon: BadgeCheck },
              { title: 'Karakteristik Risiko', text: 'Pelajari faktor yang dapat memengaruhi perkembangan usaha.', Icon: ShieldCheck },
              { title: 'Dukungan Bertanggung Jawab', text: 'Dukung usaha dengan keputusan yang terukur.', Icon: HeartHandshake },
            ].map(({ title, text, Icon }) => <article key={title} className="rounded-xl border border-[#c1c7d4]/30 bg-white p-4"><Icon size={18} className="text-[#005eab]"/><h3 className="mt-3 text-sm font-semibold text-[#021d33]">{title}</h3><p className="mt-1 text-xs leading-5 text-[#717783]">{text}</p><span className="mt-3 inline-block text-xs font-semibold text-[#005eab]">Pelajari modul →</span></article>)}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};
