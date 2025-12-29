import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY || import.meta.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL and Key missing. Supabase client will throw on use.');
}

// Export a client that is safe to import even if env vars are missing
// It will only throw when you try to actually use it (e.g. .from())
export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : new Proxy({} as ReturnType<typeof createClient>, {
      get: (_target, prop) => {
        // Allow basic property access like 'then' to not crash immediately if awaited? 
        // Actually, just throw on any access to prevent silent failures.
        throw new Error(`Cannot access property '${String(prop)}' on Supabase client: URL and Key must be provided in environment variables.`);
      }
    });
