
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.supabaseUrl; 
const supabaseAnonKey = process.env.supabaseAnonKey; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
