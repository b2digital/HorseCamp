export type SupabaseBrowserConfig = {
  supabaseUrl: string;
  supabaseAnonKey: string;
};

export function getSupabaseBrowserConfig(): SupabaseBrowserConfig {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.',
    );
  }

  return { supabaseUrl, supabaseAnonKey };
}

export function createSupabaseBrowserHeaders(extra?: HeadersInit): HeadersInit {
  const { supabaseAnonKey } = getSupabaseBrowserConfig();
  const baseHeaders = {
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
  } satisfies Record<string, string>;

  if (!extra) {
    return baseHeaders;
  }

  return {
    ...baseHeaders,
    ...(extra instanceof Headers ? Object.fromEntries(extra.entries()) : extra),
  };
}
