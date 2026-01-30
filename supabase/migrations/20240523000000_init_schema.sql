-- Create a table for public profiles
create table if not exists profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,
  role text check (role in ('diner', 'restaurant_owner', 'staff')) default 'diner',

  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Trigger for creating profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, role)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', COALESCE(new.raw_user_meta_data->>'role', 'diner'));
  return new;
end;
$$ language plpgsql security definer;

-- Drop trigger if exists to avoid error on repeated runs
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Restaurants Table
create table if not exists restaurants (
  id uuid default gen_random_uuid() primary key,
  owner_id uuid references profiles(id) not null,
  name text not null,
  description text,
  address text,
  city text,
  zip_code text,
  contact_email text,
  contact_phone text,
  cuisine_type text,
  opening_hours jsonb,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table restaurants enable row level security;

create policy "Restaurants are viewable by everyone" on restaurants
  for select using (true);

create policy "Owners can insert their restaurants" on restaurants
  for insert with check (auth.uid() = owner_id);

create policy "Owners can update their restaurants" on restaurants
  for update using (auth.uid() = owner_id);

-- Tables (Seating)
create table if not exists tables (
  id uuid default gen_random_uuid() primary key,
  restaurant_id uuid references restaurants(id) on delete cascade not null,
  table_number text not null,
  capacity int not null,
  location text, -- indoor, outdoor, etc.
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table tables enable row level security;

create policy "Tables are viewable by everyone" on tables
  for select using (true);

create policy "Owners can manage tables" on tables
  for all using (
    exists (
      select 1 from restaurants
      where restaurants.id = tables.restaurant_id
      and restaurants.owner_id = auth.uid()
    )
  );

-- Reservations
create table if not exists reservations (
  id uuid default gen_random_uuid() primary key,
  restaurant_id uuid references restaurants(id) not null,
  diner_id uuid references profiles(id), -- Nullable for guest bookings
  assigned_table_id uuid references tables(id),
  party_size int not null,
  reservation_time timestamp with time zone not null,
  end_time timestamp with time zone,
  status text check (status in ('pending', 'confirmed', 'cancelled', 'completed', 'no_show')) default 'confirmed',
  special_requests text,
  guest_name text,
  guest_email text,
  guest_phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table reservations enable row level security;

create policy "Diners can view their own reservations" on reservations
  for select using (auth.uid() = diner_id);

create policy "Owners can view reservations for their restaurants" on reservations
  for select using (
    exists (
      select 1 from restaurants
      where restaurants.id = reservations.restaurant_id
      and restaurants.owner_id = auth.uid()
    )
  );
  
create policy "Diners can create reservations" on reservations
  for insert with check (auth.uid() = diner_id OR diner_id is null);
