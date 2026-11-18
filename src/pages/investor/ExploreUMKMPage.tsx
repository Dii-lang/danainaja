import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ExploreUMKM } from '@/components/dashboard/ExploreUMKM';

export const ExploreUMKMPage: React.FC = () => {
  return (
    <MainLayout title="Jelajahi UMKM">
      <ExploreUMKM />
    </MainLayout>
  );
};
