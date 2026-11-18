import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CalendarDays, Check, ChevronRight, Clock3, Copy, Fingerprint, Laptop, LockKeyhole, Mail, MapPin, Pencil, Phone, ShieldCheck, SlidersHorizontal, Smartphone, UserRound, Wallet } from 'lucide-react';

type ProfileFields = {
  name: string; email: string; phone: string; birth: string; gender: string;
  city: string; address: string; profession: string;
};

const initialProfile: ProfileFields = {
  name: 'Yehezkiel Pratama', email: 'yehezkiel@example.com', phone: '+62 812-8921-3400',
  birth: '14 Maret 1994', gender: 'Laki-laki', city: 'Jakarta Selatan, DKI Jakarta',
  address: 'Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12190',
  profession: 'Technology Consultant & Angel Investor',
};

const fieldClass = 'mt-1 w-full rounded-lg border border-transparent bg-[#f8f9ff] px-3 py-2.5 text-sm text-[#021d33] outline-none transition focus:border-[#1677d2] focus:ring-2 focus:ring-[#1677d2]/15';
const profileLabels: [keyof ProfileFields, string][] = [
  ['name','Nama Lengkap Sesuai KTP'], ['email','Alamat Email'], ['phone','Nomor Handphone (WhatsApp)'],
  ['birth','Tanggal Lahir'], ['gender','Jenis Kelamin'], ['city','Kota Domisili'],
  ['address','Alamat Tempat Tinggal Sekarang'], ['profession','Pekerjaan & Bidang Keahlian'],
];

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={onChange} className={`relative h-6 w-11 rounded-full transition ${checked ? 'bg-[#1677d2]' : 'bg-[#c1c7d4]'}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${checked ? 'left-[22px]' : 'left-0.5'}`}/></button>;
}

