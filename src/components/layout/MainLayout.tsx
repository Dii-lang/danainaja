import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Info } from 'lucide-react';

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen bg-[#F5F9FD]">
      <Sidebar />
      <div className="ml-[260px] flex min-h-screen flex-1 flex-col max-md:ml-0">
        <Header title={title} />
        <div className="mt-[72px] flex items-center justify-center gap-2 border-b border-[#c1c7d4]/30 bg-[#cbe6ff]/35 px-4 py-2 text-center text-xs text-[#004b71]"><Info size={14} className="shrink-0" />Mode Prototipe Edukasi: seluruh data finansial dan profil UMKM merupakan simulasi demo.</div>
        <main className="flex-1 overflow-y-auto px-6 py-6 max-sm:px-4">
          {children}
        </main>
      </div>
    </div>
  );
};
