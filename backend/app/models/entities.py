from datetime import date, datetime
from uuid import UUID, uuid4

from sqlalchemy import (
    BigInteger,
    Boolean,
    CheckConstraint,
    Date,
    DateTime,
    ForeignKey,
    Index,
    Integer,
    String,
    Text,
    UniqueConstraint,
    Uuid,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class InvestorProfile(Base):
    __tablename__ = "investor_profiles"

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    auth_user_id: Mapped[UUID | None] = mapped_column(
        Uuid, ForeignKey("auth.users.id", ondelete="SET NULL"), unique=True, nullable=True
    )
    full_name: Mapped[str] = mapped_column(String(160), nullable=False)
    email: Mapped[str] = mapped_column(String(320), unique=True, nullable=False)
    phone: Mapped[str | None] = mapped_column(String(32))
    date_of_birth: Mapped[date | None] = mapped_column(Date)
    gender: Mapped[str | None] = mapped_column(String(32))
    city: Mapped[str | None] = mapped_column(String(100))
    province: Mapped[str | None] = mapped_column(String(100))
    address: Mapped[str | None] = mapped_column(Text)
    profession: Mapped[str | None] = mapped_column(String(160))
    account_type: Mapped[str] = mapped_column(String(32), nullable=False, default="retail")
    kyc_status: Mapped[str] = mapped_column(String(32), nullable=False, default="incomplete")
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    allocations: Mapped[list["FundingAllocation"]] = relationship(back_populates="investor")


class UMKM(Base):
    __tablename__ = "umkms"
    __table_args__ = (
        CheckConstraint("category IN ('Kuliner', 'Agribisnis', 'Kerajinan', 'Fashion')", name="ck_umkms_category"),
        CheckConstraint("status IN ('draft', 'published', 'archived')", name="ck_umkms_status"),
        Index("ix_umkms_status_category", "status", "category"),
    )

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    name: Mapped[str] = mapped_column(String(160), nullable=False)
    category: Mapped[str] = mapped_column(String(32), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    city: Mapped[str] = mapped_column(String(100), nullable=False)
    province: Mapped[str] = mapped_column(String(100), nullable=False)
    image_url: Mapped[str | None] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(24), nullable=False, default="published")
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    campaigns: Mapped[list["FundingCampaign"]] = relationship(back_populates="umkm")
    updates: Mapped[list["BusinessUpdate"]] = relationship(back_populates="umkm")


class FundingCampaign(Base):
    __tablename__ = "funding_campaigns"
    __table_args__ = (
        CheckConstraint("target_amount > 0", name="ck_campaign_target_positive"),
        CheckConstraint("collected_amount >= 0", name="ck_campaign_collected_nonnegative"),
        CheckConstraint("status IN ('draft', 'active', 'funded', 'closed')", name="ck_campaign_status"),
        Index("ix_campaigns_status_closes_at", "status", "closes_at"),
    )

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    umkm_id: Mapped[UUID] = mapped_column(Uuid, ForeignKey("umkms.id", ondelete="CASCADE"), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    target_amount: Mapped[int] = mapped_column(BigInteger, nullable=False)
    collected_amount: Mapped[int] = mapped_column(BigInteger, nullable=False, default=0)
    status: Mapped[str] = mapped_column(String(24), nullable=False, default="active")
    opens_at: Mapped[date | None] = mapped_column(Date)
    closes_at: Mapped[date | None] = mapped_column(Date)
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    umkm: Mapped[UMKM] = relationship(back_populates="campaigns")
    allocations: Mapped[list["FundingAllocation"]] = relationship(back_populates="campaign")


class FundingAllocation(Base):
    __tablename__ = "funding_allocations"
    __table_args__ = (
        CheckConstraint("amount > 0", name="ck_allocation_amount_positive"),
        CheckConstraint("status IN ('active', 'completed', 'cancelled')", name="ck_allocation_status"),
        UniqueConstraint("investor_id", "campaign_id", name="uq_allocation_investor_campaign"),
        Index("ix_allocations_investor_created", "investor_id", "created_at"),
    )

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    investor_id: Mapped[UUID] = mapped_column(
        Uuid, ForeignKey("investor_profiles.id", ondelete="CASCADE"), nullable=False
    )
    campaign_id: Mapped[UUID] = mapped_column(
        Uuid, ForeignKey("funding_campaigns.id", ondelete="CASCADE"), nullable=False
    )
    amount: Mapped[int] = mapped_column(BigInteger, nullable=False)
    status: Mapped[str] = mapped_column(String(24), nullable=False, default="active")
    simulation_only: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    investor: Mapped[InvestorProfile] = relationship(back_populates="allocations")
    campaign: Mapped[FundingCampaign] = relationship(back_populates="allocations")


class BusinessUpdate(Base):
    __tablename__ = "business_updates"
    __table_args__ = (Index("ix_business_updates_umkm_published", "umkm_id", "published_at"),)

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    umkm_id: Mapped[UUID] = mapped_column(Uuid, ForeignKey("umkms.id", ondelete="CASCADE"), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    update_type: Mapped[str] = mapped_column(String(40), nullable=False, default="operational")
    cover_image_url: Mapped[str | None] = mapped_column(Text)
    published_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

    umkm: Mapped[UMKM] = relationship(back_populates="updates")


class BusinessReport(Base):
    __tablename__ = "business_reports"
    __table_args__ = (
        CheckConstraint("period_end >= period_start", name="ck_business_report_period"),
        CheckConstraint("revenue_amount IS NULL OR revenue_amount >= 0", name="ck_report_revenue_nonnegative"),
        CheckConstraint("expense_amount IS NULL OR expense_amount >= 0", name="ck_report_expense_nonnegative"),
        Index("ix_business_reports_umkm_published", "umkm_id", "published_at"),
    )

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    umkm_id: Mapped[UUID] = mapped_column(Uuid, ForeignKey("umkms.id", ondelete="CASCADE"), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    summary: Mapped[str] = mapped_column(Text, nullable=False)
    period_start: Mapped[date] = mapped_column(Date, nullable=False)
    period_end: Mapped[date] = mapped_column(Date, nullable=False)
    revenue_amount: Mapped[int | None] = mapped_column(BigInteger)
    expense_amount: Mapped[int | None] = mapped_column(BigInteger)
    net_income_amount: Mapped[int | None] = mapped_column(BigInteger)
    cover_image_url: Mapped[str | None] = mapped_column(Text)
    attachment_url: Mapped[str | None] = mapped_column(Text)
    published_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    is_published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)


class ActivityEvent(Base):
    __tablename__ = "activity_events"
    __table_args__ = (Index("ix_activity_investor_occurred", "investor_id", "occurred_at"),)

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    investor_id: Mapped[UUID] = mapped_column(
        Uuid, ForeignKey("investor_profiles.id", ondelete="CASCADE"), nullable=False
    )
    umkm_id: Mapped[UUID | None] = mapped_column(Uuid, ForeignKey("umkms.id", ondelete="SET NULL"))
    event_type: Mapped[str] = mapped_column(String(40), nullable=False)
    title: Mapped[str] = mapped_column(String(240), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)


class InvestorPreferences(Base):
    __tablename__ = "investor_preferences"

    investor_id: Mapped[UUID] = mapped_column(
        Uuid, ForeignKey("investor_profiles.id", ondelete="CASCADE"), primary_key=True
    )
    language: Mapped[str] = mapped_column(String(8), nullable=False, default="id")
    timezone: Mapped[str] = mapped_column(String(64), nullable=False, default="Asia/Jakarta")
    email_notifications: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    business_report_notifications: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    theme: Mapped[str] = mapped_column(String(16), nullable=False, default="light")
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )


class LearningMaterial(Base):
    __tablename__ = "learning_materials"
    __table_args__ = (
        UniqueConstraint("slug", name="uq_learning_materials_slug"),
        Index("ix_learning_materials_published_category", "is_published", "category"),
    )

    id: Mapped[UUID] = mapped_column(Uuid, primary_key=True, default=uuid4)
    slug: Mapped[str] = mapped_column(String(180), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    summary: Mapped[str] = mapped_column(Text, nullable=False)
    category: Mapped[str] = mapped_column(String(64), nullable=False)
    reading_minutes: Mapped[int] = mapped_column(Integer, nullable=False, default=5)
    is_published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    is_demo: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
