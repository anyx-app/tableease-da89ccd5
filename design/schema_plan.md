# Schema Plan - TableEase

## Overview
This schema is designed to support a restaurant booking platform ("TableEase") serving both Restaurants and Diners. It handles user roles, restaurant profiles, table management, and the core reservation workflow.

## Tables

### 1. `profiles`
Extends the default Supabase `auth.users` table to store application-specific user data.
- **id**: `uuid` (PK, FK -> auth.users.id)
- **role**: `text` (Check constraint: 'diner', 'restaurant_owner', 'staff') - Default 'diner'
- **full_name**: `text`
- **phone_number**: `text`
- **avatar_url**: `text` (nullable)
- **created_at**: `timestamptz` (Default now())
- **updated_at**: `timestamptz` (Default now())

### 2. `restaurants`
Stores information about the dining establishments.
- **id**: `uuid` (PK, Default gen_random_uuid())
- **owner_id**: `uuid` (FK -> profiles.id)
- **name**: `text`
- **description**: `text`
- **address**: `text`
- **city**: `text`
- **zip_code**: `text`
- **contact_email**: `text`
- **contact_phone**: `text`
- **cuisine_type**: `text` (e.g., "Italian", "Fusion")
- **opening_hours**: `jsonb` (Structure: { "monday": { "open": "10:00", "close": "22:00" }, ... })
- **image_url**: `text` (nullable)
- **created_at**: `timestamptz`
- **updated_at**: `timestamptz`

### 3. `tables`
Represents physical seating inventory within a restaurant. Critical for "realTimeTableAvailability".
- **id**: `uuid` (PK, Default gen_random_uuid())
- **restaurant_id**: `uuid` (FK -> restaurants.id, ON DELETE CASCADE)
- **table_number**: `text` (e.g., "A1", "12")
- **capacity**: `int` (Max guests for this table)
- **location**: `text` (e.g., 'indoor', 'outdoor', 'patio', 'bar') - Supports "seatingPreferenceOptions"
- **is_active**: `boolean` (Default true)
- **created_at**: `timestamptz`

### 4. `reservations`
The central booking record.
- **id**: `uuid` (PK, Default gen_random_uuid())
- **restaurant_id**: `uuid` (FK -> restaurants.id)
- **diner_id**: `uuid` (FK -> profiles.id, nullable) - Nullable to allow for guest bookings or manual entry by staff.
- **assigned_table_id**: `uuid` (FK -> tables.id, nullable) - Can be null if simply booking a "slot" before assignment, but preferred non-null for real-time logic.
- **party_size**: `int`
- **reservation_time**: `timestamptz`
- **end_time**: `timestamptz` (Computed or explicitly set based on duration policy)
- **status**: `text` (Check: 'pending', 'confirmed', 'cancelled', 'completed', 'no_show') - Default 'confirmed'
- **special_requests**: `text`
- **guest_name**: `text` (Snapshot of name for easy display)
- **guest_email**: `text`
- **guest_phone**: `text`
- **created_at**: `timestamptz`
- **updated_at**: `timestamptz`

### 5. `availability_slots` (Optional / View Strategy)
*Note: Real-time availability usually requires querying `reservations` vs `tables`, but we might document a logic strategy here.*
- Strategy: Query `tables` where NOT EXISTS in `reservations` overlapping the desired time slot.

## Relationships
- `profiles` (1) <-> (many) `restaurants` (via owner_id)
- `restaurants` (1) <-> (many) `tables`
- `restaurants` (1) <-> (many) `reservations`
- `profiles` (1) <-> (many) `reservations` (as diner)
- `tables` (1) <-> (many) `reservations`

## RLS Policies (Planned)
- **profiles**: Users can read/edit their own profile. Public can read basic info (name/avatar) for reviews.
- **restaurants**: Public read access. Owners can update their own.
- **tables**: Public read (for booking logic). Owners can manage.
- **reservations**: Diners can read/create their own. Restaurant owners/staff can read/manage all for their restaurant.
