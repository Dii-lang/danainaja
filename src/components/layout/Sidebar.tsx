import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Store, Wallet, Calendar, FileText, BookOpen, Settings, HelpCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/danain_logo.jpg';

const navigation = [
  { name: 'Dashboard', path: '/investor/dashboard', icon: Home },
  { name: 'Jelajahi UMKM', path: '/investor/jelajahi-umkm', icon: Store },
  { name: 'Pendanaan Saya', path: '/investor/pendanaan-saya', icon: Wallet },
  { name: 'Aktivitas', path: '/investor/aktivitas', icon: Calendar },
  { name: 'Laporan Usaha', path: '/investor/laporan-usaha', icon: FileText },
  { name: 'Edukasi', path: '/investor/edukasi', icon: BookOpen },
];

const bottomLinks = [
  { name: 'Pengaturan', path: '/investor/pengaturan', icon: Settings },
  { name: 'Bantuan', path: '/investor/bantuan', icon: HelpCircle },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col justify-between overflow-y-auto border-r border-[#c1c7d4]/30 bg-white shadow-[0_1px_8px_rgba(0,0,0,.04)] max-md:hidden">
      <div className="flex flex-col">
        <div className="flex flex-col gap-1 border-b border-[#c1c7d4]/20 p-6">
          <img src={logo} alt="DanaIn Aja" className="h-12 w-auto object-contain object-left" />
          <p className="mt-1 text-xs leading-4 text-[#717783]">Investasi Lebih Mudah, Masa Depan Lebih Terarah.</p>
        </div>
        <nav className="flex flex-col py-4 px-2 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm',
                  isActive
                    ? 'bg-[#eef4ff] text-[#005eab] font-semibold border-l-4 border-[#005eab] rounded-l-none'
                    : 'text-[#414752] hover:bg-[#eef4ff] hover:text-[#021d33]'
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="my-4 border-t border-border mx-2" />
        <nav className="flex flex-col py-2 px-2 space-y-1">
          {bottomLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-base',
                  isActive
                    ? 'bg-light-blue text-primary hover:bg-light-blue/80'
                    : 'text-primary-text hover:bg-light-blue/50 hover:text-primary'
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Profile Section */}
      <NavLink to="/investor/profil-saya" className="flex items-center gap-3 border-t border-border bg-white p-4 hover:bg-[#f8f9ff]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4e3ff] font-bold text-[#005eab]">Y</div>
        <div className="flex flex-col flex-1 min-w-0">
          <span className="truncate font-medium text-primary-text">Yehezkiel</span>
          <span className="text-xs text-secondary-text">Investor</span>
        </div>
        <User className="h-4 w-4 text-primary" />
      </NavLink>
    </aside>
  );
};
