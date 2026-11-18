from datetime import date, datetime, timezone
from uuid import UUID

from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.models import (
    ActivityEvent,
    BusinessReport,
    BusinessUpdate,
    FundingAllocation,
    FundingCampaign,
    InvestorPreferences,
    InvestorProfile,
    LearningMaterial,
    UMKM,
)

INVESTOR_ID = UUID("11111111-1111-4111-8111-111111111111")
UMKM_IDS = [
    UUID("22222222-2222-4222-8222-222222222221"),
    UUID("22222222-2222-4222-8222-222222222222"),
    UUID("22222222-2222-4222-8222-222222222223"),
    UUID("22222222-2222-4222-8222-222222222224"),
    UUID("22222222-2222-4222-8222-222222222225"),
]
CAMPAIGN_IDS = [
    UUID("33333333-3333-4333-8333-333333333331"),
    UUID("33333333-3333-4333-8333-333333333332"),
    UUID("33333333-3333-4333-8333-333333333333"),
    UUID("33333333-3333-4333-8333-333333333334"),
    UUID("33333333-3333-4333-8333-333333333335"),
]


def seed_database(db: Session) -> None:
    investor = InvestorProfile(
        id=INVESTOR_ID,
        full_name="Yehezkiel Pratama",
        email="yehezkiel@example.com",
        phone="+62 812-8921-3400",
        date_of_birth=date(1994, 3, 14),
        gender="Laki-laki",
        city="Jakarta Selatan",
        province="DKI Jakarta",
        address="Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12190",
        profession="Technology Consultant & Angel Investor",
        account_type="retail",
        kyc_status="incomplete",
        is_demo=True,
    )
    db.merge(investor)

    businesses = [
        ("Kopi Langit Artisan Roast", "Kuliner", "Produsen kopi arabika lokal dengan jaringan petani binaan.", "Bandung", "Jawa Barat", 50_000_000, 32_000_000, "active"),
        ("Tani Sejahtera Hidroponik", "Agribisnis", "Pertanian sayuran hidroponik modern untuk pasar lokal.", "Bogor", "Jawa Barat", 75_000_000, 45_000_000, "active"),
        ("Anyam Kita Sustainable Craft", "Kerajinan", "Pemberdayaan perajin anyaman bambu dan serat alam.", "Yogyakarta", "DI Yogyakarta", 30_000_000, 30_000_000, "funded"),
        ("Batik Nusantara Heritage", "Fashion", "Koleksi busana batik tulis dengan pewarna alami.", "Solo", "Jawa Tengah", 40_000_000, 12_000_000, "active"),
        ("Rasa Lokal", "Kuliner", "Produk makanan ringan khas Indonesia untuk pasar ritel.", "Surabaya", "Jawa Timur", 60_000_000, 60_000_000, "funded"),
    ]
    allocations = [3_000_000, 2_500_000, 2_000_000, 2_500_000, 2_500_000]
    for index, (name, category, description, city, province, target, collected, status) in enumerate(businesses):
        umkm_id = UMKM_IDS[index]
        campaign_id = CAMPAIGN_IDS[index]
        db.merge(UMKM(
            id=umkm_id, name=name, category=category, description=description,
            city=city, province=province, status="published", is_demo=True,
        ))
        db.merge(FundingCampaign(
            id=campaign_id, umkm_id=umkm_id, title=f"Pengembangan usaha {name}",
            target_amount=target, collected_amount=collected, status=status,
            opens_at=date(2026, 10, 1), closes_at=date(2026, 12, 31), is_demo=True,
        ))
        db.merge(FundingAllocation(
            id=UUID(f"44444444-4444-4444-8444-{index + 1:012d}"),
            investor_id=INVESTOR_ID, campaign_id=campaign_id, amount=allocations[index],
            status="completed" if status == "funded" else "active", simulation_only=True,
        ))

    update_rows = [
        (0, "Kapasitas produksi diperluas", "Kopi Langit menambah peralatan pemanggangan untuk memenuhi permintaan mitra baru.", datetime(2026, 11, 10, 8, 0, tzinfo=timezone.utc)),
        (1, "Distribusi hasil panen diperbarui", "Tani Sejahtera memperbarui jadwal distribusi sayuran ke mitra ritel.", datetime(2026, 11, 8, 2, 0, tzinfo=timezone.utc)),
        (2, "Koleksi anyaman terbaru", "Anyam Kita memperkenalkan koleksi produk rumah tangga dari bahan berkelanjutan.", datetime(2026, 11, 5, 3, 0, tzinfo=timezone.utc)),
    ]
    for index, (business_index, title, description, published_at) in enumerate(update_rows):
        db.merge(BusinessUpdate(
            id=UUID(f"55555555-5555-4555-8555-{index + 1:012d}"),
            umkm_id=UMKM_IDS[business_index], title=title, description=description,
            update_type="operational", published_at=published_at, is_demo=True,
        ))

    reports = [
        (0, "Laporan Operasional Kopi Langit", "Penjualan meningkat setelah penambahan kapasitas roasting dan kerja sama dengan mitra baru.", date(2026, 11, 1), date(2026, 11, 15), 18_500_000, 12_200_000, datetime(2026, 11, 16, 3, 0, tzinfo=timezone.utc)),
        (1, "Laporan Usaha Tani Sejahtera", "Distribusi hasil panen berjalan sesuai jadwal dan kapasitas tanam mulai bertambah.", date(2026, 10, 1), date(2026, 10, 31), 22_800_000, 14_100_000, datetime(2026, 11, 8, 2, 0, tzinfo=timezone.utc)),
        (2, "Laporan Penjualan Anyam Kita", "Koleksi anyaman baru mulai dipasarkan melalui dua mitra ritel lokal.", date(2026, 10, 1), date(2026, 10, 31), 14_500_000, 9_200_000, datetime(2026, 11, 5, 3, 0, tzinfo=timezone.utc)),
    ]
    for index, (business_index, title, summary, period_start, period_end, revenue, expenses, published_at) in enumerate(reports):
        db.merge(BusinessReport(
            id=UUID(f"88888888-8888-4888-8888-{index + 1:012d}"),
            umkm_id=UMKM_IDS[business_index], title=title, summary=summary,
            period_start=period_start, period_end=period_end, revenue_amount=revenue,
            expense_amount=expenses, net_income_amount=revenue - expenses,
            published_at=published_at, is_published=True, is_demo=True,
        ))

    event_rows = [
        ("allocation_created", "Alokasi simulasi dibuat untuk Kopi Langit Artisan Roast.", UMKM_IDS[0], datetime(2026, 11, 10, 7, 32, tzinfo=timezone.utc)),
        ("business_update", "Laporan perkembangan diterbitkan oleh Tani Sejahtera Hidroponik.", UMKM_IDS[1], datetime(2026, 11, 9, 2, 15, tzinfo=timezone.utc)),
        ("campaign_status", "Status kampanye Anyam Kita diperbarui.", UMKM_IDS[2], datetime(2026, 11, 7, 9, 40, tzinfo=timezone.utc)),
        ("business_update", "Profil Batik Nusantara Heritage diperbarui.", UMKM_IDS[3], datetime(2026, 11, 6, 4, 20, tzinfo=timezone.utc)),
    ]
    for index, (event_type, title, umkm_id, occurred_at) in enumerate(event_rows):
        db.merge(ActivityEvent(
            id=UUID(f"66666666-6666-4666-8666-{index + 1:012d}"),
            investor_id=INVESTOR_ID, umkm_id=umkm_id, event_type=event_type,
            title=title, occurred_at=occurred_at, is_demo=True,
        ))

    db.merge(InvestorPreferences(investor_id=INVESTOR_ID))
    materials = [
        ("mengenal-ekosistem-umkm", "Mengenal Ekosistem UMKM", "Pahami model usaha lokal, tahap pertumbuhan, dan kebutuhan modalnya.", "Dasar Pendanaan", 6),
        ("evaluasi-proposal-usaha", "Evaluasi Proposal Usaha", "Kenali tujuan penggunaan modal, rencana usaha, dan asumsi yang dipakai.", "Analisis Usaha", 8),
        ("karakteristik-risiko", "Karakteristik Risiko", "Pelajari faktor yang dapat memengaruhi perkembangan dan keberlanjutan usaha.", "Risiko", 7),
        ("dukungan-bertanggung-jawab", "Dukungan Bertanggung Jawab", "Gunakan informasi yang tersedia untuk membuat keputusan yang terukur.", "Prinsip Investor", 5),
    ]
    for index, (slug, title, summary, category, reading_minutes) in enumerate(materials):
        db.merge(LearningMaterial(
            id=UUID(f"77777777-7777-4777-8777-{index + 1:012d}"),
            slug=slug, title=title, summary=summary, category=category,
            reading_minutes=reading_minutes, is_published=True, is_demo=True,
        ))

    db.commit()


def main() -> None:
    with SessionLocal() as db:
        seed_database(db)
    print("Fictional DanaIn Aja prototype data seeded.")


if __name__ == "__main__":
    main()
