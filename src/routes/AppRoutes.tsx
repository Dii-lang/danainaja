import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '@/pages/investor/DashboardPage';
import { ExploreUMKMPage } from '@/pages/investor/ExploreUMKMPage';
import { PlaceholderPage } from '@/pages/investor/PlaceholderPage';
import { ProfilePage } from '@/pages/investor/ProfilePage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/investor/dashboard" replace />} />
      <Route path="/investor/dashboard" element={<DashboardPage />} />
      <Route path="/investor/profil-saya" element={<ProfilePage />} />
      {/* Other investor routes – currently placeholders */}
      <Route path="/investor/jelajahi-umkm" element={<ExploreUMKMPage />} />
      <Route path="/investor/pendanaan-saya" element={<PlaceholderPage title="Pendanaan Saya" />} />
      <Route path="/investor/aktivitas" element={<PlaceholderPage title="Aktivitas" />} />
      <Route path="/investor/laporan-usaha" element={<PlaceholderPage title="Laporan Usaha" />} />
      <Route path="/investor/edukasi" element={<PlaceholderPage title="Edukasi" />} />
      <Route path="/investor/pengaturan" element={<PlaceholderPage title="Pengaturan" />} />
      <Route path="/investor/bantuan" element={<PlaceholderPage title="Bantuan" />} />
      {/* Catch‑all */}
      <Route path="*" element={<PlaceholderPage title="Halaman tidak ditemukan" />} />
    </Routes>
  );
};
