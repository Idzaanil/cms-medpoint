import { createClient } from '@supabase/supabase-js';

// Ambil dari environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Buat Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
