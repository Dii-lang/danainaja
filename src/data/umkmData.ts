// Mock data and helper utilities for the "Jelajahi UMKM" page

import { UMKM, UMKMCategory } from '@/types';
import { umkmList as baseUmkmList } from '@/data/dashboardData';

// Export the same UMKM list (could be extended later)
export const umkmList: UMKM[] = baseUmkmList;

// Category definitions with icons (Lucide) will be used in UI
export const umkmCategories: { label: UMKMCategory; icon: string; description: string; count: number }[] = [
  { label: 'Kuliner', icon: 'Utensils', description: 'Makanan dan minuman.', count: umkmList.filter(u => u.category === 'Kuliner').length },
  { label: 'Agribisnis', icon: 'Sprout', description: 'Pertanian dan peternakan.', count: umkmList.filter(u => u.category === 'Agribisnis').length },
  { label: 'Fashion', icon: 'Shirt', description: 'Pakaian dan produk fashion.', count: umkmList.filter(u => u.category === 'Fashion').length },
  { label: 'Kerajinan', icon: 'Palette', description: 'Produk kerajinan lokal.', count: umkmList.filter(u => u.category === 'Kerajinan').length },
  { label: 'Teknologi', icon: 'Laptop', description: 'Produk dan layanan teknologi.', count: 0 }, // placeholder count
  { label: 'Jasa', icon: 'BriefcaseBusiness', description: 'Berbagai layanan usaha.', count: 0 }, // placeholder count
];

// Filter options for the toolbar
export const locations = ['Semua Lokasi', 'Bandung', 'Bogor', 'Yogyakarta', 'Jakarta', 'Surabaya', 'Semarang'];
export const fundingStatuses = ['Semua Status', 'Pendanaan Aktif', 'Pendanaan Selesai', 'Segera Dibuka'];
export const fundingRanges = [
  'Semua Nominal',
  'Di bawah Rp25 juta',
  'Rp25 juta – Rp50 juta',
  'Rp50 juta – Rp100 juta',
  'Di atas Rp100 juta',
];
export const sortOptions = ['Paling Relevan', 'Terbaru', 'Progres Pendanaan Tertinggi', 'Target Pendanaan Terbesar'];
