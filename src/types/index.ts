export type UMKMStatus = 'Pendanaan Aktif' | 'Pendanaan Selesai';
export type SupportedStatus = 'Berlangsung' | 'Selesai';
export type UMKMCategory = 'Kuliner' | 'Agribisnis' | 'Kerajinan' | 'Fashion' | 'Teknologi' | 'Jasa';

export interface UMKM {
  id: string;
  name: string;
  category: UMKMCategory;
  location: string;
  description: string;
  fundingTarget: number;
  simulatedCollected: number;
  progress: number;
  status: UMKMStatus;
  image: string;
  daysLeft?: number;
  totalBackers?: number;
  featured?: boolean;
}

export interface SupportedUMKM {
  id: string;
  name: string;
  category: UMKMCategory;
  allocation: number;
  target: number;
  progress: number;
  status: SupportedStatus;
  location: string;
  lastUpdateDate: string;
}

export interface BusinessUpdate {
  id: string;
  umkmId: string;
  umkmName: string;
  category: UMKMCategory;
  date: string;
  description: string;
  fullReportSummary?: string;
  image: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: 'Alokasi' | 'Laporan' | 'Status' | 'Profil';
  umkmName: string;
  iconType: 'allocation' | 'report' | 'status' | 'profile';
}

export interface SectorAllocation {
  name: UMKMCategory;
  percentage: number;
  amount: number;
  color: string;
}

export interface PerformanceTimeFilter {
  id: '1m' | '3m' | '6m' | '1y';
  label: string;
}

export interface PerformanceDataPoint {
  period: string;
  alokasi: number;
  formattedAlokasi: string;
}

export interface DashboardSummaryKPI {
  totalAllocated: number;
  supportedUMKMCount: number;
  activeCampaignsCount: number;
  businessUpdatesCount: number;
  investorName: string;
  investorRole: string;
  tagline: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  category: 'alokasi' | 'laporan' | 'kampanye' | 'sistem';
}
