import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { umkmList } from '@/data/dashboardData';

export const ExploreUMKM: React.FC = () => {
  const [search, setSearch] = useState('');
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = umkmList.filter((umkm) => {
    const q = search.toLowerCase();
    return (
      umkm.name.toLowerCase().includes(q) ||
      umkm.category.toLowerCase().includes(q) ||
      umkm.location.toLowerCase().includes(q)
    );
  });

  return (
    <section className="space-y-4">
      <h2 className="font-headline-md text-primary-text">Jelajahi UMKM</h2>
      <p className="text-secondary-text mb-4">
        Temukan peluang pendanaan UMKM lokal yang sesuai dengan minat Anda.
      </p>
      <div className="relative mb-4 max-w-md">
        <input
          type="text"
          placeholder="Cari UMKM, kategori, atau lokasi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-white text-primary-text placeholder:text-secondary-text focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1116.65 2a7 7 0 010 14.65z" />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((umkm) => (
          <Card key={umkm.id} className="p-4 flex flex-col h-full">
            <div className="flex items-center mb-2">
              <img src={umkm.image} alt={umkm.name} className="w-12 h-12 rounded mr-3 object-cover" />
              <div className="flex-1">
                <h3 className="font-label-lg text-primary-text">{umkm.name}</h3>
                <Badge variant="secondary" className="mt-1">{umkm.category}</Badge>
              </div>
            </div>
            <p className="text-sm text-secondary-text mb-2 line-clamp-2">{umkm.description}</p>
            <div className="text-sm text-primary-text mb-1">
              Target: Rp{umkm.fundingTarget.toLocaleString('id-ID')}
            </div>
            <div className="text-sm text-primary-text mb-2">
              Terkumpul: Rp{umkm.simulatedCollected.toLocaleString('id-ID')}
            </div>
            <ProgressBar percent={umkm.progress} className="mb-2" />
            <div className="flex items-center justify-between mt-auto">
              <Badge variant={umkm.status === 'Pendanaan Aktif' ? 'primary' : 'success'}>{umkm.status}</Badge>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => alert('Fitur dukungan belum diimplementasikan')}>Dukung</Button>
                <button onClick={() => toggleBookmark(umkm.id)}>
                  {bookmarks[umkm.id] ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-primary" />
                  )}
                </button>
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-secondary-text">Tidak ada UMKM yang cocok.</p>
        )}
      </div>
    </section>
  );
};
