import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://eicuwsfjzauvvsoadecc.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpY3V3c2ZqemF1dnZzb2FkZWNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MzM4NjEsImV4cCI6MjEwNzMwOTg2MX0.uUXFASaDCkDPlrfmXilnVBxgVeFYKyvm0oo3oQlmszY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("your-project"));
};
