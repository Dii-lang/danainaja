import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

type HeaderProps = {
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed top-0 left-[260px] right-0 z-40 flex h-[72px] items-center justify-between border-b border-[#c1c7d4]/30 bg-white/90 px-6 shadow-[0_1px_8px_rgba(0,0,0,.04)] backdrop-blur-xl max-md:left-0 max-sm:px-4">
      <div className="flex items-center space-x-4">
        {title && <div className="flex flex-col"><h1 className="text-sm font-semibold text-[#021d33]">{title === 'Dashboard' ? 'Dashboard Portofolio' : title}</h1><span className="text-[11px] text-[#717783]">Ringkasan pendanaan Anda</span></div>}
        {!title && <div className="text-sm text-secondary-text">Dashboard Portofolio</div>}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden w-64 lg:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#717783]" />
          <input
            type="text"
            placeholder="Cari peluang UMKM, kategori, atau wilayah..."
            className="w-full rounded-lg border border-[#c1c7d4]/50 bg-[#f8f9ff] py-2 pl-9 pr-3 text-xs text-[#021d33] placeholder:text-[#717783] focus:outline-none focus:ring-1 focus:ring-[#005eab]"
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-light-blue/50">
          <Bell className="h-5 w-5 text-secondary-text" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
        </button>
        <Link to="/investor/profil-saya" aria-label="Buka profil saya" className="hidden items-center gap-2 rounded-full p-1 hover:bg-[#eef4ff] sm:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4e3ff] text-sm font-bold text-[#005eab]">Y</div>
          <User className="h-4 w-4 text-primary" />
        </Link>
        <Link to="/investor/jelajahi-umkm" className="hidden rounded-lg bg-[#1677d2] px-3 py-2 text-xs font-semibold text-white hover:bg-[#005eab] sm:inline-flex">+ Eksplor UMKM</Link>
      </div>
    </header>
  );
};
