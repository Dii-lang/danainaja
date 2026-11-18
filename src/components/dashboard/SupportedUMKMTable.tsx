import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { supportedUMKM } from '@/data/dashboardData';

export const SupportedUMKMTable: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="space-y-4">
      <h2 className="font-headline-md text-primary-text">UMKM yang Saya Dukung</h2>
      <Card className="p-4 overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm">
          <thead className="bg-light-blue/20">
            <tr>
              <th className="px-4 py-2">Nama UMKM</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Alokasi Simulasi</th>
              <th className="px-4 py-2">Target Pendanaan</th>
              <th className="px-4 py-2">Progres</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {supportedUMKM.map((umkm) => (
              <tr key={umkm.id} className="border-b border-border">
                <td className="px-4 py-2">{umkm.name}</td>
                <td className="px-4 py-2">{umkm.category}</td>
                <td className="px-4 py-2">Rp{umkm.allocation.toLocaleString('id-ID')}</td>
                <td className="px-4 py-2">Rp{umkm.target.toLocaleString('id-ID')}</td>
                <td className="px-4 py-2 w-32">
                  <ProgressBar percent={umkm.progress} />
                </td>
                <td className="px-4 py-2">
                  <Badge variant={umkm.status === 'Berlangsung' ? 'primary' : 'success'}>{umkm.status}</Badge>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-primary hover:underline"
                    onClick={() => navigate('/investor/jelajahi-umkm')}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
};
