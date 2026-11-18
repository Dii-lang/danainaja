import { UMKM, SupportedUMKM, BusinessUpdate, ActivityItem, SectorAllocation, PerformanceDataPoint, PerformanceTimeFilter, DashboardSummaryKPI } from '@/types';

const logoImage = `${import.meta.env.BASE_URL}danain_logo.jpg`;

export const dashboardSummary: DashboardSummaryKPI = {
  totalAllocated: 12500000,
  supportedUMKMCount: 5,
  activeCampaignsCount: 3,
  businessUpdatesCount: 3,
  investorName: 'Yehezkiel',
  investorRole: 'Investor',
  tagline: 'Investasi Lebih Mudah, Masa Depan Lebih Terarah.',
};

export const sectorAllocations: SectorAllocation[] = [
  { name: 'Kuliner', percentage: 44, amount: 5500000, color: '#005eab' },
  { name: 'Agribisnis', percentage: 20, amount: 2500000, color: '#6dc1fd' },
  { name: 'Kerajinan', percentage: 16, amount: 2000000, color: '#006494' },
  { name: 'Fashion', percentage: 20, amount: 2500000, color: '#00875d' },
];

export const performanceFilters: PerformanceTimeFilter[] = [
  { id: '1m', label: '1 Bulan' },
  { id: '3m', label: '3 Bulan' },
  { id: '6m', label: '6 Bulan' },
  { id: '1y', label: '1 Tahun' },
];

export const performanceData: Record<string, PerformanceDataPoint[]> = {
  '1m': [
    { period: 'Minggu 1', alokasi: 3000000, formattedAlokasi: 'Rp3.000.000' },
    { period: 'Minggu 2', alokasi: 3500000, formattedAlokasi: 'Rp3.500.000' },
    { period: 'Minggu 3', alokasi: 4000000, formattedAlokasi: 'Rp4.000.000' },
    { period: 'Minggu 4', alokasi: 4500000, formattedAlokasi: 'Rp4.500.000' },
  ],
  '3m': [
    { period: 'Bulan 1', alokasi: 2000000, formattedAlokasi: 'Rp2.000.000' },
    { period: 'Bulan 2', alokasi: 3000000, formattedAlokasi: 'Rp3.000.000' },
    { period: 'Bulan 3', alokasi: 5000000, formattedAlokasi: 'Rp5.000.000' },
  ],
  '6m': [
    { period: 'Bulan 1', alokasi: 1500000, formattedAlokasi: 'Rp1.500.000' },
    { period: 'Bulan 2', alokasi: 2500000, formattedAlokasi: 'Rp2.500.000' },
    { period: 'Bulan 3', alokasi: 3500000, formattedAlokasi: 'Rp3.500.000' },
    { period: 'Bulan 4', alokasi: 4500000, formattedAlokasi: 'Rp4.500.000' },
    { period: 'Bulan 5', alokasi: 5500000, formattedAlokasi: 'Rp5.500.000' },
    { period: 'Bulan 6', alokasi: 6500000, formattedAlokasi: 'Rp6.500.000' },
  ],
  '1y': [
    { period: 'Jan', alokasi: 1000000, formattedAlokasi: 'Rp1.000.000' },
    { period: 'Feb', alokasi: 1500000, formattedAlokasi: 'Rp1.500.000' },
    { period: 'Mar', alokasi: 2000000, formattedAlokasi: 'Rp2.000.000' },
    { period: 'Apr', alokasi: 2500000, formattedAlokasi: 'Rp2.500.000' },
    { period: 'May', alokasi: 3000000, formattedAlokasi: 'Rp3.000.000' },
    { period: 'Jun', alokasi: 3500000, formattedAlokasi: 'Rp3.500.000' },
    { period: 'Jul', alokasi: 4000000, formattedAlokasi: 'Rp4.000.000' },
    { period: 'Aug', alokasi: 4500000, formattedAlokasi: 'Rp4.500.000' },
    { period: 'Sep', alokasi: 5000000, formattedAlokasi: 'Rp5.000.000' },
    { period: 'Oct', alokasi: 5500000, formattedAlokasi: 'Rp5.500.000' },
    { period: 'Nov', alokasi: 6000000, formattedAlokasi: 'Rp6.000.000' },
    { period: 'Des', alokasi: 6500000, formattedAlokasi: 'Rp6.500.000' },
  ],
};

