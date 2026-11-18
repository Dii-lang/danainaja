"""Create initial DanaIn Aja investor schema and row-level security.

Revision ID: 20261117_0001
Revises:
Create Date: 2026-11-17
"""
from alembic import op
import sqlalchemy as sa

revision = "20261117_0001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "investor_profiles",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("auth_user_id", sa.Uuid(), nullable=True),
        sa.Column("full_name", sa.String(length=160), nullable=False),
        sa.Column("email", sa.String(length=320), nullable=False),
        sa.Column("phone", sa.String(length=32), nullable=True),
        sa.Column("date_of_birth", sa.Date(), nullable=True),
        sa.Column("gender", sa.String(length=32), nullable=True),
        sa.Column("city", sa.String(length=100), nullable=True),
        sa.Column("province", sa.String(length=100), nullable=True),
        sa.Column("address", sa.Text(), nullable=True),
        sa.Column("profession", sa.String(length=160), nullable=True),
        sa.Column("account_type", sa.String(length=32), server_default="retail", nullable=False),
        sa.Column("kyc_status", sa.String(length=32), server_default="incomplete", nullable=False),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["auth_user_id"], ["auth.users.id"], ondelete="SET NULL"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("auth_user_id"),
        sa.UniqueConstraint("email"),
    )
    op.create_table(
        "umkms",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("name", sa.String(length=160), nullable=False),
        sa.Column("category", sa.String(length=32), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("city", sa.String(length=100), nullable=False),
        sa.Column("province", sa.String(length=100), nullable=False),
        sa.Column("image_url", sa.Text(), nullable=True),
        sa.Column("status", sa.String(length=24), server_default="published", nullable=False),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.CheckConstraint("category IN ('Kuliner', 'Agribisnis', 'Kerajinan', 'Fashion')", name="ck_umkms_category"),
        sa.CheckConstraint("status IN ('draft', 'published', 'archived')", name="ck_umkms_status"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_umkms_status_category", "umkms", ["status", "category"])
    op.create_table(
        "funding_campaigns",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("umkm_id", sa.Uuid(), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("target_amount", sa.BigInteger(), nullable=False),
        sa.Column("collected_amount", sa.BigInteger(), server_default="0", nullable=False),
        sa.Column("status", sa.String(length=24), server_default="active", nullable=False),
        sa.Column("opens_at", sa.Date(), nullable=True),
        sa.Column("closes_at", sa.Date(), nullable=True),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.CheckConstraint("target_amount > 0", name="ck_campaign_target_positive"),
        sa.CheckConstraint("collected_amount >= 0", name="ck_campaign_collected_nonnegative"),
        sa.CheckConstraint("status IN ('draft', 'active', 'funded', 'closed')", name="ck_campaign_status"),
        sa.ForeignKeyConstraint(["umkm_id"], ["umkms.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_campaigns_status_closes_at", "funding_campaigns", ["status", "closes_at"])
    op.create_table(
        "funding_allocations",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("investor_id", sa.Uuid(), nullable=False),
        sa.Column("campaign_id", sa.Uuid(), nullable=False),
        sa.Column("amount", sa.BigInteger(), nullable=False),
        sa.Column("status", sa.String(length=24), server_default="active", nullable=False),
        sa.Column("simulation_only", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.CheckConstraint("amount > 0", name="ck_allocation_amount_positive"),
        sa.CheckConstraint("status IN ('active', 'completed', 'cancelled')", name="ck_allocation_status"),
        sa.ForeignKeyConstraint(["campaign_id"], ["funding_campaigns.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["investor_id"], ["investor_profiles.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("investor_id", "campaign_id", name="uq_allocation_investor_campaign"),
    )
    op.create_index("ix_allocations_investor_created", "funding_allocations", ["investor_id", "created_at"])
    op.create_table(
        "business_updates",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("umkm_id", sa.Uuid(), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("update_type", sa.String(length=40), server_default="operational", nullable=False),
        sa.Column("cover_image_url", sa.Text(), nullable=True),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.ForeignKeyConstraint(["umkm_id"], ["umkms.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_business_updates_umkm_published", "business_updates", ["umkm_id", "published_at"])
    op.create_table(
        "business_reports",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("umkm_id", sa.Uuid(), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("summary", sa.Text(), nullable=False),
        sa.Column("period_start", sa.Date(), nullable=False),
        sa.Column("period_end", sa.Date(), nullable=False),
        sa.Column("revenue_amount", sa.BigInteger(), nullable=True),
        sa.Column("expense_amount", sa.BigInteger(), nullable=True),
        sa.Column("net_income_amount", sa.BigInteger(), nullable=True),
        sa.Column("cover_image_url", sa.Text(), nullable=True),
        sa.Column("attachment_url", sa.Text(), nullable=True),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("is_published", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.CheckConstraint("period_end >= period_start", name="ck_business_report_period"),
        sa.CheckConstraint("revenue_amount IS NULL OR revenue_amount >= 0", name="ck_report_revenue_nonnegative"),
        sa.CheckConstraint("expense_amount IS NULL OR expense_amount >= 0", name="ck_report_expense_nonnegative"),
        sa.ForeignKeyConstraint(["umkm_id"], ["umkms.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_business_reports_umkm_published", "business_reports", ["umkm_id", "published_at"])
    op.create_table(
        "activity_events",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("investor_id", sa.Uuid(), nullable=False),
        sa.Column("umkm_id", sa.Uuid(), nullable=True),
        sa.Column("event_type", sa.String(length=40), nullable=False),
        sa.Column("title", sa.String(length=240), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("occurred_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.ForeignKeyConstraint(["investor_id"], ["investor_profiles.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["umkm_id"], ["umkms.id"], ondelete="SET NULL"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_activity_investor_occurred", "activity_events", ["investor_id", "occurred_at"])
    op.create_table(
        "investor_preferences",
        sa.Column("investor_id", sa.Uuid(), nullable=False),
        sa.Column("language", sa.String(length=8), server_default="id", nullable=False),
        sa.Column("timezone", sa.String(length=64), server_default="Asia/Jakarta", nullable=False),
        sa.Column("email_notifications", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("business_report_notifications", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("theme", sa.String(length=16), server_default="light", nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.ForeignKeyConstraint(["investor_id"], ["investor_profiles.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("investor_id"),
    )
    op.create_table(
        "learning_materials",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("slug", sa.String(length=180), nullable=False),
        sa.Column("title", sa.String(length=200), nullable=False),
        sa.Column("summary", sa.Text(), nullable=False),
        sa.Column("category", sa.String(length=64), nullable=False),
        sa.Column("reading_minutes", sa.Integer(), server_default="5", nullable=False),
        sa.Column("is_published", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("is_demo", sa.Boolean(), server_default=sa.true(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug", name="uq_learning_materials_slug"),
    )
    op.create_index("ix_learning_materials_published_category", "learning_materials", ["is_published", "category"])

    # Private investor data is exposed only to its authenticated owner via Supabase Auth.
    for table in ("investor_profiles", "funding_allocations", "activity_events", "investor_preferences"):
        op.execute(sa.text(f'ALTER TABLE public.{table} ENABLE ROW LEVEL SECURITY'))

    op.execute("""
        CREATE POLICY investor_profile_read_own ON public.investor_profiles
        FOR SELECT TO authenticated USING (auth_user_id = (SELECT auth.uid()))
    """)
    op.execute("""
        CREATE POLICY investor_profile_update_own ON public.investor_profiles
        FOR UPDATE TO authenticated USING (auth_user_id = (SELECT auth.uid()))
        WITH CHECK (auth_user_id = (SELECT auth.uid()))
    """)
    op.execute("""
        CREATE POLICY allocations_read_own ON public.funding_allocations
        FOR SELECT TO authenticated USING (
            EXISTS (SELECT 1 FROM public.investor_profiles p
                    WHERE p.id = investor_id AND p.auth_user_id = (SELECT auth.uid()))
        )
    """)
    op.execute("""
        CREATE POLICY activity_read_own ON public.activity_events
        FOR SELECT TO authenticated USING (
            EXISTS (SELECT 1 FROM public.investor_profiles p
                    WHERE p.id = investor_id AND p.auth_user_id = (SELECT auth.uid()))
        )
    """)
    op.execute("""
        CREATE POLICY preferences_read_own ON public.investor_preferences
        FOR SELECT TO authenticated USING (
            EXISTS (SELECT 1 FROM public.investor_profiles p
                    WHERE p.id = investor_id AND p.auth_user_id = (SELECT auth.uid()))
        )
    """)
    op.execute("""
        CREATE POLICY preferences_update_own ON public.investor_preferences
        FOR UPDATE TO authenticated USING (
            EXISTS (SELECT 1 FROM public.investor_profiles p
                    WHERE p.id = investor_id AND p.auth_user_id = (SELECT auth.uid()))
        ) WITH CHECK (
            EXISTS (SELECT 1 FROM public.investor_profiles p
                    WHERE p.id = investor_id AND p.auth_user_id = (SELECT auth.uid()))
        )
    """)

    for table in ("umkms", "funding_campaigns", "business_updates", "business_reports", "learning_materials"):
        op.execute(sa.text(f'ALTER TABLE public.{table} ENABLE ROW LEVEL SECURITY'))
    op.execute("""
        CREATE POLICY published_umkms_read ON public.umkms
        FOR SELECT TO anon, authenticated USING (status = 'published')
    """)
    op.execute("""
        CREATE POLICY visible_campaigns_read ON public.funding_campaigns
        FOR SELECT TO anon, authenticated USING (
            status IN ('active', 'funded', 'closed') AND
            EXISTS (SELECT 1 FROM public.umkms u WHERE u.id = umkm_id AND u.status = 'published')
        )
    """)
    op.execute("""
        CREATE POLICY business_updates_read ON public.business_updates
        FOR SELECT TO anon, authenticated USING (
            EXISTS (SELECT 1 FROM public.umkms u WHERE u.id = umkm_id AND u.status = 'published')
        )
    """)
    op.execute("""
        CREATE POLICY business_reports_read_for_investors ON public.business_reports
        FOR SELECT TO authenticated USING (
            is_published = true AND EXISTS (
                SELECT 1 FROM public.funding_campaigns c
                JOIN public.funding_allocations a ON a.campaign_id = c.id
                JOIN public.investor_profiles p ON p.id = a.investor_id
                WHERE c.umkm_id = business_reports.umkm_id
                  AND p.auth_user_id = (SELECT auth.uid())
            )
        )
    """)
    op.execute("""
        CREATE POLICY published_learning_read ON public.learning_materials
        FOR SELECT TO anon, authenticated USING (is_published = true)
    """)


def downgrade() -> None:
    for policy, table in (
        ("published_learning_read", "learning_materials"),
        ("business_reports_read_for_investors", "business_reports"),
        ("business_updates_read", "business_updates"),
        ("visible_campaigns_read", "funding_campaigns"),
        ("published_umkms_read", "umkms"),
        ("preferences_update_own", "investor_preferences"),
        ("preferences_read_own", "investor_preferences"),
        ("activity_read_own", "activity_events"),
        ("allocations_read_own", "funding_allocations"),
        ("investor_profile_update_own", "investor_profiles"),
        ("investor_profile_read_own", "investor_profiles"),
    ):
        op.execute(sa.text(f"DROP POLICY IF EXISTS {policy} ON public.{table}"))
    for table in ("learning_materials", "investor_preferences", "activity_events", "business_reports", "business_updates", "funding_allocations", "funding_campaigns", "umkms", "investor_profiles"):
        op.drop_table(table)