export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [reportAlerts, setReportAlerts] = useState(true);
  const [theme, setTheme] = useState<'Terang' | 'Gelap'>('Terang');
  const [notice, setNotice] = useState('');
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (key: keyof ProfileFields, value: string) => setDraft((current) => ({ ...current, [key]: value }));
  const saveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    setProfile(draft);
    setEditing(false);
    setNotice('Informasi profil berhasil diperbarui pada sesi ini.');
  };
  const copyInvestorId = async () => {
    try { await navigator.clipboard.writeText('INV-2026-00125'); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { setNotice('ID Investor: INV-2026-00125'); }
  };

  return <MainLayout title="Profil Saya">
    <div className="mx-auto max-w-[1440px] space-y-5 text-[#021d33]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><div className="mb-2 flex items-center gap-2 text-xs text-[#717783]"><Link className="hover:text-[#005eab]" to="/investor/dashboard">Dashboard</Link><ChevronRight size={13}/><span className="font-semibold text-[#005eab]">Profil Saya</span></div><h1 className="text-2xl font-bold sm:text-3xl">Profil Saya</h1><p className="mt-1 text-sm text-[#717783]">Kelola informasi pribadi, kepatuhan identitas, dan preferensi akun DanaIn Aja Anda.</p></div>
        <div className="space-y-2 text-xs"><div><Badge variant="primary"><ShieldCheck size={12} className="mr-1 inline"/>Akun Investor Terverifikasi Dasar</Badge></div><div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[#414752] shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Online <span className="text-[#c1c7d4]">|</span> Sesi aktif sejak 09:42 WIB</div></div>
      </div>

      <Card className="relative overflow-hidden p-5 sm:p-6"><div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1677d2] via-[#65b9f5] to-[#4edea3]"/><div className="flex flex-col gap-5 pt-1 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4"><div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d4e3ff] text-3xl font-bold text-[#005eab] sm:h-20 sm:w-20">{profile.name.charAt(0)}<span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"/></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-bold">{profile.name}</h2><Badge variant="primary">Investor Ritel</Badge><Badge variant="success">Aktif</Badge></div><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#717783]"><span className="inline-flex items-center gap-1"><Mail size={13}/>{profile.email}</span><span className="inline-flex items-center gap-1"><Phone size={13}/>{profile.phone}</span><span className="inline-flex items-center gap-1"><CalendarDays size={13}/>Bergabung 15 Jan 2026</span></div></div></div>
        <div className="flex flex-wrap items-center gap-3"><div className="grid grid-cols-3 gap-4 rounded-xl bg-[#eef4ff] px-4 py-3"><div><span className="block text-[10px] text-[#717783]">Portofolio</span><b className="text-lg">4 UMKM</b></div><div><span className="block text-[10px] text-[#717783]">Komitmen</span><b className="text-lg text-[#005eab]">Rp 45 Jt</b></div><div><span className="block text-[10px] text-[#717783]">Kehadiran Laporan</span><b className="text-lg text-emerald-700">100%</b></div></div><button onClick={() => { setDraft(profile); setEditing(true); }} className="inline-flex items-center gap-2 rounded-lg bg-[#1677d2] px-4 py-3 text-sm font-semibold text-white hover:bg-[#005eab]"><Pencil size={15}/>Edit Profil</button></div>
      </div></Card>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#cbe6ff] bg-[#d4e3ff]/55 px-4 py-3 text-xs leading-5 text-[#414752]"><span className="inline-flex items-start gap-2"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#005eab]"/><span><b>Kerahasiaan &amp; Kepatuhan Finansial:</b> Akun Anda dilindungi standar enkripsi AES-256. Penyaluran modal UMKM diawasi dengan transparansi portofolio mandiri.</span></span><Link to="/investor/edukasi" className="shrink-0 font-semibold text-[#005eab]">Kebijakan Privasi →</Link></div>

      {notice && <div role="status" className="flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800"><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Tutup">×</button></div>}

      <div className="grid items-start gap-5 xl:grid-cols-[1.65fr_0.85fr]">
        <div className="space-y-5">
          <Card className="p-5 sm:p-6"><div className="mb-5 flex items-start justify-between gap-3"><div><h2 className="font-semibold">Informasi Pribadi</h2><p className="mt-1 text-xs text-[#717783]">Data legalitas profil pemodal yang tercatat di platform DanaIn Aja.</p></div><button onClick={() => { if (editing) { setDraft(profile); setEditing(false); } else { setDraft(profile); setEditing(true); } }} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#eef4ff] px-3 py-2 text-xs font-semibold text-[#005eab]">{editing ? 'Batal' : <><Pencil size={13}/>Edit Informasi</>}</button></div>
            <form onSubmit={saveProfile} className="grid gap-3 sm:grid-cols-2">
              {profileLabels.map(([key, label]) => {
                const wideField = key === 'address' || key === 'profession';
                return <label key={key} className={wideField ? 'block text-[10px] font-medium text-[#414752] sm:col-span-2' : 'block text-[10px] font-medium text-[#414752]'}>
                  {label}
                  {editing ? <input className={fieldClass} value={draft[key]} onChange={(event) => update(key, event.target.value)} /> :
                    <span className="mt-1 flex min-h-11 items-center rounded-lg bg-[#f8f9ff] px-3 text-sm text-[#021d33]">{profile[key]}{(key === 'email' || key === 'phone') && <span className="ml-auto inline-flex items-center gap-1 whitespace-nowrap text-[10px] text-emerald-700"><Check size={12} />Terverifikasi</span>}</span>}
                </label>;
              })}
              {editing && <div className="flex gap-2 sm:col-span-2"><button className="rounded-lg bg-[#1677d2] px-4 py-2 text-sm font-semibold text-white">Simpan Perubahan</button><button type="button" onClick={() => {setDraft(profile);setEditing(false);}} className="rounded-lg border border-[#c1c7d4] px-4 py-2 text-sm">Batalkan</button></div>}
            </form>
          </Card>

          <Card className="p-5 sm:p-6"><div><h2 className="font-semibold">Keamanan Akun</h2><p className="mt-1 text-xs text-[#717783]">Kelola kata sandi, otentikasi dua faktor, serta riwayat akses platform.</p></div><div className="mt-4 space-y-2">
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#f8f9ff] p-3"><div className="rounded-lg bg-[#d4e3ff] p-3 text-[#005eab]"><LockKeyhole size={18}/></div><div className="min-w-44 flex-1"><p className="text-sm font-semibold">Ubah Password Akun</p><p className="mt-0.5 text-xs text-[#717783]">Kata sandi terakhir diubah 45 hari yang lalu. Dianjurkan memperbarui berkala.</p></div><button onClick={() => setPasswordOpen((value) => !value)} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#005eab]">{passwordOpen ? 'Tutup' : 'Ubah Password'}</button></div>
            {passwordOpen && <form onSubmit={(event) => {event.preventDefault();setPasswordOpen(false);setNotice('Permintaan ubah kata sandi tersimpan untuk simulasi.');}} className="grid gap-2 rounded-xl border border-[#e4efff] p-4 sm:grid-cols-3"><input required type="password" placeholder="Kata sandi saat ini" className={fieldClass}/><input required minLength={8} type="password" placeholder="Kata sandi baru (min. 8 karakter)" className={fieldClass}/><input required minLength={8} type="password" placeholder="Konfirmasi kata sandi baru" className={fieldClass}/><button className="rounded-lg bg-[#1677d2] px-3 py-2 text-xs font-semibold text-white sm:col-span-3 sm:justify-self-end">Simpan Kata Sandi</button></form>}
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#f8f9ff] p-3"><div className="rounded-lg bg-[#d4e3ff] p-3 text-[#005eab]"><Mail size={18}/></div><div className="min-w-44 flex-1"><p className="text-sm font-semibold">Verifikasi Email Primer</p><p className="mt-0.5 text-xs text-[#717783]">{profile.email} terhubung dan aktif menerima laporan.</p></div><Badge variant="success"><Check size={12} className="mr-1 inline"/>Terverifikasi</Badge></div>
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#f8f9ff] p-3"><div className="rounded-lg bg-[#d4e3ff] p-3 text-[#005eab]"><Smartphone size={18}/></div><div className="min-w-44 flex-1"><p className="text-sm font-semibold">Autentikasi Dua Faktor (2FA) <Badge variant="success">Rekomendasi</Badge></p><p className="mt-0.5 text-xs text-[#717783]">Kode OTP transaksi akan dikirim ke nomor telepon terverifikasi.</p></div><Toggle checked={twoFactor} onChange={() => setTwoFactor((value) => !value)} label="Autentikasi dua faktor"/></div>
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#f8f9ff] p-3"><div className="rounded-lg bg-[#d4e3ff] p-3 text-[#005eab]"><Clock3 size={18}/></div><div className="min-w-44 flex-1"><p className="text-sm font-semibold">Aktivitas Login Terakhir</p><p className="mt-0.5 text-xs text-[#717783]">Hari ini, 09:42 WIB · Chrome (Jakarta, ID)</p></div><button onClick={() => setNotice('Riwayat login terbaru ditampilkan untuk simulasi.')} className="text-xs font-semibold text-[#005eab]">Lihat Log</button></div>
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#f8f9ff] p-3"><div className="rounded-lg bg-[#d4e3ff] p-3 text-[#005eab]"><Laptop size={18}/></div><div className="min-w-44 flex-1"><p className="text-sm font-semibold">Perangkat yang Terhubung</p><p className="mt-0.5 text-xs text-[#717783]">2 perangkat aktif: MacBook Pro 16″ (Sesi ini) &amp; iPhone 15 Pro</p></div><button onClick={() => setNotice('Pengelolaan perangkat tersedia pada akun simulasi.')} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#005eab]">Kelola Perangkat</button></div>
          </div></Card>
        </div>

        <div className="space-y-5">
          <Card className="p-5"><div className="flex items-center justify-between"><h2 className="font-semibold">Informasi Akun</h2><Fingerprint size={18} className="text-[#717783]"/></div><div className="mt-4 flex items-center justify-between rounded-xl bg-[#f8f9ff] p-3"><div><span className="block text-[10px] text-[#717783]">ID Investor Pemodal</span><b className="text-sm tracking-wider text-[#005eab]">INV-2026-00125</b></div><button onClick={copyInvestorId} aria-label="Salin ID Investor" className="rounded-lg bg-white p-2 text-[#414752]">{copied ? <Check size={16}/> : <Copy size={16}/>}</button></div><dl className="mt-4 space-y-4 text-xs"><div className="flex justify-between gap-3"><dt className="text-[#717783]">Tipe Akun</dt><dd className="font-medium">Investor Ritel</dd></div><div className="flex justify-between gap-3"><dt className="text-[#717783]">Tanggal Bergabung</dt><dd className="font-medium">15 Januari 2026</dd></div><div className="flex justify-between gap-3"><dt className="text-[#717783]">Status Akun</dt><dd><Badge variant="success">Aktif</Badge></dd></div></dl><div className="mt-4 rounded-xl bg-[#eef4ff] p-3"><div className="flex items-center justify-between text-[10px]"><b>Verifikasi Identitas (KYC)</b><Badge variant="secondary">Belum Lengkap</Badge></div><p className="mt-2 text-xs leading-5 text-[#414752]">Lengkapi foto e-KTP dan swafoto untuk meningkatkan batas alokasi modal.</p><button onClick={() => setNotice('Alur verifikasi KYC akan tersedia pada versi berikutnya.')} className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#005eab]">Mulai Verifikasi KYC <ArrowRight size={12}/></button></div><p className="mt-4 flex justify-between text-xs"><span className="text-[#717783]">Limit Alokasi Modal</span><b>Rp100.000.000 / batch</b></p><p className="mt-4 flex justify-between text-xs"><span className="text-[#717783]">Rekening Penarikan</span><b className="inline-flex items-center gap-1"><Wallet size={13}/>Mandiri (•••• 8829)</b></p></Card>

          <Card className="p-5"><div className="flex items-center justify-between"><h2 className="font-semibold">Preferensi Akun</h2><SlidersHorizontal size={18} className="text-[#717783]"/></div><div className="mt-4 space-y-4"><label className="block text-[10px]">Bahasa Tampilan<select className={fieldClass} defaultValue="id"><option value="id">Bahasa Indonesia (ID)</option><option value="en">English (EN)</option></select></label><label className="block text-[10px]">Zona Waktu Default<select className={fieldClass} defaultValue="wib"><option value="wib">WIB (UTC+07:00) Jakarta</option><option value="wita">WITA (UTC+08:00) Makassar</option><option value="wit">WIT (UTC+09:00) Jayapura</option></select></label><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-medium">Preferensi Notifikasi</p><p className="text-[10px] text-[#717783]">Email &amp; notifikasi web penting</p></div><Toggle checked={emailAlerts} onChange={() => setEmailAlerts((value) => !value)} label="Preferensi notifikasi"/></div><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-medium">Laporan Kinerja UMKM</p><p className="text-[10px] text-[#717783]">Ringkasan berkala via email bulanan</p></div><Toggle checked={reportAlerts} onChange={() => setReportAlerts((value) => !value)} label="Laporan kinerja UMKM"/></div><div><p className="mb-2 text-[10px]">Tema Tampilan</p><div className="grid grid-cols-2 gap-2"><button onClick={() => setTheme('Terang')} className={`rounded-lg px-3 py-2 text-xs ${theme === 'Terang' ? 'bg-[#d4e3ff] font-semibold text-[#005eab]' : 'bg-[#f8f9ff] text-[#414752]'}`}>☼ Terang</button><button onClick={() => {setTheme('Gelap');setNotice('Tema gelap akan tersedia pada versi berikutnya.');}} className={`rounded-lg px-3 py-2 text-xs ${theme === 'Gelap' ? 'bg-[#d4e3ff] font-semibold text-[#005eab]' : 'bg-[#f8f9ff] text-[#414752]'}`}>☾ Gelap</button></div></div></div></Card>

          <Card className="p-5"><h2 className="font-semibold">Aksi Akun</h2><button onClick={() => setNotice('Anda sedang menggunakan akun simulasi.')} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#f8f9ff] px-3 py-2.5 text-xs font-medium text-[#414752]"><UserRound size={14}/>Keluar dari Akun</button><button onClick={() => setNotice('Penonaktifan akun tidak tersedia pada mode simulasi.')} className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#ffdad6]/60 px-3 py-2.5 text-xs font-medium text-[#93000a]"><ShieldCheck size={14}/>Nonaktifkan Akun</button><p className="mt-3 text-center text-[10px] text-[#717783]">DanaIn Aja Security Shield Aktif</p></Card>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-[#717783]"><MapPin size={12}/>Detail akun pada layar ini merupakan data simulasi.</div>
    </div>
  </MainLayout>;
};