export const umkmList: UMKM[] = [
  {
    id: '1',
    name: 'Kopi Langit',
    category: 'Kuliner',
    location: 'Bandung',
    description: 'Usaha kopi lokal yang berfokus pada pengolahan biji kopi Indonesia.',
    fundingTarget: 50000000,
    simulatedCollected: 32000000,
    progress: 64,
    status: 'Pendanaan Aktif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf7806HN6NRsWXfvhHsjI2W177zzuVz88kRLdC8f9u1xfS-YxWoVUjRKx8uod3Yd1-yq702j_J4BM0zv4OrEVW7s7FDOZ85l6tmkALIYg6Y_A9BJ-BU_RyIjjDZ6ibuNsTL87o0vVPc23A74oRY2OJgYnQ3cFNUAcaguZHLFubJraWTKPMRPuOT9RR-Bw_aUlHLx_onJkhAqQw9qbeMciK-X-YJEk9HaNSuhXpqWc',
    featured: true,
  },
  {
    id: '2',
    name: 'Tani Sejahtera',
    category: 'Agribisnis',
    location: 'Bogor',
    description: 'Usaha pertanian lokal yang mengembangkan produksi sayuran berkualitas.',
    fundingTarget: 75000000,
    simulatedCollected: 45000000,
    progress: 60,
    status: 'Pendanaan Aktif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCso30YLiHdhGKX4fPG5pWk7kW76OlyY_5Wue8SVMj-Ry_SBEXPGxOvI2snjXMSxEL1O51WZpEZwVUV8x0Dch5snNl44lj2GY1Wxd9E7TuJDnRwh_Lr189QtKoN8GZvbjWhguzpBnyzfnOPw8tPvtk2ahvTOcD5kUrIPPkQRpbX5jkgwVE0EpZpgyxw3KspqM3DgOHnvIKOuTUSHtIrCkUGrr-r0UAehyC3og5b-3A',
  },
  {
    id: '3',
    name: 'Anyam Kita',
    category: 'Kerajinan',
    location: 'Yogyakarta',
    description: 'Usaha kerajinan lokal yang mengembangkan produk anyaman tradisional.',
    fundingTarget: 30000000,
    simulatedCollected: 30000000,
    progress: 100,
    status: 'Pendanaan Selesai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfKUSQWsU6kn2HyuZSSpPCjjFf7P0SJE8kbu2WogWZetqPNU7-pPRTLSpCf4V_UaEEyvRvKd_saQX1TlUJYEekiF0OuYnl5SALvpNjqp6A-Yb2GI0daYumyqZRBEO-QgGF0yjVy5XL2hrjRUWThDA78pfWBtTC5mzdWZ2aCBLsSLSQvlCaVNLI2ugKv1LogfnwuCv9JmXXVzBqnbA9wUNl-CkHxDwlbqUFkC3b65A',
  },
  {
    id: '4',
    name: 'Batik Nusantara',
    category: 'Fashion',
    location: 'Jakarta',
    description: 'Merek batik modern dengan bahan berkualitas tinggi.',
    fundingTarget: 40000000,
    simulatedCollected: 12000000,
    progress: 30,
    status: 'Pendanaan Aktif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfKUSQWsU6kn2HyuZSSpPCjjFf7P0SJE8kbu2WogWZetqPNU7-pPRTLSpCf4V_UaEEyvRvKd_saQX1TlUJYEekiF0OuYnl5SALvpNjqp6A-Yb2GI0daYumyqZRBEO-QgGF0yjVy5XL2hrjRUWThDA78pfWBtTC5mzdWZ2aCBLsSLSQvlCaVNLI2ugKv1LogfnwuCv9JmXXVzBqnbA9wUNl-CkHxDwlbqUFkC3b65A',
  },
  {
    id: '5',
    name: 'Rasa Lokal',
    category: 'Kuliner',
    location: 'Surabaya',
    description: 'Produk makanan ringan khas Indonesia.',
    fundingTarget: 60000000,
    simulatedCollected: 60000000,
    progress: 100,
    status: 'Pendanaan Selesai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf7806HN6NRsWXfvhHsjI2W177zzuVz88kRLdC8f9u1xfS-YxWoVUjRKx8uod3Yd1-yq702j_J4BM0zv4OrEVW7s7FDOZ85l6tmkALIYg6Y_A9BJ-BU_RyIjjDZ6ibuNsTL87o0vVPc23A74oRY2OJgYnQ3cFNUAcaguZHLFubJraWTKPMRPuOT9RR-Bw_aUlHLx_onJkhAqQw9qbeMciK-X-YJEk9HaNSuhXpqWc',
  },
];

