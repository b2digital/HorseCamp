create table if not exists public.organizers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text,
  website text,
  logo text,
  verified boolean default false,
  description text,
  created_at timestamp with time zone default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('stage', 'rando', 'concours', 'club')),
  title text not null,
  slug text not null unique,
  description text,
  discipline text,
  niveau text,
  age_group text,
  start_date date,
  end_date date,
  price_min integer,
  price_max integer,
  region text,
  location text,
  lat double precision,
  lng double precision,
  horses_provided boolean default false,
  accommodation boolean default false,
  organizer_id uuid references public.organizers(id) on delete set null,
  premium_until timestamp with time zone,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamp with time zone default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references public.events(id) on delete cascade,
  organizer_id uuid references public.organizers(id) on delete cascade,
  payload jsonb,
  created_at timestamp with time zone default now()
);

create table if not exists public.users (
  id uuid primary key,
  name text,
  email text unique,
  role text not null default 'user' check (role in ('admin', 'organizer', 'user')),
  created_at timestamp with time zone default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references public.events(id) on delete cascade,
  user_id uuid references public.users(id) on delete set null,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamp with time zone default now()
);

create index if not exists events_status_idx on public.events (status);
create index if not exists events_type_idx on public.events (type);
create index if not exists events_location_idx on public.events using gin (to_tsvector('simple', coalesce(location, '')));
