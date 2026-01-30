import { createClient } from '@supabase/supabase-js';

// These should be in .env but for now we fallback to empty string to prevent crash if not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
