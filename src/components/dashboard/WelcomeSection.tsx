import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const WelcomeSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#c1c7d4]/40 bg-white p-6 shadow-sm sm:p-8">
      <div className="pointer-events-none absolute -right-14 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#cbe6ff]/60 via-[#d4e3ff]/50 to-transparent blur-2xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#cbe6ff]/50 px-3 py-1 text-xs font-semibold text-[#006494]"><Sparkles size={14} />Investasi Lebih Mudah, Masa Depan Lebih Terarah</span>
          <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#021d33] sm:text-3xl">Selamat Datang Kembali, Yehezkiel!</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#414752] sm:text-base">Pantau pendanaan dan perkembangan UMKM yang kamu dukung secara transparan, berbasis data dari mitra usaha lokal.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="rounded-xl border border-[#c1c7d4]/30 bg-[#eef4ff] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#717783]">Peran akun</p>
            <p className="mt-1 text-sm font-semibold text-[#005eab]">Pendukung Usaha</p>
          </div>
          <Button variant="primary" size="lg" className="inline-flex items-center gap-2 rounded-xl" onClick={() => navigate('/investor/jelajahi-umkm')}>
            Jelajahi Peluang UMKM <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
