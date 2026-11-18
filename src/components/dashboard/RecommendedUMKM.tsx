import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Bookmark, BookmarkCheck, MapPin, ArrowRight } from 'lucide-react';
import { umkmList } from '@/data/dashboardData';
import { ProgressBar } from '@/components/ui/ProgressBar';

export const RecommendedUMKM: React.FC = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-[#006494]">Pilihan untuk Anda</p><h2 className="mt-1 text-xl font-semibold text-[#021d33]">Peluang UMKM Pilihan</h2><p className="mt-1 text-sm text-[#717783]">Temukan usaha lokal yang sedang membuka pendanaan.</p></div><Link to="/investor/jelajahi-umkm" className="text-sm font-semibold text-[#005eab]">Semua peluang <ArrowRight size={14} className="ml-1 inline"/></Link></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {umkmList.slice(0, 3).map((umkm) => (
          <Card key={umkm.id} className="group">
            <div className="relative h-40 overflow-hidden"><img src={umkm.image} alt={umkm.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="absolute left-3 top-3"><Badge variant="secondary">{umkm.category}</Badge></div><button aria-label={`Simpan ${umkm.name}`} onClick={() => toggleBookmark(umkm.id)} className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-sm">{bookmarks[umkm.id] ? <BookmarkCheck className="h-4 w-4 text-[#005eab]" /> : <Bookmark className="h-4 w-4 text-[#414752]" />}</button><span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[11px] text-white"><MapPin size={12}/>{umkm.location}</span></div>
            <div className="p-4">
              <h3 className="font-semibold text-[#021d33]">{umkm.name}</h3>
              <p className="mt-1 text-xs leading-5 text-[#717783] line-clamp-2">{umkm.description}</p>
              <div className="mt-3 rounded-xl bg-[#eef4ff] p-3">
                <div className="mb-2 flex justify-between text-[11px] text-[#414752]"><span>Terkumpul <b>Rp{umkm.simulatedCollected.toLocaleString('id-ID')}</b></span><b className="text-[#005eab]">{umkm.progress}%</b></div><ProgressBar percent={umkm.progress} /><div className="mt-2 text-[11px] text-[#717783]">Target: Rp{umkm.fundingTarget.toLocaleString('id-ID')}</div>
              </div>
              <div className="mt-3 flex items-center justify-between"><Badge variant={umkm.status === 'Pendanaan Aktif' ? 'primary' : 'success'}>{umkm.status}</Badge><Button variant="outline" size="sm" onClick={() => navigate('/investor/jelajahi-umkm')}>Detail peluang <ArrowRight className="ml-1 h-3 w-3"/></Button></div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
