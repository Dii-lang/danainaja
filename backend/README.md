# DanaIn Aja backend database

This folder contains the initial PostgreSQL schema, SQLAlchemy models, Alembic migration, and fictional prototype data for investor profiles, UMKM, campaigns, simulated allocations, business updates and reports, activity, preferences, and learning materials. The migration targets Supabase PostgreSQL because it references the Supabase-managed `auth.users` table and `auth.uid()` function.

## Prepare a Supabase project

1. Create a Supabase project and copy its PostgreSQL **Session pooler** connection string.
2. Copy `.env.example` to `.env` and replace the placeholder password locally. Do not commit `.env` or send its contents in chat.
3. From this folder, create a virtual environment and install the project: `python -m pip install -e .`.
4. Apply the schema: `alembic upgrade head`.
5. Insert the fictional rows: `python -m app.seed`.
6. Start the API shell: `uvicorn app.main:app --reload`.

The seed creates a demo investor profile without an Auth identity (`auth_user_id` is null), so it does not create or impersonate a Supabase Auth user. When authentication is implemented, associate a real Auth user ID with the profile. Every allocation seeded here is marked `simulation_only` and does not represent a payment or investment transaction.

## Initial API

`GET /health` only reports that the API process is running. Investor data endpoints and Supabase JWT verification are intentionally not included in this database foundation yet.
