import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qfpmcwbrucsukmjudugu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmcG1jd2JydWNzdWttanVkdWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NTk2NzIsImV4cCI6MjA0ODQzNTY3Mn0.XiU3NC3PjiJHUsG5HCpsVxChmIPNnDS4540mA6MJkFQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