export const supportedUMKM: SupportedUMKM[] = [
  { id: '1', name: 'Kopi Langit', category: 'Kuliner', allocation: 3000000, target: 50000000, progress: 64, status: 'Berlangsung', location: 'Bandung', lastUpdateDate: '2026-11-01' },
  { id: '2', name: 'Tani Sejahtera', category: 'Agribisnis', allocation: 2500000, target: 75000000, progress: 60, status: 'Berlangsung', location: 'Bogor', lastUpdateDate: '2026-10-20' },
  { id: '3', name: 'Anyam Kita', category: 'Kerajinan', allocation: 2000000, target: 30000000, progress: 100, status: 'Selesai', location: 'Yogyakarta', lastUpdateDate: '2026-09-15' },
  { id: '4', name: 'Batik Nusantara', category: 'Fashion', allocation: 2500000, target: 40000000, progress: 30, status: 'Berlangsung', location: 'Jakarta', lastUpdateDate: '2026-11-05' },
  { id: '5', name: 'Rasa Lokal', category: 'Kuliner', allocation: 2500000, target: 60000000, progress: 100, status: 'Selesai', location: 'Surabaya', lastUpdateDate: '2026-10-30' },
];

export const businessUpdates: BusinessUpdate[] = [
  {
    id: 'u1',
    umkmId: '1',
    umkmName: 'Kopi Langit',
    category: 'Kuliner',
    date: '2026-11-10',
    description: 'Memperluas kapasitas produksi melalui penambahan peralatan.',
    image: logoImage,
  },
  {
    id: 'u2',
    umkmId: '2',
    umkmName: 'Tani Sejahtera',
    category: 'Agribisnis',
    date: '2026-11-08',
    description: 'Memperbarui sistem distribusi hasil panen.',
    image: logoImage,
  },
  {
    id: 'u3',
    umkmId: '3',
    umkmName: 'Anyam Kita',
    category: 'Kerajinan',
    date: '2026-11-05',
    description: 'Memperkenalkan koleksi produk kerajinan terbaru.',
    image: logoImage,
  },
];

export const activityFeed: ActivityItem[] = [
  {
    id: 'a1',
    title: 'Alokasi simulasi dibuat untuk Kopi Langit.',
    description: '',
    date: '2026-11-10',
    time: '14:32',
    category: 'Alokasi',
    umkmName: 'Kopi Langit',
    iconType: 'allocation',
  },
  {
    id: 'a2',
    title: 'Laporan perkembangan diterbitkan oleh Tani Sejahtera.',
    description: '',
    date: '2026-11-09',
    time: '09:15',
    category: 'Laporan',
    umkmName: 'Tani Sejahtera',
    iconType: 'report',
  },
  {
    id: 'a3',
    title: 'Status kampanye Anyam Kita diperbarui.',
    description: '',
    date: '2026-11-07',
    time: '16:40',
    category: 'Status',
    umkmName: 'Anyam Kita',
    iconType: 'status',
  },
  {
    id: 'a4',
    title: 'Profil Batik Nusantara diperbarui.',
    description: '',
    date: '2026-11-06',
    time: '11:20',
    category: 'Profil',
    umkmName: 'Batik Nusantara',
    iconType: 'profile',
  },
];
